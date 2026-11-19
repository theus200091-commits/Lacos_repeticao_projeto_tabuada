// Mini-mini-mini projeto para treinar Loops em JavaScript
// Projeto Tabuada

// Usei o módulo "readline" para criar uma interface no terminal e coletar os dados.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Variável booleana que controla a condição de encerramento do do...while.
let continuar = true;

// Criei uma Promise para representar a leitura assíncrona do terminal.
// Quando o usuário responde, o resolve entrega essa resposta à Promise.
function perguntar(mensagem) {
  return new Promise((resolve) => {
    rl.question(mensagem, (resposta) => {
      resolve(resposta);
    });
  });
}

// Criei uma função assíncrona para utilizar await.
// Assim, a execução dessa função aguarda a resposta do usuário antes de continuar.
async function iniciarMenu() {
  do {
    console.log("Menu da tabuada");

    const resposta = await perguntar("Digite uma opção: ");

    const respostaTratada = Number(resposta.trim());

    // Aqui verifico a opção escolhida utilizando if / else if / else.

    if (respostaTratada === 1) {
      console.log("Gerar tabuada!");

      const resposta = await perguntar("Escolha um numero: ");
      const numeroTabuada = Number(resposta.trim());

      for (let i = 1; i <= 10; i++) {
        console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
      }
    } else if (respostaTratada === 2) {
      console.log("Encerrar o programa?");
      continuar = false;
    } else {
      console.log("Opção inválida!");
    }

    // Altero o valor de "continuar" para false quando o usuário escolhe encerrar.
  } while (continuar === true);
}

iniciarMenu().then(() => rl.close());