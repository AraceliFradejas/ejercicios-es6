// rollDice: simula la tirada de un dado con un número configurable de caras (faces).
// Math.random() genera un float en [0, 1). Multiplicado por faces y redondeado hacia abajo con Math.floor
// da un rango de 0 a (faces - 1). Al sumar 1, el rango resultante es exactamente [1, faces].
function rollDice(faces = 6) {
  return Math.floor(Math.random() * faces) + 1;
}

// Pruebas con dados de diferente número de caras:
console.log('14 → Tirada dado de 6 caras (D6):', rollDice(6));
console.log('14 → Tirada usando las 6 caras predeterminadas:', rollDice());
console.log('14 → Tirada dado de 20 caras (D20):', rollDice(20));
console.log('14 → Tirada dado de 100 caras (D100):', rollDice(100));

// COMPROBACIÓN: contamos 50 000 tiradas para verificar el rango y que aparecen las seis caras.
let allValid = true;
const facesToTest = 6;
const rollCount = {};

for (let i = 0; i < 50000; i++) {
  const roll = rollDice(facesToTest);
  if (roll < 1 || roll > facesToTest || !Number.isInteger(roll)) {
    allValid = false;
    break;
  }
  rollCount[roll] = (rollCount[roll] || 0) + 1;
}
console.log('Comprobación 14 (50 000 tiradas válidas entre 1 y 6):', allValid);
console.log('Comprobación 14 (frecuencia de cada cara):', rollCount);
console.log('Comprobación 14 (han aparecido las 6 caras):', Object.keys(rollCount).length === 6);

