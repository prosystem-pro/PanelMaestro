export interface CocinaPedido {
  CodigoCocinaPedido?: number;
  CodigoVenta?: number;
  CodigoPedidoMesa?: number;
  CodigoUsuarioInicio?: number;
  CodigoUsuarioFin?: number;
  FechaInicio?: Date;
  FechaFin?: Date;
  TiempoPreparacionMin?: number;
  Estatus?: any;
  Observaciones?: string;
}
