export interface MovimientoCaja {
  CodigoMovimientoCaja?: number;
  CodigoAperturaCaja?: number;
  TipoMovimiento?: string;
  Concepto?: string;
  Monto?: number;
  MetodoPago?: any;
  FechaHora?: Date;
  Referencia?: string;
  CodigoUsuario?: number;
  MotivoAnulacion?: string;
  Estatus?: any;
}
