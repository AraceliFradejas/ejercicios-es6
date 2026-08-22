const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];

// Función findArrayIndex: busca un elemento de forma secuencial en el array.
// Retorna el índice donde lo encuentra o -1 si el texto no existe en el array.
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

// Ejemplos de uso y comprobación de casos límite:
console.log('12 → Primer elemento ("Luke"):', findArrayIndex(mainCharacters, 'Luke'));
console.log('12 → Elemento intermedio ("Chewbacca"):', findArrayIndex(mainCharacters, 'Chewbacca'));
console.log('12 → Último elemento ("Obi-Wan"):', findArrayIndex(mainCharacters, 'Obi-Wan'));
console.log('12 → Valor inexistente ("Yoda"):', findArrayIndex(mainCharacters, 'Yoda'));
console.log('12 → Array vacío:', findArrayIndex([], 'Luke'));


