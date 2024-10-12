// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        const offset = 60; // Offset in pixels

        // Calculate the position of the target section
        const elementPosition = targetSection.getBoundingClientRect().top; // Position relative to the viewport
        const offsetPosition = elementPosition + window.pageYOffset - offset; // Adjust for the offset

        // Scroll to the target section with an offset
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

document.querySelector('#resume-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.open(this.href, '_blank'); // Open link in a new tab
});

// Hamburger Menu
const mobileMenuToggle = document.getElementById("mobile-menu");
const mobileMenuContent = document.getElementById("mobile-menu-content");

mobileMenuToggle.addEventListener("click", () => {
    mobileMenuContent.classList.toggle("active"); // Toggle the active class
});

// Close mobile menu on link click
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
mobileNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Check if the link is for the resume
        if (link.getAttribute('href') === 'resume/Resume_Aakash_A_Joshi.pdf') {
            // Open the resume link directly
            window.open(link.getAttribute('href'), '_blank'); // Open resume in new tab
            // Close the mobile menu
            mobileMenuContent.classList.remove("active"); // Remove active class
            return; // Exit the function
        }

        // Prevent default anchor behavior for other links
        e.preventDefault();
        
        // Get the target section based on the link's href
        const targetSection = document.querySelector(link.getAttribute('href'));
        const offset = 60; // Offset in pixels

        // Calculate the position of the target section
        const elementPosition = targetSection.getBoundingClientRect().top; // Position relative to the viewport
        const offsetPosition = elementPosition + window.pageYOffset - offset; // Adjust for the offset

        // Scroll to the target section with an offset
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scrolling effect
        });

        // Close the mobile menu
        mobileMenuContent.classList.remove("active"); // Remove active class
    });
});

// Dynamic skill bar animations
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (skillsPosition < screenPosition) {
        document.querySelectorAll('.skill-level').forEach((bar) => {
            bar.style.width = bar.style.width;
        });
    }
});
