import { Component } from '@angular/core';
import { SidebarRestauranteKaskiComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-RestauranteKaski',
  imports: [SidebarRestauranteKaskiComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioRestauranteKaskiComponent {
  NombreEmpresa = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresa = Entorno.LogoRestauranteKaski;
}
