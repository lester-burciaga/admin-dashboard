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

// Mock new input data
const mockNewPost = {
  title: 'New Title',
  body: 'New Body',
  author: 'New Author',
  date: 'New Date',
} as Post;

// Mock handle submit function
const mockHandleSubmit = jest.fn();

function getTitleInput() {
  return screen.getByLabelText('Title');
}

function getBodyInput() {
  return screen.getByLabelText('Body');
}

function getAuthorInput() {
  return screen.getByLabelText('Author');
}

function getDateInput() {
  return screen.getByLabelText('Date');
}

// Get submit button
const getSubmitButton = () => {
  return screen.getByRole('button', {
    name: 'Submit',
  });
};

// Fill form function
async function fillForm() {
  // Input form values
  await act(() => {
    fireEvent.change(getTitleInput(), {
      target: { value: mockNewPost.title },
    });
    fireEvent.change(getBodyInput(), {
      target: { value: mockNewPost.body },
    });
    fireEvent.change(getAuthorInput(), {
      target: { value: mockNewPost.author },
    });
    fireEvent.change(getDateInput(), {
      target: { value: mockNewPost.date },
    });
  });
}

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
      expect(getTitleInput()).toHaveValue(mockPost.title);
      expect(getBodyInput()).toHaveValue(mockPost.body);
      expect(getAuthorInput()).toHaveValue(mockPost.author);
      expect(getDateInput()).toHaveValue(mockPost.date);
    });
  });

  describe('with invalid data', () => {
    it('should display error messages', async () => {
      // Input empty form values

      fireEvent.change(getTitleInput(), {
        target: { value: '' },
      });
      fireEvent.change(getBodyInput(), {
        target: { value: '' },
      });
      fireEvent.change(getAuthorInput(), {
        target: { value: '' },
      });
      fireEvent.change(getDateInput(), {
        target: { value: '' },
      });

      fireEvent.click(getSubmitButton());

      expect(
        await screen.findByText('Title is required')
      ).toBeInTheDocument();
      expect(
        await screen.findByText('Body is required')
      ).toBeInTheDocument();
      expect(
        await screen.findByText('Author is required')
      ).toBeInTheDocument();
      expect(
        await screen.findByText('Date is required')
      ).toBeInTheDocument();
    });

    it('should "Submit" button be disabled', async () => {
      const submitButton = getSubmitButton();

      expect(submitButton).toBeDisabled();
    });
  });

  describe('with valid data', () => {
    it('should submits the form with the correct values', async () => {
      await act(() => {
        // Call fill form function
        fillForm();
        fireEvent.click(getSubmitButton());
      });

      expect(screen.getByRole('form')).toHaveFormValues({
        title: mockNewPost.title,
        body: mockNewPost.body,
        author: mockNewPost.author,
        date: mockNewPost.date,
      });
    });

    it('should "Submit" button be enabled', async () => {
      const submitButton = getSubmitButton();
      // Call fill form function
      fillForm();

      expect(submitButton).not.toBeDisabled();
    });
  });
});
