document.addEventListener("DOMContentLoaded", function () {
    findMinMax();
})

function findMinMax() {
    let small = null;
    let high = null;

    let tds = document.getElementsByTagName("td");

    Array.from(tds).forEach(td => {
        if (small === null || (small !== null && parseInt(small.textContent) > parseInt(td.textContent)))
            small = td;
        if (high === null || (high !== null && parseInt(high.textContent) < parseInt(td.textContent)))
            high = td;
    });

    small.classList.add("small");
    high.classList.add("high");
}