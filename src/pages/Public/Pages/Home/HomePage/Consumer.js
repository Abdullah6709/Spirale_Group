import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import img1 from "../../../../../assets/home/consumer1.jpg";
import img2 from "../../../../../assets/home/consumer2.png";
import img3 from "../../../../../assets/home/consumer3.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { default as AddCallIcon } from "@mui/icons-material/AddIcCall";

const consultingData = [
  {
    img: img1,
    title: "Business Strategy",
    cod: "We are a full-service business development group.",
    icon: <AccessTimeIcon fontSize="large" />,
  },
  {
    img: img2,
    title: "Financial Consulting",
    cod: "We provide expert financial advice to help business grow sustainably.",
    icon: <AddCallIcon fontSize="large" />,
  },
  {
    img: img3,
    title: "Marketing Solutions",
    cod: "We create innovative marketing solutions to increase brand visibility and sales.",
    icon: <AddHomeIcon fontSize="large" />,
  },
];

function Consumer() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#eee",
      }}
    >
      <Grid container spacing={4}>
        {consultingData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={4}
              sx={{
                position: "relative",
                overflow: "hidden",
                textAlign: "right",
                borderRadius: 0,
                color:"#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <CardMedia
                component="img"
                height="250"
                image={item.img}
                alt={item.title}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: hoverIndex === index ? "100%" : "15%",
                  background: "rgba(19, 59, 100, 0.9)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: hoverIndex === index ? "center" : "flex-end",
                  alignItems: "right",
                  textAlign: "center",
                  p: 2,
                  transition: "height 0.4s ease",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: hoverIndex === index ? 2 : 0,
                  }}
                >
                  <Box sx={{ color: "#FDE428" }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body"
                  sx={{
                    opacity: hoverIndex === index ? 1 : 0,
                    maxHeight: hoverIndex === index ? "100px" : "0",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    px: 1,
                    
                    
                  }}
                >
                  {item.cod}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Consumer;
