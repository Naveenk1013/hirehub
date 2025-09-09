// gsap-animations.js
// This file contains GSAP animations for HIREHub website

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations
function initAnimations() {
    // Hero section animation
    gsap.to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3
    });
    
    gsap.to('.hero p', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6
    });
    
    gsap.to('.hero .btn', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.9
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.2
        });
    });
    
    // About image animation
    gsap.to('.about-image', {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Team members animation
    gsap.utils.toArray('.team-member').forEach((member, i) => {
        gsap.to(member, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: member,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.2
        });
    });
    
    // Testimonial animation
    gsap.utils.toArray('.testimonial-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.3
        });
    });
    
    // Contact form animation
    gsap.to('.contact-form', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
    
    // Footer animation
    gsap.to('.footer-column', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
    
    // Logo animation on scroll
    gsap.to('.logo', {
        fontSize: '24px',
        scrollTrigger: {
            trigger: 'header',
            start: '100px top',
            end: '200px top',
            scrub: true
        }
    });
    
    // Parallax effect for hero section
    gsap.to('.hero', {
        backgroundPosition: '50% 20%',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states for animated elements
    gsap.set('.hero h1, .hero p, .hero .btn', { opacity: 0, y: 20 });
    gsap.set('.service-card, .team-member', { opacity: 0, y: 20 });
    gsap.set('.about-image', { opacity: 0 });
    gsap.set('.contact-form', { opacity: 0, y: 20 });
    gsap.set('.footer-column', { opacity: 0, y: 20 });
    
    // Initialize animations
    initAnimations();
});