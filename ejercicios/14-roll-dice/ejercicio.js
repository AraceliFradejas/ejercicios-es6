// rollDice: simula la tirada de un dado con un número configurable de caras (faces).
// Math.random() genera un float en [0, 1). Multiplicado por faces y redondeado hacia abajo con Math.floor
// da un rango de 0 a (faces - 1). Al sumar 1, el rango resultante es exactamente [1, faces].
function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

// Pruebas con dados de diferente número de caras:
console.log('14 → Tirada dado de 6 caras (D6):', rollDice(6));
console.log('14 → Tirada dado de 20 caras (D20):', rollDice(20));
console.log('14 → Tirada dado de 100 caras (D100):', rollDice(100));

// COMPROBACIÓN: 1000 tiradas de un dado de 6 caras para verificar que nunca sale 0 ni valores > faces
let allValid = true;
const facesToTest = 6;
for (let i = 0; i < 1000; i++) {
  const roll = rollDice(facesToTest);
  if (roll < 1 || roll > facesToTest || !Number.isInteger(roll)) {
    allValid = false;
    break;
  }
}
console.log('Comprobación 14 (1000 tiradas válidas entre 1 y 6):', allValid);


