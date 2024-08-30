const projectGrid = document.querySelector('.project-grid');
const projectItems = document.querySelectorAll('.project-item');
let slideInterval; // Declare the slide interval variable

function startSliding() {
    // Start sliding the project grid to the left
    let currentIndex = 0;
    const totalProjects = projectItems.length;

    slideInterval = setInterval(() => {
        // Calculate the new position
        currentIndex = (currentIndex + 1) % totalProjects;
        projectGrid.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 5000); // Set interval time (5 seconds per slide)
}

function stopSliding() {
    clearInterval(slideInterval); // Stop the sliding effect
}

// Start sliding when the page loads
startSliding();

// Stop sliding on mouse hover
projectItems.forEach((item) => {
    item.addEventListener('mouseover', stopSliding); // Stop sliding on hover
    item.addEventListener('mouseout', startSliding); // Resume sliding after mouse leaves
});
