import { Component } from '@angular/core';
import { SidebarSastreriaFerreteriaLaBendicionOficialComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-SastreriaFerreteriaLaBendicionOficial',
  imports: [SidebarSastreriaFerreteriaLaBendicionOficialComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioSastreriaFerreteriaLaBendicionOficialComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaFerreteriaLaBendicionOficial;
  LogoEmpresa = Entorno.LogoSastreriaFerreteriaLaBendicionOficial;
}
