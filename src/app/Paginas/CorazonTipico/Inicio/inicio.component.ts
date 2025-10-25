import { Component } from '@angular/core';
import { SidebarCorazonTipicoComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-CorazonTipico',
  imports: [SidebarCorazonTipicoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioCorazonTipicoComponent {
  NombreEmpresa = Entorno.NombreEmpresaCorazonTipico;
  LogoEmpresa = Entorno.LogoCorazonTipico;
}
