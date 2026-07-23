// Auth flow will be implemented by PRPilot (SCRUM-5)
console.log("PRP app loaded");

// Function to handle logout
function logout() {
    // Clear JWT and perform logout actions here
    console.log("User logged out");
    // Here you would typically clear the token from local storage or state
    window.location.href = 'logout.html';
}

// Function to initiate Google login
function initiateGoogleLogin() {
    // Logic to handle Google OAuth login
    console.log("Initiating Google OAuth login");
    // Here, trigger the Google OAuth API, handle the response, etc.
}

// Event listener for logout button (to be added in HTML)
document.getElementById('logout-btn').addEventListener('click', logout);

// Event listener for login button (to be added in HTML)
document.getElementById('login-btn').addEventListener('click', initiateGoogleLogin);

// Modal logic
const loginModal = document.createElement('div');
loginModal.id = 'login-modal';
loginModal.innerHTML = `
<div class="modal-backdrop" id="backdrop"></div>
<div class="modal">
    <div class="modal-content">
        <h2>Login</h2>
        <div id="error-banner" aria-live="polite" role="status" style="display:none; color:red;"></div>
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <button id="sign-in-btn">Sign In</button>
    </div>
</div>
`;
document.body.appendChild(loginModal);

document.getElementById('login-btn').addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.getElementById('email').focus();
});

document.getElementById('sign-in-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorBanner = document.getElementById('error-banner');
    errorBanner.style.display = 'none';

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errorBanner.textContent = 'Please enter a valid email.';
        errorBanner.style.display = 'block';
        return;
    }

    document.getElementById('sign-in-btn').textContent = 'Authenticating...';
    document.getElementById('sign-in-btn').disabled = true;

    setTimeout(() => {
        document.getElementById('sign-in-btn').textContent = 'Success ✓';
        document.getElementById('sign-in-btn').style.backgroundColor = 'green';
        setTimeout(() => {
            loginModal.style.display = 'none';
            document.getElementById('login-btn').textContent = 'Logout';
        }, 1500);
    }, 1500);
});

document.getElementById('backdrop').addEventListener('click', () => {
    loginModal.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        loginModal.style.display = 'none';
    }
});

// Scroll-triggered animations
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('active');
        }
    });
};
// Initial call to reveal elements on the first load
revealOnScroll();
// Event listener for scroll events
window.addEventListener('scroll', revealOnScroll);
