export interface Compra {
  CodigoCompra?: number;
  CodigoProveedor?: number;
  NumeroCompra?: string;
  FechaCompra?: Date;
  CodigoUsuario?: number;
  FechaVencimiento?: Date;
  Total?: number;
  SaldoPendiente?: number;
  TipoCompra?: string;
  Nota?: string;
  Estatus?: any;
}
