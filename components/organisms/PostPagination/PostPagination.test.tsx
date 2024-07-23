import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostPagination from './PostPagination';

describe('<PostPagination />', () => {
  beforeEach(() => {
    render(<PostPagination />);
  });

  describe('when component is rendered', () => {
    it('should have "Previous" link text', () => {
      const prevLink = screen.getByRole('link', {
        name: /go to previous page/i,
      });
      const prevText = screen.getByText(/previous/i);

      expect(prevLink).toBeInTheDocument();
      expect(prevText).toBeInTheDocument();
    });

    it('should have "Next" link text', () => {
      const nextLink = screen.getByRole('link', {
        name: /go to next page/i,
      });
      const nextText = screen.getByText(/next/i);

      expect(nextLink).toBeInTheDocument();
      expect(nextText).toBeInTheDocument();
    });

    it('should have correct hrefs', () => {
      // Check that all the links have the correct hrefs

      expect(screen.getByRole('link', { name: /1/i })).toHaveAttribute(
        'href',
        '#'
      );
      expect(screen.getByRole('link', { name: /2/i })).toHaveAttribute(
        'href',
        '#'
      );
      expect(screen.getByRole('link', { name: /3/i })).toHaveAttribute(
        'href',
        '#'
      );
    });
  });
});
