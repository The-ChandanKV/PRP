// JavaScript for logout functionality

// Function to handle logout
function logout() {
    // Clear local storage session data
    localStorage.removeItem('prp_display_name');
    localStorage.removeItem('theme');
    localStorage.removeItem('session_token');
    console.log('User session data cleared');

    // Mock API call to Google Stitch API
    setTimeout(() => {
        // Simulate successful logout
        document.body.innerHTML = `
            <div style='display: flex; align-items: center; justify-content: center; height: 100vh; background: rgba(0, 0, 0, 0.8); color: white; flex-direction: column;'>
                <div class='spinner'>
                    <div class='loader'></div>
                    <p>Securely logging you out...</p>
                </div>
            </div>
        `;

        setTimeout(() => {
            document.body.innerHTML = `
                <div style='display: flex; align-items: center; justify-content: center; height: 100vh; background: rgba(0, 0, 0, 0.8); color: white; flex-direction: column;'>
                    <h1>You have been successfully logged out</h1>
                    <button onclick='window.location.href="/index.html"' style='padding: 0.75rem 1.25rem; border: none; border-radius: 8px; background: #4f83e1; color: white; cursor: pointer;'>Return to Home</button>
                </div>
            `;
        }, 1000);
    }, 2000);
}

// Event listener for handling logout
document.getElementById('logout-btn').addEventListener('click', logout);