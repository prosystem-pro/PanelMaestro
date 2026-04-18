import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicioChocosDeLaAbuela } from '../../../app/Servicios/ChocosDeLaAbuela/Login';
import { LoginServicioCorazonTipico } from '../../../app/Servicios/CorazonTipico/Login';
import { LoginServicioConstructoraMorgan } from '../../../app/Servicios/ConstructoraMorgan/Login';
import { LoginServicioVendedor } from '../../../app/Servicios/Vendedor/Login';
import { LoginServicioAjachelTravelAgency } from '../../../app/Servicios/AjachelTravelAgency/Login';
import { LoginServicioRestauranteElBistro } from '../../../app/Servicios/RestauranteElBistro/Login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertaServicio } from '../../Servicios/Alerta-Servicio';
import { Entorno } from '../../Entornos/Entorno';
import { CommonModule } from '@angular/common';
import { SpinnerGlobalComponent } from '../../Componentes/spinner-global/spinner-global.component';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, SpinnerGlobalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  Spinner: boolean = false;
  Empresa: string = '';
  NombreUsuario: string = '';
  Clave: string = '';
  NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
  NombreEmpresaCorazonTipico: string = Entorno.NombreEmpresaCorazonTipico;
  NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
  NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
  NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private LoginChocosDeLaAbuela: LoginServicioChocosDeLaAbuela,
    private LoginCorazonTipico: LoginServicioCorazonTipico,
    private LoginConstructoraMorgan: LoginServicioConstructoraMorgan,
    private LoginVendedor: LoginServicioVendedor,
    private LoginAjachelTravelAgency: LoginServicioAjachelTravelAgency,
    private LoginRestauranteElBistro: LoginServicioRestauranteElBistro,
    private Alerta: AlertaServicio
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.Empresa = (params['Empresa'] || '').trim();
    });
  }

  public Regresar() {
    this.router.navigate(['/menu']);
  }

  login() {
    const usuario = this.NombreUsuario;
    const clave = this.Clave;

    let ServicioLogin: Observable<any>;

    switch (this.Empresa) {
      case this.NombreEmpresaChocosDeLaAbuela:
        ServicioLogin = this.LoginChocosDeLaAbuela.Login(usuario, clave);
        break;
      case this.NombreEmpresaVendedor:
        ServicioLogin = this.LoginVendedor.Login(usuario, clave);
        break;
      case this.NombreEmpresaCorazonTipico:
        ServicioLogin = this.LoginCorazonTipico.Login(usuario, clave);
        break;
      case this.NombreEmpresaConstructoraMorgan:
        ServicioLogin = this.LoginConstructoraMorgan.Login(usuario, clave);
        break;
      case this.NombreEmpresaAjachelTravelAgency:
        ServicioLogin = this.LoginAjachelTravelAgency.Login(usuario, clave);
        break;
      case this.NombreEmpresaRestauranteElBistro:
        ServicioLogin = this.LoginRestauranteElBistro.Login(usuario, clave);
        break;
      default:
        this.Alerta.MostrarAlerta('Empresa no válida');
        return;
    }

    this.Spinner = true;
    ServicioLogin.subscribe({
      next: (Respuesta: any) => {
        this.Spinner = false;
        if (Respuesta && Respuesta.data.Token) {
          const payload = this.DecodificarToken(Respuesta.data.Token);
          if (payload && payload.SuperAdmin === 1) {
            this.Alerta.MostrarExito('Inicio de sesión exitoso');
            const ruta = `${this.Empresa}/inicio`;

            switch (this.Empresa) {
              case this.NombreEmpresaChocosDeLaAbuela:
              case this.NombreEmpresaCorazonTipico:
              case this.NombreEmpresaConstructoraMorgan:
              case this.NombreEmpresaVendedor:
              case this.NombreEmpresaAjachelTravelAgency:
              case this.NombreEmpresaRestauranteElBistro:
                this.router.navigate([ruta]);
                break;
              default:
                this.router.navigate(['/menu']);
                break;
            }
          } else {
            this.EliminarToken();
            this.Alerta.MostrarAlerta('Acceso restringido para tu usuario', 'Atención');
          }
        } else {
          this.Alerta.MostrarAlerta('Respuesta inválida del servidor', 'Error');
        }
      },
      error: (error) => {
        this.Spinner = false;
        const tipo = error?.error?.tipo;
        const mensaje =
          error?.error?.error?.message ||
          error?.error?.message ||
          'Ocurrió un error inesperado.';
        if (tipo === 'Alerta') {
          this.Alerta.MostrarAlerta(mensaje);
        } else {
          this.Alerta.MostrarError({ error: { message: mensaje } });
        }
      }
    });
  }

  private DecodificarToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch {
      return null;
    }
  }

  EliminarToken(): void {
    localStorage.removeItem('authToken');
  }

}
