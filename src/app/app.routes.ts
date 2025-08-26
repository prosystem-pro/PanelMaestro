import { Routes } from '@angular/router';
import { AutorizacionRuta } from './Autorizacion/AutorizacionRuta';
import { Entorno } from '../app/Entornos/Entorno';

import { MenuComponent } from '../app/Paginas/Menu/menu.component';
import { LoginComponent } from '../app/Paginas/Login/login.component';
import { SpinnerGlobalComponent } from '../app/Componentes/spinner-global/spinner-global.component';

//PROMESA DE DIOS
import { InicioPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Inicio/inicio.component';
import { SidebarPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Sidebar/sidebar.component';
import { EmpresaListadoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Rol/rol-listado/rol-listado.component';
import { RolCrearPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoPromesaDeDiosComponent } from '../app/Paginas/PromesaDeDios/Pago/pago.component';

//FAMILY SHOP
import { InicioFamilyShopComponent } from '../app/Paginas/FamilyShop/Inicio/inicio.component';
import { SidebarFamilyShopComponent } from '../app/Paginas/FamilyShop/Sidebar/sidebar.component';
import { EmpresaListadoFamilyShopComponent } from '../app/Paginas/FamilyShop/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearFamilyShopComponent } from '../app/Paginas/FamilyShop/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoFamilyShopComponent } from '../app/Paginas/FamilyShop/Rol/rol-listado/rol-listado.component';
import { RolCrearFamilyShopComponent } from '../app/Paginas/FamilyShop/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoFamilyShopComponent } from '../app/Paginas/FamilyShop/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearFamilyShopComponent } from '../app/Paginas/FamilyShop/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoFamilyShopComponent } from '../app/Paginas/FamilyShop/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearFamilyShopComponent } from '../app/Paginas/FamilyShop/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoFamilyShopComponent } from '../app/Paginas/FamilyShop/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearFamilyShopComponent } from '../app/Paginas/FamilyShop//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoFamilyShopComponent } from '../app/Paginas/FamilyShop/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearFamilyShopComponent } from '../app/Paginas/FamilyShop/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoFamilyShopComponent } from '../app/Paginas/FamilyShop/Pago/pago.component';

