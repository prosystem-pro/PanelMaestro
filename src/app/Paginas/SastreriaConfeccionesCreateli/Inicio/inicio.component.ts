import { Component } from '@angular/core';
import { SidebarSastreriaConfeccionesCreateliComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaConfeccionesCreateli',
  imports: [SidebarSastreriaConfeccionesCreateliComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaConfeccionesCreateliComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
  LogoEmpresa = Entorno.LogoSastreriaConfeccionesCreateli;
}
