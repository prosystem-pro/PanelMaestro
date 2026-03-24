import { Component } from '@angular/core';
import { SidebarAjachelTravelAgencyComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-AjachelTravelAgency',
  imports: [SidebarAjachelTravelAgencyComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioAjachelTravelAgencyComponent {
  NombreEmpresa = Entorno.NombreEmpresaAjachelTravelAgency;
  LogoEmpresa = Entorno.LogoAjachelTravelAgency;
}
