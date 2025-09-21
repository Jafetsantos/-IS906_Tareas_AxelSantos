/**
 * Ejercicio 5 - Enums y Estructuras de Control
 *
 * Paso a paso:
 * 1) Definir enum DiaSemana con los 7 días.
 * 2) Implementar esFinDeSemana(dia: DiaSemana): boolean usando switch.
 * 3) Probar la función con varios valores.
 */

enum DiaSemana {
  Lunes = 'Lunes',
  Martes = 'Martes',
  Miercoles = 'Miércoles',
  Jueves = 'Jueves',
  Viernes = 'Viernes',
  Sabado = 'Sábado',
  Domingo = 'Domingo',
}

function esFinDeSemana(dia: DiaSemana): boolean {
  switch (dia) {
    case DiaSemana.Sabado:
    case DiaSemana.Domingo:
      return true;
    default:
      return false;
  }
}

// Pruebas
console.log('¿Sábado es fin de semana?', esFinDeSemana(DiaSemana.Sabado)); // true
console.log('¿Miércoles es fin de semana?', esFinDeSemana(DiaSemana.Miercoles)); // false
