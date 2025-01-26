import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, InputAdornment } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import './Register.css';
import { useAuth } from '../../hooks/useAuth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const status = await auth.signUp(email, password);
    if (typeof status === 'string') {
      console.log("Error Code: ", status);
      setError(status);
    } else if (status) {
      alert('Verifikacijos nuoroda išsiųsta. Patvirtinkite savo el. paštą!');
      navigate("/login");
    } else {
      console.log("Unexpected status: ", status);
    }
  };

  return (
    <div className="container">
      <div className="scrollViewContent">
        <div className="logo-container">
          {/* Optionally add logo here */}
        </div>
        <div className="rectangle">
          <Typography variant="h5" className="label">Registracija</Typography>
          {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}

          {/* Email Input with Icon on the Right */}
          <TextField
            placeholder="Įveskite savo el. paštą"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: email.length > 0, // Make the label float when there is any input
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon style={{ color: '#007bff', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Input with Icon on the Right */}
          <TextField
            type="password"
            placeholder="Įveskite savo slaptažodį"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: password.length > 0, // Make the label float when there is any input
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon style={{ color: '#007bff', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Sign-up Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUp}
            style={{ marginTop: 20 }}
          >
            Registruotis
          </Button>

          {/* Sign-In Link */}
          <div className="sign-up-container">
            <Typography variant="body2" className="sign-up-text">
              Jau turite paskyrą?{' '}
              <span
                className="sign-up-link"
                onClick={() => navigate('/login')}
              >
                Prisijungti!
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}