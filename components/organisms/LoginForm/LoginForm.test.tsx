import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock login input data
const mockEmail = 'john_doe@email.com';
const mockPassword = 'p@ssw0rd!';

function getSubmitButton() {
  return screen.getByRole('button', { name: /sign in/i });
}

// Fill form function using valid data
function fillForm() {
  fireEvent.input(
    screen.getByRole('textbox', { name: /email/i }),
    { target: { value: mockEmail } }
  );

  fireEvent.input(screen.getByLabelText(/password/i), {
    target: { value: mockPassword },
  });
}

describe('<LoginForm />', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it('should display the login form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  describe('when component is rendered', () => {
    it('should display the "email" input', () => {
      expect(
        screen.getByPlaceholderText(/email/i)
      ).toBeInTheDocument();
    });

    it('should display the "password" input', () => {
      expect(
        screen.getByPlaceholderText(/password/i)
      ).toBeInTheDocument();
    });

    it('should display the "login" button disabled', () => {
      expect(getSubmitButton()).toBeDisabled();
    });
  });

  describe('with invalid inputs', () => {
    it('should display error messages', async () => {
      fireEvent.input(
        screen.getByRole('textbox', { name: /email/i }),
        { target: { value: 'fake@email' } }
      );

      fireEvent.input(screen.getByLabelText(/password/i), {
        target: { value: '' },
      });

      fireEvent.click(getSubmitButton());

      const emailErrorMessage = await screen.findByText(
        /please enter a valid email/i
      );
      const passwordErrorMessage = await screen.findByText(
        /password is required/i
      );

      expect(emailErrorMessage).toBeInTheDocument();
      expect(passwordErrorMessage).toBeInTheDocument();
    });
  });

  describe('when "Submit" button is clicked', () => {
    beforeEach(() => {
      // Input form values
      fillForm();
    });

    it('should submits the form with the correct values', async () => {
      // Click submit button
      fireEvent.click(getSubmitButton());

      expect(screen.getByRole('form')).toHaveFormValues({
        email: mockEmail,
        password: mockPassword,
      });
    });

    it('should redirect to the home page', async () => {
      // Click submit button
      fireEvent.click(getSubmitButton());

      await waitFor(() => {
        expect(window.location.pathname).toBe('/');
      });
    });
  });
});
