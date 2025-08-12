import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicioPromesaDeDios } from '../../../app/Servicios/PromesaDeDios/Login';
import { LoginServicioCafeJuanAna } from '../../../app/Servicios/CafeJuanAna/Login';
import { LoginServicioDulceTentacion } from '../../../app/Servicios/DulceTentacion/Login';
import { LoginServicioRestauranteKaski } from '../../../app/Servicios/RestauranteKaski/Login';
import { LoginServicioVendedor } from '../../../app/Servicios/Vendedor/Login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertaServicio } from '../../Servicios/Alerta-Servicio';
import { Entorno } from '../../Entornos/Entorno';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  Cargando: boolean = false;

  Empresa: string = '';
  NombreUsuario: string = '';
  Clave: string = '';
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
  NombreEmpresaDulceTentacion: string = Entorno.NombreEmpresaDulceTentacion;
  NombreEmpresaRestauranteKaski: string = Entorno.NombreEmpresaRestauranteKaski;
  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private LoginPromesaDeDios: LoginServicioPromesaDeDios,
    private LoginCafeJuanAna: LoginServicioCafeJuanAna,
    private LoginDulceTentacion: LoginServicioDulceTentacion,
    private LoginRestauranteKaski: LoginServicioRestauranteKaski,
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
      case this.NombreEmpresaCafeJuanAna:
        ServicioLogin = this.LoginCafeJuanAna.Login(usuario, clave);
        break;
      case this.NombreEmpresaDulceTentacion:
        ServicioLogin = this.LoginDulceTentacion.Login(usuario, clave);
        break;
      case this.NombreEmpresaRestauranteKaski:
        ServicioLogin = this.LoginRestauranteKaski.Login(usuario, clave);
        break;
      case this.NombreEmpresaVendedor:
        ServicioLogin = this.LoginVendedor.Login(usuario, clave);
        break;
      default:
        this.Alerta.MostrarAlerta('Empresa no válida');
        return;
    }

    this.Cargando = true;
    ServicioLogin.subscribe({
      next: (Respuesta: any) => {
        this.Cargando = false;
        if (Respuesta && Respuesta.data.Token) {
          const payload = this.DecodificarToken(Respuesta.data.Token);
          if (payload && payload.SuperAdmin === 1) {
            this.Alerta.MostrarExito('Inicio de sesión exitoso');
            const ruta = `${this.Empresa}/inicio`;

            switch (this.Empresa) {
              case this.NombreEmpresaPromesaDeDios:
              case this.NombreEmpresaCafeJuanAna:
              case this.NombreEmpresaDulceTentacion:
              case this.NombreEmpresaRestauranteKaski:
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
        this.Cargando = false;
        const MensajePlano = typeof error?.error?.error === 'string' ? error.error.error : null;
        if (MensajePlano) {
          this.Alerta.MostrarAlerta(MensajePlano, 'Atención');
        } else {
          this.Alerta.MostrarError(error, 'Error al iniciar sesión');
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
