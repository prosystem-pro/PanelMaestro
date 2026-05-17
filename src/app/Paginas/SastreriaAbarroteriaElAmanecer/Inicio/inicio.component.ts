import { Component } from '@angular/core';
import { SidebarSastreriaAbarroteriaElAmanecerComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaAbarroteriaElAmanecer',
  imports: [SidebarSastreriaAbarroteriaElAmanecerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaAbarroteriaElAmanecerComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaAbarroteriaElAmanecer;
  LogoEmpresa = Entorno.LogoSastreriaAbarroteriaElAmanecer;
}
