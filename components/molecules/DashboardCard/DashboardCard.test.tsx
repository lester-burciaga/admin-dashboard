import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardCard from './DashboardCard';

describe('<DashboardCard />', () => {
  beforeEach(() => {
    render(
      <DashboardCard
        title='Test Title'
        count={123}
        icon={<div data-testid='icon' />}
      />
    );
  });
  describe('when component is rendered', () => {
    it('should display the title', () => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should display the count', () => {
      expect(screen.getByText('123')).toBeInTheDocument();
    });

    it('should display the icon', () => {
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });
});
