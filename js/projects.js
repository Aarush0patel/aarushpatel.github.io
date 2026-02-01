// Projects Section
function initProjectsSection() {
    const projects = [
        {
            icon: 'layout',
            title: 'Portfolio Website',
            category: 'Web Development',
            description: 'My personal portfolio website is designed to showcase my journey, projects, and skills. Built with HTML, CSS, and JavaScript, focusing on a clean, responsive, and interactive user experience.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            github: 'https://github.com/Aarush0patel/aarushpatel.github.io',
            demo: null, // No live demo button for this
            progress: 100
        },
        {
            icon: 'bot',
            title: 'Robotic Arm',
            category: 'Robotics',
            description: 'A custom-designed robotic arm project currently in development. Focusing on mechanical design, inverse kinematics, and control systems.',
            technologies: [],
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
            github: null,
            demo: null,
            progress: 5
        }
    ];

    const container = document.getElementById('projects-container');
    let currentIndex = 0;

    function renderProject() {
        const project = projects[currentIndex];

        let buttonsHtml = '';
        if (project.github) {
            buttonsHtml += `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 bg-[#3D2B1F] rounded-full text-white font-medium hover:bg-[#2A1F16] hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <i data-lucide="github" class="w-5 h-5"></i>
                    View Code
                </a>
            `;
        }

        if (project.demo) {
            buttonsHtml += `
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 bg-white border border-[#E8E0D5] text-[#3D2B1F] rounded-full font-medium hover:bg-[#FAF9F6] transition-all duration-300">
                    <i data-lucide="external-link" class="w-5 h-5"></i>
                    Live Demo
                </a>
            `;
        }

        let progressHtml = '';
        if (project.progress && project.progress < 100) {
            progressHtml = `
                <div class="mt-6">
                    <div class="flex justify-between text-sm font-medium text-[#8B7355] mb-2">
                        <span>Development Progress</span>
                        <span>${project.progress}%</span>
                    </div>
                    <div class="w-full bg-[#E8E0D5] rounded-full h-2.5">
                        <div class="bg-[#A0826D] h-2.5 rounded-full" style="width: ${project.progress}%"></div>
                    </div>
                </div>
            `;
        }

        let techHtml = '';
        if (project.technologies && project.technologies.length > 0) {
            techHtml = `
                <div>
                    <h4 class="text-sm font-medium text-[#8B7355] uppercase tracking-wider mb-3">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                            <span class="px-4 py-2 bg-[#FAF9F6] rounded-lg text-sm text-[#3D2B1F] border border-[#E8E0D5]">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="grid lg:grid-cols-2 gap-8 items-center">
                <div class="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl project-image-slide active">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/60 via-transparent to-transparent"></div>
                    <div class="absolute top-6 left-6">
                        <span class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#8B7355]">${project.category}</span>
                    </div>
                    <div class="absolute bottom-6 left-6">
                        <div class="p-3 bg-white/90 backdrop-blur-sm rounded-xl">
                            <i data-lucide="${project.icon}" class="w-6 h-6 text-[#A0826D]"></i>
                        </div>
                    </div>
                </div>
                <div class="space-y-6 project-slide active">
                    <div>
                        <h3 class="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4">${project.title}</h3>
                        <p class="text-lg text-[#6B5B4F] leading-relaxed">${project.description}</p>
                    </div>
                    ${progressHtml}
                    ${techHtml}
                    <div class="flex gap-4 pt-4">
                        ${buttonsHtml}
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between mt-12">
                <button class="prev-project flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#E8E0D5] text-[#8B7355] hover:bg-[#FAF9F6] hover:border-[#A0826D]/30 transition-all duration-300">
                    <i data-lucide="chevron-left" class="w-5 h-5"></i>
                    <span class="hidden sm:inline">Previous</span>
                </button>
                <div class="flex items-center gap-2">
                    ${projects.map((_, i) => `
                        <button class="project-dot h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#A0826D]' : 'w-2 bg-[#D4C4B0] hover:bg-[#B8A99A]'}" data-index="${i}" aria-label="Go to project ${i + 1}"></button>
                    `).join('')}
                </div>
                <button class="next-project flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#E8E0D5] text-[#8B7355] hover:bg-[#FAF9F6] hover:border-[#A0826D]/30 transition-all duration-300">
                    <span class="hidden sm:inline">Next</span>
                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                </button>
            </div>
            <div class="text-center mt-6">
                <span class="text-sm text-[#8B7355]">Project ${currentIndex + 1} of ${projects.length}</span>
            </div>
        `;

        lucide.createIcons();

        // Add event listeners
        container.querySelector('.prev-project').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + projects.length) % projects.length;
            renderProject();
        });

        container.querySelector('.next-project').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % projects.length;
            renderProject();
        });

        container.querySelectorAll('.project-dot').forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentIndex = i;
                renderProject();
            });
        });
    }

    renderProject();
}
