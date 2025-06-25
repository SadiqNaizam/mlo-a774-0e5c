import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';

// MSAL Imports
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '@/authConfig';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthenticatedTemplate>
           <AuthFormCard title="Welcome!">
              <div className="text-center space-y-4">
                <p>You are logged in.</p>
                <Button asChild>
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
           </AuthFormCard>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <AuthFormCard title="Welcome to the Portal">
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground">
                Please sign in with your Microsoft account to continue.
              </p>
              <Button onClick={handleLogin} className="w-full">
                Sign In
              </Button>
            </div>
          </AuthFormCard>
        </UnauthenticatedTemplate>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;