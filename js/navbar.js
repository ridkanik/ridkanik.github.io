document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading navbar...');
    
    try {
        // Determine if we're in a subdirectory
        const isInSubdirectory = window.location.pathname.includes('/pages/');
        
        // Define navbar HTML with conditional paths
        const navbarHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="${isInSubdirectory ? '../index.html' : './index.html'}">
                            <img src="${isInSubdirectory ? '../images/logo.png' : './images/logo.png'}" alt="Wedding Logo" class="nav-logo-img">
                            <span class="nav-logo-text">Nikunj weds Ridhika</span>
                        </a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="${isInSubdirectory ? '../index.html' : './index.html'}" data-page="home">Send a Note</a></li>
                        <li><a href="${isInSubdirectory ? './gallery.html' : './pages/gallery.html'}" data-page="gallery">Gallery</a></li>
                        <li><a href="${isInSubdirectory ? './schedule.html' : './pages/schedule.html'}" data-page="schedule">Schedule</a></li>
                        <li><a href="${isInSubdirectory ? './about.html' : './pages/about.html'}" data-page="about">The Story</a></li>
                    </ul>
                </div>
            </nav>
        `;
        
        // Insert the navbar
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        console.log('Navbar loaded successfully');
        
        // Set active state
        setActiveNavLink();
        
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
});

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