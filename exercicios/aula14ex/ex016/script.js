var btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  var inicio = Number(document.querySelector("#inicio").value);
  var fim = Number(document.querySelector("#fim").value);
  var passo = Number(document.querySelector("#passo").value);
  var res = document.querySelector("#resultado");

  if (passo <= 0) {
    alert("Passo inválido! Considerando passo = 1");
    passo = 1;
  }

  res.innerHTML = "Contando:<br>";

  if (inicio < fim) {
    for (var i = inicio; i <= fim; i += passo) {
      res.innerHTML += `${i} 👉 `;
    }

  } else {
    for (var i = inicio; i >= fim; i -= passo) {
      res.innerHTML += `${i} 👉 `;
    }
  }

  res.innerHTML += "🏁";
});