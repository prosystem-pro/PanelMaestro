import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rol } from '../.././../../Modelos/ModeloPromesaDeDios/Rol';
import { Empresa } from '../.././../../Modelos/ModeloPromesaDeDios/Empresa';
import { UsuarioServicio } from '../../../../Servicios/PromesaDeDios/UsuarioServicio';
import { EmpresaServicio } from '../../../../Servicios/PromesaDeDios/EmpresaServicio';
import { RolServicio } from '../../../../Servicios/PromesaDeDios/RolServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { Usuario } from '../../../../Modelos/ModeloPromesaDeDios/Usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-crear',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario-crear.component.html',
  styleUrl: './usuario-crear.component.css'
})
export class UsuarioCrearPromesaDeDiosComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Datos: Usuario & { Clave?: string, NombreRol?: string, NombreEmpresa?: string } = {};
  Empresas: Empresa[] = [];
  Roles: Rol[] = [];

  constructor(private Servicio: UsuarioServicio,
    private Alerta: AlertaServicio,
    private EmpresaServicio: EmpresaServicio,
    private RolServicio: RolServicio
  ) { }

  ngOnInit() {
    this.Vaciar();
    this.CargarEmpresas();
    this.CargarRoles();
  }

  CargarRoles() {
    this.RolServicio.Listado().subscribe({
      next: (roles) => {
        this.Roles = roles;
        console.log('Roles cargados:', roles); // 👈 Mostrar en consola
      },
      error: (err) => {
        console.error('Error cargando roles:', err);
      }
    });
  }

  CargarEmpresas() {
    this.EmpresaServicio.Listado().subscribe({
      next: (empresas) => {
        this.Empresas = empresas;
        console.log('Empresas cargadas:', empresas);
      },
      error: (err) => {
        console.error('Error cargando empresas:', err);
      }
    });
  }

  Crear() {
    this.Servicio.Crear(this.Datos).subscribe({
      next: (respuesta) => {
        this.Alerta.MostrarExito('El registro se creó correctamente.');
        this.ObjetoCreado.emit();
        this.Vaciar();
      },
      error: (error) => {
        this.Alerta.MostrarError(error);
      }
    });
  }

  Vaciar() {
    this.Datos = {
      NombreUsuario: '',
      Clave: '',
      Estatus: null
    };
  }

}
