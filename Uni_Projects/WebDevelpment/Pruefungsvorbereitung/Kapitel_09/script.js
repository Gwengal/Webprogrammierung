window.onload = function () {
    displayTime();

    let clock = document.getElementById("clock");
    clock.draggable = true;

    clock.ondragstart = dragTimestamp;
}

function displayTime() {
    let clock = document.getElementById("clock");
    let now = new Date();
    let hrs = now.getHours();
    if (hrs < 10)
        hrs = `0${hrs}`
    let mins = now.getMinutes();
    if (mins < 10)
        mins = `0${mins}`;

    clock.innerHTML = `${hrs}:${mins}`;
    setTimeout(displayTime, 60000);
}

let dragTimestamp = function (event) {
    var event = event;

    let dt = event.dataTransfer;
    dt.setData("Text", Date() + "\n");

    // let icon = new Image();
    // icon.src = "uhr.png";
    // if (dt.setDragImage)
    //     dt.setDragImage(icon, 0, 0);
}