
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { AdminAuthProvider } from '@/contexts/AdminAuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ScrollToTop from '@/components/ScrollToTop';
import ProtectedRoute from '@/components/ProtectedRoute';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute.jsx';

// Public & User Pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import StudentPage from '@/pages/StudentPage';
import DepartmentPage from '@/pages/DepartmentPage';
import CoursePage from '@/pages/CoursePage';
import EnrollmentPage from '@/pages/EnrollmentPage';
import SearchPage from '@/pages/SearchPage';
import SettingsPage from '@/pages/SettingsPage';

// Admin Pages
import AdminLoginPage from '@/pages/AdminLoginPage';
import AdminDashboardPage from '@/pages/AdminDashboardPage';
import AdminUserManagementPage from '@/pages/AdminUserManagementPage';
import AdminActivityLogsPage from '@/pages/AdminActivityLogsPage';
import AdminSettingsPage from '@/pages/AdminSettingsPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AdminAuthProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>} />
              <Route path="/admin/users" element={<ProtectedAdminRoute><AdminUserManagementPage /></ProtectedAdminRoute>} />
              <Route path="/admin/logs" element={<ProtectedAdminRoute><AdminActivityLogsPage /></ProtectedAdminRoute>} />
              <Route path="/admin/settings" element={<ProtectedAdminRoute><AdminSettingsPage /></ProtectedAdminRoute>} />

              {/* Standard Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="/students" element={<ProtectedRoute><StudentPage /></ProtectedRoute>} />
              <Route path="/departments" element={<ProtectedRoute><DepartmentPage /></ProtectedRoute>} />
              <Route path="/courses" element={<ProtectedRoute><CoursePage /></ProtectedRoute>} />
              <Route path="/enrollments" element={<ProtectedRoute><EnrollmentPage /></ProtectedRoute>} />
              <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            </Routes>
            <Toaster position="top-right" />
          </Router>
        </AdminAuthProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
