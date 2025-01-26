import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Gallery from "../../components/Home/Gallery";
import Footer from "../../components/Home/Footer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <Box>
      <Container>
        <Box>
          <>
            <Typography variant="h4" align="center" className="welcome-text">
              Pagrindinis puslapis
            </Typography>
          </>
          <Box className="hero-section" />
        </Box>
      </Container>
      <Gallery />
      <Footer />
    </Box>
  );
};

export default MainPage;
