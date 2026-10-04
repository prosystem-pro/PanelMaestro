export interface Inventario {
  CodigoInventario?: number;
  CodigoEmpresa?: number;
  CodigoProducto?: number;
  CodigoMarca?: number;
  CodigoTipoTela?: number;
  CodigoTela?: number;
  CodigoEstilo?: number;
  CodigoTalla?: number;
  CodigoTamano?: number;
  CodigoColor?: number;
  CodigoBarras?: string;
  PrecioCosto?: number;
  PrecioVenta?: number;
  StockActual?: number;
  StockMinimo?: number;
  StockMaximo?: number;
  Estatus?: number;
}
