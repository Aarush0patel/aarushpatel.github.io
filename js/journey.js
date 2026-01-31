// Journey Section
function initJourneySection() {
    const yearData = [
        {
            year: '9th Grade',
            subtitle: 'Freshman Year',
            description: 'Building foundational skills and exploring interests',
            courses: [
                { icon: 'book-open', name: 'ENL1W0 - English', description: 'Fundamentals of literature and composition.' },
                { icon: 'calculator', name: 'MTH1W0 - MATH', description: 'Principles of mathematics and problem solving.' },
                { icon: 'flask-conical', name: 'SNC1WU - Science - Explore High Skills', description: 'Exploration of scientific concepts and methods.' },
                { icon: 'globe', name: 'FSF1D0 - Core French', description: 'French language fundamentals.' },
                { icon: 'monitor', name: 'BTT1O0 - Info & Comm Tech', description: 'Business technology and communication.' },
                { icon: 'wrench', name: 'TIJ1O0 - Exploring Technologies', description: 'Introduction to various technology fields.' },
                { icon: 'map', name: 'CGC1D0 - Issues in Canadian Geography', description: 'Canadian geography and environmental studies.' },
                { icon: 'activity', name: 'PPL1OM - Healthy Active Living', description: 'Physical education and health.' },
                { icon: 'book-open', name: 'ENG2D4 - English (Grade 10, Summer School)', description: 'Building on Grade 9 English skills and preparing for the OSSLT.' }
            ]
        },
        {
            year: '10th Grade',
            subtitle: 'Sophomore Year',
            description: 'Deepening STEM focus and taking on challenges',
            courses: [
                { icon: 'calculator', name: 'MPM2D0 - Principles Of Mathematics', description: 'Quadratic relations and analytic geometry.' },
                { icon: 'flask-conical', name: 'SNC2D0 - Science', description: 'Biology, chemistry, earth and space science, and physics.' },
                { icon: 'book-open', name: 'CHC2D0 - Canadian History', description: 'Canadian history since World War I.' },
                { icon: 'briefcase', name: 'GLC2O0 - Career Studies & Civics', description: 'Career planning and civic responsibility.' },
                { icon: 'briefcase', name: 'CHV2O0 - Civics', description: 'Civic responsibility.' },
                { icon: 'palette', name: 'AVI2O0 - Visual Arts', description: 'Creative expression through visual arts.' },
                { icon: 'pen-tool', name: 'TDJ2O0 - Technological Design', description: 'Design fundamentals and engineering graphics.' },
                { icon: 'hammer', name: 'TCJ2O0 - Construction Technology', description: 'Hands-on construction and woodworking skills.' },
                { icon: 'settings', name: 'TMJ2O0 - Manufacturing Engineering', description: 'Manufacturing processes and engineering technology.' }
            ]
        },
        {
            year: '11th Grade',
            subtitle: 'Current Year',
            description: 'Rigorous coursework aligned with engineering goals',
            courses: [
                { icon: 'book-open', name: 'NBE3U0 - English', description: 'Understanding Contemporary First Nations, Métis, and Inuit voices.' },
                { icon: 'calculator', name: 'MCR3U0 - Functions', description: 'Mathematical functions and applications.' },
                { icon: 'flask-conical', name: 'SCH3U0 - Chemistry', description: 'Chemical reactions, quantities, and solutions.' },
                { icon: 'atom', name: 'SPH3U0 - Physics', description: 'Kinematics, forces, and energy transformations.' },
                { icon: 'pen-tool', name: 'TDJ3M0 - Technological Design', description: 'Architectural and mechanical design projects.' },
                { icon: 'settings', name: 'TMR3M0 - Manufacturing Engineering', description: 'Advanced manufacturing and control systems.' },
                { icon: 'users', name: 'COP2XC - 2 Credit Co-op', description: 'Hands-on workplace experience.' }
            ]
        },
        {
            year: '12th Grade',
            subtitle: 'Next Year',
            description: 'Advanced specialization and independent study',
            courses: [
                { icon: 'book-open', name: 'ENG4U0 - English', description: 'Advanced literacy and analytical skills.' },
                { icon: 'trending-up', name: 'MHF4U0 - Advanced Functions', description: 'Polynomial, rational, and trigonometric functions.' },
                { icon: 'calculator', name: 'MCV4U0 - Calculus and Vectors', description: 'Rate of change and vector analysis.' },
                { icon: 'atom', name: 'SPH4U0 - Physics', description: 'Dynamics, fields, and modern physics.' },
                { icon: 'flask-conical', name: 'SCH4U0 - Chemistry', description: 'Organic chemistry and atomic structure.' },
                { icon: 'pen-tool', name: 'TDJ4M0 - Technological Design', description: 'Comprehensive design solutions and prototyping.' },
                { icon: 'settings', name: 'TMR4M0 - Manufacturing Engineering', description: 'Robotics, automation, and manufacturing.' }
            ]
        }
    ];

    const container = document.getElementById('journey-years');
    // Clear existing content to avoid duplication if re-initialized
    container.innerHTML = '';
    let expandedIndex = null;

    yearData.forEach((year, index) => {
        const yearDiv = document.createElement('div');
        yearDiv.className = 'scroll-fade-in';
        yearDiv.innerHTML = `
            <button class="journey-year-btn w-full p-6 rounded-2xl border transition-all duration-300 text-left bg-white/50 border-[#E8E0D5] hover:bg-white hover:border-[#A0826D]/20 hover:shadow-md" data-index="${index}">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="journey-year-number w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors bg-[#F5F0EB] text-[#8B7355]">
                            ${9 + index}
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-[#3D2B1F]">${year.year}</h3>
                            <p class="text-sm text-[#8B7355]">${year.subtitle}</p>
                        </div>
                    </div>
                    <i data-lucide="chevron-down" class="journey-chevron w-6 h-6 text-[#B8A99A]"></i>
                </div>
                <p class="text-[#6B5B4F] text-sm mt-2 ml-16">${year.description}</p>
            </button>
            <div class="journey-year-content">
                <div class="pt-4 pl-4 md:pl-16 grid gap-3">
                    ${year.courses.map(course => `
                        <div class="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E8E0D5] hover:border-[#D4A574]/30 transition-colors">
                            <div class="p-2 bg-[#F5F0EB] rounded-lg">
                                <i data-lucide="${course.icon}" class="w-5 h-5 text-[#A0826D]"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-[#3D2B1F]">${course.name}</h4>
                                <p class="text-sm text-[#6B5B4F] mt-1">${course.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(yearDiv);

        const btn = yearDiv.querySelector('.journey-year-btn');
        btn.addEventListener('click', () => {
            const content = yearDiv.querySelector('.journey-year-content');
            const chevron = yearDiv.querySelector('.journey-chevron');
            const number = yearDiv.querySelector('.journey-year-number');

            if (expandedIndex === index) {
                // Collapse current
                content.style.maxHeight = null;
                content.classList.remove('expanded');
                chevron.classList.remove('rotated');
                number.classList.remove('bg-gradient-to-br', 'from-[#A0826D]', 'to-[#8B7355]', 'text-white');
                number.classList.add('bg-[#F5F0EB]', 'text-[#8B7355]');
                btn.classList.remove('bg-white', 'border-[#A0826D]/30', 'shadow-lg');
                btn.classList.add('bg-white/50', 'border-[#E8E0D5]');
                expandedIndex = null;
            } else {
                // Collapse previous if any
                if (expandedIndex !== null) {
                    const prevDiv = container.children[expandedIndex];
                    const prevContent = prevDiv.querySelector('.journey-year-content');
                    prevContent.style.maxHeight = null;
                    prevContent.classList.remove('expanded');

                    prevDiv.querySelector('.journey-chevron').classList.remove('rotated');
                    const prevNumber = prevDiv.querySelector('.journey-year-number');
                    prevNumber.classList.remove('bg-gradient-to-br', 'from-[#A0826D]', 'to-[#8B7355]', 'text-white');
                    prevNumber.classList.add('bg-[#F5F0EB]', 'text-[#8B7355]');
                    prevDiv.querySelector('.journey-year-btn').classList.remove('bg-white', 'border-[#A0826D]/30', 'shadow-lg');
                    prevDiv.querySelector('.journey-year-btn').classList.add('bg-white/50', 'border-[#E8E0D5]');
                }

                // Expand new
                content.classList.add('expanded');
                content.style.maxHeight = content.scrollHeight + "px";

                chevron.classList.add('rotated');
                number.classList.add('bg-gradient-to-br', 'from-[#A0826D]', 'to-[#8B7355]', 'text-white');
                number.classList.remove('bg-[#F5F0EB]', 'text-[#8B7355]');
                btn.classList.add('bg-white', 'border-[#A0826D]/30', 'shadow-lg');
                btn.classList.remove('bg-white/50', 'border-[#E8E0D5]');
                expandedIndex = index;
            }

            // Refresh icons in case they weren't rendered inside the collapsed area
            lucide.createIcons();
        });
    });

    // Initialize icons for the newly created elements
    lucide.createIcons();

    // Observe journey years for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '-100px 0px' });

    container.querySelectorAll('.scroll-fade-in').forEach(el => observer.observe(el));
}
