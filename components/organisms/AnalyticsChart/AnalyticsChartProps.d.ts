import type { AnalyticsItem } from '@/types/analytics';

/**
 * @typedef AnalyticsChartProps
 *
 * @property {string} title - Chart title
 * @property {string} description - Chart description
 * @property {string} lineDataKey - Line data key parameter for the chart e.g. 'uniqueViews'
 * @property {string} xAxisDataKey - Data key parameter for the X axis e.g. 'name'
 * @property {string} yAxisDataKey - Data key parameter for the Y axis e.g. 'amountTimeOnSite'
 * @property {AnalyticsItem[]} data - Array of analytics items
 *
 **/
interface AnalyticsChartProps {
  title: string;
  description: string;
  lineDataKey: string;
  xAxisDataKey: string;
  yAxisDataKey?: string;
  data: AnalyticsItem[];
}
