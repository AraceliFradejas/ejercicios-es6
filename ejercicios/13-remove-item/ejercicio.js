const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];

// Reutilizo findArrayIndex del ejercicio anterior
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

// Elimina el elemento solo si existe
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// removeItem modifica el array original
console.log('13 → Array inicial:', [...mainCharacters]);

console.log('13 → Eliminando "Rey":', removeItem(mainCharacters, 'Rey'));
console.log('13 → Array original tras mutación:', mainCharacters);

console.log('13 → Intentando eliminar inexistente ("Yoda"):', removeItem(mainCharacters, 'Yoda'));
console.log('13 → Array tras intento fallido (sin cambios accidentales):', mainCharacters);

console.log('13 → Eliminando el primer elemento ("Luke"):', removeItem(mainCharacters, 'Luke'));
console.log('13 → Eliminando el último elemento ("Obi-Wan"):', removeItem(mainCharacters, 'Obi-Wan'));
console.log('13 → Estado final del array:', mainCharacters);

