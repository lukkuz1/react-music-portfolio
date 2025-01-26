import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Home/Header";
import Gallery from "../../components/Home/Gallery";
import ContactForm from "../../components/Home/ContactForm";
import Footer from "../../components/Home/Footer";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box className="hero-section"/>
      <Gallery />
      <ContactForm />
      <Footer />
    </Box>
  );
};

export default HomePage;