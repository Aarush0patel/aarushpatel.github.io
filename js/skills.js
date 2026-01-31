// Skills Section
function initSkillsSection() {
    const skillCategories = [
        {
            icon: 'code',
            title: 'Programming',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'Java', level: 85 },
                { name: 'C++', level: 75 },
                { name: 'MATLAB', level: 70 },
                { name: 'JavaScript', level: 65 }
            ]
        },
        {
            icon: 'wrench',
            title: 'Engineering Tools',
            skills: [
                { name: 'SolidWorks', level: 85 },
                { name: 'AutoCAD', level: 80 },
                { name: 'Fusion 360', level: 75 },
                { name: 'Arduino/Electronics', level: 90 },
                { name: 'OpenRocket', level: 85 }
            ]
        },
        {
            icon: 'palette',
            title: 'Design & Simulation',
            skills: [
                { name: 'ANSYS (Basic)', level: 50 },
                { name: 'Simulink', level: 60 },
                { name: 'Adobe Illustrator', level: 70 },
                { name: '3D Printing/CAM', level: 85 },
                { name: 'PCB Design', level: 65 }
            ]
        },
        {
            icon: 'brain',
            title: 'Soft Skills',
            skills: [
                { name: 'Leadership', level: 90 },
                { name: 'Public Speaking', level: 70 },
                { name: 'Project Management', level: 80 },
                { name: 'Technical Writing', level: 85 },
                { name: 'Team Collaboration', level: 95 }
            ]
        }
    ];

    const container = document.getElementById('skills-grid');

    skillCategories.forEach((category, categoryIndex) => {
        const card = document.createElement('div');
        card.className = 'scroll-fade-in';
        card.style.transitionDelay = `${categoryIndex * 0.15}s`;
        card.innerHTML = `
            <div class="p-6 bg-white rounded-2xl border border-[#E8E0D5]">
                <div class="flex items-center gap-3 mb-6">
                    <div class="p-2 rounded-lg bg-[#FAF9F6] border border-[#E8E0D5]">
                        <i data-lucide="${category.icon}" class="w-5 h-5 text-[#A0826D]"></i>
                    </div>
                    <h3 class="text-lg font-semibold text-[#3D2B1F]">${category.title}</h3>
                </div>
                <div class="space-y-4">
                    ${category.skills.map((skill, skillIndex) => `
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-sm text-[#3D2B1F]">${skill.name}</span>
                                <span class="text-xs text-[#8B7355]">${skill.level}%</span>
                            </div>
                            <div class="h-2 bg-[#F5F0EB] rounded-full overflow-hidden">
                                <div class="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#A0826D] to-[#D4A574]" data-level="${skill.level}" style="width: 0;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Animate skill bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const level = bar.getAttribute('data-level');
                        bar.style.width = `${level}%`;
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.3 });

    container.querySelectorAll('.scroll-fade-in').forEach(el => observer.observe(el));
    lucide.createIcons();
}
