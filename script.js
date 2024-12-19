document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    const sections = document.querySelectorAll("section");
    let activeIndex = 0;

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Testimonial Carousel
    setInterval(() => {
        testimonials[activeIndex].classList.remove("active");
        activeIndex = (activeIndex + 1) % testimonials.length;
        testimonials[activeIndex].classList.add("active");
    }, 4000); // Rotate every 4 seconds
});
document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

    learnMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const feature = button.parentElement;
            feature.classList.toggle("open"); // Toggle the "open" class
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));
});
