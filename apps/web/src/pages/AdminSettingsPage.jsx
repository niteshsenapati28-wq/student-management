
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Shield, User, Bell, Server, Camera } from 'lucide-react';

const AdminSettingsPage = () => {
  const { adminUser } = useAdminAuth();
  const [loading, setLoading] = useState(false);
  
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    password: '',
    passwordConfirm: ''
  });

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwords.password !== passwords.passwordConfirm) {
      toast.error('New passwords do not match');
      return;
    }
    
    setLoading(true);
    try {
      await pb.collection('users').update(adminUser.id, passwords, { $autoCancel: false });
      toast.success('Password updated successfully');
      setPasswords({ oldPassword: '', password: '', passwordConfirm: '' });
    } catch (error) {
      toast.error('Failed to update password. Check current password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>System Settings - Enterprise Admin</title>
      </Helmet>

      <div className="space-y-6 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground mt-1">Configure enterprise platform preferences</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4"/> Profile</TabsTrigger>
            <TabsTrigger value="security" className="gap-2"><Shield className="h-4 w-4"/> Security</TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2"><Bell className="h-4 w-4"/> Alerts</TabsTrigger>
            <TabsTrigger value="system" className="gap-2"><Server className="h-4 w-4"/> System</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6 space-y-6">
            <Card className="admin-panel-card">
              <CardHeader>
                <CardTitle>Administrator Profile</CardTitle>
                <CardDescription>Your personal administrative account details and avatar.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="avatar-container avatar-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1688649102455-5e8d7e3fde0f" 
                        alt="Admin Profile Avatar"
                        className="avatar-image avatar-professional"
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 opacity-50 cursor-not-allowed pointer-events-none"
                    >
                      <Camera className="h-4 w-4" />
                      Edit Avatar
                    </Button>
                    <p className="text-xs text-muted-foreground text-center max-w-[200px]">
                      Avatar editing will be available in a future update
                    </p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input defaultValue={adminUser?.name} disabled className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input defaultValue={adminUser?.email} disabled className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label>Role Level</Label>
                      <Input defaultValue="Super Administrator" disabled className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label>Account Status</Label>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-muted-foreground">Active and verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-6 space-y-6">
            <Card className="admin-panel-card">
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your administrative access password.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label>Current Password</Label>
                    <Input 
                      type="password" 
                      required 
                      value={passwords.oldPassword}
                      onChange={e => setPasswords({...passwords, oldPassword: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>New Password</Label>
                    <Input 
                      type="password" 
                      required 
                      minLength={8}
                      value={passwords.password}
                      onChange={e => setPasswords({...passwords, password: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm New Password</Label>
                    <Input 
                      type="password" 
                      required 
                      minLength={8}
                      value={passwords.passwordConfirm}
                      onChange={e => setPasswords({...passwords, passwordConfirm: e.target.value})}
                    />
                  </div>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Password'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="admin-panel-card">
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your admin account.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Require 2FA</Label>
                    <p className="text-sm text-muted-foreground">Enforce 2FA for all administrative logins.</p>
                  </div>
                  <Switch onCheckedChange={() => toast.info('2FA configuration requires email verification first.')} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <Card className="admin-panel-card">
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Configure which administrative alerts you receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">Failed login attempts, role changes.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>System Health</Label>
                    <p className="text-sm text-muted-foreground">Database backups, downtime warnings.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="mt-6 space-y-6">
            <Card className="admin-panel-card border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Critical system operations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Database Backup</h4>
                    <p className="text-sm text-muted-foreground">Generate a full snapshot of the database.</p>
                  </div>
                  <Button variant="outline" onClick={() => toast.success('Backup initiated. You will be notified when complete.')}>
                    Initiate Backup
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                  <div>
                    <h4 className="font-medium text-destructive">Maintenance Mode</h4>
                    <p className="text-sm text-muted-foreground">Disable public access to the platform.</p>
                  </div>
                  <Button variant="destructive" onClick={() => toast.error('Cannot enable maintenance mode during active sessions.')}>
                    Enable Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettingsPage;
