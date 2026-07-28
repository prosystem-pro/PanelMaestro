import { Component } from '@angular/core';
import { SidebarPuntoVentaPanaderiaPromesaDeDiosComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-PuntoVentaPanaderiaPromesaDeDios',
  imports: [SidebarPuntoVentaPanaderiaPromesaDeDiosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioPuntoVentaPanaderiaPromesaDeDiosComponent {
  NombreEmpresa = Entorno.NombreEmpresaPuntoVentaPanaderiaPromesaDeDios;
  LogoEmpresa = Entorno.LogoPuntoVentaPanaderiaPromesaDeDios;
}
