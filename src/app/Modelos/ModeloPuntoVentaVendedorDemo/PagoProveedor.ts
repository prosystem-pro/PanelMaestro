export interface PagoProveedor {
  CodigoPagoProveedor?: number;
  CodigoCompra?: number;
  CodigoUsuario?: number;
  Monto?: number;
  MetodoPago?: any;
  NumeroReferencia?: string;
  NumeroPago?: string;
  Banco?: string;
  FechaPago?: Date;
  MotivoAnulacion?: string;
  FechaAnulacion?: Date;
  Estatus?: any;
}
