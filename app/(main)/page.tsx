import { DashboardCard } from '@/components/molecules/DashboardCard';
import {
  Folder,
  MessageCircle,
  Newspaper,
  User,
} from 'lucide-react';
import { PostTable } from '@/components/organisms/PostTable';
import { AnalyticsChart } from '@/components/organisms/AnalyticsChart';

import posts from '@/data/post';
import data from '@/data/analytics';

/**
 *
 * Home Page
 *
 * @description It displays a set of cards with statistics about the site,
 * a table of posts, and a line chart with unique views per month as
 * the main content.
 */
export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={10}
          icon={
            <Newspaper
              className='text-slate-500'
              size={72}
            />
          }
        />
        <DashboardCard
          title='Categories'
          count={8}
          icon={
            <Folder className='text-slate-500' size={72} />
          }
        />
        <DashboardCard
          title='Users'
          count={300}
          icon={
            <User className='text-slate-500' size={72} />
          }
        />
        <DashboardCard
          title='Comments'
          count={120}
          icon={
            <MessageCircle
              className='text-slate-500'
              size={72}
            />
          }
        />
      </div>
      <AnalyticsChart
        title={'Analytics For This Year'}
        description={'Views Per Month'}
        lineDataKey={'uniqueViews'}
        xAxisDataKey={'name'}
        data={data}
      />
      <PostTable limit={6} posts={posts} />
    </>
  );
}
