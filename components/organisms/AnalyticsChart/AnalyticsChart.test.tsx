import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsChart from './AnalyticsChart';
import { AnalyticsItem } from '@/types/analytics';

// Create a mock ResizeObserver
let MockObserverInstance: ResizeObserver;

// Mock chart data
const mockChartData = [
  { name: 'January', uniqueViews: 100, pageViews: 100, amountTimeOnSite: 100 },
  { name: 'February', uniqueViews: 200, pageViews: 200, amountTimeOnSite: 200 },
  { name: 'March', uniqueViews: 300, pageViews: 300, amountTimeOnSite: 300 },
] as AnalyticsItem[];

// Mock chart title
const mockTitle = 'Analytics For This Year';

// Mock chart description
const mockDescription = 'Views Per Month';

describe('AnalyticsChart', () => {
  beforeEach(() => {
    // Mock ResizeObserver to avoid errors in tests
    MockObserverInstance = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
    // Replace ResizeObserver with MockObserverInstance
    global.ResizeObserver = jest
      .fn()
      .mockImplementation(() => MockObserverInstance);
  });

  describe('<AnalyticsChart />', () => {
    beforeEach(() => {
      render(
        <AnalyticsChart
          title={mockTitle}
          description={mockDescription}
          lineDataKey={'uniqueViews'}
          xAxisDataKey={'name'}
          data={mockChartData}
        />
      );
    });

    describe('when component is rendered', () => {
      it('should display the chart title', () => {
        const cardTitleElement = screen.getByText(mockTitle);
        expect(cardTitleElement).toBeInTheDocument();
      });

      it('should display the chart description', () => {
        const cardDescriptionElement = screen.getByText(mockDescription);
        expect(cardDescriptionElement).toBeInTheDocument();
      });
    });
  });
});
