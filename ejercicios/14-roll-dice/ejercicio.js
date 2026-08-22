// Devuelve un número entero entre 1 y el número de caras
function rollDice(faces = 6) {
  return Math.floor(Math.random() * faces) + 1;
}

// Pruebas con dados diferentes
console.log('14 → Tirada dado de 6 caras (D6):', rollDice(6));
console.log('14 → Tirada usando las 6 caras predeterminadas:', rollDice());
console.log('14 → Tirada dado de 20 caras (D20):', rollDice(20));
console.log('14 → Tirada dado de 100 caras (D100):', rollDice(100));

// Compruebo el rango y cuento cuántas veces sale cada cara
let allValid = true;
const facesToTest = 6;
const rollCount = {};

for (let i = 0; i < 5000; i++) {
  const roll = rollDice(facesToTest);
  if (roll < 1 || roll > facesToTest || !Number.isInteger(roll)) {
    allValid = false;
    break;
  }
  rollCount[roll] = (rollCount[roll] || 0) + 1;
}
console.log('Comprobación 14 (5000 tiradas válidas entre 1 y 6):', allValid);
console.log('Comprobación 14 (frecuencia de cada cara):', rollCount);
console.log('Comprobación 14 (han aparecido las 6 caras):', Object.keys(rollCount).length === 6);
