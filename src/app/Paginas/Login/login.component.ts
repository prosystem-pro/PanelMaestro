import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicioPromesaDeDios } from '../../../app/Servicios/PromesaDeDios/Login';
import { LoginServicioChocosDeLaAbuela } from '../../../app/Servicios/ChocosDeLaAbuela/Login';
import { LoginServicioFamilyShop } from '../../../app/Servicios/FamilyShop/Login';
import { LoginServicioCafeJuanAna } from '../../../app/Servicios/CafeJuanAna/Login';
import { LoginServicioRestauranteElTule } from '../../../app/Servicios/RestauranteElTule/Login';
import { LoginServicioCorazonTipico } from '../../../app/Servicios/CorazonTipico/Login';
import { LoginServicioVendedor } from '../../../app/Servicios/Vendedor/Login';
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
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  NombreEmpresaFamilyShop: string = Entorno.NombreEmpresaFamilyShop;
  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
  NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
  NombreEmpresaRestauranteElTule: string = Entorno.NombreEmpresaRestauranteElTule;
  NombreEmpresaCorazonTipico: string = Entorno.NombreEmpresaCorazonTipico;
  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private LoginPromesaDeDios: LoginServicioPromesaDeDios,
    private LoginFamilyShop: LoginServicioFamilyShop,
    private LoginCafeJuanAna: LoginServicioCafeJuanAna,
    private LoginChocosDeLaAbuela: LoginServicioChocosDeLaAbuela,
    private LoginRestauranteElTule: LoginServicioRestauranteElTule,
    private LoginCorazonTipico: LoginServicioCorazonTipico,
    private LoginVendedor: LoginServicioVendedor,
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
      case this.NombreEmpresaPromesaDeDios:
        ServicioLogin = this.LoginPromesaDeDios.Login(usuario, clave);
        break;
      case this.NombreEmpresaFamilyShop:
        ServicioLogin = this.LoginFamilyShop.Login(usuario, clave);
        break;
      case this.NombreEmpresaCafeJuanAna:
        ServicioLogin = this.LoginCafeJuanAna.Login(usuario, clave);
        break;
      case this.NombreEmpresaChocosDeLaAbuela:
        ServicioLogin = this.LoginChocosDeLaAbuela.Login(usuario, clave);
        break;
      case this.NombreEmpresaRestauranteElTule:
        ServicioLogin = this.LoginRestauranteElTule.Login(usuario, clave);
        break;
      case this.NombreEmpresaVendedor:
        ServicioLogin = this.LoginVendedor.Login(usuario, clave);
        break;
      case this.NombreEmpresaCorazonTipico:
        ServicioLogin = this.LoginCorazonTipico.Login(usuario, clave);
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
              case this.NombreEmpresaPromesaDeDios:
              case this.NombreEmpresaFamilyShop:
              case this.NombreEmpresaCafeJuanAna:
              case this.NombreEmpresaChocosDeLaAbuela:
              case this.NombreEmpresaRestauranteElTule:
              case this.NombreEmpresaCorazonTipico:
              case this.NombreEmpresaVendedor:
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
