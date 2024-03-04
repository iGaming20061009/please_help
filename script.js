"use strict";
import getCar from "./getCar.js";
getCar();
// პატარა ხარვეზია აქ, რომ იმუშავოს ტექსტის გარშემო უნდა დააწვეთ, ტექსტს რომ დააწვეთ არ მუშაობს
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (
            event.target.classList.contains("car-accordion-element") ||
            event.target.classList.contains("car-accordion-title")
        ) {
            event.target.classList.toggle("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mySlider = new SliderPro("#my-slider", {
        width: "800px",
        height: "500px",
        autoplay: true,
        responsive: true,
        arrows: true,
    });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

const formElement = document.getElementById("registration");

formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = {};
    let usernameValue = document.getElementById("name").value;

    if (usernameValue == "") {
        errors.username = "Don't you have a name?";
    }
    let reviewValue = document.getElementById("review").value;

    if (reviewValue == "") {
        errors.review = "Please tell me that you are joking...";
    }
    let passwordValue = document.getElementById("password").value;
    let passwordConfirmValue = document.getElementById("passwordConfirm").value;
    if (passwordValue == "") {
        errors.password = "Make the account a minimum secure...";
    }
    if (passwordValue != passwordConfirmValue) {
        errors.passwordConfirm =
            "You have to be kidding... you don't remember the password you just typed 5 seconds ago?";
    }
    let checkInput = document.getElementById("terms").checked;
    if (!checkInput) {
        errors.terms =
            "I know that you won't read it, but at least make an effort";
    }

    formElement.querySelectorAll(".error-text").forEach((el) => {
        el.textContent = " ";
    });

    for (let item in errors) {
        let errorPElement = document.getElementById("error-" + item);
        errorPElement.textContent = errors[item];
    }
    if (Object.keys(errors).length == 0) {
        formElement.submit();
    }
});

let password = document.getElementById("password");
let icon = document.getElementById("icon");

console.log(password.type);
icon.addEventListener("click", function () {
    if (password.type == "password") {
        password.setAttribute("type", "text");
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        console.log("clc");
    } else {
        password.setAttribute("type", "password");
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});

let email = document.getElementById("email");
email.addEventListener("keyup", function () {
    let emailValue = document.getElementById("email").value;
    let emailErrorText = document.getElementById("error-email");
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(emailValue)) {
        emailErrorText.textContent = "Your Email Is Valid";
        emailErrorText.style.color = "green";
    } else {
        emailErrorText.textContent = "Your Email Is Invalid";
        emailErrorText.style.color = "red";
    }

    if (emailValue == "") {
        emailErrorText.innerHTML = "Please tell me if you have a brain problem";
    }
});

const cookieNotification = document.getElementById("cookie-notification");
const acceptCookiesButton = document.getElementById("accept-cookies");
acceptCookiesButton.addEventListener("click", function () {
    cookieNotification.style.display = "none";
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

window.onscroll = function () {
    stick();
};

let header = document.getElementById("navbar");
let sticky = header.offsetTop;
function stick() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
