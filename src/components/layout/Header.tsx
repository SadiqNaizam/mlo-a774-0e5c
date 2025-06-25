import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, LogIn, LogOut, UserPlus, LayoutDashboard } from 'lucide-react';

// MSAL Imports
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '@/authConfig';

const Header: React.FC = () => {
  console.log('Header loaded');
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch(e => {
      console.error(e);
    });
  };
  
  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-muted text-primary'
        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">AngularAuth Portal</span>
        </Link>
        
        <nav className="flex items-center gap-2">
          <AuthenticatedTemplate>
            <>
              <NavLink to="/dashboard" className={navLinkClasses}>
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </NavLink>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          </AuthenticatedTemplate>
          
          <UnauthenticatedTemplate>
            <Button size="sm" onClick={handleLogin}>
              <LogIn className="mr-2 h-4 w-4" />
              Login / Register
            </Button>
          </UnauthenticatedTemplate>
        </nav>
      </div>
    </header>
  );
};

export default Header;