import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthFormCardProps {
  /**
   * The title displayed at the top of the card, e.g., "Login" or "Create Account".
   */
  title: string;
  /**
   * The content of the form, typically including input fields, buttons, and links.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names for custom styling.
   */
  className?: string;
}

/**
 * A consistent wrapper component for authentication forms (login, registration, etc.).
 * It provides a standardized card layout with a title and content area.
 */
const AuthFormCard: React.FC<AuthFormCardProps> = ({ title, children, className }) => {
  console.log(`AuthFormCard loaded with title: ${title}`);

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default AuthFormCard;