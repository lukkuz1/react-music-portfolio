import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { AuthProvider } from './hooks/useAuth';
import { UserProvider } from './hooks/useUser';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AuthProvider>
          <AppNavigation />
        </AuthProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
