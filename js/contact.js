// Contact Section
function initContactSection() {
    const contactLinks = [
        {
            icon: 'mail',
            label: 'Email',
            value: 'aarushpatel630@gmail.com',
            href: 'mailto:aarushpatel630@gmail.com'
        },
        {
            icon: 'github',
            label: 'GitHub',
            value: 'github.com/Aarush0patel',
            href: 'https://github.com/Aarush0patel'
        },
        {
            icon: 'linkedin',
            label: 'LinkedIn',
            value: 'linkedin.com/in/aarush-patel',
            href: 'https://www.linkedin.com/in/aarush-patel/'
        }
    ];

    const container = document.getElementById('contact-links');

    contactLinks.forEach((contact, index) => {
        const card = document.createElement('a');
        card.href = contact.href;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'scroll-fade-in group p-6 bg-white rounded-2xl border border-[#E8E0D5] hover:border-[#D4A574]/30 hover:shadow-lg transition-all duration-300';
        card.style.transitionDelay = `${0.1 + index * 0.1}s`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <i data-lucide="${contact.icon}" class="w-6 h-6 text-[#A0826D]"></i>
                <i data-lucide="external-link" class="w-4 h-4 text-[#B8A99A] opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
            <h3 class="text-[#3D2B1F] font-medium mb-1">${contact.label}</h3>
            <p class="text-sm text-[#8B7355] truncate">${contact.value}</p>
        `;
        container.appendChild(card);
    });

    // Observe for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '-100px 0px' });

    container.querySelectorAll('.scroll-fade-in').forEach(el => observer.observe(el));
    lucide.createIcons();
}
