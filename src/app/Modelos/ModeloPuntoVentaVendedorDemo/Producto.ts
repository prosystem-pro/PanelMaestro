export interface Producto {
  CodigoProducto?: number;
  CodigoCategoriaProducto?: number;
  CodigoUnidadMedida?: number;
  NombreProducto?: string;
  TipoProducto?: string;
  CodigoBarra?: string;
  Iva?: number;
  ImagenUrl?: string;
  PrecioVenta?: number;
  PrecioCompra?: number;
  TieneReceta?: boolean;
  Estatus?: any;
}
