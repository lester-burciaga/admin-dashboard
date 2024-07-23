import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackButton from './BackButton';

const text = 'Go back';
const link = '/home';

describe('<BackButton />', () => {
  beforeEach(() => {
    render(<BackButton text={text} link={link} />);
  });

  it('should renders button with text', () => {
    const backButtonElement = screen.getByRole('link', { name: /go back/i });
    expect(backButtonElement).toBeInTheDocument();
  });

  it('should renders button with link', () => {
    const backButtonElement = screen.getByRole('link', { name: /go back/i });
    expect(backButtonElement).toHaveAttribute('href', link);
  });
});
