import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Typography, InputAdornment } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import './Login.css';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const status = await auth.signIn(email, password);
    if (status !== undefined) {
      setError("Blogas prisijungimas");
    }
    if (typeof status === 'string') {
      console.log("Error Code: ", status);
      setError(status);
    } else if (status) {
      alert('Prisijungimas sėkmingas!');
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
          <Typography variant="h5" className="label">Prisijungimas</Typography>
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

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label={<Typography variant="body2">Prisiminti mane</Typography>}
          />

          <div className="forgot-password-button">
            <Button onClick={() => navigate('/forgot-password')} color="primary" size="small">
              <Typography variant="body2">Pamiršote slaptažodį?</Typography>
            </Button>
          </div>

          {/* Login Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            style={{ marginTop: 20 }}
          >
            Prisijungti
          </Button>

          {/* Sign-up Link */}
          <div className="sign-up-container">
            <Typography variant="body2" className="sign-up-text">
              Neturite paskyros?{' '}
              <span
                className="sign-up-link"
                onClick={() => navigate('/register')}
              >
                Pradėkite jau šiandien!
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}