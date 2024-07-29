import { AuthTabs } from '@/components/molecules/AuthTabs';

/**
 *
 * Auth Page
 *
 * @description This page needs to be in a folder named `auth`
 * to prevent namespace collisions with 'main' page.
 */
function AuthPage() {
  return (
    <>
      <AuthTabs />
    </>
  );
}

export default AuthPage;
