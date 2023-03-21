var quadrado = 0, quadradosPares = 0, quadradosImpares = 0;

for (i = 1; i <= 20; i++) {
  
  quadrado = i**2;
  console.log(quadrado);

  if (i % 2 == 0) {
    quadradosPares += quadrado;
  } else {
    quadradosImpares += quadrado;
  }
}

console.log("A soma dos quadrados pares: ",quadradosPares);
console.log("A soma dos quadrados ímpares: ",quadradosImpares);