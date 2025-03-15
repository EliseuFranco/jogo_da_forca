const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letrasDiv = document.getElementById("letras");
const mensagem = document.getElementById("mensagem");
let dicah5 = document.querySelector("#show_dica");
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
  "PARALELEPIPEDO",
  "IGUANA",
  "RINOCERONTES",
  "CHAMA",
  "AMBIENTE",
  "FLOR",
  "AFIADOR",
  "MARMELO",
  "MARMELADA",
  "ESFIRRA",
  "DESALMADO",
  "CHUVEIRO",
  "BASQUETE",
  "ACENDER",
  "ASPERO",
  "AFILHADO",
  "LOUVOR",
  "SINO",
  "VISCERAL",
  "CAMINHO",
  "ELOQUENTE",
  "QUARENTENA",
  "COELHO",
  "MODERNIDADE",
  "AFOBADO",
  "REPORTAGEM",
  "CONSELHEIRO",
  "DESAJEITADO",
  "UMBIGO",
  "CATINGA",
  "XICARA",
  "ZINCO",
  "IMPACTO",
  "GAMBA",
  "HELICOPTERO",
  "PEAO",
  "SAPATO",
  "SARCASTICO",
  "COGUMELO",
  "PETISCO",
  "OXIGENIO",
];
const secreta = palavras[Math.floor(Math.random() * palavras.length)].split("");
const mascara = secreta.map(() => "_");
let tentativas = 6;
let dica = 2;
const btn_dica = document.getElementById("dica");

const divForca = document.getElementById("forca");
const tentaDiv = document.getElementById("tenta");
const btn_again = document.getElementById("again");
dicah5.innerText = `Dicas restantes: ${dica}`;

function dicas() {
  if (dica <= 0) {
    alert("Você já usou todas as dicas");
    return;
  }
  let letra;

  do {
    letra = secreta[Math.floor(Math.random() * secreta.length)];
  } while (mascara.includes(letra));
  alert(`A palavra secreta contém a letra ${letra}`);
  dica -= 1;
  dicah5.innerText = `Dicas restantes: ${dica}`;
}

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
    botao.setAttribute("class", "letra");
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
