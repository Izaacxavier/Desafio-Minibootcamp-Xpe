const button = document.querySelector("button");
const nA = document.querySelector("#n1");
const nB = document.querySelector("#n2");

function soma() {
  const results = document.querySelector(".result-1 span");

  const n1 = parseInt(nA.value);
  const n2 = parseInt(nB.value);

  const resultCalc = n1 + n2;

  results.innerHTML = resultCalc;
}

function subtracao() {
  const results = document.querySelector(".result-2 span");
  const results2 = document.querySelector(".result-3 span");

  const n1 = parseInt(nA.value);
  const n2 = parseInt(nB.value);

  const resultCalc1 = n1 - n2;
  const resultCalc2 = n2 - n1;

  results.innerHTML = resultCalc1;
  results2.innerHTML = resultCalc2;
}

function multiplicacao() {
  const results = document.querySelector(".result-4 span");

  const n1 = nA.value;
  const n2 = nB.value;

  const resultCalc = n1 * n2;

  results.innerHTML = resultCalc;
}

function divisao() {
  const results1 = document.querySelector(".result-5 span");
  const results2 = document.querySelector(".result-6 span");

  const n1 = nA.value;
  const n2 = nB.value;

  const resultCalc1 = n2 / n1;
  const resultCalc2 = n1 / n2;

  results1.innerHTML = resultCalc1.toFixed(2);
  results2.innerHTML = resultCalc2.toFixed(2);
}

function potencia() {
  const results1 = document.querySelector(".result-7 span");
  const results2 = document.querySelector(".result-8 span");

  const n1 = nA.value;
  const n2 = nB.value;

  const result1 = Math.pow(n2, n1);
  const result2 = Math.pow(n1, n2);

  results1.innerHTML = result1;
  results2.innerHTML = result2;
}

function raizQuadrada() {
  const results1 = document.querySelector(".result-9 span");
  const results2 = document.querySelector(".result-10 span");

  const n1 = nA.value;
  const n2 = nB.value;

  const result1 = Math.sqrt(n1).toFixed(2);
  const result2 = Math.sqrt(n2).toFixed(2);

  results1.innerHTML = result1;
  results2.innerHTML = result2;
}

function fatorial() {
  const results1 = document.querySelector(".result-11 span");
  const results2 = document.querySelector(".result-12 span");

  const n1 = parseInt(nA.value);
  const n2 = parseInt(nB.value);

  let result1 = 1;
  let result2 = 1;
 
  for (let i = 1; i <= n1; i++) {
    result1 *= i;
  }
  results1.innerHTML = result1;

  for (let i = 1; i <= n2; i++) {
    result2 *= i;
  }

  results2.innerHTML = result2;
}

function porcentagem() {
  const results1 = document.querySelector(".result-13 span");
  const results2 = document.querySelector(".result-14 span");

  const n1 = nA.value;
  const n2 = nB.value;
  const resultCalc1 = (n2 / n1) * 100;
  const resultCalc2 = (n1 / n2) * 100;

  results1.innerHTML = resultCalc1.toFixed(1) + "%";
  results2.innerHTML = resultCalc2.toFixed(1) + "%";
}

function media() {
  const results = document.querySelector(".result-15 span");

  const n1 = nA.value;
  const n2 = nB.value;

  const result = (n1 + n2) / 2;

  results.innerHTML = result;
}

function calcular(e) {
  e.preventDefault();

  soma(),
    subtracao(),
    multiplicacao(),
    divisao(),
    potencia(),
    raizQuadrada(),
    fatorial(),
    porcentagem(),
    media();
}

button.addEventListener("click", calcular);
