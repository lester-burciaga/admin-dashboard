import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import PostForm from './PostForm';

describe('<PostForm />', () => {
  it('should render the form', () => {
    const handleSubmit = jest.fn();
    render(
      <PostForm
        post={undefined}
        handleSubmit={handleSubmit}
      />
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
