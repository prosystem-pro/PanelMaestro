export interface PagoVenta {
  CodigoPagoVenta?: number;
  CodigoVenta?: number;
  FechaPago?: Date;
  Monto?: number;
  MontoRecibido?: number;
  Cambio?: number;
  MetodoPago?: any;
  NumeroPago?: string;
  Referencia?: string;
  MotivoAnulacion?: string;
  CodigoUsuario?: number;
  FechaAnulacion?: Date;
  SaldoAnterior?: number;
  MontoAbonado?: number;
  SaldoPendiente?: number;
  Estatus?: any;
}
