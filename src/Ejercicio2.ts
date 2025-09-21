/**
 * Ejercicio 2 - Interfaces y Objetos
 *
 * Paso a paso:
 * 1) Definir la interfaz Usuario con nombre, edad y email? (opcional).
 * 2) Crear objetos que cumplan la interfaz (con y sin email).
 * 3) Implementar imprimirUsuario(usuario: Usuario): void que maneje ausencia de email.
 */

interface Usuario {
  nombre: string;
  edad: number;
  email?: string;
}

function imprimirUsuario(usuario: Usuario): void {
  console.log('--- Usuario ---');
  console.log(`Nombre: ${usuario.nombre}`);
  console.log(`Edad: ${usuario.edad}`);
  // Manejo de propiedad opcional
  if (usuario.email) {
    console.log(`Email: ${usuario.email}`);
  } else {
    console.log('Email: (no especificado)');
  }
  console.log('---------------\n');
}

// Ejemplos
const usuarioSinEmail: Usuario = {
  nombre: 'Sinai Pérez',
  edad: 23,
};

const usuarioConEmail: Usuario = {
  nombre: 'Keyny Escobar',
  edad: 22,
  email: 'keyny.escobar2003@example.com',
};

imprimirUsuario(usuarioSinEmail);
imprimirUsuario(usuarioConEmail);
