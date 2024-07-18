import { Card, CardContent } from '@/components/ui/card';

import type { DashboardCardProps } from './DashboardCardProps.type';

export default function DashboardCard({
  title,
  count,
  icon,
}: DashboardCardProps) {
  return (
    <Card className='bg-slate-100 dark:bg-slate-800 pb-0'>
      <CardContent className='flex flex-col items-center justify-center gap-2'>
        <h3 className='text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200'>
          {title}
        </h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-5xl font-semibold text-slate-500 dark:text-slate-200'>
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
