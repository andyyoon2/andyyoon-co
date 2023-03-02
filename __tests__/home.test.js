import {render, screen} from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('should show contact button', () => {
    render(<Home />);
    const button = screen.getByRole('button', {name: /contact me/i});
    expect(button).toBeInTheDocument();
  });

  it('should link contact button to correct email', () => {
    render(<Home />);
    const link = screen.getByRole('link', {name: /contact me/i});
    expect(link).toHaveAttribute('href', 'mailto:insoo.yoon@proton.me');
  });

  it('should have link to view resume', () => {
    render(<Home />);
    const link = screen.getByRole('link', {name: /view resume/i});
    expect(link).toHaveAttribute('href', '/Andy-Yoon-resume.pdf');
  });
});
