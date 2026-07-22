// Auth flow will be implemented by PRPilot (SCRUM-5)
console.log("PRP app loaded");

// Function to handle logout
function logout() {
    // Clear JWT and perform logout actions here
    console.log("User logged out");
    // Here you would typically clear the token from local storage or state
}

// Function to initiate Google login
function initiateGoogleLogin() {
    // Logic to handle Google OAuth login
    console.log("Initiating Google OAuth login");
    // Here, trigger the Google OAuth API, handle the response, etc.
}

// Function to toggle dark mode
function darkModeToggle() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Initialize dark mode based on saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Event listener for logout button (to be added in HTML)
document.getElementById('logout-btn').addEventListener('click', logout);

// Event listener for login button (to be added in HTML)
document.getElementById('login-btn').addEventListener('click', initiateGoogleLogin);

// Event listener for dark mode toggle (to be added in HTML)
document.getElementById('dark-mode-toggle').addEventListener('click', darkModeToggle);