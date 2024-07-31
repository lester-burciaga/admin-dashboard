'use client';
import { LoginForm } from '@/components/organisms/LoginForm';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

/**
 *
 * @typeDef AuthTabs
 *
 * Tabs used to switch between login and register forms
 */
export default function AuthTabs() {
  return (
    <Tabs defaultValue='login' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='login'>Login</TabsTrigger>
        <TabsTrigger value='register'>Register</TabsTrigger>
      </TabsList>
      <TabsContent value='login'>
        <LoginForm />
      </TabsContent>
      <TabsContent value='register'>Register.</TabsContent>
    </Tabs>
  );
}
