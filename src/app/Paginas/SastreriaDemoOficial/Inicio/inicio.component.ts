import { Component } from '@angular/core';
import { SidebarSastreriaDemoOficialComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaDemoOficial',
  imports: [SidebarSastreriaDemoOficialComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaDemoOficialComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaDemoOficial;
  LogoEmpresa = Entorno.LogoSastreriaDemoOficial;
}
