import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';
import * as ResizeObserverModule from 'resize-observer-polyfill';

// Mock ResizeObserver to avoid errors in tests
(global as any).ResizeObserver = ResizeObserverModule.default;
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('<Sidebar />', () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  describe('when component is rendered', () => {
    it('should display the search bar', () => {
      expect(
        screen.getByPlaceholderText(/type a command or search/i)
      ).toBeInTheDocument();
    });

    it('should display the "suggestions" menu items', () => {
      expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
      expect(screen.getByText(/posts/i)).toBeInTheDocument();
      expect(screen.getByText(/categories/i)).toBeInTheDocument();
    });

    it('should display the "settings" menu items', () => {
      expect(screen.getByText(/profile/i)).toBeInTheDocument();
      expect(screen.getByText(/billing/i)).toBeInTheDocument();
      expect(screen.getByText(/configuration/i)).toBeInTheDocument();
    });
  });
});
