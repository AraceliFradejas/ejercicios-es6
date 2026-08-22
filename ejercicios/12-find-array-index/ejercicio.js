const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];

// Devuelve el índice del texto o -1 si no lo encuentra
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

// Pruebas
console.log('12 → Primer elemento ("Luke"):', findArrayIndex(mainCharacters, 'Luke'));
console.log('12 → Elemento intermedio ("Chewbacca"):', findArrayIndex(mainCharacters, 'Chewbacca'));
console.log('12 → Último elemento ("Obi-Wan"):', findArrayIndex(mainCharacters, 'Obi-Wan'));
console.log('12 → Valor inexistente ("Yoda"):', findArrayIndex(mainCharacters, 'Yoda'));
console.log('12 → Array vacío:', findArrayIndex([], 'Luke'));

