describe('Logout Page Tests', () => {
    it('should navigate to logout page when logout button is clicked', () => {
        // simulate click on logout button
        const logoutButton = document.getElementById('logout-btn');
        logoutButton.click();

        // verify redirection
        expect(window.location.pathname).toBe('/logout.html');
    });

    it('should clear local storage on logout', (done) => {
        // set local storage
document.localStorage.setItem('prp_display_name', 'testUser');
        document.localStorage.setItem('theme', 'dark');

        // trigger logout logic
        const script = document.createElement('script');
        script.src = '/public/js/logout.js';
        document.body.appendChild(script);

        // wait for the mock API call
        script.onload = () => {
            expect(localStorage.getItem('prp_display_name')).toBe(null);
            expect(localStorage.getItem('theme')).toBe(null);
            done();
        };
    });

    it('should display success message after mock API call', (done) => {
        const script = document.createElement('script');
        script.src = '/public/js/logout.js';
        document.body.appendChild(script);

        // check the DOM for success message
        script.onload = () => {
            // assuming there is an element with id `success-message`
            const successMessage = document.getElementById('success-message');
            setTimeout(() => {
                expect(successMessage.textContent).toBe('You have been successfully logged out');
                done();
            }, 2000);
        };
    });
});