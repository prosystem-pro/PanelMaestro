export interface Pago {
  CodigoPago?: number;
  CodigoEmpresa?: number;
  CodigoFormaPago?: number;
  CodigoUsuario?: number;
  NumeroDocumento?: string;
  SaldoAnterior?: number;
  SaldoPendiente?: number;
  Serie?: string;
  TipoDocumento?: string;
  Numero?: number;
  FechaPago?: Date;
  Monto?: number;
  NumeroComprobante?: string;
  UrlImagen?: string;
  Observacion?: string;
  Estatus?: boolean;
  FechaCreacion?: Date;
}
