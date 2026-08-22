const numbers = [32, 21, 63, 95, 100, 67, 43];
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
];
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];
const mutations = [
  { name: 'Porompompero', description: 'Permite tocar el tambor' },
  { name: 'Fly me to the moon', description: 'Permite volar a la luna' },
  { name: 'Andando que es gerundio', description: 'Invoca un Personal Trainer' }
];

// 6.1: encuentra el primer número igual a 100 usando find().
const number100 = numbers.find(num => num === 100);
console.log('6.1 →', number100);

// 6.2: encuentra la película lanzada en el año 2010.
const movie2010 = movies.find(movie => movie.date === 2010);
console.log('6.2 →', movie2010);

// 6.3: encuentra el alien 'Cucushumushu' y la mutación 'Porompompero'.
// Luego fusiona el alien anidando el objeto de la mutación dentro de la propiedad .mutation.
const alienCucushumushu = aliens.find(alien => alien.name === 'Cucushumushu');
const mutationPorompompero = mutations.find(
  mutation => mutation.name === 'Porompompero'
);
console.log('6.3 → Alien encontrado:', alienCucushumushu);
console.log('6.3 → Mutación encontrada:', mutationPorompompero);

const fusedAlien = {
  ...alienCucushumushu,
  mutation: { ...mutationPorompompero }
};
console.log('6.3 →', fusedAlien);


