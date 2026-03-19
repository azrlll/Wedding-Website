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
// S    
// Set the date we're counting down to
const weddingDate = new Date("July 12, 2026 15:00:00").getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="time-box"><span class="time-value">${days}</span><span class="time-label">Days</span></div>
        <div class="time-box"><span class="time-value">${hours}</span><span class="time-label">Hours</span></div>
        <div class="time-box"><span class="time-value">${minutes}</span><span class="time-label">Mins</span></div>
        <div class="time-box"><span class="time-value">${seconds}</span><span class="time-label">Secs</span></div>
    `;

    if (distance < 0) {
        clearInterval(countdownTimer);
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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcome-modal");
    const enterButton = document.getElementById("enter-button");
    const flowerContainer = document.getElementById("flower-container");

    // Array of emojis to use for the falling effect (2 flowers, 2 hearts)
    const flowerTypes = ['🌸', '💮', '❤️', '💕'];

    // Generate 35 falling flowers
    for (let i = 0; i < 35; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower-petal');
        flower.innerText = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        
        // Randomize the position, size, and fall speed of each flower
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        flower.style.animationDuration = (Math.random() * 4 + 3) + 's'; // Falls between 3s and 7s
        flower.style.animationDelay = Math.random() * 5 + 's';
        
        flowerContainer.appendChild(flower);
    }

    // Grab the audio element we just created
    const backgroundMusic = document.getElementById("background-music");

    // Button click to enter site
    enterButton.addEventListener("click", () => {
        modal.classList.add("hidden");
        setTimeout(() => modal.style.display = "none", 500); 
        
        // Start playing the background music!
        if (backgroundMusic) {
            backgroundMusic.play().catch(error => {
                console.log("Browser blocked auto-play", error);
            });
        }
    });

});

function slideNinong(index) {
    const track = document.getElementById("ninong-track");
    if (track) {
        track.style.transform = `translateX(-${index * 50}%)`;
    }
}