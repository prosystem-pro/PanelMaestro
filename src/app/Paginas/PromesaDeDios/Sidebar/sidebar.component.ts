import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Entorno } from '../../../Entornos/Entorno';
import { LoginServicioPromesaDeDios } from '../../../Servicios/PromesaDeDios/Login';


@Component({
  selector: 'app-sidebar-PromesaDeDios',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarPromesaDeDiosComponent {

  SidebarVisible = true;
  EsMovil = false;
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  constructor(private router: Router, private elemento: ElementRef,  private LoginServicio: LoginServicioPromesaDeDios) {
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
