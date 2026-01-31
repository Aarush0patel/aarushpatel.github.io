// Resume Section
function initResumeSection() {
    const highlights = [
        {
            icon: 'award',
            title: 'Certifications',
            items: ['Onshape Certification: Introduction to Drawings', 'Onshape Certification: Introduction to Sketching', 'Onshape Certification: Introduction to Part Studios', 'Onshape Certification: Introduction to Parametric Feature-Based CAD',]
        },
        {
            icon: 'trophy',
            title: 'Competition Awards',
            items: ['Peel Skills First Place (2024)', 'Peel Skills First Place (2025)']
        },
        {
            icon: 'star',
            title: 'Leadership & Service',
            items: ['Chief of Programming (Robotics Club)', 'Director of Marketing (STEM Club)', 'Education Executive (Engineering Club)']
        }
    ];

    const highlightsContainer = document.getElementById('resume-highlights');
    highlights.forEach((highlight, index) => {
        const card = document.createElement('div');
        card.className = 'scroll-fade-in';
        card.style.transitionDelay = `${0.2 + index * 0.1}s`;
        card.innerHTML = `
            <div class="p-6 bg-[#FAF9F6] rounded-2xl border border-[#E8E0D5]">
                <div class="flex items-center gap-3 mb-4">
                    <div class="p-2 rounded-lg bg-white border border-[#E8E0D5]">
                        <i data-lucide="${highlight.icon}" class="w-5 h-5 text-[#A0826D]"></i>
                    </div>
                    <h3 class="font-semibold text-[#3D2B1F]">${highlight.title}</h3>
                </div>
                <ul class="space-y-2">
                    ${highlight.items.map(item => `
                        <li class="flex items-start gap-2 text-sm text-[#6B5B4F]">
                            <span class="text-[#A0826D] mt-1">•</span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        highlightsContainer.appendChild(card);
    });

    // Observe for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '-100px 0px' });

    document.querySelectorAll('#resume-highlights .scroll-fade-in').forEach(el => observer.observe(el));
    lucide.createIcons();
}
