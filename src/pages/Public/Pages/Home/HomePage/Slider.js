import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import logos
import logo1 from "../../../../../assets/image/cubesoftware.jpg";
import logo2 from "../../../../../assets/image/gurulogo.png";
import logo3 from "../../../../../assets/image/puzzalanalogo.png";
import logo4 from "../../../../../assets/image/rmglogo.png";
import logo5 from "../../../../../assets/image/cubesoftware.jpg";
import logo6 from "../../../../../assets/image/gurulogo.png";

const Slider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const clients = [
    { id: 1, name: "Client 1", logo: logo1 },
    { id: 2, name: "Client 2", logo: logo2 },
    { id: 3, name: "Client 3", logo: logo3 },
    { id: 4, name: "Client 4", logo: logo4 },
    { id: 5, name: "Client 5", logo: logo5 },
    { id: 6, name: "Client 6", logo: logo6 },
  ];

  return (
    <Box
      py={6}
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
          color: "#0d1b2a",
          position: "relative",
          mb: 4,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "4px",
            background: theme.palette.primary.main,
            borderRadius: "2px",
          },
        }}
      >
        Our Valued Clients
      </Typography>

      {/* Logo Carousel */}
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          py: 2,
          position: "relative",
        }}
      >
        {/* Left & Right Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "60px",
            background: "linear-gradient(to right, #f5f5f5 0%, transparent 100%)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "60px",
            background: "linear-gradient(to left, #f5f5f5 0%, transparent 100%)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            "&:hover .scroll-track": {
              animationPlayState: "paused",
            },
          }}
        >
          <Box
            className="scroll-track"
            sx={{
              display: "flex",
              animation: "scroll 22s linear infinite",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <Box
                key={`${client.id}-${index}`}
                sx={{
                  flexShrink: 0,
                  px: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMobile ? 100 : 130,
                  height: isMobile ? 60 : 90,
                  transition: "all 0.4s ease",
                  "& img": {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  },
                  "&:hover img": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <img src={client.logo} alt={client.name} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
