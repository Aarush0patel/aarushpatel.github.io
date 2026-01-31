// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function () {
    lucide.createIcons();

    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initJourneySection();
    initExtracurricularsSection();
    initExperienceSection();
    initProjectsSection();
    initSkillsSection();
    initResumeSection();
    initContactSection();
});
