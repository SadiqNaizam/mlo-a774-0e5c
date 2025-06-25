import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';

// MSAL Imports
import { useMsal } from "@azure/msal-react";

/**
 * DashboardPage: The main landing page for authenticated users.
 * It provides a welcome message and serves as the main container for the application's features.
 */
const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const { accounts } = useMsal();
  
  const name = accounts[0]?.name;

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* The Header component manages its own state for showing authenticated vs. unauthenticated links */}\
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back{name ? `, ${name}!` : '!'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have successfully logged in. This is your personal dashboard, the central hub for all your activities within the AngularAuth Portal.
              </p>
              <p className="text-muted-foreground">
                You can navigate to different sections of the portal using the menu on the left.
              </p>
              {/* The logout button has been removed from here as it is now globally available in the Header. */}
            </CardContent>
          </Card>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;