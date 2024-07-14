document.addEventListener("DOMContentLoaded", function () {
    let array = ["PHP", "Java", "C#"];
    console.log(`Initiales Array: ${array}`);

    array.push("Kobald");
    array.push("Abap");
    console.log(`Zwei Elemente hinzugefügt: ${array}`);

    console.log(`Letztes Element löschen: ${array.pop()}`);
    console.log(`Array nachdem ein Element gelöscht wurde: ${array}`);

    array[2] = "JavaScript";
    console.log(`Array nachdem ein Wert geändert wurde: ${array}`);

    let person = {
        name: {
            first: "Alex",
            last: "Kaiser"
        },

        age: 24
    }

    console.log(`Initiales Objekt: ${JSON.stringify(person)}`);

    person.profession = "Fachinformatiker für Anwedungsentwicklung";

    console.log(`Initiales Objekt: ${JSON.stringify(person)}`);
})