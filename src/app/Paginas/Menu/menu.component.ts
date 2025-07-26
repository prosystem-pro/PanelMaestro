import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';
import { PagoServicioCafeJuanAna } from '../../Servicios/CafeJuanAna/PagoServicio';
import { PagoServicioDulceTentacion } from '../../Servicios/DulceTentacion/PagoServicio';
import { PagoServicioPromesaDeDios } from '../../Servicios/PromesaDeDios/PagoServicio';
import { PagoServicioRestauranteKaski } from '../../Servicios/RestauranteKaski/PagoServicio';
import { PagoServicioVendedor } from '../../Servicios/Vendedor/PagoServicio';
import { AfterViewInit, Component, ElementRef } from '@angular/core';



@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  LogoEmpresaPromesaDeDios: string = Entorno.LogoPromesaDeDios;
  ResumenPagosPromesaDeDios: any = null;
  AnioSeleccionadoPromesaDeDios = new Date().getFullYear();
  PaginaPromesaDeDios: number = 0;

  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
  LogoEmpresaCafeJuanAna: string = Entorno.LogoCafeJuanAna;
  ResumenPagosCafeJuanAna: any = null;
  AnioSeleccionadoCafeJuanAna = new Date().getFullYear();
  PaginaCafeJuanAna: number = 0;

  NombreEmpresaDulceTentacion: string = Entorno.NombreEmpresaDulceTentacion;
  LogoEmpresaDulceTentacion: string = Entorno.LogoDulceTentacion;
  ResumenPagosDulceTentacion: any = null;
  AnioSeleccionadoDulceTentacion = new Date().getFullYear();
  PaginaDulceTentacion: number = 0;

  NombreEmpresaRestauranteKaski: string = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresaRestauranteKaski: string = Entorno.LogoRestauranteKaski;
  ResumenPagosRestauranteKaski: any = null;
  AnioSeleccionadoRestauranteKaski = new Date().getFullYear();
  PaginaRestauranteKaski: number = 0;

  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
  LogoEmpresaVendedor: string = Entorno.LogoVendedor;
  ResumenPagosVendedor: any = null;
  AnioSeleccionadoVendedor = new Date().getFullYear();
  PaginaVendedor: number = 0;

  // Estados de visores individuales
  VisorPromesaDeDios = false;
  VisorCafeJuanAna = false;
  VisorDulceTentacion = false;
  VisorRestauranteKaski = false;
  VisorVendedor = false;

  // Switch maestro
  VisorMaestro = false;

  constructor(private router: Router,
    private PagoServicioCafeJuanAna: PagoServicioCafeJuanAna,
    private PagoServicioDulceTentacion: PagoServicioDulceTentacion,
    private PagoServicioPromesaDeDios: PagoServicioPromesaDeDios,
    private PagoServicioRestauranteKaski: PagoServicioRestauranteKaski,
    private PagoServicioVendedor: PagoServicioVendedor,
  ) { }
  ngOnInit() {
    this.CargarResumenPagosCafeJuanAna(this.AnioSeleccionadoCafeJuanAna);
    this.CargarResumenPagosDulceTentacion(this.AnioSeleccionadoDulceTentacion);
    this.CargarResumenPagosPromesaDeDios(this.AnioSeleccionadoPromesaDeDios);
    this.CargarResumenPagosRestauranteKaski(this.AnioSeleccionadoRestauranteKaski);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);
  }


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
  CambiarTodosLosVisores() {
    this.VisorPromesaDeDios =
      this.VisorCafeJuanAna =
      this.VisorDulceTentacion =
      this.VisorVendedor =
      this.VisorRestauranteKaski = this.VisorMaestro;
  }

  CargarResumenPagosCafeJuanAna(anio: number) {
    this.PagoServicioCafeJuanAna.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (data) => {
        this.ResumenPagosCafeJuanAna = data;
      },
      error: (error) => {
        console.error('Error al cargar resumen de pagos', error);
      }
    });
  }
  CargarResumenPagosDulceTentacion(anio: number) {
    this.PagoServicioDulceTentacion.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (data) => {
        this.ResumenPagosDulceTentacion = data;
      },
      error: (error) => {
        console.error('Error al cargar resumen de pagos', error);
      }
    });
  }
  CargarResumenPagosPromesaDeDios(anio: number) {
    this.PagoServicioPromesaDeDios.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (data) => {
        this.ResumenPagosPromesaDeDios = data;
      },
      error: (error) => {
        console.error('Error al cargar resumen de pagos', error);
      }
    });
  }
  CargarResumenPagosRestauranteKaski(anio: number) {
    this.PagoServicioRestauranteKaski.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (data) => {
        this.ResumenPagosRestauranteKaski = data;
      },
      error: (error) => {
        console.error('Error al cargar resumen de pagos', error);
      }
    });
  }
  CargarResumenPagosVendedor(anio: number) {
    this.PagoServicioVendedor.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (data) => {
        this.ResumenPagosVendedor = data;
      },
      error: (error) => {
        console.error('Error al cargar resumen de pagos', error);
      }
    });
  }
}
