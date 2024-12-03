document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading navbar...');
    
    try {
        // Determine if we're in a subdirectory
        const isInSubdirectory = window.location.pathname.includes('/pages/');
        
        // Define navbar HTML with conditional paths and hamburger menu
        const navbarHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="${isInSubdirectory ? '../index.html' : './index.html'}">
                            <img src="${isInSubdirectory ? '../images/logo.png' : './images/logo.png'}" alt="Wedding Logo" class="nav-logo-img">
                            <span class="nav-logo-text">Nikunj weds Ridhika</span>
                        </a>
                    </div>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="nav-links">
                        <li><a href="${isInSubdirectory ? './about.html' : './pages/about.html'}" data-page="about">Our Story</a></li>
                        <li><a href="${isInSubdirectory ? './gallery.html' : './pages/gallery.html'}" data-page="gallery">Gallery</a></li>
                        <li><a href="${isInSubdirectory ? './schedule.html' : './pages/schedule.html'}" data-page="schedule">Schedule</a></li>
                        <li><a href="${isInSubdirectory ? '../index.html' : './index.html'}" data-page="home">Send a Note</a></li>
                    </ul>
                </div>
            </nav>
        `;
        
        // Insert the navbar
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        console.log('Navbar loaded successfully');
        
        // Set active state
        setActiveNavLink();
        
        // Add hamburger menu functionality
        setupMobileMenu();
        
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
});

function setupMobileMenu() {
    console.log('Setting up mobile menu...');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        console.log('Toggle mobile menu');
        // Toggle navigation
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('active');

        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-container') && navLinks.classList.contains('nav-active')) {
            console.log('Closing mobile menu');
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('active');
        }
    });
}

function setActiveNavLink() {
    console.log('Setting active nav link...');
    
    // Remove any existing active classes
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Determine current page and set active class
    const currentPath = window.location.pathname;
    let activeLink;
    
    if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
        activeLink = document.querySelector('.nav-links a[data-page="home"]');
    } else if (currentPath.includes('gallery')) {
        activeLink = document.querySelector('.nav-links a[data-page="gallery"]');
    } else if (currentPath.includes('schedule')) {
        activeLink = document.querySelector('.nav-links a[data-page="schedule"]');
    } else if (currentPath.includes('about')) {
        activeLink = document.querySelector('.nav-links a[data-page="about"]');
    }
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
} 