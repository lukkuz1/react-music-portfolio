import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Rezervations = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" align="center" className="page-title">
          Visos rezervacijos
        </Typography>
        <Typography variant="body1" align="center" className="page-description">
          Detalus rezervacijos valdymas
        </Typography>
        <Box className="price-list-container">
          <ul>

          </ul>
        </Box>
      </Box>
    </Container>
  );
};

export default Rezervations;
