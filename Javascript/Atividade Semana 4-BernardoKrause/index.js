const prompt = require('prompt-sync')();

alturas = []
n = []
var num = 0;

// Implementar a entrada de dados
for (i = 0; i < 10; i++) {
  alturas[i] = prompt("Digite a altura: ");
}
// Implementar o processamento de dados

for (i = 0; i < 10; i++) {
  // Fazer for dentro de for
  for (j = 0; j < 10; j++) {
    if (alturas[i] > alturas[j]) {
      num++;
      n[i] = num;
    } else {
      n[i] = num;
    }
  }
  num = 0;
}

// Implementar a saída de dados

for (i = 0; i < 10; i++) {
  console.log("Aluno", i,": maior que", n[i]," aluno(s)");
}