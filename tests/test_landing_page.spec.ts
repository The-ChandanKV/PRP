import { render, fireEvent, screen } from '@testing-library/react';
import LandingPage from '../public/index.html'; // Assuming LandingPage can be imported.

describe('Landing Page Tests', () => {
    test('renders hero section with title and CTAs', () => {
        render(<LandingPage />);
        const title = screen.getByText(/welcome to our application/i);
        const primaryCTA = screen.getByRole('button', { name: /get started/i });
        const secondaryCTA = screen.getByRole('button', { name: /learn more/i });
        expect(title).toBeInTheDocument();
        expect(primaryCTA).toBeInTheDocument();
        expect(secondaryCTA).toBeInTheDocument();
    });

    test('renders features grid with glassmorphism style', () => {
        render(<LandingPage />);
        const featuresGrid = screen.getByRole('grid');
        expect(featuresGrid).toBeInTheDocument();
        const featureCards = screen.getAllByRole('article'); // Assuming each feature is in an article.
        featureCards.forEach(card => {
            expect(card).toHaveStyle('background: rgba(255, 255, 255, 0.1);'); // glassmorphism style check
        });
    });

    test('checks interactions on feature cards', () => {
        render(<LandingPage />);
        const featureCard = screen.getByText(/feature 1/i); // Example feature
        fireEvent.mouseOver(featureCard);
        expect(featureCard).toHaveStyle('transform: scale(1.05);');
    });
});