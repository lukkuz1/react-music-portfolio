// Gallery Component
import React from "react";
import { Grid, Box, Card, CardContent, Typography, CardMedia, Container } from "@mui/material";

const Gallery: React.FC = () => {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ marginBottom: "20px", textAlign: "center", fontWeight: 700 }}>
          Galerija
        </Typography>
        <Grid container spacing={4}>
          {/* Example Album 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, '&:hover': { transform: 'scale(1.05)', transition: '0.3s' } }}>
              <CardMedia
                component="img"
                alt="Album cover"
                height="200"
                image="/logo/logo-main.jpg"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Albumas 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gedimino nuostabūs kūriniai, sukurti įkvėpimo ir emocijų...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Example Album 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, '&:hover': { transform: 'scale(1.05)', transition: '0.3s' } }}>
              <CardMedia
                component="img"
                alt="Album cover"
                height="200"
                image="/logo/logo-main.jpg"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Albumas 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kitas unikalus Gedimino kūrinys, pilnas šviesos ir tamsos...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Additional Albums Here */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;