import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PriceList = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" align="center" className="page-title">
          Kainorastis
        </Typography>
        <Typography variant="body1" align="center" className="page-description">
          Peržiūrėkite mūsų paslaugų kainas.
        </Typography>
        <Box className="price-list-container">
          <ul>
            <li>Paslauga 1: 50 EUR</li>
            <li>Paslauga 2: 75 EUR</li>
            <li>Paslauga 3: 100 EUR</li>
            <li>Paslauga 4: 150 EUR</li>
          </ul>
        </Box>
      </Box>
    </Container>
  );
};

export default PriceList;
