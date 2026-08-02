/* ==========================================
   AOS Animation
========================================== */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
    });
}

/* ==========================================
   Typing Effect
========================================== */

if (document.querySelector(".typing") && typeof Typed !== "undefined") {

    new Typed(".typing", {
        strings: [
            "Python Developer",
            "Flask Developer",
            "Backend Developer",
            "Web Developer",
            "Problem Solver"
        ],
        typeSpeed: 70,
        backSpeed: 45,
        backDelay: 1800,
        loop: true
    });

}

/* ==========================================
   Sticky Navbar
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (header) {

        if (window.scrollY > 60) {

            header.style.backdropFilter = "blur(20px)";

        } else {

            header.style.backdropFilter = "blur(0px)";

        }

    }

});

/* ==========================================
   Loader
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = ".6s";

        }, 1200);

    }

});


/* ==========================================
   Mobile Menu
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ==========================================
   Close Mobile Menu
========================================== */

if (navLinks) {

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

/* ==========================================
   Dark / Light Mode
========================================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    const body = document.body;
    const icon = themeBtn.querySelector("i");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light");

        if (icon) {
            icon.className = "fas fa-sun";
        }

    }

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("light");

        if (body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            if (icon) {
                icon.className = "fas fa-sun";
            }

        } else {

            localStorage.setItem("theme", "dark");

            if (icon) {
                icon.className = "fas fa-moon";
            }

        }

    });

}

/* ==========================================
   Smooth Scrolling
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});