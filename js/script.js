// COME APPLICARE UN EVENT LISTENER AD UN ELEMENTO NELLA PAGINA

// 1) inline con evento applicato come attributo del tag HTML
// 2) aggiungendo un evento tramite metodo .addEventListener() applicabile ad OGNI NODO del DOM
// 3) forzando un nuovo valore per proprietà del nodo on....qualcosa es. node.onclick = function(){}

// le funzioni associate ad un qualsiasi evento sono chiamate eventListeners, perché rimangono in ascolto e vengono successivamente chiamate
// quando l'evento si scatenerà
const btnClicked = function (e) {
  // e è l'oggetto-evento ricevuto dall'onclick
  console.log("Mi hai cliccato dall'HTML", e);
  const btn = e.target;

  btn.style.backgroundColor = "red";
};

const btnClicked2 = function (e) {
  console.log("Secondo bottone cliccato da evento con addEventListener()", e);
  console.log(e.target);
  e.target.innerText = "oh noo mi hai cliccato!";
};

const btnClicked3 = function (e) {
  console.log("terzo bottone cliccato da evento con .onclick", e);
  console.log(e.target);
  e.target.remove();
};

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", btnClicked2); // <-- mai usare le tonde! chiamerebbero la funzione immediatamente e prima della scaturigine dell'evento

const btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", function() {}) <-- si possono creare funzioni anonime "sul posto" senza necessità di una variabile di appoggio
// btn3.addEventListener("click", () => {}) <-- si possono creare funzioni anonime "sul posto" senza necessità di una variabile di appoggio
btn3.onclick = btnClicked3;

// btn3.onmouseenter = e => {
//   console.log(e);
//   alert("ciao come stai? ben arrivato");
// };

// btn3.onmouseleave = e => {
//   console.log(e);
//   alert("te ne stai andando eh?");
// };
const h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("mouseleave", function (e) {
  console.log("sei uscito dall'area di h1", "x: " + e.offsetX, "y" + e.offsetY);
  e.target.innerText = e.target.innerText.slice(0, -1);
});

const data = [
  { nome: "Stefano", cognome: "Miceli", localita: "FVG", telefono: "1298312" },
  { nome: "Luca", cognome: "Favaretto", localita: "FVG", telefono: "1298312" },
  { nome: "Alessandro", cognome: "Gallina", localita: "FVG", telefono: "1298312" }
  //   { nome: "David", cognome: "Rios", localita: "FVG", telefono: "1298312" },
  //   { nome: "Francesco", cognome: "Guida", localita: "FVG", telefono: "1298312" }
];

const btn4 = document.getElementById("btn4"); // prendo il quarto bottone
// gli aggancio una funzione che verrà eseguita solo al click del bottone stesso
// la funzione ha il compito di generare tutti gli elementi di una tabella per poi inserirla nel body o in un contenitore qualsiasi già presente nel DOM
btn4.onclick = function () {
  // creiamo la tabella intera ma vuota
  const table = document.createElement("table");

  // creiamo la prima riga della tabella, che aspetterà di ricevere degli elementi successivamente
  const tr1 = document.createElement("tr");

  // creiamo le table headings
  const th1 = document.createElement("th");
  th1.innerText = "nome";
  const th2 = document.createElement("th");
  th2.innerText = "cognome";
  const th3 = document.createElement("th");
  th3.innerText = "località";
  const th4 = document.createElement("th");
  th4.innerText = "telefono";

  console.log(table);

  console.log(th1, th2, th3, th4);

  // inseriamo le table headings
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);
  tr1.appendChild(th4);
  console.log(tr1);

  table.appendChild(tr1);

  for (let i = 0; i < data.length; i++) {
    const tr2 = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = data[i].nome;
    const td2 = document.createElement("td");
    td2.innerText = data[i].cognome;
    const td3 = document.createElement("td");
    td3.innerText = data[i].localita;
    const td4 = document.createElement("td");
    td4.innerText = data[i].telefono;

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    console.log(tr2);
    table.appendChild(tr2);
  }

  console.log(table);

  // questo è il momento in cui entra a far parte della nostra pagina! prima la tabella con tutti gli elementi esisteva solo in memoria!
  //   document.body.appendChild(table); // la farà finire in fondo al documento

  const tableContainer = document.getElementById("table-container");
  tableContainer.appendChild(table);
};

// Metodi che partono in automatico
// questo metodo ci serve per sincronizzarci col CARICAMENTO DELLA PAGINA con tutte le risorse caricate
window.onload = function () {
  console.log("PAGINA CARICATA");
  //   questo metodo ci dà la sicurezza di poter selezionare il DOM dopo che questo sia stato caricato
};

// questo metodo aspetta che il DOM si sia caricato ma non tutte le altre risorse, e avviene leggermente prima del onload su window
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM CARICATO, arrivo per primo!");
});
