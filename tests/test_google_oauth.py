import unittest
from unittest.mock import patch

class TestGoogleOAuthLogin(unittest.TestCase):

    @patch('app.google_oauth')  # Mock the Google OAuth function
    def test_login_button_present(self, mock_google_oauth):
        # Assume mock_google_oauth returns True for successful login
        mock_google_oauth.return_value = True
        response = self.client.get('/login')  # Simulated login route
        self.assertIn('Login with Google', response.data)

    @patch('app.oauth_callback')  # Mock OAuth callback
    def test_oauth_callback(self, mock_oauth_callback):
        mock_oauth_callback.return_value = 'JWT_TOKEN'
        response = self.client.get('/oauth/callback')  # Simulated OAuth callback route
        self.assertEqual(response.data['token'], 'JWT_TOKEN')

    def test_logout_functionality(self):
        # Simulate user logout
        response = self.client.get('/logout')  # Simulated logout route
        self.assertIn('Logged out successfully', response.data)

if __name__ == '__main__':
    unittest.main()