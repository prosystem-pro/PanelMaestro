export interface Pago {
  CodigoPago?: number;
  CodigoEmpresa?: number;
  FechaDeposito?: Date;
  FechaVencimientoPago?: Date;
  FechaRegistro?: Date;
  Monto?: number;
  NumeroBoleta?: string;
  UrlComprobante?: string;
  Observaciones?: string;
  Estatus?: any;
}
