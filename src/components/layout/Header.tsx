import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, LogIn, LogOut, UserPlus, LayoutDashboard } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  // In a real app, you would get this from an AuthContext or a global state manager.
  // This is for demonstration purposes only.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    // In a real app, you would also clear tokens and redirect.
    navigate('/');
  };
  
  // This is a mock login for demonstration purposes to see the authenticated state.
  const handleMockLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  }

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
          {isAuthenticated ? (
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
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/registration">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Link>
              </Button>
              {/* This button is for demonstration only to view the authenticated header */}
              <Button size="sm" variant="secondary" onClick={handleMockLogin}>
                (Test Auth)
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;