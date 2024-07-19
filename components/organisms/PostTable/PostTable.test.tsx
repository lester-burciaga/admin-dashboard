import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostTable from './PostTable';
import type { Post } from '@/types/posts';

// Mock posts data sorted by date in descending order to avoid errors in tests
const mockPosts = [
  { id: '1', title: 'Post 1', author: 'Author 1', date: '2022-01-03' },
  { id: '2', title: 'Post 2', author: 'Author 2', date: '2022-01-02' },
  { id: '3', title: 'Post 3', author: 'Author 3', date: '2022-01-01' },
] as Post[];

describe('<PostTable />', () => {
  describe('when component is rendered', () => {
    describe('without data', () => {
      it('should display "No posts found" message', () => {
        render(<PostTable posts={[]} />);
        expect(screen.getByText('No posts found.')).toBeInTheDocument();
      });
    });

    describe('with data', () => {
      beforeEach(() => {
        render(<PostTable limit={2} title='Test Posts' posts={mockPosts} />);
      });

      it('should display the title', () => {
        expect(screen.getByRole('heading')).toHaveTextContent('Test Posts');
      });

      it('renders the correct data for each post', () => {
        const rows = screen.getAllByRole('row');
        // We must subtract first row here because the table header is also a row
        rows.shift();

        rows.forEach((row, index) => {
          const cells = row.querySelectorAll('td');
          expect(cells[0]).toHaveTextContent(mockPosts[index].title);
          expect(cells[1]).toHaveTextContent(mockPosts[index].author);
          expect(cells[2]).toHaveTextContent(mockPosts[index].date);
        });
      });
    });

    describe('with limit', () => {
      it('should display the correct number of posts', () => {
        render(<PostTable limit={2} title='Test Posts' posts={mockPosts} />);

        const rows = screen.getAllByRole('row');
        // We must subtract 1 here because the table header is also a row
        const expectedRows = rows.length - 1;

        expect(expectedRows).toBe(2);
      });
    });

    describe('without limit', () => {
      it('should display the correct number of posts', () => {
        render(<PostTable title='Test Posts' posts={mockPosts} />);

        const rows = screen.getAllByRole('row');
        // We must subtract 1 here because the table header is also a row
        const expectedRows = rows.length - 1;

        expect(expectedRows).toBe(mockPosts.length);
      });
    });
  });
});
