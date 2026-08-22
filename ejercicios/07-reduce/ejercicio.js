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

// 7.1: suma de todas las notas
const totalScore = exams.reduce((accumulator, exam) => accumulator + exam.score, 0);
console.log('7.1 → Suma total de notas:', totalScore);

// 7.2: considero aprobado un examen con una nota mayor o igual a 5
const approvedScore = exams.reduce((accumulator, exam) => {
  return exam.score >= 5 ? accumulator + exam.score : accumulator;
}, 0);
console.log('7.2 → Suma de notas aprobadas:', approvedScore);

// 7.3: media de todas las notas
const averageScore = totalScore / exams.length;
console.log('7.3 → Media de todas las notas:', averageScore);

