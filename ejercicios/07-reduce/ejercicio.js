const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

// 7.1: suma todas las notas de los exámenes usando reduce con acumulador inicial en 0.
const totalScore = exams.reduce((accumulator, exam) => accumulator + exam.score, 0);
console.log('7.1 → Suma total de notas:', totalScore);

// 7.2: suma únicamente las notas aprobadas (score >= 5).
// Si el examen está aprobado, suma su nota al acumulador; si no, mantiene el acumulador.
const approvedScore = exams.reduce((accumulator, exam) => {
  return exam.score >= 5 ? accumulator + exam.score : accumulator;
}, 0);
console.log('7.2 → Suma de notas aprobadas:', approvedScore);

// 7.3: calcula la media de todas las notas dividiendo la suma total entre el número de exámenes.
const averageScore = totalScore / exams.length;
console.log('7.3 → Media de todas las notas:', averageScore);


