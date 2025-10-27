import { Component } from '@angular/core';
import { SidebarConstructoraMorganComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-ConstructoraMorgan',
  imports: [SidebarConstructoraMorganComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioConstructoraMorganComponent {
  NombreEmpresa = Entorno.NombreEmpresaConstructoraMorgan;
  LogoEmpresa = Entorno.LogoConstructoraMorgan;
}
