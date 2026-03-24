import { Component } from '@angular/core';
import { SidebarRestauranteElBistroComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-RestauranteElBistro',
  imports: [SidebarRestauranteElBistroComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioRestauranteElBistroComponent {
  NombreEmpresa = Entorno.NombreEmpresaRestauranteElBistro;
  LogoEmpresa = Entorno.LogoRestauranteElBistro;
}
