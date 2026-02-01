// Experience Section
function initExperienceSection() {
    const experiences = [
        {
            icon: 'briefcase',
            title: 'Frontend Developer Intern',
            organization: 'Comprehend Health',
            duration: 'Summer 2025',
            description: 'Worked as a frontend developer intern at Comprehend Health, collaborating with a team in a real-world development environment. Gained hands-on experience with React.js, Node.js, and Git, while developing communication and professional workflow skills.',
            achievements: ['Frontend Developer', 'Internship', 'Workplace']
        },
        {
            icon: 'heart',
            title: 'Art Gallery Volunteer',
            organization: 'Arts Etobicoke',
            duration: 'Feb 2025 - June 2025',
            description: 'Volunteered at an art gallery, supporting daily operations and collaborating with staff in a public-facing environment. Developed teamwork, communication, and problem-solving skills through real-world volunteer experience.',
            achievements: ['Logged 40+ volunteer hours']
        }
    ];

    const container = document.getElementById('experience-grid');

    experiences.forEach((exp, index) => {
        const card = document.createElement('div');
        card.className = 'scroll-fade-in';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="group p-6 bg-[#FAF9F6] rounded-2xl border border-[#E8E0D5] hover:border-[#D4A574]/30 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                    <div class="p-3 bg-white rounded-xl border border-[#E8E0D5]">
                        <i data-lucide="${exp.icon}" class="w-6 h-6 text-[#A0826D]"></i>
                    </div>
                    <span class="text-xs text-[#8B7355]">${exp.duration}</span>
                </div>
                <h3 class="text-lg font-semibold text-[#3D2B1F] mb-1">${exp.title}</h3>
                <p class="text-sm text-[#8B7355] mb-3">${exp.organization}</p>
                <p class="text-[#6B5B4F] text-sm mb-4 leading-relaxed">${exp.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${exp.achievements.map(ach => `
                        <span class="text-xs px-3 py-1 rounded-full bg-[#A0826D]/10 text-[#8B7355] border border-[#D4A574]/20">${ach}</span>
                    `).join('')}
                </div>
            </div>
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
