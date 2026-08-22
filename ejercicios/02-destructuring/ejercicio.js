// 2.1 Extrae las propiedades del objeto mediante object destructuring.
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
};
// Extraemos las propiedades title, gender y year directamente del objeto game
const { title, gender, year } = game;
console.log('2.1 →', { title, gender, year });

// 2.2 Crea fruit1, fruit2 y fruit3 mediante array destructuring.
const fruits = ['Banana', 'Strawberry', 'Orange'];
// Desestructuramos por posición en el array
const [fruit1, fruit2, fruit3] = fruits;
console.log('2.2 →', fruit1, fruit2, fruit3);

// 2.3 Extrae name y race del objeto devuelto por la función.
const animalFunction = () => ({ name: 'Bengal Tiger', race: 'Tiger' });
// Ejecutamos la función y desestructuramos el objeto que retorna
const { name, race } = animalFunction();
console.log('2.3 →', name, race);

// 2.4 Extrae name, itv y después sus tres años.
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };
// Primero desestructuramos las propiedades del objeto car
const { name: carName, itv } = car;
// Luego desestructuramos el array itv en sus tres años individuales
const [itvYear1, itvYear2, itvYear3] = itv;
console.log('2.4 →', carName, itv, itvYear1, itvYear2, itvYear3);

