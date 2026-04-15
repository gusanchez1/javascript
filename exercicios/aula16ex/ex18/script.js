const lista = [];
const select = document.querySelector("#flista");
const input = document.querySelector("#fnum");
const res = document.querySelector("#res");

document.querySelector("#adicionar").addEventListener("click", function () {
  let numero = Number(input.value);

  if (isNaN(numero) || numero < 1 || numero > 100 || lista.includes(numero)) {
    alert("Valor inválido ou já adicionado na lista");
  } else {
    lista.push(numero);

    let item = document.createElement("option");
    item.text = `Valor ${numero} adicionado`;
    select.appendChild(item);

    input.value = "";
    input.focus();

    res.innerHTML = ""
  }
});

document.querySelector("#finalizar").addEventListener("click", function () {
  if (lista.length === 0) {
    alert("Adicione valores antes de finalizar!");
    return;
  }

  let total = lista.length;
  let maior = lista[0];
  let menor = lista[0];
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    let valor = lista[i];

    soma += valor;

    if (valor > maior) maior = valor;
    if (valor < menor) menor = valor;
  }

  let media = soma / total;

  res.innerHTML = `
    <p>Ao todo, temos ${total} números cadastrados.</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media}.</p>
  `;
});
