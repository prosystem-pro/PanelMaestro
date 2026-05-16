import { Component } from '@angular/core';
import { SidebarSastreriaAnderTrajesYUniformesComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaAnderTrajesYUniformes',
  imports: [SidebarSastreriaAnderTrajesYUniformesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaAnderTrajesYUniformesComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaAnderTrajesYUniformes;
  LogoEmpresa = Entorno.LogoSastreriaAnderTrajesYUniformes;
}
