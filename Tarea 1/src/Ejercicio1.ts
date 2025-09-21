/**
 * Ejercicio 1 - Interfaces, Enums y Tipos de Unión
 *
 * Paso a paso:
 * 1) Definir enum EstadoProducto con los estados: Disponible, Agotado, Descontinuado.
 * 2) Definir type IDProducto = string | number.
 * 3) Crear la interfaz Producto con las propiedades indicadas.
 * 4) Implementar mostrarDetallesProducto(producto: Producto): void que imprima el producto de forma legible.
 * 5) Crear dos productos (uno con id numérico, otro con id string) y llamar a la función.
 */

enum EstadoProducto {
  Disponible = 'Disponible',
  Agotado = 'Agotado',
  Descontinuado = 'Descontinuado',
}

type IDProducto = string | number;

interface Producto {
  id: IDProducto;
  nombre: string;
  precio: number;
  estado: EstadoProducto;
  descripcion?: string;
}

function mostrarDetallesProducto(producto: Producto): void {
  console.log('--- Detalles del Producto ---');
  console.log(`ID: ${producto.id}`);
  console.log(`Nombre: ${producto.nombre}`);
  console.log(`Precio: L.${producto.precio.toFixed(2)}`); //imprie el precio con 2 decimales
  console.log(`Estado: ${producto.estado}`);
  if (producto.descripcion) {
    console.log(`Descripción: ${producto.descripcion}`);
  } else {
    console.log('Descripción: (no especificada)');
  }
  console.log('----------------------------\n');
}

// Productos de ejemplo
const productoNumerico: Producto = {
  id: 123,
  nombre: 'Balon Mikasa',
  precio: 496.99,
  estado: EstadoProducto.Disponible,
  descripcion: 'Balon de futbol oficial de la seleccion mexicana',
};

const productoString: Producto = {
  id: 'TACO-F50-ADIDAS',
  nombre: 'Tacos F50 ADIDAS',
  precio: 286.99,
  estado: EstadoProducto.Agotado,
  // sin descripción (opcional)
};

// Llamadas de prueba
mostrarDetallesProducto(productoNumerico);
mostrarDetallesProducto(productoString);
