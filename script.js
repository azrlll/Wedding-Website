// --- MOBILE MENU TOGGLE ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --- CLOSING MENU WHEN CLICKING A LINK ---
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- COUNTDOWN TIMER ---
// Set the date we're counting down to
const weddingDate = new Date("July 12, 2026 15:00:00").getTime();

const countdownFunc = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="time-box"><span class="time-val">${days}</span><span class="time-label">Days</span></div>
        <div class="time-box"><span class="time-val">${hours}</span><span class="time-label">Hours</span></div>
        <div class="time-box"><span class="time-val">${minutes}</span><span class="time-label">Mins</span></div>
        <div class="time-box"><span class="time-val">${seconds}</span><span class="time-label">Secs</span></div>
    `;

    if (distance < 0) {
        clearInterval(countdownFunc);
        document.getElementById("countdown").innerHTML = "HAPPILY MARRIED!";
    }
}, 1000);

// --- HEADER SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    
    // Cleaner approach: Toggle a CSS class rather than injecting inline styles
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});