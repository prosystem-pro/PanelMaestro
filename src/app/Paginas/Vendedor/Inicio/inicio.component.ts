import { Component } from '@angular/core';
import { SidebarVendedorComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-Vendedor',
  imports: [SidebarVendedorComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioVendedorComponent {
  NombreEmpresa = Entorno.NombreEmpresaVendedor;
  LogoEmpresa = Entorno.LogoVendedor;
}
