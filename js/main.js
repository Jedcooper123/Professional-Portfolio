// -------- SPA NAVIGATION -------- //

function navigateTo(page) {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a[data-page]");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const target = document.getElementById(page);
    if (target) {
        target.classList.add("active");
    }

    // Highlight active nav link
    navLinks.forEach(link => {
        if (link.getAttribute("data-page") === page) {
            link.classList.add("active-link");
        } else {
            link.classList.remove("active-link");
        }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// attach nav clicks
document.querySelectorAll("nav a[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = e.currentTarget.getAttribute("data-page");
        if (page) navigateTo(page);
    });
});

// -------- MODALS -------- //

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// close modal when clicking outside the content
window.addEventListener("click", (event) => {
    if (event.target.classList && event.target.classList.contains("modal")) {
        event.target.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

// -------- INITIALIZATION -------- //

// on first load, make sure "home" is active
document.addEventListener("DOMContentLoaded", () => {
    // if no section has .active, default to home
    const activeSection = document.querySelector("section.active");
    if (!activeSection) {
        navigateTo("home");
    }
});

function openImageLightbox(src) {
    const lightbox = document.getElementById("image-lightbox");
    const img = document.getElementById("lightbox-img");
    if (!lightbox || !img) return;

    img.src = src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeImageLightbox() {
    const lightbox = document.getElementById("image-lightbox");
    const img = document.getElementById("lightbox-img");
    if (!lightbox || !img) return;

    img.src = "";
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
}
