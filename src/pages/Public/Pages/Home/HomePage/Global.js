import { Box, Stack, Typography, useTheme } from "@mui/material";
import bg from "../../../../../assets/home/global.jpg";
import React from "react";

function Global() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "auto", sm: "30vh", md: "40vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 6, sm: 0 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
          zIndex: 1,
        },
      }}
    >
      {/* Overlay Content */}
      <Stack
        spacing={1}
        sx={{
          position: "relative",
          zIndex: 2,
          animation: "fadeInUp 1s ease-in-out",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: theme.palette.common.white,
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2rem" },
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          We Are a Global Leader in Recruiting & Staffing
        </Typography>

        <Typography
          variant="body"
          sx={{
            color: "#ffffff",
            fontSize: "1rem" ,
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          We believe in people and their amazing potential.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#ffffff",
            fontSize: "1rem" ,
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          Whether you're looking for a job, seeking hires, or thinking about
          working with us, you've come to the right place.
        </Typography>
      </Stack>

      {/* Animation Style */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Global;
