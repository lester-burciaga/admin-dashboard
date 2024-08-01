import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggler from './ThemeToggler';

describe('ThemeToggler', () => {
  beforeEach(() => {
    render(<ThemeToggler />);
  });

  it('should render the component', () => {
    const button = screen.getByRole('button', {
      name: /toggle theme/i,
    });
    expect(button).toBeInTheDocument();
  });
});
