const prompt = require('prompt-sync')();
var array_mouses = [];

do {
  console.log("Sistema de Cadastro de Mouses");
  console.log("1 - Inserir Mouse");
  console.log("2 - Excluir Mouse");
  console.log("3 - Listar Mouses");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Mouse...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let modelo = prompt("Digite o modelo: ");
    let botoes = prompt("Digite o número de botões: ");
    let dpi = prompt("Digite o dpi: ");
    let hz = prompt("Digite a quantidade de Hertz: ");

    // Neste trecho estamos declarando um objeto
    const mouse = {
      codigo: codigo,
      modelo: modelo,
      botoes: botoes,
      dpi: dpi,
      hz: hz
    }
    // Chamar a função inserir
    inserir_mouse(mouse);
    
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Mouse...\n");
    let codigo = prompt("Digite o código do mouse: ");
    // Chamar a função excluir
    excluir_mouse(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Mouses...\n");
    // Chamar a função listar
    listar_mouses();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_mouse(mouse) {
  // Implementar corpo da função
  array_mouses.push(mouse);
}

function excluir_mouse(codigo) {
  // Implementar corpo da função
  mouse = array_mouses.mouse;
  array_mouses = array_mouses.filter((mouse) => mouse.codigo != codigo);
}

function listar_mouses() {
  // Implementar corpo da função
  array_mouses.map(function(mouse) {console.log(mouse)})
}


