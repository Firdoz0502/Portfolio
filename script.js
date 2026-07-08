// ==============================
// AOS Animation
// ==============================

AOS.init({
    duration: 1000,
    once: true
});

// ==============================
// Typing Animation
// ==============================

new Typed(".typing", {
    strings: [
        "Python Developer",
        "Flask Developer",
        "Frontend Developer",
        "BCA Student"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==============================
// Dark / Light Mode
// ==============================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

};

// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

    navLinks.classList.toggle("active");

};

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==============================
// Scroll Progress Bar
// ==============================

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

// ==============================
// Sticky Navbar Shadow
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 40){

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow = "none";

    }

});

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});