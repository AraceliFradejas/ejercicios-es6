const movies = [
  { title: 'Bracula: Condemor II', duration: 192, categories: ['comedia', 'aventura'] },
  { title: 'Spider-Man: No Way Home', duration: 122, categories: ['aventura', 'acción'] },
  { title: 'The Voices', duration: 223, categories: ['comedia', 'thriller'] },
  { title: 'Shrek', duration: 111, categories: ['comedia', 'aventura', 'animación'] }
];

// 9: guardo cada categoría una sola vez
const categories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }
}

// La guía indica que deberían salir cuatro categorías, pero los datos incluyen también
// 'thriller' en The Voices. Por tanto, el resultado correcto contiene cinco categorías.
console.log('9 → Categorías únicas sin duplicados:', categories);

