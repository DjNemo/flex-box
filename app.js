let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
    if (menu.style.left === "0px" || menu.style.left === "") {
        menu.style.left = "-256px";
        menuBtnIcon.classList = "fa fa-bars";
    } else {
        menu.style.left = "0";
        menuBtnIcon.classList = "fa fa-times";
    }
});


