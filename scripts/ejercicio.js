const number = process.argv[2];

if (!/^\d{1,2}$/.test(number ?? '')) {
  console.error('Uso: npm run ejercicio -- 01');
  process.exit(1);
}

const normalizedNumber = number.padStart(2, '0');
const exerciseFiles = {
  '01': '01-parametros/ejercicio.js',
  '02': '02-destructuring/ejercicio.js',
  '03': '03-spread/ejercicio.js',
  '04': '04-map/ejercicio.js',
  '05': '05-filter/ejercicio.js',
  '06': '06-find/ejercicio.js',
  '07': '07-reduce/ejercicio.js',
  '08': '08-bonus/ejercicio.js',
  '09': '09-for-of/ejercicio.js',
  '10': '10-media-sonidos/ejercicio.js',
  '11': '11-conteo-sonidos/ejercicio.js',
  '12': '12-find-array-index/ejercicio.js',
  '13': '13-remove-item/ejercicio.js',
  '14': '14-roll-dice/ejercicio.js',
  '15': '15-swap/ejercicio.js'
};

const exerciseFile = exerciseFiles[normalizedNumber];

if (!exerciseFile) {
  console.error(`No existe el ejercicio ${normalizedNumber}. Usa un número del 01 al 15.`);
  process.exit(1);
}

require(`../ejercicios/${exerciseFile}`);

