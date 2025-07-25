import { Component } from '@angular/core';
import { SidebarDulceTentacionComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-DulceTentacion',
  imports: [SidebarDulceTentacionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioDulceTentacionComponent {
  NombreEmpresa = Entorno.NombreEmpresaDulceTentacion;
  LogoEmpresa = Entorno.LogoDulceTentacion;
}
