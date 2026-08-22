const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

// swap: intercambia la posición de dos elementos en un array mediante asignación por destructuring ES6.
// Valida primero que ambos índices estén dentro del rango válido [0, array.length - 1].
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

  // Intercambio sin variable auxiliar temporal usando destructuring de arrays en ES6
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
  return array;
}

// Ejemplos de uso y comprobación:
console.log('15 → Array inicial:', [...fantasticFour]);

// Intercambio de índices diferentes (0 y 3)
console.log('15 → Swap índice 0 y 3:', swap(fantasticFour, 0, 3));

// Intercambio de índices iguales (1 y 1)
console.log('15 → Swap mismos índices (1 y 1):', swap(fantasticFour, 1, 1));

// Intento con índice no válido (-1 o fuera de rango)
console.log('15 → Swap con índice inválido (0 y 10):', swap(fantasticFour, 0, 10));


