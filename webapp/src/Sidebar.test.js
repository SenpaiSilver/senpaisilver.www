import { render, screen, waitFor } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders learn react link', () => {
    render(<Sidebar />);

    expect(screen.getByText(/SenpaiSilver/i)).toBeInTheDocument();
    expect(screen.getByText(/YouTube/i)).toBeInTheDocument();
    expect(screen.getByText(/Twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Steam/i)).toBeInTheDocument();
});
