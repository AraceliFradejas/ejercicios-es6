const pointsList = [32, 54, 21, 64, 75, 43];
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const pointsList2 = [54, 87, 99, 65, 32];
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// 3.1: copia pointsList con spread operator (copia superficial del array).
const pointsListCopy = [...pointsList];
console.log('3.1 →', pointsListCopy);

// 3.2: copia toy con spread operator (copia superficial de las propiedades del objeto).
const toyCopy = { ...toy };
console.log('3.2 →', toyCopy);

// 3.3: une pointsList y pointsList2 en un único array con spread operator.
const pointsListCombined = [...pointsList, ...pointsList2];
console.log('3.3 →', pointsListCombined);

// 3.4: fusiona toy y toyUpdate en un nuevo objeto con spread operator.
const toyMerged = { ...toy, ...toyUpdate };
console.log('3.4 →', toyMerged);

// 3.5: copia colors omitiendo la posición 2 (índice 2: 'amarillo') sin modificar el original.
// Usamos slice() antes y después del índice 2 y expandimos ambos segmentos con spread.
const colorsWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log('3.5 →', colorsWithoutIndex2);

// COMPROBACIÓN DE INMUTABILIDAD:
// Demostramos que modificar la copia no altera el array ni objeto original.
pointsListCopy.push(999);
console.log('Comprobación 3.1 (original no mutado tras modificar copia):', pointsList);
console.log('Comprobación 3.5 (original colors intacto):', colors);


