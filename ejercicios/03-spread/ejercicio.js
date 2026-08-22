const pointsList = [32, 54, 21, 64, 75, 43];
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const pointsList2 = [54, 87, 99, 65, 32];
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// 3.1: copia del array
const pointsListCopy = [...pointsList];
console.log('3.1 →', pointsListCopy);

// 3.2: copia del objeto
const toyCopy = { ...toy };
console.log('3.2 →', toyCopy);

// 3.3: unión de los dos arrays
const pointsListCombined = [...pointsList, ...pointsList2];
console.log('3.3 →', pointsListCombined);

// 3.4: unión de los dos objetos
const toyMerged = { ...toy, ...toyUpdate };
console.log('3.4 →', toyMerged);

// 3.5: interpreto "posición 2" como índice 2, por lo que quito 'amarillo'
const colorsWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log('3.5 →', colorsWithoutIndex2);

// Compruebo que los originales no cambian
pointsListCopy.push(999);
toyCopy.color = 'azul';
console.log('Comprobación 3.1 (original no mutado tras modificar copia):', pointsList);
console.log('Comprobación 3.2 (copia modificada):', toyCopy);
console.log('Comprobación 3.2 (objeto original intacto):', toy);
console.log('Comprobación 3.5 (original colors intacto):', colors);
