let elements = document.getElementsByClassName("single-line-name");

function removerEstiloAbas() {
  let abasSelecao = document.getElementsByClassName("single-line-name");

  for (let i = 0; i < abasSelecao.length; i++) {
    abasSelecao[i].children[0].style.display = "none";
    abasSelecao[i].children[1].style.fontWeight = "normal";
  }
}

let alternarAbas = function () {
  let aba = this.getAttribute("aba");

  let element = document.getElementById(aba);

  // Remover estilo da seleção de abas
  removerEstiloAbas();

  // ocultar todas as abas
  document.getElementById("publicacoes").style.display = "none";
  document.getElementById("salvos").style.display = "none";
  document.getElementById("marcacao").style.display = "none";

  // Mostrar aba que estava oculta
  element.style.display = "block";

  //Adcionar classe para troca de aba

  this.children[0].style.display = "block";
  this.children[1].style.fontWeight = "bold";
};

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", alternarAbas, false);
}
