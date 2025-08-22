import { Component } from '@angular/core';
import { PermisoRolRecursoServicio } from '../../../../Servicios/Vendedor/PermisoRolRecursoServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarVendedorComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { PermisoRolRecursoCrearVendedorComponent } from '../permiso-rol-recurso-crear/permiso-rol-recurso-crear.component';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';

declare var bootstrap: any;

@Component({
  standalone: true,
  selector: 'app-permiso-rol-recurso-listado-Vendedor',
  imports: [FormsModule, CommonModule, SidebarVendedorComponent, PermisoRolRecursoCrearVendedorComponent],
  templateUrl: './permiso-rol-recurso-listado.component.html',
  styleUrl: './permiso-rol-recurso-listado.component.css'
})
export class PermisoRolRecursoListadoVendedorComponent {
  NombreEmpresa = Entorno.NombreEmpresaVendedor;
  LogoEmpresa = Entorno.LogoVendedor;
  Datos: any[] = [];
  FiltroBuscador: string = '';
  RolesAbiertos: { [CodigoRol: number]: boolean } = {};
  PermisosAbiertos: { [CodigoRol: number]: { [NombreRecurso: string]: boolean } } = {};
  PermisosDisponibles!: { Tabla: string, Permisos: string[] };
  ModalAbierto = false;


  constructor(private Servicio: PermisoRolRecursoServicio, private Alerta: AlertaServicio) { }

  ngOnInit() {
    this.Listado();
  }

