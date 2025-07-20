import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicioPromesaDeDios } from '../../../app/Servicios/PromesaDeDios/Login';
import { LoginServicioCafeJuanAna } from '../../../app/Servicios/CafeJuanAna/Login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertaServicio } from '../../Servicios/Alerta-Servicio';
import { Entorno } from '../../Entornos/Entorno';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  Empresa: string = '';
  NombreUsuario: string = '';
  Clave: string = '';
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private LoginPromesaDeDios: LoginServicioPromesaDeDios,
    private LoginCafeJuanAna: LoginServicioCafeJuanAna,
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
      console.log('🔐 Iniciando sesión en Promesa de Dios');
      ServicioLogin = this.LoginPromesaDeDios.Login(usuario, clave);
      break;
    case this.NombreEmpresaCafeJuanAna:
      console.log('🔐 Iniciando sesión en Café Juan Ana');
      ServicioLogin = this.LoginCafeJuanAna.Login(usuario, clave);
      break;
    default:
      console.warn('⚠️ Empresa no válida:', this.Empresa);
      this.Alerta.MostrarAlerta('Empresa no válida');
      return;
  }

  ServicioLogin.subscribe({
    next: (Respuesta: any) => {
      if (Respuesta) {
        this.Alerta.MostrarExito('Inicio de sesión exitoso');

        const ruta = `${this.Empresa}/inicio`;
        console.log('➡️ Ruta construida para navegación:', ruta); // ⬅️ AQUÍ EL LOG

        switch (this.Empresa) {
          case this.NombreEmpresaPromesaDeDios:
            console.log('🚀 Navegando a Promesa de Dios');
            this.router.navigate([ruta]);
            break;
          case this.NombreEmpresaCafeJuanAna:
            console.log('🚀 Navegando a Café Juan Ana');
            this.router.navigate([ruta]);
            break;
          default:
            console.log('🚀 Empresa desconocida, redirigiendo a menú principal');
            this.router.navigate(['/menu']);
            break;
        }
      }
    },
    error: (error) => {
      const MensajePlano = typeof error?.error?.error === 'string' ? error.error.error : null;

      if (MensajePlano) {
        this.Alerta.MostrarAlerta(MensajePlano, 'Atención');
      } else {
        this.Alerta.MostrarError(error, 'Error al iniciar sesión');
      }
    }
  });
}


}
