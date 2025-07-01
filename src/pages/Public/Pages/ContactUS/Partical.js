import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Partical = () => {
  const theme = useTheme();

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#FFD700",
        padding: "1rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: theme.shadows[4],
        overflow: "hidden",
        zIndex: -1,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      {/* Particles Container (Only for background) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          // Ensure particles are contained within the parent box
          overflow: "hidden",
          "& #tsparticles": {
            height: "100%",
            background: "transparent",
          },
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 40,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.6, // Increased opacity
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.8, // Increased opacity
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </Box>

      {/* Content (will appear above particles) */}
      <Box
        sx={{
          maxWidth: { md: "60%" },
          marginBottom: { xs: "2rem", md: 0 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "1rem",lg:"1.5",md:"1.5rem" },
          }}
        >
          Looking for a First-Class Career Consultant?
        </Typography>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            boxShadow: theme.shadows[6],
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: theme.shadows[8],
            },
            transition: "all 0.3s ease",
          }}
        >
          Click Me
        </Button>
      </Box>
    </Box>
  );
};

export default Partical;
