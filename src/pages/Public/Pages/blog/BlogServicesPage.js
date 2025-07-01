import React from "react";
import {
  Box,
  Typography,
  Toolbar,
  Grid,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Edit, Analytics, Share } from "@mui/icons-material";

// Reusable Background Section
const BackgroundSection = ({ image, title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="main"
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        flexGrow: 1,
        height: { xs: "60vh", sm: "80vh" },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toolbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            position: "relative",
            zIndex: 1,
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
            fontWeight: 700,
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontSize: { xs: "1rem", sm: "1.5rem" },
            maxWidth: "800px",
            mx: "auto",
            px: 3,
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          Elevate your content strategy with our professional blog services
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "0px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
};

// Dummy blog card data
const cardData = [
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "EMERGING TRENDS IN TECHNOLOGY",
    title: "Key Features",
    description:
      "Here are the key features every custom application should include in 2025:",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "SOFTWARE DEVELOPMENT BEST PRACTICES",
    title: "10 Essential Tips for Creating",
    description:
      "Explore tips for creating scalable software solutions prioritize a scalable architecture.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "MOBILE TECHNOLOGY",
    title: "Mobile Application Development",
    description:
      "In today’s digital age, mobile applications have become an integral part of our daily lives.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "EMERGING TRENDS IN TECHNOLOGY",
    title: "Key Features",
    description:
      "Here are the key features every custom application should include in 2025:",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "SOFTWARE DEVELOPMENT BEST PRACTICES",
    title: "10 Essential Tips for Creating",
    description:
      "Explore tips for creating scalable software solutions prioritize a scalable architecture.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "MOBILE TECHNOLOGY",
    title: "Mobile Application Development",
    description:
      "In today’s digital age, mobile applications have become an integral part of our daily lives.",
  },
];

const BlogServicesPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const blogBackgroundURL =
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <div>
      {/* Hero Section */}
      <BackgroundSection image={blogBackgroundURL} title="Our Blog Services" />

      {/* Common Wrapper */}
      <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, maxWidth: "1400px", mx: "auto" }}>
        {/* Tech Card Grid Section */}
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: 700, mb: 2 }}
          >
            Latest Tech Insights
          </Typography>
          <Grid container spacing={2}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: 3,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Chip
                      label={card.category}
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: "#444",
                        backgroundColor: "#e0e0e0",
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        borderRadius: "0px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ minHeight: 30 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle2" color="#000" sx={{ mb: 2 }}>
                      {card.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "primary.main",
                        textTransform: "none",
                        fontWeight: "bold",
                        borderRadius: 0,
                        px: 2,
                        "&:hover": {
                          backgroundColor: "#ffffff",
                          color: "primary.main",
                          border: `1px solid ${theme.palette.primary.main}`,
                        },
                      }}
                      onClick={() =>
                        navigate(
                          `/blogdetail/${card.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        )
                      }
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default BlogServicesPage;
