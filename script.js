document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Hamburger Menu Logic --- //
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Initialize AOS (Animate on Scroll) Library --- //
    AOS.init({
        duration: 800,
        once: true,
        offset: 50, // A smaller offset can feel more responsive
        easing: 'ease-in-out',
    });
    
    // --- Lightbox2 Image Gallery Options --- //
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': 'Cake %1 of %2'
    });

});