// JavaScript to toggle dropdowns and arrow rotation
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        const dropdown = this.nextElementSibling; // Get the dropdown UL
        const arrow = this.querySelector('.arrow'); // Get the arrow

        if (dropdown && dropdown.classList.contains('dropdown')) {
            // Toggle visibility of the dropdown
            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
            
            // Rotate the arrow
            arrow.classList.toggle('open');
            
            event.preventDefault(); // Prevent the default link behavior
        }
    });
});