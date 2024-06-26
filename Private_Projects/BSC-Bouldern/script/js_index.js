document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup");

    function openPopup() {
        popup.classList.add("open-popup");
    }

    function closePopup() {
        popup.classList.remove("open-popup");
    }

    document.querySelector(".btn").addEventListener("click", openPopup);
    document.querySelector(".popup button").addEventListener("click", closePopup);
})