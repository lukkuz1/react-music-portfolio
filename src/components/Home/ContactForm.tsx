import React from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";

const ContactForm: React.FC = () => {
  return (
    <Box sx={{ padding: "60px 0", backgroundColor: "#fff" }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "1.8rem",
            color: "#333",
          }}
        >
          Susisiekite su Gediminu
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            fullWidth
            label="Jūsų Vardas"
            variant="outlined"
            sx={{
              marginBottom: "20px",
              '& .MuiInputBase-root': {
                borderRadius: "8px",
                backgroundColor: "#fff",
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#ddd", // Soft border color
                },
                '&:hover fieldset': {
                  borderColor: "#007bff", // Hover effect with blue color
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#007bff", // Focus state
                },
              },
              '& .MuiInputLabel-root': {
                color: "#007bff", // Blue label color when not focused
              },
            }}
          />
          <TextField
            fullWidth
            label="Jūsų El. Paštas"
            type="email"
            variant="outlined"
            sx={{
              marginBottom: "20px",
              '& .MuiInputBase-root': {
                borderRadius: "8px",
                backgroundColor: "#fff",
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#ddd", // Soft border color
                },
                '&:hover fieldset': {
                  borderColor: "#007bff", // Hover effect with blue color
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#007bff", // Focus state
                },
              },
              '& .MuiInputLabel-root': {
                color: "#007bff", // Blue label color when not focused
              },
            }}
          />
          <TextField
            fullWidth
            label="Žinutė"
            multiline
            rows={4}
            variant="outlined"
            sx={{
              marginBottom: "30px",
              '& .MuiInputBase-root': {
                borderRadius: "8px",
                backgroundColor: "#fff",
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#ddd", // Soft border color
                },
                '&:hover fieldset': {
                  borderColor: "#007bff", // Hover effect with blue color
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#007bff", // Focus state
                },
              },
              '& .MuiInputLabel-root': {
                color: "#007bff", // Blue label color when not focused
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: "12px 20px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "600",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: "#0056b3",
              },
            }}
          >
            Siųsti Žinutę
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;