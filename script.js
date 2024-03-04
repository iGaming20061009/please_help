"use strict";
import getCar from "./getCar.js";
let yearForm = document.getElementById("year");
yearForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("input").value;
    getCar(input);
});

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
        width: "70vw",
        height: "35vw",
        autoplay: true,
        responsive: true,
        arrows: true,
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let mybutton = document.getElementById("myBtn");
    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    window.onscroll = function () {
        scrollFunction();
        stick();
    };
    function top() {
        document.documentElement.scrollTop = 0;
    }
    let header = document.getElementById("navbar");
    let sticky = header.offsetTop;
    function stick() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    mybutton.addEventListener("click", top);
});

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

icon.addEventListener("click", function () {
    if (password.type == "password") {
        password.setAttribute("type", "text");
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
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
