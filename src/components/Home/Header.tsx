import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the Home page
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffff', padding: '10px 0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: '20px' }}>
        <Typography
          variant="h6"
          sx={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            letterSpacing: '0.1rem',
            color: 'text.primary', // White text for better contrast
            '&:hover': {
              opacity: 0.8, // Slight fade effect on hover
            },
          }}
          onClick={handleHomeClick}
        >
          Šventės su Gediminu
        </Typography>

        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: '1rem',
              textTransform: 'capitalize',
              borderRadius: '20px', // Rounded button edges
              padding: '8px 16px', // Padding inside the button
              borderColor: '#007bff', // Blue border color
              '&:hover': {
                backgroundColor: '#007bff',
                color: '#fff',
              },
            }}
            onClick={handleLoginClick}
          >
            Prisijungti
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: '1rem',
              textTransform: 'capitalize',
              borderRadius: '20px', // Rounded button edges
              padding: '8px 16px', // Padding inside the button
              borderColor: '#007bff', // Blue border color
              '&:hover': {
                backgroundColor: '#007bff',
                color: '#fff',
              },
            }}
            onClick={handleRegisterClick}
          >
            Registruotis
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;