
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Users,
  Activity,
  Settings,
  LogOut,
  Menu,
  X,
  ShieldAlert
} from 'lucide-react';

const adminNavigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'User Management', href: '/admin/users', icon: Users },
  { name: 'Activity Logs', href: '/admin/logs', icon: Activity },
  { name: 'System Settings', href: '/admin/settings', icon: Settings },
];

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { adminUser, adminLogout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex flex-col admin-surface">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-card))] text-[hsl(var(--admin-card-foreground))]">
        <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 lg:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <ShieldAlert className="h-6 w-6 text-destructive" />
            <span className="text-xl font-bold tracking-tight">
              StudentHub <span className="text-muted-foreground font-normal">Enterprise</span>
            </span>
          </Link>

          <div className="ml-auto flex items-center space-x-4">
            <Badge variant="destructive" className="hidden sm:inline-flex">
              Admin Privileges Active
            </Badge>
            <div className="hidden sm:flex flex-col items-end mr-4">
              <span className="text-sm font-medium">{adminUser?.name || 'Administrator'}</span>
              <span className="text-xs text-muted-foreground">{adminUser?.email}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Admin Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={cn(
            'fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-sidebar))] text-[hsl(var(--admin-sidebar-foreground))] transition-transform duration-200 lg:translate-x-0 lg:static',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <nav className="flex flex-col gap-2 p-4">
            <div className="px-3 py-2 mb-2">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Administration
              </h2>
            </div>
            {adminNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-[hsl(var(--admin-accent))] text-[hsl(var(--admin-accent-foreground))]'
                      : 'text-muted-foreground hover:bg-white/10 hover:text-white'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
