import { Component } from '@angular/core';
import { SidebarQualityAssuranceProSystemComponent } from "../Sidebar/sidebar.component";
import { Entorno } from '../../../Entornos/Entorno';

@Component({
  selector: 'app-inicio-QualityAssuranceProSystem',
  imports: [SidebarQualityAssuranceProSystemComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioQualityAssuranceProSystemComponent {
  NombreEmpresa = Entorno.NombreEmpresaQualityAssuranceProSystem;
  LogoEmpresa = Entorno.LogoQualityAssuranceProSystem;
}
