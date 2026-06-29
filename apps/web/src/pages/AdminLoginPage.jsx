
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ShieldAlert, ArrowLeft, AlertCircle } from 'lucide-react';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { adminLogin } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await adminLogin(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      if (err.message.includes('Unauthorized')) {
        setError('Access denied. Administrator privileges required.');
      } else {
        setError('Invalid credentials or account disabled.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enterprise Admin Login - StudentHub</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--admin-bg))] px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <ShieldAlert className="mx-auto h-12 w-12 text-destructive" />
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">
              Enterprise Administration
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Restricted access area. Authorized personnel only.
            </p>
          </div>

          <Card className="admin-panel-card shadow-2xl border-destructive/20">
            <CardHeader>
              <CardTitle className="text-xl">Secure Login</CardTitle>
              <CardDescription>Authenticate to access the admin control panel.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Administrator Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@studenthub.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="#" className="text-sm font-medium text-primary hover:underline" onClick={(e) => e.preventDefault()}>
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background text-foreground"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                    Remember this device for 30 days
                  </Label>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Authenticating...' : 'Authenticate'}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-border/50 pt-6">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to public portal
              </Link>
            </CardFooter>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            By logging in, you agree to the Enterprise Terms of Service and Privacy Policy.
            <br />Session will automatically timeout after 30 minutes of inactivity.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;
