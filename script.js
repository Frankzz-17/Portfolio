// YouTube embed URL
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/WOs-jrkWj1M';

// Project Data
const projectsData = {
    'santelmo': {
        title: 'SANTELMO',
        description: 'A story driven, Bicol myth inspired game created for a game jam. It focuses on the player\'s role as Santelmo, guiding and protecting a lost villager through the dark woods.',
        video: 'https://youtube.com/embed/vHC7yMLm9dY',
        screenshots: ['image/santelmo5.png', 'image/santelmo1.jpg', 'image/santelmo2.jpg', 'image/santelmo3.jpg', 'image/santelmo4.jpg'],
        role: 'Game Developer',
        tools: 'Unity, C#, Blender',
        platform: 'PC',
        date: 'Dec 21, 2023',
        bgImage: 'image/santelmo.png'
    },
    'road-ready': {
        title: 'Road Ready',
        description: 'Road Ready is a 3D driving game set in Naga City where players learn road safety by following real traffic signs. The player must follow every road sign they encounter to successfully complete the level.',
        video: 'https://youtube.com/embed/NSG2fz9yHH8',
        screenshots: ['image/road4.png', 'image/road3.png', 'image/road1.png', 'image/road2.png'],
        role: '3D Modeler',
        tools: 'Unity, C#, Maya, Blender, Substance Painter, Photoshop',
        platform: 'PC',
        date: 'Mar 15, 2024',
        bgImage: 'image/road ready.png'
    },
    'dont-get-fooled': {
        title: "Don't Get Fooled",
        description: 'A 2D platformer game where you play as a rabbit that is lost in a cave full of traps. Navigate through dangerous obstacles and find your way out.',
        video: 'https://youtube.com/embed/ms88Q2n1ci4',
        screenshots: ['image/dont1.jpg', 'image/dont2.jpg', 'image/dont3.jpg', 'image/dont4.jpg'],
        role: 'Developer & Designer',
        tools: 'Unity, C#, Aseprite',
        platform: 'PC',
        date: 'Feb 10, 2024',
        bgImage: 'image/Dont Get Fooled.png'
    },
    'lume': {
        title: 'Lume',
        description: 'Lume is a 3D platformer where you solve puzzles, overcome obstacles, and explore a mysterious world to complete your adventure.',
        video: YOUTUBE_EMBED_URL,
        screenshots: ['image/l1.png', 'image/l2.png'],
        role: 'Programmer',
        tools: 'Unity, C#, Blender',
        platform: 'PC',
        date: 'Jan 20, 2024',
        bgImage: 'image/lume.jpeg'
    },
    'allen-denz': {
        title: 'Allen and Denz Quest',
        description: 'Allen and Denz Quest is a 2D puzzle platformer game with a full of traps. Work together with your partner to overcome challenges and complete the adventure.',
        video:'https://youtube.com/embed/Zt8Ldc3206c',
        screenshots: ['image/a1.png', 'image/a2.png', 'image/a3.png'],
        role: 'Game Developer',
        tools: 'Unity, C#',
        platform: 'PC',
        date: 'Nov 30, 2023',
        bgImage: 'image/a1.png'
    },
    'balut-quest': {
        title: "Balut's Quest",
        description: 'Balut\'s Quest is a 2D platformer gunner game where you embark on an epic journey through colorful worlds filled with enemies and challenges.',
        video: YOUTUBE_EMBED_URL,
        screenshots: ['image/b1.png', 'image/b2.png', 'image/b3.png', 'image/b4.png'],
        role: 'Developer',
        tools: 'Unity, C#',
        platform: 'PC',
        date: 'Dec 5, 2023',
        bgImage: 'image/b1.png'
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize all event listeners
    initBackToTopButton();
    initProjectCards();
    initProjectDetailsModal();
    initImageModal();
});

// Back to top button functionality
function initBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTop");
    
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Project card click handlers
function initProjectCards() {
    document.querySelectorAll(".project-card").forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener("click", handleProjectCardClick);
    });
}

function handleProjectCardClick(e) {
    e.preventDefault();
    const projectKey = this.getAttribute('data-project');
    const projectData = projectsData[projectKey];
    
    if (projectData) {
        showProjectDetails(projectData, projectKey);
    }
}

// Project Details Modal
function initProjectDetailsModal() {
    const projectDetails = document.getElementById("projectDetails");
    const closeProjectDetails = document.getElementById("closeProjectDetails");
    
    closeProjectDetails.addEventListener("click", closeProjectDetailsPage);
    
    projectDetails.addEventListener("click", (e) => {
        if (e.target === projectDetails) {
            closeProjectDetailsPage();
        }
    });
}

let currentProjectKey = null;
let currentScreenshots = [];
let currentScreenshotIndex = 0;

function showProjectDetails(project, projectKey) {
    const projectDetails = document.getElementById("projectDetails");
    
    currentProjectKey = projectKey;
    currentScreenshots = project.screenshots;
    
    // Set background image
    document.documentElement.style.setProperty('--project-bg-image', `url('${project.bgImage}')`);
    
    // Update project information
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectDescription").textContent = project.description;
    document.getElementById("projectRole").textContent = project.role;
    document.getElementById("projectTools").textContent = project.tools;
    document.getElementById("projectPlatform").textContent = project.platform;
    document.getElementById("projectDate").textContent = project.date;
    
    // Update video
    document.getElementById("projectVideo").src = project.video;
    
    // Update screenshots grid
    const screenshotsGrid = document.getElementById("screenshotsGrid");
    screenshotsGrid.innerHTML = '';
    
    project.screenshots.forEach((screenshot, index) => {
        const screenshotItem = document.createElement('div');
        screenshotItem.className = 'screenshot-item';
        screenshotItem.innerHTML = `<img src="${screenshot}" alt="Screenshot ${index + 1}">`;
        screenshotItem.addEventListener('click', () => openImageModal(screenshot));
        screenshotsGrid.appendChild(screenshotItem);
    });
    
    // Show project details
    projectDetails.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectDetailsPage() {
    const projectDetails = document.getElementById("projectDetails");
    projectDetails.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Image Modal for screenshots
function initImageModal() {
    const modal = document.getElementById("projectModal");
    const closeModal = document.querySelector(".close");
    const modalPrevBtn = document.getElementById("modalPrev");
    const modalNextBtn = document.getElementById("modalNext");
    
    closeModal.addEventListener("click", () => {
        modal.classList.remove('show');
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    modalPrevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentScreenshotIndex = (currentScreenshotIndex - 1 + currentScreenshots.length) % currentScreenshots.length;
        document.getElementById("modalImage").src = currentScreenshots[currentScreenshotIndex];
    });

    modalNextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentScreenshotIndex = (currentScreenshotIndex + 1) % currentScreenshots.length;
        document.getElementById("modalImage").src = currentScreenshots[currentScreenshotIndex];
    });
}

function openImageModal(imageSrc) {
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalPrevBtn = document.getElementById("modalPrev");
    const modalNextBtn = document.getElementById("modalNext");
    
    currentScreenshotIndex = currentScreenshots.indexOf(imageSrc);
    modal.classList.add('show');
    modalImage.src = imageSrc;
    
    // Show/hide nav buttons based on screenshot count
    if (currentScreenshots.length <= 1) {
        modalPrevBtn.style.display = 'none';
        modalNextBtn.style.display = 'none';
    } else {
        modalPrevBtn.style.display = 'flex';
        modalNextBtn.style.display = 'flex';
    }
}