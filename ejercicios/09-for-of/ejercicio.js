const movies = [
  { title: 'Bracula: Condemor II', duration: 192, categories: ['comedia', 'aventura'] },
  { title: 'Spider-Man: No Way Home', duration: 122, categories: ['aventura', 'acción'] },
  { title: 'The Voices', duration: 223, categories: ['comedia', 'thriller'] },
  { title: 'Shrek', duration: 111, categories: ['comedia', 'aventura', 'animación'] }
];

// 9: recorremos el array de películas con un bucle for...of externo,
// y las categorías de cada película con otro bucle for...of interno.
// Agregamos cada categoría al array solo si aún no existe (usando .includes()).
const categories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }
}

console.log('9 → Categorías únicas sin duplicados:', categories);



