import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { FaFacebook, FaYoutube, FaPhone } from "react-icons/fa"; // Import icons from react-icons

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ marginBottom: "10px" }}>
          @ 2025 Šventės su Gediminu. Visos teisės saugomos.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link
            href="https://www.facebook.com/vakaraisugediminu"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={{ fontSize: "24px", marginRight: "8px" }} />
          </Link>
          <Link
            href="tel:+37062925270"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FaPhone style={{ fontSize: "24px", marginRight: "8px" }} />
          </Link>
          <Link
            href="https://www.youtube.com/@gediminasgaubys3527/videos"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube style={{ fontSize: "24px", marginRight: "8px" }} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;