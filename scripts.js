// Function to show books based on the year clicked with animation
function showBooks(year) {
    // Get all sections
    const sections = document.querySelectorAll('.books-section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
        section.classList.remove('active'); // Remove active class
    });

    // Show the selected section
    const selectedSection = document.getElementById(`${year}-books`);
    selectedSection.style.display = 'block'; // Show selected section
    setTimeout(() => {
        selectedSection.classList.add('active'); // Add active class for animation
    }, 100);
}
