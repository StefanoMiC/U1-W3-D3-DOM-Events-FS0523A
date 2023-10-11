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
    const ageInput = document.getElementById("age");
    const cityInput = document.getElementById("city");
    const noteTextarea = document.getElementById("note");

    const name = nameInput.value;
    const age = ageInput.value;
    const city = cityInput.value;
    const note = noteTextarea.value;

    const newObj = {
      name,
      age,
      city,
      note
    };

    // a questo punto avremmo un ipotetico invio dei dati al server...

    console.log("FORM INVIATO!!");
    console.log(e);
    console.log(newObj);
  };
};
