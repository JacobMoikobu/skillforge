const hamMenu=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");
hamMenu.addEventListener("click",()=>{
    hamMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
})
document.querySelectorAll(".link").forEach(n=>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    })
)
/*
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
});*/

document.addEventListener("DOMContentLoaded", () => {
    // Testimonial Carousel
    const testimonials = document.querySelectorAll(".testimonial");
    let activeIndex = 0;

    if (testimonials.length > 0) {
        setInterval(() => {
            testimonials[activeIndex].classList.remove("active");
            activeIndex = (activeIndex + 1) % testimonials.length;
            testimonials[activeIndex].classList.add("active");
        }, 4000); // Rotate every 4 seconds
    }

    // Intersection Observer for Scroll Animations and Fade-ins
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (entry.target.classList.contains("fade-in")) {
                    observer.unobserve(entry.target); // Stop observing fade-ins once visible
                }
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll("section");
    const fadeElements = document.querySelectorAll(".fade-in");

    sections.forEach(section => observer.observe(section));
    fadeElements.forEach(element => observer.observe(element));

    // Learn More Buttons
    const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

    learnMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const feature = button.parentElement;
            feature.classList.toggle("open"); // Toggle the "open" class
        });
    });
});
