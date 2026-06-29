
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Users, Building2, BookOpen, ClipboardList, Activity, Download, Server, ShieldCheck } from 'lucide-react';
import { format } from 'date-fns';

const AdminDashboardPage = () => {
  const { adminUser } = useAdminAuth();
  const [stats, setStats] = useState({
    students: 0,
    departments: 0,
    courses: 0,
    enrollments: 0,
    users: 0
  });
  const [recentLogs, setRecentLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [students, departments, courses, enrollments, users, logs] = await Promise.all([
          pb.collection('students').getList(1, 1, { $autoCancel: false }),
          pb.collection('departments').getList(1, 1, { $autoCancel: false }),
          pb.collection('courses').getList(1, 1, { $autoCancel: false }),
          pb.collection('enrollments').getList(1, 1, { $autoCancel: false }),
          pb.collection('users').getList(1, 1, { $autoCancel: false }),
          pb.collection('activityLogs').getList(1, 5, { 
            sort: '-created', 
            expand: 'adminId',
            $autoCancel: false 
          }),
        ]);

        setStats({
          students: students.totalItems,
          departments: departments.totalItems,
          courses: courses.totalItems,
          enrollments: enrollments.totalItems,
          users: users.totalItems
        });
        setRecentLogs(logs.items);
      } catch (error) {
        console.error('Failed to fetch admin dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    { title: 'Total Users', value: stats.users, icon: Users, desc: 'Registered accounts' },
    { title: 'Total Students', value: stats.students, icon: BookOpen, desc: 'Active records' },
    { title: 'Departments', value: stats.departments, icon: Building2, desc: 'Academic units' },
    { title: 'Enrollments', value: stats.enrollments, icon: ClipboardList, desc: 'Course registrations' },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Admin Dashboard - Enterprise</title>
      </Helmet>

      <div className="space-y-8">
        <Card className="admin-panel-card border-l-4 border-l-[hsl(var(--admin-accent))]">
          <CardContent className="pt-6">
            <div className="flex items-center gap-6">
              <div className="avatar-container avatar-md">
                <img 
                  src="https://images.unsplash.com/photo-1688649102455-5e8d7e3fde0f" 
                  alt="Admin Profile Avatar"
                  className="avatar-image avatar-header"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight">
                  {getGreeting()}, {adminUser?.name || 'Administrator'}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Welcome back to the enterprise administration panel
                </p>
              </div>
              <Badge variant="outline" className="hidden sm:inline-flex bg-green-500/10 text-green-500 border-green-500/20">
                System Operational
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
            <p className="text-muted-foreground mt-1">Enterprise administration and monitoring</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="admin-panel-card">
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-24" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
            ))
          ) : (
            statCards.map((stat, index) => (
              <Card key={index} className="admin-panel-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="admin-panel-card lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Administrative Activity</CardTitle>
                  <CardDescription>Latest actions performed by administrators</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/admin/logs">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : recentLogs.length > 0 ? (
                <div className="space-y-4">
                  {recentLogs.map((log) => (
                    <div key={log.id} className="flex items-start gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0">
                      <div className="mt-1 bg-muted p-2 rounded-full">
                        <Activity className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {log.expand?.adminId?.name || 'Unknown Admin'} <span className="text-muted-foreground font-normal">performed</span> {log.action} <span className="text-muted-foreground font-normal">on</span> {log.entityType}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Entity ID: {log.entityId}
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {format(new Date(log.created), 'MMM d, HH:mm')}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No recent activity found.
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="admin-panel-card">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Database Status</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Auth Service</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Operational</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="admin-panel-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/admin/users">Manage Users</Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/admin/settings">System Settings</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
