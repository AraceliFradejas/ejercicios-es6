const users = require('../datos-sonidos');

// 11: número de veces que aparece cada sonido
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

// La suma de las apariciones debe ser 12
const totalOccurrences = Object.values(soundCount).reduce((acc, count) => acc + count, 0);
console.log('Comprobación 11 (suma total de frecuencias = 12):', totalOccurrences);

