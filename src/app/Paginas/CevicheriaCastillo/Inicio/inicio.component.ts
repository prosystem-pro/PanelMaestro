import { Component } from '@angular/core';
import { SidebarCevicheriaCastilloComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-CevicheriaCastillo',
  imports: [SidebarCevicheriaCastilloComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioCevicheriaCastilloComponent {
  NombreEmpresa = Entorno.NombreEmpresaCevicheriaCastillo;
  LogoEmpresa = Entorno.LogoCevicheriaCastillo;
}
