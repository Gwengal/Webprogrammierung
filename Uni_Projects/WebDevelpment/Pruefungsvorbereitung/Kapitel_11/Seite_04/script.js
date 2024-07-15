document.addEventListener("DOMContentLoaded", function () {
    var person = {
        firstname: "John",
        lastName: "Doe",
        id: 5566,

        myfunction: function () {
            return this;
        }
    }

    console.log(person.myfunction());
    alert(person.myfunction())
    console.log(person);
    alert(person)
})