export interface MovimientoInventario {
  CodigoMovimientoInventario?: number;
  CodigoProducto?: number;
  TipoMovimiento?: string;
  Cantidad?: number;
  FechaMovimiento?: Date;
  Referencia?: number;
  CodigoUsuario?: number;
  Observacion?: string;
}
