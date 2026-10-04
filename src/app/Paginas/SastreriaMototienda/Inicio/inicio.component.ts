import { Component } from '@angular/core';
import { SidebarSastreriaMototiendaComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaMototienda',
  imports: [SidebarSastreriaMototiendaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaMototiendaComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaMototienda;
  LogoEmpresa = Entorno.LogoSastreriaMototienda;
}
