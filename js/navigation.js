// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    let isMobileMenuOpen = false;
    
    // Handle scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-xl', 'shadow-sm');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-xl', 'shadow-sm');
            navbar.classList.add('bg-transparent');
        }
        
        updateActiveNav();
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
            mobileNav.classList.remove('hidden');
            mobileNav.classList.add('show');
            lucide.createIcons();
        } else {
            mobileNav.classList.add('hide');
            setTimeout(() => {
                mobileNav.classList.remove('show');
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('hide');
            }, 300);
        }
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (isMobileMenuOpen) {
                    mobileMenuBtn.click();
                }
            }
        });
    });
    
    // Update active nav
    function updateActiveNav() {
        const sections = ['home', 'about', 'journey', 'extracurriculars', 'projects', 'skills', 'resume', 'contact'];
        const scrollPos = window.scrollY + 150;
        
        sections.reverse().forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                const bottom = top + rect.height;
                
                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(link => {
                        if (link.getAttribute('data-section') === section) {
                            link.classList.add('text-[#3D2B1F]', 'active');
                            link.classList.remove('text-[#8B7355]');
                            if (link.classList.contains('mobile-nav-link')) {
                                link.classList.add('bg-[#F5F0EB]');
                            }
                        } else {
                            link.classList.remove('text-[#3D2B1F]', 'active');
                            link.classList.add('text-[#8B7355]');
                            if (link.classList.contains('mobile-nav-link')) {
                                link.classList.remove('bg-[#F5F0EB]');
                            }
                        }
                    });
                }
            }
        });
    }
    
    updateActiveNav();
}
