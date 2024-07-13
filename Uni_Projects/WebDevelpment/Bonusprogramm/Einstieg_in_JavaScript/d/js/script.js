document.addEventListener('DOMContentLoaded', function () {
    addParagraph();
});

function addParagraph() {
    let p = document.createElement('p');
    p.innerText = 'Hello Alexander Kaiser';

    // P-Element im Body der HTML-Datei hinzufügen
    document.body.appendChild(p);

    // Alert-Ausgabe: Text welcher im Paragraph steht
    alert(p.innerText);
    // Konsolen-Ausgabe: Text welcher im Paragraph steht
    console.log(p.innerText);
}