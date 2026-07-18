import { Component } from '@angular/core';
import { SidebarSastreriaFerreteriaLaBendicionComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaFerreteriaLaBendicion',
  imports: [SidebarSastreriaFerreteriaLaBendicionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaFerreteriaLaBendicionComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaFerreteriaLaBendicion;
  LogoEmpresa = Entorno.LogoSastreriaFerreteriaLaBendicion;
}
