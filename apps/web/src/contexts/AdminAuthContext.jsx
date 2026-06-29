
import React, { createContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [adminLoading, setAdminLoading] = useState(true);

  const verifyAdminSession = () => {
    if (pb.authStore.isValid && pb.authStore.model?.role === 'admin') {
      setAdminUser(pb.authStore.model);
    } else {
      setAdminUser(null);
    }
    setAdminLoading(false);
  };

  useEffect(() => {
    verifyAdminSession();
  }, []);

  const adminLogin = async (email, password) => {
    const authData = await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
    
    if (authData.record.role !== 'admin') {
      pb.authStore.clear();
      throw new Error('Unauthorized: Admin access required');
    }
    
    setAdminUser(authData.record);
    return authData;
  };

  const adminLogout = () => {
    pb.authStore.clear();
    setAdminUser(null);
  };

  const isAdminAuthenticated = !!adminUser;

  return (
    <AdminAuthContext.Provider value={{ 
      adminUser, 
      adminLogin, 
      adminLogout, 
      isAdminAuthenticated, 
      adminLoading,
      verifyAdminSession
    }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
