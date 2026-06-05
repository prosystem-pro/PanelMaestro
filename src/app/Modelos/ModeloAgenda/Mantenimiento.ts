export interface Mantenimiento {
  CodigoMantenimiento?: number;
  FechaMantenimiento?: Date;
  Responsable?: string;
  ManoObra?: number;
  CostoRepuestos?: number;
  Imprevistos?: number;
  Estado?: any;
  DescripcionMantenimiento?: string;
  Usuario?: string;
  CodigoUsuario?: number;
}
