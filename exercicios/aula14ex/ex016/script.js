var btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  var inicio = Number(document.querySelector("#inicio").value);
  var fim = Number(document.querySelector("#fim").value);
  var passo = Number(document.querySelector("#passo").value);

  if (passo <= 0) {
    alert("Passo inválido! Considerando passo = 1");
    passo = 1;
  }

  res.innerHTML = "Contando:<br>";

  for (var i = inicio; i <= fim; i += passo) {
    res.innerHTML += `${i} 👉 `;
  }

  res.innerHTML += "🏁";
});
