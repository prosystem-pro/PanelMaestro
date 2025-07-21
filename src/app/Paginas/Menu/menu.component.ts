import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';


@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  LogoEmpresaPromesaDeDios: string = Entorno.LogoPromesaDeDios;

  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
  LogoEmpresaCafeJuanAna: string = Entorno.LogoCafeJuanAna;

  NombreEmpresaDulceTentacion: string = Entorno.NombreEmpresaDulceTentacion;
  LogoEmpresaDulceTentacion: string = Entorno.LogoDulceTentacion;

  NombreEmpresaRestauranteKaski: string = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresaRestauranteKaski: string = Entorno.LogoRestauranteKaski;
  VisorEncendido: boolean = false;

  constructor(private router: Router) { }

  AbrirLogin(Empresa: string) {
    this.router.navigate(['/login'], {
      queryParams: { Empresa }
    }).then(navegado => {
      if (navegado) {
        console.log('Navegación exitosa hacia /login con queryParams:', Empresa);
      } else {
        console.error('Error: No se pudo navegar hacia /login');
      }
    });
  }

}
