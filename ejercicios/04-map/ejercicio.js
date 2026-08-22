const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

// 4.1: crea con map un array conteniendo únicamente los nombres de los usuarios.
const userNames = users.map(user => user.name);
console.log('4.1 →', userNames);

// 4.2: sustituye por 'Anacleto' los nombres que comiencen por 'A' usando startsWith().
const modifiedUserNames = users.map(user =>
  user.name.startsWith('A') ? 'Anacleto' : user.name
);
console.log('4.2 →', modifiedUserNames);

// 4.3: añade " (Visitado)" a las ciudades donde isVisited es true.
const visitedCities = cities.map(city =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log('4.3 →', visitedCities);



