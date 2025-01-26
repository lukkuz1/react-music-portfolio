import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" align="center" className="contact-header">
          Kontaktai
        </Typography>
        <TextField
          label="Your Message"
          placeholder="Enter your message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 20 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;