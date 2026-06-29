
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

const ProtectedAdminRoute = ({ children }) => {
  const { isAdminAuthenticated, adminLoading } = useAdminAuth();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--admin-bg))]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdminAuthenticated) {
    if (isAuthenticated) {
      // Logged in but not admin
      return <Navigate to="/dashboard" replace />;
    }
    // Not logged in at all
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
