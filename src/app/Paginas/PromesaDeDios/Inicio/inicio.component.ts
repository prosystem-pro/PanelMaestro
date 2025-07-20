import { Component } from '@angular/core';
import { SidebarPromesaDeDiosComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio',
  imports: [SidebarPromesaDeDiosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioPromesaDeDiosComponent {
  NombreEmpresa = Entorno.NombreEmpresaPromesaDeDios;
  LogoEmpresa = Entorno.LogoPromesaDeDios;
}
