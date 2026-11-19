export interface Venta {
  CodigoVenta?: number;
  CodigoCliente?: number;
  CodigoUsuario?: number;
  CodigoMesa?: number;
  MotivoAnulacion?: string;
  NumeroVenta?: string;
  TipoAtencion?: string;
  TipoVenta?: string;
  FechaVenta?: Date;
  FechaFacturacion?: Date;
  Subtotal?: number;
  IvaTotal?: number;
  Propina?: number;
  Total?: number;
  TotalCobrado?: number;
  SaldoPendiente?: number;
  Descripcion?: string;
  Estatus?: any;
}
