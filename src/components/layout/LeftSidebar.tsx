import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ className }) => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
      isActive ? 'bg-muted text-primary' : ''
    }`;

  return (
    <aside className={cn("hidden border-r bg-muted/40 md:block", className)}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <span className="font-semibold">Portal Menu</span>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavLink to="/dashboard" className={navLinkClasses}>
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink to="/dashboard/profile" className={navLinkClasses}>
              <User className="h-4 w-4" />
              Profile
            </NavLink>
            <NavLink to="/dashboard/settings" className={navLinkClasses}>
              <Settings className="h-4 w-4" />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;