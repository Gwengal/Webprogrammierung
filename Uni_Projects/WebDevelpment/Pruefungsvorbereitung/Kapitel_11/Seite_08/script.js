document.addEventListener("DOMContentLoaded", function () {
    let add5 = makeAdder(5);
    let add10 = makeAdder(10);

    console.log(add5(3));
    console.log(add10(-8));

    let person = new Person("Alex", "Kaiser");
    person.setTitle("Dr.");
    alert(person.getName());
})

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

function Person(firstName, lastName) {
    let title;

    this.setTitle = function (t) {
        title = t;
    }

    this.getName = function () {
        return `${title} ${firstName} ${lastName}`;
    }
}