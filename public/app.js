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
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
}

// Load dark mode preference on startup
window.onload = () => {
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';
    if (darkModePreference) {
        document.body.classList.add('dark-mode');
    }
};

// Event listener for toggle button (to be added in HTML)
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Event listener for logout button (to be added in HTML)
document.getElementById('logout-btn').addEventListener('click', logout);

// Event listener for login button (to be added in HTML)
document.getElementById('login-btn').addEventListener('click', initiateGoogleLogin);