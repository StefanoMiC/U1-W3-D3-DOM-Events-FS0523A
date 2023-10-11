window.onload = () => {
  const form = document.getElementById("myForm");
  const cancelButton = document.querySelector("#buttonArea button[type='button']");

  // collegato al cancel button custom una funzionalità di richiesta di conferma PRIMA del reset dei dati
  // rispetto alla funzionalità di base del type="reset" questa risulta più corretta
  cancelButton.onclick = function () {
    const hasConfirmed = confirm("sei sicuro di voler cancellare i dati?");
    // se l'utente non conferma non verrà MAI effettuato un reset dei dati
    if (hasConfirmed) {
      form.reset();
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault(); // il preventDefault fa in modo di bloccare il comportamento di default che ha un form
    // ossia quello di ricaricare la pagina
    // con JS cercheremo in TUTTI I MODI di evitare il refresh della pagina, se possibile
    // quindi questo è un passaggio fondamentale!

    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const cityInput = document.getElementById("city");
    const phoneInput = document.getElementById("phone");

    const name = nameInput.value;
    const surname = surnameInput.value;
    const city = cityInput.value;
    const phone = phoneInput.value;

    // cominciamo a creare la nuova card
    // prendiamo il riferimento del contenitore main
    const main = document.getElementsByTagName("main")[0];

    // creiamo il contenitore card
    const card = document.createElement("div");
    card.className = "card"; // applichiamo la classe

    // creiamo e diamo un testo agli elementi interni
    const h4 = document.createElement("h4");
    h4.innerText = `${name} ${surname}`;
    const h5 = document.createElement("h5");
    h5.innerText = city;
    const p = document.createElement("p");
    p.innerText = phone;
    const button = document.createElement("button");
    button.innerText = "Cancellami";

    // dato che abbiamo già la referenza del bottone che dovrà ricevere l'evento, glielo applichiamo prima di inserirlo nella card
    // questa operazione va fatta PRIMA di appendere button nel suo contenitore
    button.onclick = function (e) {
      const clickedBtn = e.target;
      clickedBtn.parentNode.remove(); // partiamo dal bottone e con parentNode ci posizioniamo sul genitore più esterno di 1 livello (quindi card)
      // clickedBtn.closest("card").remove(); // superfluo quando ci serve di risalire solo un livello, però funziona
    };

    // che finiranno per essere inseriti nella loro card
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(p);
    card.appendChild(button);

    // la card viene inserita nel main (il main è già nel DOM) e quindi questo sarà il momento in cui la nostra card comincerà ad esistere nella pagina!
    main.appendChild(card);

    // Svuotiamo i campi dell'input per permettere l'inserimento di altri nominativi
    nameInput.value = "";
    surnameInput.value = "";
    cityInput.value = "";
    phoneInput.value = "";
  };
};
