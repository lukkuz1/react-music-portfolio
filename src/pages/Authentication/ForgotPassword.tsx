import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import firebase from '../../services/firebase';

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      if (!email.trim()) {
        setError('Prašome įvesti teisingą el. paštą.');
        return;
      }
      await sendPasswordResetEmail(firebase.auth, email);
      setError('');
      alert('Slaptažodžio priminimo nuoroda išsiųsta į jūsų el. paštą.');
      navigate('/login');
    } catch (error: unknown) {
      if (error instanceof Error) {
        const firebaseError = error as unknown as { code: string; message: string };
        if (firebaseError.code === 'auth/invalid-email') {
          setError('Neteisingas el. paštas. Prašome įvesti teisingą el. paštą.');
        } else if (firebaseError.code === 'auth/user-not-found') {
          setError('Šis el. paštas nesusijęs su jokiu paskyros.');
        } else {
          setError('Nepavyko atlikti slaptažodžio priminimo: ' + firebaseError.message);
        }
      } else {
        setError('Nepavyko atlikti slaptažodžio priminimo: nežinoma klaida');
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ padding: '40px 20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '20px', color: '#007bff' }}>
          Slaptažodžio priminimas
        </Typography>

        {error && <Alert severity="error" sx={{ marginBottom: '20px' }}>{error}</Alert>}

        <TextField
          placeholder="Įveskite savo el. paštą"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText="Pavyzdys: pavyzdys@gmail.com"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '20px' }}
          onClick={handleForgotPassword}
        >
          Priminti slaptažodį
        </Button>

        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" color="black">
            Neturite paskyros?{'    '}
            <span
              style={{ color: '#007bff', fontWeight: '600', cursor: 'pointer' }}
              onClick={() => navigate('/register')}
            >
                 Pradėkite jau šiandien!
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}