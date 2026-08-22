const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

// 5.1: filtra edades mayores que 18.
const adults = ages.filter(age => age > 18);
console.log('5.1 →', adults);

// 5.2: filtra edades pares mediante el operador módulo (%).
const evenAges = ages.filter(age => age % 2 === 0);
console.log('5.2 →', evenAges);

// 5.3: filtra streamers cuyo juego más jugado sea exactamente 'League of Legends'.
const lolStreamers = streamers.filter(
  streamer => streamer.gameMorePlayed === 'League of Legends'
);
console.log('5.3 →', lolStreamers);

// 5.4: filtra streamers cuyo nombre incluya la letra "u" (usando .includes()).
const uStreamers = streamers.filter(streamer =>
  streamer.name.toLowerCase().includes('u')
);
console.log('5.4 →', uStreamers);

// 5.5: filtra juegos que incluyan "Legends" y transforma a mayúsculas
// la propiedad gameMorePlayed cuando la edad sea mayor que 35.
// Retornamos un nuevo objeto con spread para no mutar el array original.
const legendsStreamers = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
    }
    return { ...streamer };
  });
console.log('5.5 →', legendsStreamers);

// 5.6: Filtrado en tiempo real desde el DOM (navegador).
if (typeof document !== 'undefined') {
  const input = document.querySelector('[data-function="toFilterStreamers"]');

  if (input) {
    input.addEventListener('input', event => {
      const searchTerm = event.target.value.toLowerCase().trim();
      const matchingStreamers = streamers.filter(streamer =>
        streamer.name.toLowerCase().includes(searchTerm)
      );
      console.log('5.6 → Coincidencias:', matchingStreamers);
    });
  }
}


