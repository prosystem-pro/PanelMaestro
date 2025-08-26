import { Component } from '@angular/core';
import { SidebarFamilyShopComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-FamilyShop',
  imports: [SidebarFamilyShopComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioFamilyShopComponent {
  NombreEmpresa = Entorno.NombreEmpresaFamilyShop;
  LogoEmpresa = Entorno.LogoFamilyShop;
}
