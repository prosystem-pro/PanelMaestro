export interface Usuario {
  CodigoUsuario?: number;
  CodigoRol?: number;
  CodigoEmpresa?: number;
  NombreCompleto?: string;
  NombreUsuario?: string;
  Correo?: string;
  Telefono?: string;
  Direccion?: string;
  ClaveHash?: string;
  ClaveSalt?: string;
  Estatus?: any;
  SuperAdmin?: any;
}
