import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';

import { PermisoRolRecursoServicio } from '../../../../Servicios/CafeJuanAna/PermisoRolRecursoServicio';
import { PermisoRolRecurso } from '../.././../../Modelos/ModeloCafeJuanAna/PermisoRolRecurso';
import { Rol } from '../.././../../Modelos/ModeloCafeJuanAna/Rol';
import { Recurso } from '../.././../../Modelos/ModeloCafeJuanAna/Recurso';
import { Permiso } from '../.././../../Modelos/ModeloCafeJuanAna/Permiso';

interface PermisoRolRecursoDetalle {
  CodigoRecurso: number;
  CodigoPermiso: number;
  Estatus: number;
}

@Component({
  selector: 'app-permiso-rol-recurso-crear-CafeJuanAna',
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './permiso-rol-recurso-crear.component.html',
  styleUrl: './permiso-rol-recurso-crear.component.css'
})
export class PermisoRolRecursoCrearCafeJuanAnaComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Datos: PermisoRolRecurso = {
    CodigoRol: undefined,
    Estatus: undefined
  };

  Roles: Rol[] = [];
  Recursos: Recurso[] = [];
  Permisos: Permiso[] = [];

  RecursosSeleccionados: number[] = [];
  PermisosSeleccionados: number[] = [];
  RecursosNoCreados: Recurso[] = [];
  RecursosConPermisosPendientes: Recurso[] = [];

  PermisosPorRecursoSeleccionados: { [codigoRecurso: number]: number[] } = {};
  PermisosPorRecurso: { [codigoRecurso: number]: Permiso[] } = {};

  constructor(
    private Servicio: PermisoRolRecursoServicio,
    private alerta: AlertaServicio
  ) { }

  ngOnInit(): void {
    this.ObtenerRolesFiltrados();
  }

  ObtenerRolesFiltrados() {
    this.Servicio.FiltrarRoles().subscribe({
      next: (respuesta) => {
        this.Roles = respuesta;
      },
      error: () => {
        this.alerta.MostrarError('Error al obtener registros filtrados');
      }
    });
  }

  RolSeleccionado() {
    this.RecursosNoCreados = [];
    this.RecursosConPermisosPendientes = [];
    this.Permisos = [];
    this.RecursosSeleccionados = [];
    this.PermisosSeleccionados = [];

    if (!this.Datos.CodigoRol) return;

    this.Servicio.FiltrarRecursos(this.Datos.CodigoRol).subscribe({
      next: (respuesta) => {
        this.RecursosNoCreados = respuesta.recursosNoCreados;
        this.RecursosConPermisosPendientes = respuesta.recursosConPermisosPendientes;
      },
      error: () => {
        this.alerta.MostrarError('Error al filtrar registros');
      }
    });
  }

  ToggleRecursoSeleccionado(codigo: number) {
    const index = this.RecursosSeleccionados.indexOf(codigo);
    if (index === -1) {
      this.RecursosSeleccionados.push(codigo);

      if (this.Datos.CodigoRol) {
        this.Servicio.FiltrarPermisos(this.Datos.CodigoRol, codigo).subscribe({
          next: (permisos) => {
            this.PermisosPorRecurso[codigo] = permisos;
            this.PermisosPorRecursoSeleccionados[codigo] = [];
          },
          error: () => this.alerta.MostrarError('Error al filtrar registros')
        });
      }
    } else {
      this.RecursosSeleccionados.splice(index, 1);
      delete this.PermisosPorRecurso[codigo];
      delete this.PermisosPorRecursoSeleccionados[codigo];
    }
  }

  TogglePermisoSeleccionado(codigoRecurso: number, codigoPermiso: number) {
    const permisosSeleccionados = this.PermisosPorRecursoSeleccionados[codigoRecurso] || [];
    const idx = permisosSeleccionados.indexOf(codigoPermiso);
    if (idx === -1) {
      permisosSeleccionados.push(codigoPermiso);
    } else {
      permisosSeleccionados.splice(idx, 1);
    }
    this.PermisosPorRecursoSeleccionados[codigoRecurso] = permisosSeleccionados;
  }

  SeleccionarTodoRecursos(recursos: Recurso[]) {
    const codigos = recursos.map(r => r.CodigoRecurso!);
    const todosSeleccionados = codigos.every(codigo => this.RecursosSeleccionados.includes(codigo));

    if (todosSeleccionados) {
      // Deseleccionar todos
      this.RecursosSeleccionados = this.RecursosSeleccionados.filter(codigo => !codigos.includes(codigo));
      codigos.forEach(codigo => {
        delete this.PermisosPorRecurso[codigo];
        delete this.PermisosPorRecursoSeleccionados[codigo];
      });
    } else {
      // Seleccionar todos
      codigos.forEach(codigo => {
        if (!this.RecursosSeleccionados.includes(codigo)) {
          this.RecursosSeleccionados.push(codigo);
          // Cargar permisos si no están ya cargados
          if (!this.PermisosPorRecurso[codigo] && this.Datos.CodigoRol) {
            this.Servicio.FiltrarPermisos(this.Datos.CodigoRol, codigo).subscribe({
              next: (permisos) => {
                this.PermisosPorRecurso[codigo] = permisos;
                this.PermisosPorRecursoSeleccionados[codigo] = [];
              },
              error: () => this.alerta.MostrarError('Error al cargar registros')
            });
          }
        }
      });
    }
  }

  SeleccionarTodoPermisos(codigoRecurso: number) {
    const permisos = this.PermisosPorRecurso[codigoRecurso];
    if (!permisos) return;
    const codigosPermisos = permisos.map(p => p.CodigoPermiso!);
    const todosSeleccionados = codigosPermisos.every(codigoPermiso =>
      this.PermisosPorRecursoSeleccionados[codigoRecurso]?.includes(codigoPermiso)
    );

    if (todosSeleccionados) {
      // Deseleccionar todos
      this.PermisosPorRecursoSeleccionados[codigoRecurso] = [];
    } else {
      // Seleccionar todos
      this.PermisosPorRecursoSeleccionados[codigoRecurso] = [...codigosPermisos];
    }
  }
  TodosSeleccionados(recursos: Recurso[]): boolean {
    const codigos = recursos.map(r => r.CodigoRecurso!);
    return codigos.every(codigo => this.RecursosSeleccionados.includes(codigo));
  }
  ToggleSeleccionarTodoRecursos(recursos: Recurso[], seleccionado: boolean) {
    const codigos = recursos.map(r => r.CodigoRecurso!);

    if (seleccionado) {
      // Seleccionar todos
      codigos.forEach(codigo => {
        if (!this.RecursosSeleccionados.includes(codigo)) {
          this.RecursosSeleccionados.push(codigo);

          // Cargar permisos si no están cargados y hay rol seleccionado
          if (!this.PermisosPorRecurso[codigo] && this.Datos.CodigoRol) {
            this.Servicio.FiltrarPermisos(this.Datos.CodigoRol, codigo).subscribe({
              next: (permisos) => {
                this.PermisosPorRecurso[codigo] = permisos;
                this.PermisosPorRecursoSeleccionados[codigo] = [];
              },
              error: () => this.alerta.MostrarError('Error al cargar registros')
            });
          }
        }
      });
    } else {
      // Deseleccionar todos
      this.RecursosSeleccionados = this.RecursosSeleccionados.filter(codigo => !codigos.includes(codigo));
      codigos.forEach(codigo => {
        delete this.PermisosPorRecurso[codigo];
        delete this.PermisosPorRecursoSeleccionados[codigo];
      });
    }
  }
  TodosSeleccionadosPermisos(codigoRecurso: number): boolean {
    const permisos = this.PermisosPorRecurso[codigoRecurso];
    if (!permisos) return false;
    const seleccionados = this.PermisosPorRecursoSeleccionados[codigoRecurso] || [];
    return permisos.every(p => seleccionados.includes(p.CodigoPermiso!));
  }

  ToggleSeleccionarTodoPermisos(codigoRecurso: number, seleccionado: boolean): void {
    const permisos = this.PermisosPorRecurso[codigoRecurso];
    if (!permisos) return;

    if (seleccionado) {
      this.PermisosPorRecursoSeleccionados[codigoRecurso] = permisos.map(p => p.CodigoPermiso!);
    } else {
      this.PermisosPorRecursoSeleccionados[codigoRecurso] = [];
    }
  }

  Guardar() {
    if (!this.Datos.CodigoRol) return;

    const datosAGuardar: {
      CodigoRol: number;
      Datos: PermisoRolRecursoDetalle[];
    } = {
      CodigoRol: this.Datos.CodigoRol,
      Datos: []
    };

    for (const recurso of this.RecursosSeleccionados) {
      const permisosSeleccionados = this.PermisosPorRecursoSeleccionados[recurso] || [];
      for (const permiso of permisosSeleccionados) {
        datosAGuardar.Datos.push({
          CodigoRecurso: recurso,
          CodigoPermiso: permiso,
          Estatus: this.Datos.Estatus ?? 1
        });
      }
    }

    this.Servicio.Crear(datosAGuardar).subscribe({
      next: () => {
        this.alerta.MostrarExito('Los permisos fueron guardados correctamente.');
        this.ObjetoCreado.emit();
        this.Datos = { CodigoRol: undefined, Estatus: 1 };
        this.RecursosSeleccionados = [];
        this.PermisosPorRecurso = {};
        this.PermisosPorRecursoSeleccionados = {};
        this.ObtenerRolesFiltrados();
      },
      error: (error) => {
        this.alerta.MostrarError(error, 'Error al guardar el registro');
      }
    });
  }

  get haySeleccionEnNoCreados(): boolean {
    return this.RecursosNoCreados.some(r =>
      this.RecursosSeleccionados.includes(r.CodigoRecurso!)
    );
  }

  get haySeleccionEnPendientes(): boolean {
    return this.RecursosConPermisosPendientes.some(r =>
      this.RecursosSeleccionados.includes(r.CodigoRecurso!)
    );
  }
}
