const users = require('../datos-sonidos');

// 11: usamos for...of para recorrer usuarios y for...in para obtener las claves de los sonidos.
// Creamos un objeto acumulador (soundCount) para registrar la frecuencia de cada sonido.
const soundCount = {};

for (const user of users) {
  for (const soundName in user.favoritesSounds) {
    if (soundCount[soundName]) {
      soundCount[soundName]++;
    } else {
      soundCount[soundName] = 1;
    }
  }
}

console.log('11 → Conteo de sonidos favoritos:', soundCount);

// COMPROBACIÓN: la suma de todos los contadores debe ser exactamente 12
const totalOccurrences = Object.values(soundCount).reduce((acc, count) => acc + count, 0);
console.log('Comprobación 11 (suma total de frecuencias = 12):', totalOccurrences);


