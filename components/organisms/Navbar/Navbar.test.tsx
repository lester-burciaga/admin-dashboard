import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { describe } from 'node:test';

jest.mock('../ui/dropdown-menu', () => {
  const originalModule = jest.requireActual(
    '../ui/dropdown-menu'
  );
  return {
    ...originalModule,
    DropdownMenu: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <div>{children}</div>,
    DropdownMenuTrigger: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <div>{children}</div>,
    DropdownMenuContent: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <div>{children}</div>,
    DropdownMenuItem: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <div>{children}</div>,
    DropdownMenuLabel: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <div>{children}</div>,
    DropdownMenuSeparator: () => <hr />,
  };
});

describe('<Navbar />', () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  describe('when component is rendered', () => {
    it('should checks logo alt text', () => {
      const logo = screen.getByAltText(/logo/i);
      expect(logo).toBeInTheDocument();
    });

    it('should checks avatar fallback content', () => {
      const fallbackContent = screen.getByText(/lb/i);
      expect(fallbackContent).toBeInTheDocument();
    });

    it('should checks dropdown menu links', async () => {
      expect(
        screen.getByText(/my account/i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /profile/i })
      ).toHaveAttribute('href', '/profile');
      expect(
        screen.getByRole('link', { name: /logout/i })
      ).toHaveAttribute('href', '/auth');
    });
  });
});
