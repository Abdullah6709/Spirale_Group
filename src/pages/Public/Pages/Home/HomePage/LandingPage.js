import React from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../../assets/home/slider1.jpg";
import img2 from "../../../../../assets/home/slider2.jpg";
import img3 from "../../../../../assets/home/slide3.jpg";

// Slide Data
const slides = [
  {
    image: img1,
    heading: "Helping Companies",
    subtext: "Negative Change",
  },
  {
    image: img3,
    heading: "Thought Leadership",
    subtext: "With over 10 years of experience helping businesses find solutions.",
  },
  {
    image: img2,
    heading: "Talented Consultant",
    subtext: "Helping you take your company to new heights!",
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "1%",
      transform: "translateY(-50%)",
      zIndex: 10,
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.4)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "1%",
      transform: "translateY(-50%)",
      zIndex: 10,
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.4)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <Box sx={{ bottom: "20px", position: "absolute", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: 0.5,
          "&:hover": {
            opacity: 1,
            backgroundColor: "#fff",
          },
        }}
      />
    ),
  };

  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: "relative", height: "100vh" }}>
            {/* Background Image */}
            <Box
              component="img"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                height: "101%",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
            />

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "101%",
                background: "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
                zIndex: 1,
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                zIndex: 2,
                px: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" },
                  textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                  animation: "fadeInDown 1s ease-in-out",
                }}
              >
                {slide.heading}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.3rem", md: "1.7rem" },
                  textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
                  animation: "fadeInUp 1.5s ease-in-out",
                }}
              >
                {slide.subtext}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default LandingPage;
