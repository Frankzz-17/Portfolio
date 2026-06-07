// Project Data
const projectsData = {
    'santelmo': {
        title: 'SANTELMO',
        description: 'A story driven, Bicol myth inspired game created for a game jam. It focuses on the player\'s role as Santelmo, guiding and protecting a lost villager through the dark woods.',
        video: 'image/santelmo-video.mp4',
        screenshots: ['image/santelmo5.png', 'image/santelmo1.jpg', 'image/santelmo2.jpg', 'image/santelmo3.jpg', 'image/santelmo4.jpg'],
        role: 'Game Developer',
        tools: 'Unity, C#, Blender',
        platform: 'PC',
        date: 'Dec 21, 2023'
    },
    'road-ready': {
        title: 'Road Ready',
        description: 'Road Ready is a 3D driving game set in Naga City where players learn road safety by following real traffic signs. The player must follow every road sign they encounter to successfully complete the level.',
        video: 'image/Road Ready.mp4',
        screenshots: ['image/road4.png', 'image/road3.png', 'image/road1.png', 'image/road2.png'],
        role: '3D Modeler',
        tools: 'Unity, C#, Maya, Blender, Substance Painter, Photoshop',
        platform: 'PC',
        date: 'Mar 15, 2024'
    },
    'dont-get-fooled': {
        title: "Don't Get Fooled",
        description: 'A 2D platformer game where you play as a rabbit that is lost in a cave full of traps. Navigate through dangerous obstacles and find your way out.',
        video: 'image/dont-get-fooled-video.mp4',
        screenshots: ['image/dont1.jpg', 'image/dont2.jpg', 'image/dont3.jpg', 'image/dont4.jpg'],
        role: 'Developer & Designer',
        tools: 'Unity, C#, Aseprite',
        platform: 'PC',
        date: 'Feb 10, 2024'
    },
    'lume': {
        title: 'Lume',
        description: 'Lume is a 3D platformer where you solve puzzles, overcome obstacles, and explore a mysterious world to complete your adventure.',
        video: 'image/lume-video.mp4',
        screenshots: ['image/l1.png', 'image/l2.png'],
        role: 'Programmer',
        tools: 'Unity, C#, Blender',
        platform: 'PC',
        date: 'Jan 20, 2024'
    },
    'allen-denz': {
        title: 'Allen and Denz Quest',
        description: 'Allen and Denz Quest is a 2D puzzle platformer game with a full of traps. Work together with your partner to overcome challenges and complete the adventure.',
        video: 'image/allen-denz-video.mp4',
        screenshots: ['image/a1.png', 'image/a2.png', 'image/a3.png'],
        role: 'Game Developer',
        tools: 'Unity, C#',
        platform: 'PC',
        date: 'Nov 30, 2023'
    },
    'balut-quest': {
        title: "Balut's Quest",
        description: 'Balut\'s Quest is a 2D platformer gunner game where you embark on an epic journey through colorful worlds filled with enemies and challenges.',
        video: 'image/balut-quest-video.mp4',
        screenshots: ['image/b1.png', 'image/b2.png', 'image/b3.png', 'image/b4.png'],
        role: 'Developer',
        tools: 'Unity, C#',
        platform: 'PC',
        date: 'Dec 5, 2023'
    }
};

// Back to top button
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Project Details
const projectDetails = document.getElementById("projectDetails");
const closeProjectDetails = document.getElementById("closeProjectDetails");
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Handle View Project clicks
document.querySelectorAll(".project-card").forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener("click", e => {
        e.preventDefault();
        
        // Get project key from data attribute
        const projectKey = card.getAttribute('data-project');
        const projectData = projectsData[projectKey];
        
        if (projectData) {
            showProjectDetails(projectData);
        }
    });
});

function showProjectDetails(project) {
    // Update project info
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectDescription").textContent = project.description;
    document.getElementById("projectRole").textContent = project.role;
    document.getElementById("projectTools").textContent = project.tools;
    document.getElementById("projectPlatform").textContent = project.platform;
    document.getElementById("projectDate").textContent = project.date;
    
    // Update video
    const projectVideo = document.getElementById("projectVideo");
    projectVideo.src = project.video;
    
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
    
    // Show project details page
    projectDetails.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectDetailsPage() {
    projectDetails.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close project details
closeProjectDetails.addEventListener("click", closeProjectDetailsPage);

// Close modal when clicking outside
projectDetails.addEventListener("click", (e) => {
    if (e.target === projectDetails) {
        closeProjectDetailsPage();
    }
});

// Image modal for zoomed screenshots
function openImageModal(imageSrc) {
    modal.classList.add('show');
    modalImage.src = imageSrc;
}

closeModal.addEventListener("click", () => {
    modal.classList.remove('show');
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});