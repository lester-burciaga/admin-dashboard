/**
 *
 * Auth Layout
 *
 * @description It contains the authentication layout of the application
 * where the user can login or register before accessing the app.
 */
function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-[100vh] flex justify-center items-center relative'>
      {children}
    </div>
  );
}

export default AuthLayout;
