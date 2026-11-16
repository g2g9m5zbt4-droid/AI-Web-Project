
// Mobile Navigation Menu
function toggleMenu() {
    const menu = document.getElementById("nav-links");

    menu.classList.toggle("show");
}

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});
