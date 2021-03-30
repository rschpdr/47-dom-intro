const h1 = document.getElementById("main-title");
const div = document.getElementById("main-div");
console.log(h1);

h1.classList.remove("red");
h1.classList.add("green");

h1.style.fontSize = "4rem";

let fontSizeCounter = 1;

let colorCounter = 0;

const colors = [
  "aquamarine",
  "brown",
  "darkgoldenrod",
  "darkslateblue",
  "firebrick",
];

setInterval(() => {
  h1.style.fontSize = `${fontSizeCounter}px`;
  h1.style.color = colors[colorCounter % colors.length];

  colorCounter++;

  if (fontSizeCounter < 96) {
    fontSizeCounter++;
  }

  // if (colorCounter > 40) {
  //   h1.style.color = "black";
  // }
  // Repete a callback a cada 500 milisegundos
}, 500);
