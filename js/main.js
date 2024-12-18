document.addEventListener('DOMContentLoaded', function() {
    console.log('Website initialized');
    
    // Update active nav link based on current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}); 

const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

playPauseBtn.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        playPauseBtn.textContent = 'Play Music';
    }
});