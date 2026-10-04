import { Routes } from '@angular/router';
import { AutorizacionRuta } from './Autorizacion/AutorizacionRuta';
import { Entorno } from '../app/Entornos/Entorno';

import { MenuComponent } from '../app/Paginas/Menu/menu.component';
import { LoginComponent } from '../app/Paginas/Login/login.component';
import { SpinnerGlobalComponent } from '../app/Componentes/spinner-global/spinner-global.component';

// ********************** C.A.R.R.I.T.O--W.E.B **********************
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

//AJACHEL TRAVEL AGENCY
import { InicioAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Inicio/inicio.component';
import { InicioCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Inicio/inicio.component';
import { SidebarAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Sidebar/sidebar.component';
import { SidebarCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Sidebar/sidebar.component';
import { EmpresaListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaListadoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Empresa/empresa-crear/empresa-crear.component';
import { EmpresaCrearCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Rol/rol-listado/rol-listado.component';
import { RolListadoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Rol/rol-listado/rol-listado.component';
import { RolCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Rol/rol-crear/rol-crear.component';
import { RolCrearCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioListadoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Usuario/usuario-crear/usuario-crear.component';
import { UsuarioCrearCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Permiso/permiso-listado/permiso-listado.component';
import { PermisoListadoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Permiso/permiso-crear/permiso-crear.component';
import { PermisoCrearCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Recurso/recurso-listado/recurso-listado.component';
import { RecursoListadoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency//Recurso/recurso-crear/recurso-crear.component';
import { RecursoCrearCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoListadoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PermisoRolRecursoCrearCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoAjachelTravelAgencyComponent } from '../app/Paginas/AjachelTravelAgency/Pago/pago.component';
import { PagoCevicheriaCastilloComponent } from '../app/Paginas/CevicheriaCastillo/Pago/pago.component';
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
// ********************** S.A.S.T.R.E.R.I.A.S ***********************
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
import { ListadoSastreriaConfeccionesCreateliComponent } from '../app/Paginas/SastreriaConfeccionesCreateli/GestionAdmin/listado/listado.component';
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
//SASTRERIA FERRETERIA LA BENDICION OFICIAL
import { InicioSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Inicio/inicio.component';
import { SidebarSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Sidebar/sidebar.component';
import { EmpresaListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Rol/rol-listado/rol-listado.component';
import { RolCrearSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/Pago/pago.component';
import { ListadoSastreriaFerreteriaLaBendicionOficialComponent } from '../app/Paginas/SastreriaFerreteriaLaBendicionOficial/GestionAdmin/listado/listado.component';

// ********************** A.G.E.N.D.A ******************************* 
//AGENDA
import { InicioAgendaComponent } from '../app/Paginas/Agenda/Inicio/inicio.component';
import { SidebarAgendaComponent } from '../app/Paginas/Agenda/Sidebar/sidebar.component';
import { EmpresaListadoAgendaComponent } from '../app/Paginas/Agenda/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearAgendaComponent } from '../app/Paginas/Agenda/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoAgendaComponent } from '../app/Paginas/Agenda/Rol/rol-listado/rol-listado.component';
import { RolCrearAgendaComponent } from '../app/Paginas/Agenda/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoAgendaComponent } from '../app/Paginas/Agenda/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearAgendaComponent } from '../app/Paginas/Agenda/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoAgendaComponent } from '../app/Paginas/Agenda/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearAgendaComponent } from '../app/Paginas/Agenda/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoAgendaComponent } from '../app/Paginas/Agenda/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearAgendaComponent } from '../app/Paginas/Agenda//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoAgendaComponent } from '../app/Paginas/Agenda/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearAgendaComponent } from '../app/Paginas/Agenda/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoAgendaComponent } from '../app/Paginas/Agenda/Pago/pago.component';
// ********************** P.U.N.T.O.V.E.N.T.A *********************** 
//PUNTO VENTA PANADERIA PROMESA DE DIOS
import { InicioPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Inicio/inicio.component';
import { SidebarPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Sidebar/sidebar.component';
import { EmpresaListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Empresa/empresa-listado/empresa-listado.component';
import { EmpresaCrearPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Empresa/empresa-crear/empresa-crear.component';
import { RolListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Rol/rol-listado/rol-listado.component';
import { RolCrearPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Rol/rol-crear/rol-crear.component';
import { UsuarioListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Usuario/usuario-listado/usuario-listado.component';
import { UsuarioCrearPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Usuario/usuario-crear/usuario-crear.component';
import { PermisoListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Permiso/permiso-listado/permiso-listado.component';
import { PermisoCrearPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Permiso/permiso-crear/permiso-crear.component';
import { RecursoListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Recurso/recurso-listado/recurso-listado.component';
import { RecursoCrearPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios//Recurso/recurso-crear/recurso-crear.component';
import { PermisoRolRecursoListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/PermisoRolRecurso/permiso-rol-recurso-listado/permiso-rol-recurso-listado.component';
import { PermisoRolRecursoCrearPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/PermisoRolRecurso/permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { PagoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/Pago/pago.component';
import { ListadoPuntoVentaPanaderiaPromesaDeDiosComponent } from '../app/Paginas/PuntoVentaPanaderiaPromesaDeDios/GestionAdmin/listado/listado.component';

// ********************** D.E.M.O *********************************** 
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
import { ListadoSastreriaDemoOficialComponent } from '../app/Paginas/SastreriaDemoOficial/GestionAdmin/listado/listado.component';

const NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
const NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
const NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
const NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
const NombreEmpresaCevicheriaCastillo: string = Entorno.NombreEmpresaCevicheriaCastillo;
const NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;
const NombreEmpresaSastreriaConfeccionesCreateli: string = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
const NombreEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.NombreEmpresaSastreriaAbarroteriaElAmanecer;
const NombreEmpresaSastreriaFerreteriaLaBendicionOficial: string = Entorno.NombreEmpresaSastreriaFerreteriaLaBendicionOficial;
const NombreEmpresaAgenda: string = Entorno.NombreEmpresaAgenda;
const NombreEmpresaPuntoVentaPanaderiaPromesaDeDios: string = Entorno.NombreEmpresaPuntoVentaPanaderiaPromesaDeDios;
const NombreEmpresaSastreriaDemoOficial: string = Entorno.NombreEmpresaSastreriaDemoOficial;
// const Otro = 'OtraEmpresa';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spinner-global', component: SpinnerGlobalComponent },

  // ********************** C.A.R.R.I.T.O--W.E.B **********************
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
  //PROTEGIDAS AJACHEL TRAVEL AGENCY
  { path: `${NombreEmpresaAjachelTravelAgency}/inicio`, component: InicioAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/inicio`, component: InicioCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/sidebar`, component: SidebarAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/sidebar`, component: SidebarCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/empresa-listado`, component: EmpresaListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/empresa-listado`, component: EmpresaListadoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/empresa-crear`, component: EmpresaCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/empresa-crear`, component: EmpresaCrearCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/rol-listado`, component: RolListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/rol-listado`, component: RolListadoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/rol-crear`, component: RolCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/rol-crear`, component: RolCrearCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/usuario-listado`, component: UsuarioListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/usuario-listado`, component: UsuarioListadoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/usuario-crear`, component: UsuarioCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/usuario-crear`, component: UsuarioCrearCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-listado`, component: PermisoListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/permiso-listado`, component: PermisoListadoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-crear`, component: PermisoCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/permiso-crear`, component: PermisoCrearCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/recurso-listado`, component: RecursoListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/recurso-listado`, component: RecursoListadoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/recurso-crear`, component: RecursoCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/recurso-crear`, component: RecursoCrearCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAjachelTravelAgency}/pago`, component: PagoAjachelTravelAgencyComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaCevicheriaCastillo}/pago`, component: PagoCevicheriaCastilloComponent, canActivate: [AutorizacionRuta] },
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
  // ********************** S.A.S.T.R.E.R.I.A.S ***********************
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
  { path: `${NombreEmpresaSastreriaConfeccionesCreateli}/listado-gestion-admin`, component: ListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },
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
  //SASTRERIA FERRETERIA LA BENDICION OFICIAL
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/inicio`, component: InicioSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/sidebar`, component: SidebarSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/empresa-listado`, component: EmpresaListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/empresa-crear`, component: EmpresaCrearSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/rol-listado`, component: RolListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/rol-crear`, component: RolCrearSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/usuario-listado`, component: UsuarioListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/usuario-crear`, component: UsuarioCrearSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/permiso-listado`, component: PermisoListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/permiso-crear`, component: PermisoCrearSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/recurso-listado`, component: RecursoListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/recurso-crear`, component: RecursoCrearSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/pago`, component: PagoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}/listado-gestion-admin`, component: ListadoSastreriaFerreteriaLaBendicionOficialComponent, canActivate: [AutorizacionRuta] },

  // ********************** A.G.E.N.D.A ******************************* 
  //PROTEGIDAS AGENDA
  { path: `${NombreEmpresaAgenda}/inicio`, component: InicioAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/sidebar`, component: SidebarAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/empresa-listado`, component: EmpresaListadoAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/empresa-crear`, component: EmpresaCrearAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/rol-listado`, component: RolListadoAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/rol-crear`, component: RolCrearAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/usuario-listado`, component: UsuarioListadoAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/usuario-crear`, component: UsuarioCrearAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/permiso-listado`, component: PermisoListadoAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/permiso-crear`, component: PermisoCrearAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/recurso-listado`, component: RecursoListadoAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/recurso-crear`, component: RecursoCrearAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearAgendaComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaAgenda}/pago`, component: PagoAgendaComponent, canActivate: [AutorizacionRuta] },
  // ********************** P.U.N.T.O.V.E.N.T.A ***********************  
  //SASTRERIA DEMO OFICIAL
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/inicio`, component: InicioPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/sidebar`, component: SidebarPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/empresa-listado`, component: EmpresaListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/empresa-crear`, component: EmpresaCrearPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/rol-listado`, component: RolListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/rol-crear`, component: RolCrearPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/usuario-listado`, component: UsuarioListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/usuario-crear`, component: UsuarioCrearPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/permiso-listado`, component: PermisoListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/permiso-crear`, component: PermisoCrearPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/recurso-listado`, component: RecursoListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/recurso-crear`, component: RecursoCrearPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/permiso-rol-recurso-listado`, component: PermisoRolRecursoListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/permiso-rol-recurso-crear`, component: PermisoRolRecursoCrearPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/pago`, component: PagoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },
  { path: `${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}/listado-gestion-admin`, component: ListadoPuntoVentaPanaderiaPromesaDeDiosComponent, canActivate: [AutorizacionRuta] },

  // ********************** D.E.M.O *********************************** 
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
  { path: `${NombreEmpresaSastreriaDemoOficial}/listado-gestion-admin`, component: ListadoSastreriaDemoOficialComponent, canActivate: [AutorizacionRuta] },

  { path: '**', redirectTo: 'menu' },
];
