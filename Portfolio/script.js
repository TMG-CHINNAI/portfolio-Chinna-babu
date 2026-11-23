// Mobile navigation menu

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    const open = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(open));

    menuButton.textContent = open ? "✕" : "☰";

});


// Close navigation after clicking a menu item

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});


// Scroll reveal animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(item => {

    observer.observe(item);

});


// Automatically update footer year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Active navigation based on scroll position

const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 130) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );

    });

});