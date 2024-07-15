document.addEventListener("DOMContentLoaded", function () {

    let counter = new Counter();
    alert(counter.get());
    counter.increment();
    counter.increment();
    alert(counter.get());
    counter.decrement();
    alert(counter.get());
})

function Counter() {
    let privCounter = 0;
    function changeByValue(val) {
        privCounter += val;
    }

    this.increment = function () {
        changeByValue(1);
    }

    this.decrement = function () {
        changeByValue(-1);
    }

    this.get = function () {
        return privCounter;
    }
}