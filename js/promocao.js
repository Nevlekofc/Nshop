const carroselFaixa = document.getElementById("carrossel-item");
const itens = document.querySelectorAll(".itemCarosel");
const total = itens.length;

let index = 0;

function deslizar() {
  carroselFaixa.style.transform = `translateX(-${index * 100}vw)`;

  itens.forEach((item, i) => {
    if (i === index) {
      item.classList.remove("blur");
    } else {
      item.classList.add("blur");
    }
  });

  index++;

  if (index >= total) {
    index = 0;
  }

  setTimeout(deslizar, 2500);
}

setTimeout(deslizar, 2500);

