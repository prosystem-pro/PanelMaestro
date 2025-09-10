import { Component } from '@angular/core';
import { SidebarRestauranteElTuleComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-RestauranteElTule',
  imports: [SidebarRestauranteElTuleComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioRestauranteElTuleComponent {
  NombreEmpresa = Entorno.NombreEmpresaRestauranteElTule;
  LogoEmpresa = Entorno.LogoRestauranteElTule;
}
