const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

// Versión clásica
function swapClassic(array, firstIndex, secondIndex) {
  const temporaryValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temporaryValue;
  return array;
}

// Versión ES6 con destructuring
function swap(array, firstIndex, secondIndex) {
  if (
    firstIndex < 0 ||
    firstIndex >= array.length ||
    secondIndex < 0 ||
    secondIndex >= array.length
  ) {
    console.warn(`15 → Índices fuera de rango: [${firstIndex}, ${secondIndex}]`);
    return array;
  }

  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
  return array;
}

// Pruebas
console.log('15 → Array inicial:', [...fantasticFour]);
console.log(
  '15 → Versión clásica (sobre una copia, índices 0 y 3):',
  swapClassic([...fantasticFour], 0, 3)
);

// Intercambio de índices diferentes (0 y 3)
console.log('15 → Swap índice 0 y 3:', swap(fantasticFour, 0, 3));

// Intercambio de índices iguales (1 y 1)
console.log('15 → Swap mismos índices (1 y 1):', swap(fantasticFour, 1, 1));

// Intento con índice no válido (-1 o fuera de rango)
console.log('15 → Swap con índice inválido (0 y 10):', swap(fantasticFour, 0, 10));
