import { Component } from '@angular/core';
import { SidebarChocosDeLaAbuelaComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-ChocosDeLaAbuela',
  imports: [SidebarChocosDeLaAbuelaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioChocosDeLaAbuelaComponent {
  NombreEmpresa = Entorno.NombreEmpresaChocosDeLaAbuela;
  LogoEmpresa = Entorno.LogoChocosDeLaAbuela;
}
