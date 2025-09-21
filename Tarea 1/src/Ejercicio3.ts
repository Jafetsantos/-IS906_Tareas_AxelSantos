/**
 * Ejercicio 3 - Arrays
 *
 * Paso a paso:
 * 1) Crear función repetirNombre(nombre: string, veces: number): string[]
 * 2) Validar que 'veces' sea un entero >= 0 (se usa Math.floor para seguridad).
 * 3) Devolver array con el nombre repetido 'veces' veces.
 */

function repetirNombre(nombre: string, veces: number): string[] {
  if (!Number.isFinite(veces) || isNaN(veces)) { //verifica si el parametro veces es un numero valido
    throw new Error('El parámetro "veces" debe ser un número válido.');
  }
  const n = Math.floor(veces); //convierte el parametro veces a un numero entero
  if (n < 0) {
    throw new Error('El número de repeticiones debe ser >= 0.');
  }
  const resultado: string[] = [];
  for (let i = 0; i < n; i++) {
    resultado.push(nombre); //agrega el nombre al array resultado
  }
  return resultado;
}

// Ejemplo
console.log(repetirNombre('Mahecy', 3)); // ["Mahecy", "Mahecy", "Mahecy"]
console.log(repetirNombre('María', 1)); // []
