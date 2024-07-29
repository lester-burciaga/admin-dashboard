import { Navbar } from '@/components/organisms/Navbar';
import { Sidebar } from '@/components/organisms/Sidebar';

/**
 *
 * Main Layout
 *
 * @description It contains the main navigation and the view of the application.
 *
 */
function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh] w-[300px]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-[1140px]'>
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
