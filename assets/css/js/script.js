/* ======================================================
   EduFarm Website
   Main JavaScript
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // ELEMENTS
    // ===========================

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-links a");
    const header = document.querySelector(".header");

    // ===========================
    // CREATE MOBILE MENU
    // ===========================

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");
            menuBtn.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

                document.body.style.overflow = "hidden";

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                document.body.style.overflow = "";

            }

        });

    }

    // ===========================
    // CLOSE MENU WHEN LINK IS CLICKED
    // ===========================

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                nav.classList.remove("active");
                menuBtn.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                document.body.style.overflow = "";

            }

        });

    });

    // ===========================
    // STICKY HEADER EFFECT
    // ===========================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background = "rgba(255,255,255,.98)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.background = "rgba(255,255,255,.95)";
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";

        }

    });

    // ===========================
    // ACTIVE PAGE HIGHLIGHT
    // ===========================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        link.classList.remove("active");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    // ===========================
    // SMOOTH SCROLL
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    // ===========================
    // SCROLL REVEAL ANIMATION
    // ===========================

    const revealElements = document.querySelectorAll(
        ".about, .card, .hero-content, .hero-image"
    );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const windowHeight = window.innerHeight;
            const top = element.getBoundingClientRect().top;

            if (top < windowHeight - 120) {

                element.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.textContent = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.textContent = target.toLocaleString() + "+";

            }

        };

        update();

    });

};

const impactSection = document.querySelector(".impact");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!impactSection || counterStarted) return;

    const top = impactSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 150) {

        startCounter();

        counterStarted = true;

    }

});

/* =====================================
   FOOTER
===================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==============================
GALLERY FILTER
==============================*/

const filterButtons=document.querySelectorAll(".filter-btn");
const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"||item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});

/*==============================
LIGHTBOX
==============================*/

const lightbox=document.querySelector(".lightbox");
const lightboxImage=document.querySelector(".lightbox-image");
const closeLightbox=document.querySelector(".close-lightbox");

galleryItems.forEach(item=>{

item.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=item.querySelector("img").src;

});

});

if(closeLightbox){

closeLightbox.onclick=()=>{

lightbox.classList.remove("active");

};

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

};

}