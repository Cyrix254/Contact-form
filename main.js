document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE LOGIC ---
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if user previously selected dark mode
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Light Mode';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update button text and save preference
        if (body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });


    // --- 2. FORM SUBMISSION LOGIC ---
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from reloading

        // Get values from inputs
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create data object
        const formData = {
            id: Date.now(), // Unique ID based on timestamp
            fullName: fullName,
            email: email,
            message: message,
            date: new Date().toLocaleString()
        };

        // Get existing data from Local Storage or create an empty array
        let storedData = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Add new data to array
        storedData.push(formData);

        // Save back to Local Storage
        localStorage.setItem('contactMessages', JSON.stringify(storedData));

        // Feedback to user
        alert('Message Sent! Data stored locally.');
        form.reset(); // Clear the form
        
        // Console log to verify (for developer)
        console.log('Current Storage:', storedData);
    });
});