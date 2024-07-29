import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthTabs from './AuthTabs';

function getLoginTab() {
  return screen.getByRole('tab', { name: /login/i });
}

function getRegisterTab() {
  return screen.getByRole('tab', { name: /register/i });
}

describe('<AuthTabs />', () => {
  beforeEach(() => {
    render(<AuthTabs />);
  });

  describe('when component is rendered', () => {
    describe('with "Login" tab', () => {
      it('should be selected by default', () => {
        expect(
          screen.getByText('Login')
        ).toBeInTheDocument();
        expect(getLoginTab()).toHaveAttribute(
          'aria-selected',
          'true'
        );
      });
    });

    describe('with "Register" tab', () => {
      it('should not be selected', () => {
        expect(getRegisterTab()).toHaveAttribute(
          'aria-selected',
          'false'
        );
      });
    });
  });
});
