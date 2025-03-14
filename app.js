const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letrasDiv = document.getElementById("letras");
const mensagem = document.getElementById("mensagem");
const palavras = [
  "AMIGO",
  "COMPANHEIRO",
  "LIBERDADE",
  "FELICIDADE",
  "HIPOPOTAMO",
  "ANIMAL",
  "JARDIM",
  "LARANJEIRA",
  "MORANGO",
  "OTORRINOLARINGOLOGISTA",
  "OCULOS",
  "ARMADURA",
  "LEOPRADO",
  "HIENA",
  "CARRO",
  "HABITACAO",
  "MICROSCOPIO",
  "ENFERMEIRA",
  "LAMPADA",
];
const secreta = palavras[Math.floor(Math.random() * palavras.length)].split("");
const mascara = secreta.map(() => "_");
let tentativas = 10;

const divForca = document.getElementById("forca");
const tentaDiv = document.getElementById("tenta");
const btn_again = document.getElementById("again");

function restart_forca() {
  window.location.reload();
}

function verificarLetra(letra) {
  if (secreta.includes(letra)) {
    secreta.forEach((char, index) => {
      if (char === letra) {
        mascara[index] = letra;
      }
    });
  } else {
    tentativas--;
  }
  atualizarJogo();
}

function atualizarJogo() {
  divForca.innerText = mascara.join(" ");
  tentaDiv.innerText = `Tentativas restantes: ${tentativas}`;

  if (mascara.join("") === secreta.join("")) {
    mensagem.innerText = "🎉 Você venceu, acertou a palavra secreta! 👏";
    letrasDiv.style.display = "none";
    btn_again.style.display = "block";
  } else if (tentativas === 0) {
    mensagem.innerText = `😔 Você perdeu! A palavra era "${secreta.join("")}".`;
    letrasDiv.style.display = "none";
    btn_again.style.display = "block";
  }
}

function forca() {
  alfabeto.forEach((letra) => {
    const botao = document.createElement("button");
    botao.innerText = letra;
    botao.classList.add("letter");

    botao.addEventListener("click", () => {
      verificarLetra(letra);
      botao.disabled = true;
      botao.style.backgroundColor = secreta.includes(letra)
        ? "#90EE90"
        : "#FF7F7F";
    });

    letrasDiv.appendChild(botao);
  });

  atualizarJogo();
}

forca();
