// Extracurriculars Section
function initExtracurricularsSection() {
    const activities = [
        {
            icon: 'bot',
            title: 'Robotics Club - Chief of Programming',
            organization: 'Castlebrooke Robotics',
            duration: '2023 - Present',
            description: 'Member → Programming Lead → Chief of Programming on a competive high school robotics team, contributing to robot software development and leading the team to regional championships and provincials. Gained experience in teamwork, leadership, and problem-solving.',
            achievements: ['Peel Skills Champions (2024)', '4th at Provincials (2024)', 'Peel Skills Champions (2025)', '5th at Provincials (2025)']
        },
        {
            icon: 'monitor',
            title: 'EHS (ICT) Program - Grades 9 & 10',
            organization: 'Explore High Skills, Information and Communication Technology',
            duration: '2023 - 2025',
            description: 'Completed the Exploring High Skills (EHS) program in Information and Communication Technology (ICT). This program helped me gain early exposure to information and communication technologies. Built foundational technical skills and an understanding of applied technology pathways.',
            achievements: ['Successfully Graduated']
        },
        {
            icon: 'briefcase',
            title: 'SHSM (ICT) Program - Grades 11 & 12',
            organization: 'Specialized High Skills Major in Information and Communication Technology',
            duration: '2025 - Present',
            description: "Currently enrolled in the Specialized High Skills Major in Information and Communication Technology (SHSM (ICT)) program, focusing on advanced technology education and career exploration. Developing sector-specific skills aligned with engineering and applied technology.",
            achievements: ['Currently Enrolled']
        },
        {
            icon: 'users',
            title: 'STEM Club - Director of Engineering',
            organization: 'Castlebrooke STEM Club',
            duration: '2025 - Present',
            description: 'Director of Engineering for the school STEM club, leading the club in engineering-focused initiatives and educational sessions. Created and presented technical content to engage and educate club members on STEM topics.',
            achievements: ['Executive Member', 'Director of Engineering']
        },
        {
            icon: 'book-open',
            title: 'Engineering Club - Education Executive',
            organization: 'Castlebrooke Engineering Club',
            duration: '2025 - Present',
            description: 'Education Executive for the school Engineering club, leading the club in educational sessions and delivering presentations on engineering disciplines and Ardunio fundamentals. Focused on making engineering concepts accessible and engaging for students.',
            achievements: ['Education Executive', 'Executive Member']
        }
    ];

    const container = document.getElementById('extracurriculars-grid');

    activities.forEach((activity, index) => {
        const card = document.createElement('div');
        card.className = 'scroll-fade-in';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="group p-6 bg-[#FAF9F6] rounded-2xl border border-[#E8E0D5] hover:border-[#D4A574]/30 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                    <div class="p-3 bg-white rounded-xl border border-[#E8E0D5]">
                        <i data-lucide="${activity.icon}" class="w-6 h-6 text-[#A0826D]"></i>
                    </div>
                    <span class="text-xs text-[#8B7355]">${activity.duration}</span>
                </div>
                <h3 class="text-lg font-semibold text-[#3D2B1F] mb-1">${activity.title}</h3>
                <p class="text-sm text-[#8B7355] mb-3">${activity.organization}</p>
                <p class="text-[#6B5B4F] text-sm mb-4 leading-relaxed">${activity.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${activity.achievements.map(ach => `
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
