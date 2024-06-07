document.addEventListener('DOMContentLoaded', function() {
    let array = ['PHP', 'Python', 'ABAP', 'C', 'C++'];
    console.log(`Initiales Array mit Programmiersprachen: ${array}`);
    
    // Array um zwei Werte erweitern
    array.push('Java');
    array.push('JavaScript');
    console.log(`Array um zwei Werte erweitert: ${array}`);

    // letztes hinzugefügtes Element im Array entfernen
    console.log(`Letztes Element im Array entfernen: ${array.pop()}`);
    console.log(`Array nachdem ein Element entfernt wurde: ${array}`);

    // Element auf dem 2-Index um den Wert 'Cobalt verändern'
    array[2] = 'Cobalt';
    console.log(`Element auf dem 2ten-Index im Array verändert: ${array}`);


    let object = {
        name: 'Alex',
        age: 24
    };
    console.log(`Initiales Objekt: ${JSON.stringify(object)}`);

    // Dem Objekt wird ein weiteres Attribut (profession) hinzugefügt
    object.profession = 'Fachinformatiker für Anwendungsentwicklung';
    console.log(`Objekt nach der Erweiterung um den Beruf: ${JSON.stringify(object)}`);

    // Dem Objekt wird ein weiteres Attribut (Stadt) hinzugefügt
    object.city = 'Hof';
    console.log(`Object nach der Erweiterung um die Stadt: ${JSON.stringify(object)}`);
});