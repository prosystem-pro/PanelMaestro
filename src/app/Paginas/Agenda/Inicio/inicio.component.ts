import { Component } from '@angular/core';
import { SidebarAgendaComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-Agenda',
  imports: [SidebarAgendaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioAgendaComponent {
  NombreEmpresa = Entorno.NombreEmpresaAgenda;
  LogoEmpresa = Entorno.LogoAgenda;
}