//CAFE JUAN ANA
import { InicioCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Inicio/inicio.component';
import { SidebarCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Sidebar/sidebar.component';
import { EmpresaListadoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Rol/rol-listado/rol-listado.component';
import { RolCrearCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoCafeJuanAnaComponent } from '../app/Paginas/CafeJuanAna/Pago/pago.component';

//DULCE TENTACIÓN
import { InicioDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Inicio/inicio.component';
import { SidebarDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Sidebar/sidebar.component';
import { EmpresaListadoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Rol/rol-listado/rol-listado.component';
import { RolCrearDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearDulceTentacionComponent } from '../app/Paginas/DulceTentacion//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearDulceTentacionComponent } from '../app/Paginas/DulceTentacion/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoDulceTentacionComponent } from '../app/Paginas/DulceTentacion/Pago/pago.component';

//RESTAURANTE KASKI
import { InicioRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Inicio/inicio.component';
import { SidebarRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Sidebar/sidebar.component';
import { EmpresaListadoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Rol/rol-listado/rol-listado.component';
import { RolCrearRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoRestauranteKaskiComponent } from '../app/Paginas/RestauranteKaski/Pago/pago.component';

//VENDEDOR
import { InicioVendedorComponent } from '../app/Paginas/Vendedor/Inicio/inicio.component';
import { SidebarVendedorComponent } from '../app/Paginas/Vendedor/Sidebar/sidebar.component';
import { EmpresaListadoVendedorComponent } from '../app/Paginas/Vendedor/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearVendedorComponent } from '../app/Paginas/Vendedor/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoVendedorComponent } from '../app/Paginas/Vendedor/Rol/rol-listado/rol-listado.component';
import { RolCrearVendedorComponent } from '../app/Paginas/Vendedor/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoVendedorComponent } from '../app/Paginas/Vendedor/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearVendedorComponent } from '../app/Paginas/Vendedor/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoVendedorComponent } from '../app/Paginas/Vendedor/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearVendedorComponent } from '../app/Paginas/Vendedor/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoVendedorComponent } from '../app/Paginas/Vendedor/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearVendedorComponent } from '../app/Paginas/Vendedor//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoVendedorComponent } from '../app/Paginas/Vendedor/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearVendedorComponent } from '../app/Paginas/Vendedor/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoVendedorComponent } from '../app/Paginas/Vendedor/Pago/pago.component';

const NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
const NombreEmpresaFamilyShop: string = Entorno.NombreEmpresaFamilyShop;
const NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
const NombreEmpresaDulceTentacion: string = Entorno.NombreEmpresaDulceTentacion;
const NombreEmpresaRestauranteKaski: string = Entorno.NombreEmpresaRestauranteKaski;
const NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
const Promesa = 'PromesaDeDios';
// const Otro = 'OtraEmpresa';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spinner-global', component: SpinnerGlobalComponent},

  //PROTEGIDAS PROMESA DE DIOS
  { path: `${NombreEmpresaPromesaDeDios}/inicio`, component: InicioPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/sidebar`, component: SidebarPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/empresa-listado`, component: EmpresaListadoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/empresa-crear`, component: EmpresaCrearPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/rol-listado`, component: RolListadoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/rol-crear`, component: RolCrearPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/usuario-listado`, component: UsuarioListadoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/usuario-crear`, component: UsuarioCrearPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/permiso-listado`, component: PermisoListadoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/permiso-crear`, component: PermisoCrearPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/recurso-listado`, component: RecursoListadoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/recurso-crear`, component: RecursoCrearPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPromesaDeDios}/pago`, component: PagoPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },

    //PROTEGIDAS FAMILY SHOP
  { path: `${NombreEmpresaFamilyShop}/inicio`, component: InicioFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/sidebar`, component: SidebarFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/empresa-listado`, component: EmpresaListadoFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/empresa-crear`, component: EmpresaCrearFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/rol-listado`, component: RolListadoFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/rol-crear`, component: RolCrearFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/usuario-listado`, component: UsuarioListadoFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/usuario-crear`, component: UsuarioCrearFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/permiso-listado`, component: PermisoListadoFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/permiso-crear`, component: PermisoCrearFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/recurso-listado`, component: RecursoListadoFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/recurso-crear`, component: RecursoCrearFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearFamilyShopComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaFamilyShop}/pago`, component: PagoFamilyShopComponent, canActivate: [AutorizacionRuta] },

  //PROTEGIDAS CAFE JUAN ANA
  { path: `${NombreEmpresaCafeJuanAna}/inicio`, component: InicioCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/sidebar`, component: SidebarCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/empresa-listado`, component: EmpresaListadoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/empresa-crear`, component: EmpresaCrearCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/rol-listado`, component: RolListadoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/rol-crear`, component: RolCrearCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/usuario-listado`, component: UsuarioListadoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/usuario-crear`, component: UsuarioCrearCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/permiso-listado`, component: PermisoListadoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/permiso-crear`, component: PermisoCrearCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/recurso-listado`, component: RecursoListadoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/recurso-crear`, component: RecursoCrearCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCafeJuanAna}/pago`, component: PagoCafeJuanAnaComponent, canActivate: [AutorizacionRuta] },

  //PROTEGIDAS DULCE TENTACION
  { path: `${NombreEmpresaDulceTentacion}/inicio`, component: InicioDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/sidebar`, component: SidebarDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/empresa-listado`, component: EmpresaListadoDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/empresa-crear`, component: EmpresaCrearDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/rol-listado`, component: RolListadoDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/rol-crear`, component: RolCrearDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/usuario-listado`, component: UsuarioListadoDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/usuario-crear`, component: UsuarioCrearDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/permiso-listado`, component: PermisoListadoDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/permiso-crear`, component: PermisoCrearDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/recurso-listado`, component: RecursoListadoDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/recurso-crear`, component: RecursoCrearDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearDulceTentacionComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaDulceTentacion}/pago`, component: PagoDulceTentacionComponent, canActivate: [AutorizacionRuta] },

  //PROTEGIDAS RESTAURANTE KASKI
  { path: `${NombreEmpresaRestauranteKaski}/inicio`, component: InicioRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/sidebar`, component: SidebarRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/empresa-listado`, component: EmpresaListadoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/empresa-crear`, component: EmpresaCrearRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/rol-listado`, component: RolListadoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/rol-crear`, component: RolCrearRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/usuario-listado`, component: UsuarioListadoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/usuario-crear`, component: UsuarioCrearRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/permiso-listado`, component: PermisoListadoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/permiso-crear`, component: PermisoCrearRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/recurso-listado`, component: RecursoListadoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/recurso-crear`, component: RecursoCrearRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteKaski}/pago`, component: PagoRestauranteKaskiComponent, canActivate: [AutorizacionRuta] },

    //PROTEGIDAS VENDEDOR
  { path: `${NombreEmpresaVendedor}/inicio`, component: InicioVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/sidebar`, component: SidebarVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/empresa-listado`, component: EmpresaListadoVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/empresa-crear`, component: EmpresaCrearVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/rol-listado`, component: RolListadoVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/rol-crear`, component: RolCrearVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/usuario-listado`, component: UsuarioListadoVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/usuario-crear`, component: UsuarioCrearVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/permiso-listado`, component: PermisoListadoVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/permiso-crear`, component: PermisoCrearVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/recurso-listado`, component: RecursoListadoVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/recurso-crear`, component: RecursoCrearVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearVendedorComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaVendedor}/pago`, component: PagoVendedorComponent, canActivate: [AutorizacionRuta] },

  { path: '**', redirectTo: 'menu' },
];