import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterForm from './RegisterForm';

describe('<RegisterForm />', () => {
  beforeEach(() => {
    render(<RegisterForm />);
  });

  it('should render the form', () => {
    const getForm = screen.getByRole('form');

    expect(getForm).toBeInTheDocument();
  });

  describe('when component is rendered', () => {
    it('should display the form', () => {});
  });
});
