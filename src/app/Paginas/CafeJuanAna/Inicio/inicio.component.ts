import { Component } from '@angular/core';
import { SidebarCafeJuanAnaComponent } from "../../CafeJuanAna/Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio',
  imports: [SidebarCafeJuanAnaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioCafeJuanAnaComponent {
  NombreEmpresa = Entorno.NombreEmpresaCafeJuanAna;
}
