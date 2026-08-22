const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];

// Reutilizamos findArrayIndex del ejercicio 12
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

// removeItem: localiza el elemento usando findArrayIndex y lo elimina con splice().
// IMPORTANTE: Se valida que index !== -1 para evitar que splice(-1, 1) elimine accidentalmente el último elemento.
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Ejemplos de uso y comprobación:
// NOTA: removeItem muta directamente el array original recibido por parámetro.
console.log('13 → Array inicial:', [...mainCharacters]);

console.log('13 → Eliminando "Rey":', removeItem(mainCharacters, 'Rey'));
console.log('13 → Array original tras mutación:', mainCharacters);

console.log('13 → Intentando eliminar inexistente ("Yoda"):', removeItem(mainCharacters, 'Yoda'));
console.log('13 → Array tras intento fallido (sin cambios accidentales):', mainCharacters);

console.log('13 → Eliminando el primer elemento ("Luke"):', removeItem(mainCharacters, 'Luke'));
console.log('13 → Eliminando el último elemento ("Obi-Wan"):', removeItem(mainCharacters, 'Obi-Wan'));
console.log('13 → Estado final del array:', mainCharacters);


