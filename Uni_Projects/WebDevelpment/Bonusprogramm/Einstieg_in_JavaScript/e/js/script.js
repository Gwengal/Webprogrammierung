document.addEventListener('DOMContentLoaded', function() {
    findMinMax();
});

function findMinMax() {
    let smallest = null, highest = null;
    let tds = document.getElementsByTagName('td');

    // Über die Td-Elemente schleifen
    Array.from(tds).forEach(td => {
        // Kleinste Spalte merken
        if (smallest === null || (smallest !== null && parseInt(smallest.textContent) > parseInt(td.textContent) )) {
            smallest = td;     
        }
        
        // Größte Spalte merken
        if(highest === null || (highest !== null && parseInt(highest.textContent) < parseInt(td.textContent))){
            highest = td;
        }
    });

    // Die Klasse 'smallest' der kleinsten Spalte zuweisen
    smallest.classList.add('smallest');
    // Die Klasse 'highest' der größten Spalte zuweisen
    highest.classList.add('highest');
}