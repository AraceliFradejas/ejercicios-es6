const users = require('../datos-sonidos');

// 10: suma y media de todos los volúmenes
let totalVolume = 0;
let soundCount = 0;

for (const user of users) {
  for (const soundName in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[soundName].volume;
    soundCount++;
  }
}

const averageVolume = soundCount > 0 ? totalVolume / soundCount : 0;

console.log('10 → Suma total de volumen:', totalVolume);
console.log('10 → Cantidad total de sonidos (debe ser 12):', soundCount);
console.log('10 → Media de volumen:', averageVolume);

