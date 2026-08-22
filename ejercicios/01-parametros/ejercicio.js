// Crea una arrow function con parámetros a y b. Sus valores predeterminados
// deben ser 10 y 5, y la función debe mostrar su suma.

// ---------- 1.1, 1.2 y 1.3 ----------
const suma = (a = 10, b = 5) => {
  const resultado = a + b;
  console.log(`1 → a: ${a}, b: ${b} | Suma = ${resultado}`);
  return resultado;
};

// 1.1: ejecútala sin argumentos (a = 10, b = 5 → 15)
console.log('1.1 (sin argumentos):');
suma();

// 1.2: ejecútala con un argumento (a = 7, b = 5 → 12)
console.log('1.2 (un argumento: 7):');
suma(7);

// 1.3: ejecútala con dos argumentos (a = 7, b = 3 → 10)
console.log('1.3 (dos argumentos: 7, 3):');
suma(7, 3);

// EXTRA: prueba undefined como primer argumento y un número como segundo
console.log('EXTRA (undefined como primer argumento y 20 como segundo):');
suma(undefined, 20);

