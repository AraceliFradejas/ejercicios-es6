const fs = require('node:fs');
const path = require('node:path');

const exercisesDirectory = path.join(__dirname, '..', 'ejercicios');
const files = [];

function collectJavaScriptFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      collectJavaScriptFiles(entryPath);
    } else if (entry.name === 'ejercicio.js') {
      files.push(entryPath);
    }
  }
}

collectJavaScriptFiles(exercisesDirectory);

let totalPendingTasks = 0;

for (const file of files.sort()) {
  const content = fs.readFileSync(file, 'utf8');
  const pendingTasks = content.match(/TODO/g)?.length ?? 0;
  totalPendingTasks += pendingTasks;

  const label = path.relative(path.join(__dirname, '..'), file);
  console.log(`${pendingTasks === 0 ? '✓' : '○'} ${label}: ${pendingTasks} pendiente(s)`);
}

console.log(`\nTotal: ${files.length} ejercicios, ${totalPendingTasks} tarea(s) pendiente(s).`);

if (totalPendingTasks > 0) {
  process.exitCode = 1;
}

