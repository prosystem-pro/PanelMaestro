import { Component } from '@angular/core';
import { SidebarSastreriaDemoComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaDemo',
  imports: [SidebarSastreriaDemoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaDemoComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaDemo;
  LogoEmpresa = Entorno.LogoSastreriaDemo;
}
