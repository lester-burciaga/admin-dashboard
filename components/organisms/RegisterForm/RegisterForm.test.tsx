import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterForm from './RegisterForm';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock register input data
const mockName = 'John Doe';
const mockEmail = 'john_doe@email.com';
const mockPassword = 'P@ssw0rd!';
const mockConfirmPassword = 'P@ssw0rd!';

function getNameInput() {
  return screen.getByRole('textbox', { name: /name/i });
}

function getEmailInput() {
  return screen.getByRole('textbox', { name: /email/i });
}

function getSubmitButton() {
  return screen.getByRole('button', { name: /sign up/i });
}

function getPasswordInput() {
  return screen.getByPlaceholderText('Password');
}

function getConfirmPasswordInput() {
  return screen.getByPlaceholderText(/confirm password/i);
}

// Fill form function using invalid data
function fillFormWithInvalidData() {
  act(() => {
    fireEvent.input(getNameInput(), {
      target: { value: '' },
    });
    fireEvent.input(getEmailInput(), {
      target: { value: 'fake@email' },
    });

    fireEvent.input(getPasswordInput(), {
      target: { value: '' },
    });

    fireEvent.input(getConfirmPasswordInput(), {
      target: { value: '' },
    });
  });
}

// Fill form function using valid data
function fillFormWithValidData() {
  act(() => {
    fireEvent.input(getNameInput(), {
      target: { value: mockName },
    });
    fireEvent.input(getEmailInput(), {
      target: { value: mockEmail },
    });
    fireEvent.input(getPasswordInput(), {
      target: { value: mockPassword },
    });
    fireEvent.input(getConfirmPasswordInput(), {
      target: { value: mockConfirmPassword },
    });
  });
}

describe('<RegisterForm />', () => {
  beforeEach(() => {
    render(<RegisterForm />);
  });

  it('should render the form', () => {
    const getForm = screen.getByRole('form');

    expect(getForm).toBeInTheDocument();
  });

  describe('when component is rendered', () => {
    it('should display the name input', () => {
      expect(
        screen.getByPlaceholderText(/name/i)
      ).toBeInTheDocument();
    });

    it('should display the email input', () => {
      expect(
        screen.getByPlaceholderText(/email/i)
      ).toBeInTheDocument();
    });

    it('should display the password input', () => {
      expect(getPasswordInput()).toBeInTheDocument();
    });

    it('should display the confirm password input', () => {
      expect(getConfirmPasswordInput()).toBeInTheDocument();
    });

    it('should display the "sign up" button disabled', () => {
      expect(getSubmitButton()).toBeDisabled();
    });
  });

  describe('with invalid inputs', () => {
    it('should display error messages', async () => {
      // Fill form
      fillFormWithInvalidData();

      // Click submit button
      fireEvent.click(getSubmitButton());

      const nameErrorMessage = await screen.findByText(
        /name is required/i
      );
      const emailErrorMessage = await screen.findByText(
        /please enter a valid email/i
      );
      const passwordErrorMessage = await screen.findByText(
        'Password is required'
      );
      const confirmPasswordErrorMessage =
        await screen.findByText(
          /confirm password is required/i
        );

      expect(nameErrorMessage).toBeInTheDocument();
      expect(emailErrorMessage).toBeInTheDocument();
      expect(passwordErrorMessage).toBeInTheDocument();
      expect(
        confirmPasswordErrorMessage
      ).toBeInTheDocument();
    });

    describe('when "Confirm password" does not match "Password"', () => {
      it('should display an error message', async () => {
        // Fill form
        fillFormWithInvalidData();

        act(() => {
          fireEvent.input(getConfirmPasswordInput(), {
            target: { value: 'abc123' },
          });

          fireEvent.click(getSubmitButton());
        });

        const confirmPasswordErrorMessage =
          await screen.findByText(
            /passwords do not match/i
          );

        expect(
          confirmPasswordErrorMessage
        ).toBeInTheDocument();
      });
    });
  });

  describe('when "Sign up" button is clicked', () => {
    beforeEach(() => {
      // Fill form
      fillFormWithValidData();
      // Click submit button
      fireEvent.click(getSubmitButton());
    });

    it('should submit the form with the correct values', async () => {
      expect(screen.getByRole('form')).toHaveFormValues({
        name: mockName,
        email: mockEmail,
        password: mockPassword,
        confirmPassword: mockConfirmPassword,
      });
    });

    it('should redirect to the home page', async () => {
      await waitFor(() => {
        expect(window.location.pathname).toBe('/');
      });
    });
  });
});
