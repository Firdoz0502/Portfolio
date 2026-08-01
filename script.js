/* ==========================================
   AOS Animation
========================================== */

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});


/* ==========================================
   Typing Effect
========================================== */

new Typed(".typing",{

    strings:[

        "Python Developer",

        "Flask Developer",

        "Backend Developer",

        "Web Developer",

        "Problem Solver"

    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1800,

    loop:true

});


/* ==========================================
   Sticky Navbar
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.backdropFilter="blur(20px)";

    }

});


/* ==========================================
   Loader
========================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        loader.style.transition=".6s";

    },1200);

});


/* ==========================================
   Cursor Glow
========================================== */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-120+"px";

    glow.style.top=e.clientY-120+"px";

});


/* ==========================================
   Mobile Menu
========================================== */

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});


/* ==========================================
   Close Mobile Menu
========================================== */

document.querySelectorAll(".nav-links a")

.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


