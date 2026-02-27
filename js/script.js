// pegando os elementos da pagina
const verificar = document.querySelector(".calc-botao-envio");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// pegando os elementos que vao mostrar o resultado
const modalStatus = document.getElementById("modal-status");
const modalMensagem = document.getElementById("modal-mensagem");

// quando clicar no botao verificar
verificar.addEventListener("click", () => {
  // pegando os valores digitados
  const idade = parseInt(document.querySelector(".idade").value);
  const horas = parseFloat(document.querySelector(".horas").value);

  // definindo o maximo de horas por idade
  let horaMax;
  if (idade < 2) {
    horaMax = 0.1; // bebe
  } else if (idade < 5) {
    horaMax = 1; // crianca pequena
  } else if (idade < 10) {
    horaMax = 2; // crianca
  } else if (idade < 18) {
    horaMax = 3; // adolescente
  } else {
    horaMax = 4; // adulto
  }

  // calculando o indice
  const indice = horas / horaMax;
  let status = "";
  let mensagem = "";

  // verificando o resultado
  if (indice <= 1) {
    status = "🟢 USO CONSCIENTE";
    mensagem = "Parabéns! Você mantém um ótimo equilíbrio com as telas.";
  } else if (indice <= 1.5) {
    status = "🟡 USO MODERADO";
    mensagem = "Atenção. Tente reduzir um pouco o tempo de exposição.";
  } else {
    status = "🔴 USO EXCESSIVO";
    mensagem =
      "Cuidado! Você precisa reduzir urgentemente o uso de telas para sua saúde.";
  }

  // colocando o resultado no modal
  modalStatus.textContent = status;
  modalMensagem.textContent = mensagem;

  // mostrando o modal
  modal.classList.add("open");
});

// quando clicar no x pra fechar
closeBtn.addEventListener("click", () => {
  // escondendo o modal
  modal.classList.remove("open");
});
