// JavaScript for logout functionality

// Function to handle logout
function logout() {
    // Show the spinner immediately
    document.body.innerHTML = `
        <div style='display: flex; align-items: center; justify-content: center; height: 100vh; background: rgba(0, 0, 0, 0.8); color: white; flex-direction: column;'>
            <div class='spinner'>
                <div class='loader'></div>
                <p>Securely logging you out...</p>
            </div>
        </div>
    `;

    // Call the logout API
    fetch('/api/v1/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Logout failed');
        }
        return response.json();
    })
    .then(data => {
        // Clear local storage session data
        localStorage.removeItem('prp_display_name');
        localStorage.removeItem('theme');
        localStorage.removeItem('session_token');
        console.log('User session data cleared');

        // Show success message after a short delay
        setTimeout(() => {
            document.body.innerHTML = `
                <div style='display: flex; align-items: center; justify-content: center; height: 100vh; background: rgba(0, 0, 0, 0.8); color: white; flex-direction: column;'>
                    <h1>You have been successfully logged out</h1>
                    <button onclick='window.location.href="/index.html"' style='padding: 0.75rem 1.25rem; border: none; border-radius: 8px; background: #4f83e1; color: white; cursor: pointer;'>Return to Home</button>
                </div>
            `;
        }, 1000);
    })
    .catch(error => {
        console.error('Logout error:', error);
        document.body.innerHTML = `
            <div style='display: flex; align-items: center; justify-content: center; height: 100vh; background: rgba(0, 0, 0, 0.8); color: white; flex-direction: column;'>
                <h1>Logout failed</h1>
                <p>${error.message}</p>
                <button onclick='window.location.href="/index.html"' style='padding: 0.75rem 1.25rem; border: none; border-radius: 8px; background: #4f83e1; color: white; cursor: pointer;'>Return to Home</button>
            </div>
        `;
    });
}

// Event listener for handling logout
document.getElementById('logout-btn').addEventListener('click', logout);
