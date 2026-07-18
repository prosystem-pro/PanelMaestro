import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Entorno } from '../../../Entornos/Entorno';
import { LoginServicioSastreriaFerreteriaLaBendicion } from '../../../Servicios/SastreriaFerreteriaLaBendicion/Login';


@Component({
  selector: 'app-sidebar-SastreriaFerreteriaLaBendicion',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarSastreriaFerreteriaLaBendicionComponent {

  SidebarVisible = true;
  EsMovil = false;
  NombreEmpresaSastreriaFerreteriaLaBendicion: string = Entorno.NombreEmpresaSastreriaFerreteriaLaBendicion;
  constructor(private router: Router, private elemento: ElementRef,  private LoginServicio: LoginServicioSastreriaFerreteriaLaBendicion) {
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
