// 2.1 Extrae las propiedades del objeto mediante object destructuring.
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
};
const { title, gender, year } = game;
console.log('2.1 →', { title, gender, year });

// 2.2 Crea fruit1, fruit2 y fruit3 mediante array destructuring.
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log('2.2 →', fruit1, fruit2, fruit3);

// 2.3 Extrae name y race del objeto devuelto por la función.
const animalFunction = () => ({ name: 'Bengal Tiger', race: 'Tiger' });
const { name, race } = animalFunction();
console.log('2.3 →', name, race);

// 2.4 Extrae name, itv y después sus tres años.
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };
const { name: carName, itv } = car;
const [itvYear1, itvYear2, itvYear3] = itv;
console.log('2.4 →', carName, itv, itvYear1, itvYear2, itvYear3);
