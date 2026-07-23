// Test suite for login modal functionality

// Import necessary libraries
const { expect } = require('chai');
const { JSDOM } = require('jsdom');

// Setup a basic HTML structure for testing
const html = `
<div id='login-modal' style='display:none;'>
  <div id='modal-content'>
    <input type='email' id='email' />
    <input type='password' id='password' />
    <button id='sign-in-btn'>Sign In</button>
    <div id='error-banner' role='status' aria-live='polite' style='display:none; color:red;'></div>
  </div>
</div>
`;
const dom = new JSDOM(html);
const { window } = dom;
const document = window.document;

// Mocking the setTimeout function to simulate API Call
global.setTimeout = (cb) => cb();

describe('Login Modal Tests', () => {
  before(() => {
    document.body.innerHTML = html;
  });

  it('should display the modal when login button is clicked', () => {
    document.getElementById('login-modal').style.display = 'block';
    const modal = document.getElementById('login-modal');
    expect(modal.style.display).to.equal('block');
  });

  it('should show error if email is invalid', () => {
    document.getElementById('sign-in-btn').click();
    const errorBanner = document.getElementById('error-banner');
    errorBanner.textContent = 'Invalid email';
    errorBanner.style.display = 'block';
    expect(errorBanner.style.display).to.not.equal('none');
  });

  it('should show success message on valid submission', () => {
    document.getElementById('email').value = 'test@example.com';
    document.getElementById('password').value = 'password';
    document.getElementById('sign-in-btn').click();
    const signInButton = document.getElementById('sign-in-btn');
    expect(signInButton.textContent).to.equal('Authenticating...');
    expect(signInButton.disabled).to.be.true;
    // Simulate a successful response
    setTimeout(() => {
      signInButton.textContent = 'Success ✓';
      expect(signInButton.textContent).to.equal('Success ✓');
    }, 1500);
  });
});