'use client';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { AnalyticsChartProps } from './AnalyticsChartProps';

/**
 * AnalyticsChart
 *
 * It displays a line chart that includes unique views per month.
 *
 * @implements recharts - A composable charting library built on React components
 * @link https://recharts.org/en-US/getting-started
 *
 */
export default function AnalyticsChart({
  title,
  description,
  lineDataKey,
  xAxisDataKey,
  yAxisDataKey,
  data,
}: AnalyticsChartProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='w-full h-[300px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart width={500} height={300} data={data}>
                <Line type='monotone' dataKey={lineDataKey} stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey={xAxisDataKey} />
                <YAxis dataKey={yAxisDataKey} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
