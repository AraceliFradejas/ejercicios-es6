const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
];

// 8.1: primero filtramos los videojuegos que contienen el género 'RPG' con .filter().
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

// Luego sumamos las puntuaciones de los juegos filtrados con .reduce() y calculamos la media.
const totalRpgScore = rpgGames.reduce((acc, game) => acc + game.score, 0);
const averageRpgScore = totalRpgScore / rpgGames.length;

console.log('8.1 → Videojuegos RPG filtrados:', rpgGames);
console.log('8.1 → Media de puntuación de juegos RPG:', averageRpgScore);


