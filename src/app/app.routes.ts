import { Routes } from '@angular/router';
import { AutorizacionRuta } from './Autorizacion/AutorizacionRuta';
import { Entorno } from '../app/Entornos/Entorno';

import { MenuComponent } from '../app/Paginas/Menu/menu.component';
import { LoginComponent } from '../app/Paginas/Login/login.component';
import { SpinnerGlobalComponent } from '../app/Componentes/spinner-global/spinner-global.component';

//CHOCOS DE LA ABUELA
import { InicioChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Inicio/inicio.component';
import { SidebarChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Sidebar/sidebar.component';
import { EmpresaListadoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Rol/rol-listado/rol-listado.component';
import { RolCrearChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoChocosDeLaAbuelaComponent } from '../app/Paginas/ChocosDeLaAbuela/Pago/pago.component';
//CORAZON TIPICO
import { InicioCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Inicio/inicio.component';
import { SidebarCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Sidebar/sidebar.component';
import { EmpresaListadoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Rol/rol-listado/rol-listado.component';
import { RolCrearCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearCorazonTipicoComponent } from '../app/Paginas/CorazonTipico//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoCorazonTipicoComponent } from '../app/Paginas/CorazonTipico/Pago/pago.component';
//CONSTRUCTORA MORGAN
import { InicioConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Inicio/inicio.component';
import { SidebarConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Sidebar/sidebar.component';
import { EmpresaListadoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Rol/rol-listado/rol-listado.component';
import { RolCrearConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoConstructoraMorganComponent } from '../app/Paginas/ConstructoraMorgan/Pago/pago.component';
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
//AJACHEL TRAVEL AGENCY
import { InicioAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Inicio/inicio.component';
import { SidebarAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Sidebar/sidebar.component';
import { EmpresaListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Rol/rol-listado/rol-listado.component';
import { RolCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Pago/pago.component';
//RESTAURANTE EL BISTRO
import { InicioRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Inicio/inicio.component';
import { SidebarRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Sidebar/sidebar.component';
import { EmpresaListadoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Rol/rol-listado/rol-listado.component';
import { RolCrearRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoRestauranteElBistroComponent } from '../app/Paginas/RestauranteElBistro/Pago/pago.component';
//SASTRERIA CONFECCIONES CREATELI
import { InicioSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Inicio/inicio.component';
import { SidebarSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Sidebar/sidebar.component';
import { EmpresaListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Rol/rol-listado/rol-listado.component';
import { RolCrearSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/Pago/pago.component';
import { EliminacionSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/GestionAdmin/eliminacion/eliminacion.component';
//SASTRERIA ANDER TRAJES Y UNIFORMES
import { InicioSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Inicio/inicio.component';
import { SidebarSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Sidebar/sidebar.component';
import { EmpresaListadoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Rol/rol-listado/rol-listado.component';
import { RolCrearSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/Pago/pago.component';
import { EliminacionSastreriaAnderTrajesYUniformesComponent } from '../app/Paginas/SastreriaAnderTrajesYUniformes/GestionAdmin/eliminacion/eliminacion.component';
//SASTRERIA ABARROTERIA EL AMANECER
import { InicioSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Inicio/inicio.component';
import { SidebarSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Sidebar/sidebar.component';
import { EmpresaListadoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Rol/rol-listado/rol-listado.component';
import { RolCrearSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/Pago/pago.component';
import { EliminacionSastreriaAbarroteriaElAmanecerComponent } from '../app/Paginas/SastreriaAbarroteriaElAmanecer/GestionAdmin/eliminacion/eliminacion.component';
//SASTRERIA DEMO
import { InicioSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Inicio/inicio.component';
import { SidebarSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Sidebar/sidebar.component';
import { EmpresaListadoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Rol/rol-listado/rol-listado.component';
import { RolCrearSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/Pago/pago.component';
import { EliminacionSastreriaDemoComponent } from '../app/Paginas/SastreriaDemo/GestionAdmin/eliminacion/eliminacion.component';

//SASTRERIA DEMO OFICIAL
import { InicioSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Inicio/inicio.component';
import { SidebarSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Sidebar/sidebar.component';
import { EmpresaListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Rol/rol-listado/rol-listado.component';
import { RolCrearSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/Pago/pago.component';
import { EliminacionSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/GestionAdmin/eliminacion/eliminacion.component';


const NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
const NombreEmpresaCorazonTipico: string = Entorno.NombreEmpresaCorazonTipico;
const NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
const NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
const NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
const NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;
const NombreEmpresaSastreriaConfeccionesCreateli: string = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
const NombreEmpresaSastreriaAnderTrajesYUniformes: string = Entorno.NombreEmpresaSastreriaAnderTrajesYUniformes;
const NombreEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.NombreEmpresaSastreriaAbarroteriaElAmanecer;
const NombreEmpresaSastreriaDemo: string = Entorno.NombreEmpresaSastreriaDemo;
const NombreEmpresaSastreriaDemoOficial: string = Entorno.NombreEmpresaSastreriaDemoOficial;
// const Otro = 'OtraEmpresa';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spinner-global', component: SpinnerGlobalComponent },

  //PROTEGIDAS CHOCOS DE LA ABUELA
  { path: `${NombreEmpresaChocosDeLaAbuela}/inicio`, component: InicioChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/sidebar`, component: SidebarChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/empresa-listado`, component: EmpresaListadoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/empresa-crear`, component: EmpresaCrearChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/rol-listado`, component: RolListadoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/rol-crear`, component: RolCrearChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/usuario-listado`, component: UsuarioListadoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/usuario-crear`, component: UsuarioCrearChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/permiso-listado`, component: PermisoListadoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/permiso-crear`, component: PermisoCrearChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/recurso-listado`, component: RecursoListadoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/recurso-crear`, component: RecursoCrearChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaChocosDeLaAbuela}/pago`, component: PagoChocosDeLaAbuelaComponent, canActivate: [AutorizacionRuta] },
  //PROTEGIDAS CORAZON TIPICO
  { path: `${NombreEmpresaCorazonTipico}/inicio`, component: InicioCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/sidebar`, component: SidebarCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/empresa-listado`, component: EmpresaListadoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/empresa-crear`, component: EmpresaCrearCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/rol-listado`, component: RolListadoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/rol-crear`, component: RolCrearCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/usuario-listado`, component: UsuarioListadoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/usuario-crear`, component: UsuarioCrearCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/permiso-listado`, component: PermisoListadoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/permiso-crear`, component: PermisoCrearCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/recurso-listado`, component: RecursoListadoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/recurso-crear`, component: RecursoCrearCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCorazonTipico}/pago`, component: PagoCorazonTipicoComponent, canActivate: [AutorizacionRuta] },
  //PROTEGIDAS CONSTRUCTORA MORGAN
  { path: `${NombreEmpresaConstructoraMorgan}/inicio`, component: InicioConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/sidebar`, component: SidebarConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/empresa-listado`, component: EmpresaListadoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/empresa-crear`, component: EmpresaCrearConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/rol-listado`, component: RolListadoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/rol-crear`, component: RolCrearConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/usuario-listado`, component: UsuarioListadoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/usuario-crear`, component: UsuarioCrearConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/permiso-listado`, component: PermisoListadoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/permiso-crear`, component: PermisoCrearConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/recurso-listado`, component: RecursoListadoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/recurso-crear`, component: RecursoCrearConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaConstructoraMorgan}/pago`, component: PagoConstructoraMorganComponent, canActivate: [AutorizacionRuta] },
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
  //PROTEGIDAS AJACHEL TRAVEL AGENCY
  { path: `${NombreEmpresaAjachelTravelAgency}/inicio`, component: InicioAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/sidebar`, component: SidebarAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/empresa-listado`, component: EmpresaListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/empresa-crear`, component: EmpresaCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/rol-listado`, component: RolListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/rol-crear`, component: RolCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/usuario-listado`, component: UsuarioListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/usuario-crear`, component: UsuarioCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-listado`, component: PermisoListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-crear`, component: PermisoCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/recurso-listado`, component: RecursoListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/recurso-crear`, component: RecursoCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/pago`, component: PagoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  //PROTEGIDAS RESTAURANTE EL BISTRO
  { path: `${NombreEmpresaRestauranteElBistro}/inicio`, component: InicioRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/sidebar`, component: SidebarRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/empresa-listado`, component: EmpresaListadoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/empresa-crear`, component: EmpresaCrearRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/rol-listado`, component: RolListadoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/rol-crear`, component: RolCrearRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/usuario-listado`, component: UsuarioListadoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/usuario-crear`, component: UsuarioCrearRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/permiso-listado`, component: PermisoListadoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/permiso-crear`, component: PermisoCrearRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/recurso-listado`, component: RecursoListadoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/recurso-crear`, component: RecursoCrearRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaRestauranteElBistro}/pago`, component: PagoRestauranteElBistroComponent, canActivate: [AutorizacionRuta] },
  //SASTRERIA CONFECCIONES CREATELI
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/inicio`, component: InicioSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/sidebar`, component: SidebarSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/empresa-listado`, component: EmpresaListadoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/empresa-crear`, component: EmpresaCrearSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/rol-listado`, component: RolListadoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/rol-crear`, component: RolCrearSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/usuario-listado`, component: UsuarioListadoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/usuario-crear`, component: UsuarioCrearSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/permiso-listado`, component: PermisoListadoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/permiso-crear`, component: PermisoCrearSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/recurso-listado`, component: RecursoListadoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/recurso-crear`, component: RecursoCrearSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/pago`, component: PagoSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/eliminacion`, component: EliminacionSastreriaConfeccionesCreateliComponent, canActivate: [AutorizacionRuta] },
  //SASTRERIA CONFECCIONES CREATELI
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/inicio`, component: InicioSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/sidebar`, component: SidebarSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/empresa-listado`, component: EmpresaListadoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/empresa-crear`, component: EmpresaCrearSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/rol-listado`, component: RolListadoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/rol-crear`, component: RolCrearSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/usuario-listado`, component: UsuarioListadoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/usuario-crear`, component: UsuarioCrearSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/permiso-listado`, component: PermisoListadoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/permiso-crear`, component: PermisoCrearSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/recurso-listado`, component: RecursoListadoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/recurso-crear`, component: RecursoCrearSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/pago`, component: PagoSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAnderTrajesYUniformes}/eliminacion`, component: EliminacionSastreriaAnderTrajesYUniformesComponent, canActivate: [AutorizacionRuta] },
  //SASTRERIA ABARROTERIA EL AMANECER
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/inicio`, component: InicioSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/sidebar`, component: SidebarSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/empresa-listado`, component: EmpresaListadoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/empresa-crear`, component: EmpresaCrearSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/rol-listado`, component: RolListadoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/rol-crear`, component: RolCrearSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/usuario-listado`, component: UsuarioListadoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/usuario-crear`, component: UsuarioCrearSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/permiso-listado`, component: PermisoListadoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/permiso-crear`, component: PermisoCrearSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/recurso-listado`, component: RecursoListadoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/recurso-crear`, component: RecursoCrearSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/pago`, component: PagoSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaAbarroteriaElAmanecer}/eliminacion`, component: EliminacionSastreriaAbarroteriaElAmanecerComponent, canActivate: [AutorizacionRuta] },
  //SASTRERIA DEMO
  { path: `${NombreEmpresaSastreriaDemo}/inicio`, component: InicioSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/sidebar`, component: SidebarSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/empresa-listado`, component: EmpresaListadoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/empresa-crear`, component: EmpresaCrearSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/rol-listado`, component: RolListadoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/rol-crear`, component: RolCrearSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/usuario-listado`, component: UsuarioListadoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/usuario-crear`, component: UsuarioCrearSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/permiso-listado`, component: PermisoListadoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/permiso-crear`, component: PermisoCrearSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/recurso-listado`, component: RecursoListadoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/recurso-crear`, component: RecursoCrearSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/pago`, component: PagoSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemo}/eliminacion`, component: EliminacionSastreriaDemoComponent, canActivate: [AutorizacionRuta] },
    //SASTRERIA DEMO OFICIAL
  { path: `${NombreEmpresaSastreriaDemoOficial}/inicio`, component: InicioSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/sidebar`, component: SidebarSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/empresa-listado`, component: EmpresaListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/empresa-crear`, component: EmpresaCrearSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/rol-listado`, component: RolListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/rol-crear`, component: RolCrearSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/usuario-listado`, component: UsuarioListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/usuario-crear`, component: UsuarioCrearSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/permiso-listado`, component: PermisoListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/permiso-crear`, component: PermisoCrearSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/recurso-listado`, component: RecursoListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/recurso-crear`, component: RecursoCrearSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/pago`, component: PagoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaDemoOficial}/eliminacion`, component: EliminacionSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },

  { path: '**', redirectTo: 'menu' },
];