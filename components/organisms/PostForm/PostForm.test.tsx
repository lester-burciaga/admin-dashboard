import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import PostForm from './PostForm';
import type { Post } from '@/types/posts';
import { act } from 'react';

// Mock post data
const mockPost = {
  title: 'Test Title',
  body: 'Test Body',
  author: 'Test Author',
  date: 'Test Date',
} as Post;

// Mock handle submit function
const mockHandleSubmit = jest.fn();

// Get submit button
const getSubmitButton = () => {
  return screen.getByRole('button', {
    name: 'Submit',
  });
};

describe('<PostForm />', () => {
  beforeEach(() => {
    render(
      <PostForm
        post={mockPost}
        handleSubmit={mockHandleSubmit}
      />
    );
  });

  it('should render the form', () => {
    const getForm = screen.getByRole('form');

    expect(getForm).toBeInTheDocument();
  });

  describe('when form is rendered', () => {
    it('should set the form default values', () => {
      expect(screen.getByLabelText('Title')).toHaveValue(
        mockPost.title
      );
      expect(screen.getByLabelText('Body')).toHaveValue(
        mockPost.body
      );
      expect(screen.getByLabelText('Author')).toHaveValue(
        mockPost.author
      );
      expect(screen.getByLabelText('Date')).toHaveValue(
        mockPost.date
      );
    });
  });

  describe('with invalid data', () => {
    it('should display error messages', async () => {
      const submitButton = getSubmitButton();

      // Input empty form values
      await act(() => {
        fireEvent.change(screen.getByLabelText('Title'), {
          target: { value: '' },
        });
        fireEvent.change(screen.getByLabelText('Body'), {
          target: { value: '' },
        });
        fireEvent.change(screen.getByLabelText('Author'), {
          target: { value: '' },
        });
        fireEvent.change(screen.getByLabelText('Date'), {
          target: { value: '' },
        });

        fireEvent.click(submitButton);
      });

      expect(
        screen.getByText('Title is required')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Body is required')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Author is required')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Date is required')
      ).toBeInTheDocument();
    });
  });

  describe('with valid data', () => {
    it('should submits the form with the correct values', async () => {
      const submitButton = getSubmitButton();

      // Input form values
      await act(() => {
        fireEvent.change(screen.getByLabelText('Title'), {
          target: { value: 'New Title' },
        });
        fireEvent.change(screen.getByLabelText('Body'), {
          target: { value: 'New Body' },
        });
        fireEvent.change(screen.getByLabelText('Author'), {
          target: { value: 'New Author' },
        });
        fireEvent.change(screen.getByLabelText('Date'), {
          target: { value: 'New Date' },
        });

        fireEvent.click(submitButton);
      });

      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
