import { Component } from '@angular/core';
import { SidebarPuntoVentaVendedorDemoComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-PuntoVentaVendedorDemo',
  imports: [SidebarPuntoVentaVendedorDemoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioPuntoVentaVendedorDemoComponent {
  NombreEmpresa = Entorno.NombreEmpresaPuntoVentaVendedorDemo;
  LogoEmpresa = Entorno.LogoPuntoVentaVendedorDemo;
}
