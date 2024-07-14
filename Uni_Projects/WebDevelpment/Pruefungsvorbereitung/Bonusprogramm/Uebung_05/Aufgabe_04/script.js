document.addEventListener("DOMContentLoaded", function () {

    let p = document.createElement("p");
    p.innerText = "Hallo Alexander Kaiser!";
    document.body.appendChild(p);

    let text = document.querySelector("p").innerText;
    console.log(text);
    alert(text);
})