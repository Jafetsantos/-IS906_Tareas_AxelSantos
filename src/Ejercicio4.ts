/**
 * Ejercicio 4 - Clases y Métodos (CuentaBancaria)
 *
 * Paso a paso:
 * 1) Crear clase CuentaBancaria con propiedades titular (string) y saldo (number).
 * 2) Constructor recibe el nombre del titular y deja saldo en 0.
 * 3) Implementar depositar(monto: number), retirar(monto: number) y consultarSaldo().
 * 4) Validar montos (positivos) y comprobar saldo suficiente al retirar.
 */

class CuentaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(monto: number): void {
    if (!Number.isFinite(monto) || isNaN(monto) || monto <= 0) { //verifica si el parametro monto es un numero valido y positivo
      console.error('Error: el monto a depositar debe ser un número positivo.');
      return;
    }
    this.saldo += monto;
    console.log(`Depósito: L.${monto.toFixed(2)} — Nuevo saldo: L.${this.saldo.toFixed(2)}`);//imprime el monto depositado y el nuevo saldo
  }

  retirar(monto: number): void {
    if (!Number.isFinite(monto) || isNaN(monto) || monto <= 0) {
      console.error('Error: el monto a retirar debe ser un número positivo.');
      return;
    }
    if (monto > this.saldo) {
      console.error('Error: saldo insuficiente. Operación cancelada.');
      return;
    }
    this.saldo -= monto;
    console.log(`Retiro: L.${monto.toFixed(2)} — Nuevo saldo: L.${this.saldo.toFixed(2)}`);
  }

  consultarSaldo(): void {
    console.log(`Saldo actual de ${this.titular}: L.${this.saldo.toFixed(2)}`);
  }
}

// Demostración
const cuenta = new CuentaBancaria('SR. Santos');
console.log("--------------------------------")
console.log("--- primer movimiento ---");
cuenta.depositar(500);
console.log("--------------------------------")
console.log("--- segundo movimiento ---");
cuenta.retirar(150);
console.log("--------------------------------")
console.log("--- tercer movimiento ---");
cuenta.retirar(1000); // intento fallido por saldo insuficiente
console.log("--------------------------------")
console.log("cuarto movimiento");
console.log("--------------------------------")
cuenta.consultarSaldo();
