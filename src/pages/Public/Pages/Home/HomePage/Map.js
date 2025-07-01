import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Map = ({ height = "400px", src }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 10 },
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        sx={{
          color: "#ffffff",
          letterSpacing: 1.5,
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          "&::after": {
            content: '""',
            display: "block",
            margin: "10px auto 0",
            width: "60px",
            height: "4px",
            background: theme.palette.secondary.main,
            borderRadius: 2,
          },
        }}
      >
        Find Us on Map
      </Typography>

      {/* Map Container */}
     <Box
  sx={{
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 3,
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,0.15)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    transition: "0.4s ease",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
    },
  }}
>
  <iframe
    title="Google Map"
    width="100%"
    height={height}
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src={
      src ||
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.845599736153!2d77.35877537551698!3d28.630421975687074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb67066b5e5f%3A0x7a9dd90c2f5933f5!2sVasundhara%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
    }
  ></iframe>
</Box>

    </Box>
  );
};

export default Map;
