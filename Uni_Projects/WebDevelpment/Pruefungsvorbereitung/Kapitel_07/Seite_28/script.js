document.addEventListener('DOMContentLoaded', function () {
    var person = { age: 22 };
    // Folgende Anweisung ergänzt ein bestehendes
    // Objekt oder erzeugt ein neues
    var person = person || {
        firstName: "Max",
        lastName: "Mustermann"
    }

    for (let attr in person) {
        alert(`${attr} enthält ${person[attr]}`);
    }

})