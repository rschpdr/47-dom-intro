const counterValue = document.getElementById("counter-value");
const counterBtnInc = document.getElementById("counter-btn-inc");
const counterBtnDec = document.getElementById("counter-btn-dec");

// Modificar o texto de counterValue quando ocorrer um click em counterBtn
counterBtnInc.addEventListener("click", () => {
  // 1. Definir um contador
  let count = parseInt(counterValue.innerText);

  // 2. Incrementar o contador
  count++;

  // 3. Atualizar o texto (conteúdo) da tag
  counterValue.innerText = count;

  // Node !== Node.js
  // Node é um elemento (tag) OU texto puro OU quebra de linha

  // Element é apenas um elemento(tag)

  console.log(counterBtnInc.parentElement.firstChild);
});

// Modificar o texto de counterValue quando ocorrer um click em counterBtn
counterBtnDec.addEventListener("click", () => {
  // 1. Definir um contador
  let count = parseInt(counterValue.innerText);

  // 2. Incrementar o contador
  if (count > 0) {
    count--;
  }

  // 3. Atualizar o texto (conteúdo) da tag
  counterValue.innerText = count;
});
