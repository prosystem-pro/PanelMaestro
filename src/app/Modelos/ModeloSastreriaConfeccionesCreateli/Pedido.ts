export interface Pedido {
  CodigoPedido?: number;
  CodigoEmpresa?: number;
  CodigoCliente?: number;
  CodigoEstadoPedido?: number;
  CodigoUsuario?: number;
  NumeroDocumento?: string;
  Serie?: string;
  TipoDocumento?: string;
  Numero?: number;
  FechaCreacion?: Date;
  FechaEntrega?: Date;
  Subtotal?: number;
  Descuento?: number;
  Total?: number;
  Observaciones?: string;
  Estatus?: any;
}