  Listado() {
    this.Servicio.Listado().subscribe({
      next: (data: any) => {
        this.Datos = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ObtenerDatosAnidados() {
    const datosFiltrados = this.Buscador();

    interface Recurso {
      CodigoRecurso: number;
      NombreRecurso: string;
      Permisos: {
        CodigoPermiso: number;
        NombrePermiso: string;
        Estatus: any;
      }[];
    }

    interface RolAgrupado {
      CodigoRol: number;
      NombreRol: string;
      Recursos: Map<number, Recurso>; // Usamos CodigoRecurso como clave
    }

    const rolesMap = new Map<number, RolAgrupado>();

    datosFiltrados.forEach(dato => {
      const codigoRol = dato.CodigoRol;
      const nombreRol = dato.Rol?.NombreRol || 'Sin rol';
      const codigoRecurso = dato.CodigoRecurso;
      const nombreRecurso = dato.Recurso?.NombreRecurso || 'Sin recurso';
      const codigoPermiso = dato.CodigoPermiso;
      const nombrePermiso = dato.Permiso?.NombrePermiso || 'Sin permiso';

      if (!rolesMap.has(codigoRol)) {
        rolesMap.set(codigoRol, {
          CodigoRol: codigoRol,
          NombreRol: nombreRol,
          Recursos: new Map<number, Recurso>()
        });
      }

      const rol = rolesMap.get(codigoRol)!;

      if (!rol.Recursos.has(codigoRecurso)) {
        rol.Recursos.set(codigoRecurso, {
          CodigoRecurso: codigoRecurso,
          NombreRecurso: nombreRecurso,
          Permisos: []
        });
      }

      const recurso = rol.Recursos.get(codigoRecurso)!;

      // Evita duplicados
      if (!recurso.Permisos.some(p => p.CodigoPermiso === codigoPermiso)) {
        recurso.Permisos.push({
          CodigoPermiso: codigoPermiso,
          NombrePermiso: nombrePermiso,
          Estatus: dato.Estatus
        });
      }
    });

    return Array.from(rolesMap.values()).map(rol => ({
      CodigoRol: rol.CodigoRol,
      NombreRol: rol.NombreRol,
      Recursos: Array.from(rol.Recursos.values())
    }));
  }

  AlternarPermisos(CodigoRol: number, NombreRecurso: string) {
    if (!this.PermisosAbiertos[CodigoRol]) {
      this.PermisosAbiertos[CodigoRol] = {};
    }
    this.PermisosAbiertos[CodigoRol][NombreRecurso] = !this.PermisosAbiertos[CodigoRol][NombreRecurso];
  }

  EstaPermisoAbierto(CodigoRol: number, NombreRecurso: string): boolean {
    return !!(this.PermisosAbiertos[CodigoRol] && this.PermisosAbiertos[CodigoRol][NombreRecurso]);
  }

  Buscador(): any[] {
    const texto = this.FiltroBuscador?.toLowerCase() || '';
    const textoSinEspacio = texto.trim();
    const esBusquedaExacta = texto.endsWith(' ');

    const coincide = (campo: string | undefined | null) => {
      const valor = (campo ?? '').toLowerCase();
      return esBusquedaExacta ? valor === textoSinEspacio : valor.includes(textoSinEspacio);
    };

    return this.Datos.filter(Datos => {
      const estatusTexto =
        Datos.Estatus === 1 || Datos.Estatus === '1' ? 'activo' :
          Datos.Estatus === 2 || Datos.Estatus === '2' ? 'inactivo' :
            Datos.Estatus === 3 || Datos.Estatus === '3' ? 'eliminado' : '';

      return (
        coincide(Datos.Rol?.NombreRol) ||
        coincide(Datos.Permiso?.NombrePermiso) ||
        coincide(Datos.Recurso?.NombreRecurso) ||
        coincide(estatusTexto)
      );
    });
  }

  AbrirModalCrear() {
    this.ModalAbierto = true;
    setTimeout(() => {
      const modalEl = document.getElementById('CrearModal');
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
        modalEl.addEventListener('hidden.bs.modal', () => {
          this.ModalAbierto = false; 
        }, { once: true });
      }
    });
  }

  Recargar() {
    this.Listado();

    const modalEl = document.getElementById('CrearModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal?.hide();
  }

  AlternarRecursos(CodigoRol: number) {
    this.RolesAbiertos[CodigoRol] = !this.RolesAbiertos[CodigoRol];
  }

  EstaRolAbierto(CodigoRol: number): boolean {
    return !!this.RolesAbiertos[CodigoRol];
  }

  EliminarRol(codigoRol: number) {
    this.Alerta.Confirmacion(
      '¿Eliminar permisos del rol?',
      'Esta acción eliminará todos los registros asociados al rol. ¿Deseas continuar?',
      'Sí, eliminar',
      'Cancelar'
    ).then(confirmado => {
      if (!confirmado) return;

      this.Servicio.EliminarPorRol(codigoRol).subscribe({
        next: (respuesta) => {
          const tipo = respuesta.tipo || 'exito'; // tipo: 'exito', 'error', 'alerta'
          const mensaje = respuesta.mensaje || 'Reistros eliminados exitosamente.';

          if (tipo === 'exito') {
            this.Alerta.MostrarExito(mensaje);
          } else if (tipo === 'alerta') {
            this.Alerta.MostrarAlerta(mensaje);
          } else {
            this.Alerta.MostrarError({ error: { message: mensaje } });
          }

          this.Listado(); // Recargar datos
        },
        error: (err) => {
          this.Alerta.MostrarError(err, 'Error al eliminar');
        }
      });
    });
  }

  EliminarRecurso(codigoRol: number, nombreRecurso: string) {
    this.Alerta.Confirmacion(
      '¿Eliminar permisos del recurso?',
      `Se eliminarán todos los registros asociados al recurso "${nombreRecurso}" para este rol.`,
      'Sí, eliminar',
      'Cancelar'
    ).then(confirmado => {
      if (!confirmado) return;

      // Primero buscamos el código del recurso por su nombre
      const recurso = this.Datos.find(
        d => d.CodigoRol === codigoRol && d.Recurso?.NombreRecurso === nombreRecurso
      );

      if (!recurso?.CodigoRecurso) {
        this.Alerta.MostrarAlerta('error', 'No se pudo determinar el código del registro.');
        return;
      }

      this.Servicio.EliminarPorRolRecurso(codigoRol, recurso.CodigoRecurso).subscribe({
        next: (respuesta) => {
          const tipo = respuesta.tipo || 'exito';
          const mensaje = respuesta.mensaje || 'Registro eliminado correctamente.';
          this.Alerta.MostrarExito(tipo, mensaje);
          this.Listado();
        },
        error: (err) => {
          console.error(err);
          this.Alerta.MostrarError('error', 'Error al eliminar el recurso.');
        }
      });
    });
  }

  EliminarPermiso(item: any): void {
    this.Alerta.Confirmacion(
      '¿Está seguro?',
      'Esta acción eliminará el registro seleccionado.',
      'Sí, eliminar',
      'Cancelar'
    ).then((confirmado) => {
      if (!confirmado) return;

      this.Servicio.EliminarPorRolRecursoPermiso(item.CodigoRol, item.CodigoRecurso, item.CodigoPermiso)
        .subscribe({
          next: () => {
            this.Alerta.MostrarExito('Registro eliminado correctamente.');
            this.Listado();
          },
          error: (error) => {
            this.Alerta.MostrarError(error);
          }
        });
    });
  }

  CambiarEstatus(CodigoRol: number, CodigoRecurso: number, CodigoPermiso: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const activado = input.checked;
    const estatus = activado ? 1 : 2;

    const Datos = {
      CodigoRol,
      CodigoRecurso,
      CodigoPermiso,
      Estatus: estatus
    };

    this.Servicio.Editar(Datos).subscribe({
      next: () => {
        this.Alerta.MostrarExito('Estatus actualizado correctamente');
        this.Listado();
      },
      error: (err) => {
        this.Alerta.MostrarError(err);
      }
    });
  }


}
