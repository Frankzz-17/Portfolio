// Function for filtering projects
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}


const backToTopBtn = document.getElementById("backToTop");

// When the user scrolls down 400px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImages = [];
let currentIndex = 0;

// Open modal with images
document.querySelectorAll(".view-project").forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault();
        currentImages = button.dataset.images.split(",");
        currentIndex = 0;
        modal.style.display = "flex";
        modalImg.src = currentImages[currentIndex];
    });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; }

// Navigation
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};