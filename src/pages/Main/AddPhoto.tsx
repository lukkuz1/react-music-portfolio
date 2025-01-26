import React, { useState } from "react";
import { Container, Typography, Box, Button, Input } from "@mui/material";

const AddPhotos = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      // Add logic to handle the image upload (e.g., Firebase, server, etc.)
      alert("Nuotrauka sėkmingai pridėta!");
    } else {
      alert("Prašome pasirinkti nuotrauką.");
    }
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4" align="center" className="page-title">
          Pridėti Nuotraukas
        </Typography>
        <Typography variant="body1" align="center" className="page-description">
          Pasirinkite ir pridėkite savo nuotraukas.
        </Typography>
        <Box className="upload-container" textAlign="center">
          <Input
            type="file"
            onChange={handleImageChange}
            inputProps={{ accept: "image/*" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            sx={{ marginTop: 2 }}
          >
            Įkelti Nuotrauką
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddPhotos;
