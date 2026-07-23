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

// Function to create the immersive landing page
function createLandingPage() {
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('landing-container');
    mainContainer.innerHTML = `
        <section class="hero">
            <h1 class="hero-title">Welcome to PRP</h1>
            <p class="hero-subtitle">Your gateway to seamless experiences.</p>
            <button class="cta-btn primary-btn">Get Started</button>
            <button class="cta-btn secondary-btn">Learn More</button>
        </section>
        <section class="features-grid">
            <div class="feature-card">Feature 1</div>
            <div class="feature-card">Feature 2</div>
            <div class="feature-card">Feature 3</div>
            <div class="feature-card">Feature 4</div>
        </section>
    `;
    document.body.appendChild(mainContainer);

    // Adding animations
    const heroSection = document.querySelector('.hero');
    const featureCards = document.querySelectorAll('.feature-card');
    heroSection.classList.add('animate-hero');

    featureCards.forEach((card, index) => {
        card.style.transition = 'transform 0.3s, box-shadow 0.3s';
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

// Event listener for landing page creation
document.addEventListener('DOMContentLoaded', () => {
    createLandingPage();
});

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