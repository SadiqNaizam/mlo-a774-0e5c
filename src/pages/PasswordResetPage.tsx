import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MailCheck, AlertCircle, Loader2 } from 'lucide-react';

const PasswordResetPage = () => {
  console.log('PasswordResetPage loaded');

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real application, you would make an API call here.
    // For this demo, we will always show a success message to avoid user enumeration attacks.
    setMessage('If an account with that email exists, we have sent a password reset link.');
    setEmail('');
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <AuthFormCard title="Reset Password">
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Enter your email address and we will send you a link to get back into your account.
            </p>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {message && (
              <Alert variant="default" className="bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700">
                <MailCheck className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800 dark:text-green-300">Request Sent</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-400">
                  {message}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </Button>
            
            <div className="text-center text-sm">
              <Link to="/" className="text-primary hover:underline">
                Back to Login
              </Link>
            </div>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default PasswordResetPage;