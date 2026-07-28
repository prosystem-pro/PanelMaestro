import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Entorno } from '../../../Entornos/Entorno';
import { LoginServicioPuntoVentaPanaderiaPromesaDeDios } from '../../../Servicios/PuntoVentaPanaderiaPromesaDeDios/Login';


@Component({
  selector: 'app-sidebar-PuntoVentaPanaderiaPromesaDeDios',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarPuntoVentaPanaderiaPromesaDeDiosComponent {

  SidebarVisible = true;
  EsMovil = false;
  NombreEmpresaPuntoVentaPanaderiaPromesaDeDios: string = Entorno.NombreEmpresaPuntoVentaPanaderiaPromesaDeDios;
  constructor(private router: Router, private elemento: ElementRef,  private LoginServicio: LoginServicioPuntoVentaPanaderiaPromesaDeDios) {
    this.VerificarTamanoPantalla();
  }

  @HostListener('window:resize')
  AlCambiarTamano() {
    this.VerificarTamanoPantalla();
  }

  VerificarTamanoPantalla() {
    this.EsMovil = window.innerWidth < 869;
    this.SidebarVisible = !this.EsMovil;
  }

  AlternarSidebar() {
    this.SidebarVisible = !this.SidebarVisible;
  }

  Navegar(ruta: string) {
    this.router.navigate([ruta]);
    if (this.EsMovil) {
      this.SidebarVisible = false;
    }
  }
  isActive(route: string): boolean {
    return this.router.url.endsWith('/' + route);
  }

  // 👉 Ocultar al hacer clic fuera en móvil
  @HostListener('document:click', ['$event'])
  ClicFuera(evento: MouseEvent) {
    const fueDentro = this.elemento.nativeElement.contains(evento.target);
    if (this.EsMovil && this.SidebarVisible && !fueDentro) {
      this.SidebarVisible = false;
    }
  }
  CerrarSesion() {
  this.LoginServicio.EliminarToken(); 
  this.router.navigate(['/menu']);  
}

}
