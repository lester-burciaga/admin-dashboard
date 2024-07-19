import { DashboardCard } from '@/components/molecules/DashboardCard';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import { PostTable } from '@/components/organisms/PostTable';

import posts from '@/data/post';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={10}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Categories'
          count={8}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={300}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={120}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>

      <PostTable limit={6} posts={posts} />
    </>
  );
}
