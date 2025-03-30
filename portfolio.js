// Sticky Navbar Effect on Scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth Scroll Animation for Sections
const sections = document.querySelectorAll(".reveal");

function revealOnScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}
window.onscroll = function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    } else {
        header.style.boxShadow = "none";
    }
};

// Trigger animation when scrolling
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:rajudas700r@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;
});
document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    const response = await fetch("/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message })
    });

    const data = await response.json();
    document.getElementById("form-message").innerText = data.message;
});
document.addEventListener("DOMContentLoaded", () => {
    let letters = document.querySelectorAll("h1 span");
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Each letter appears one by one
    });
});
function toggleMenu() {
    let navList = document.querySelector(".nav ul");
    navList.classList.toggle("show");
}