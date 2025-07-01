import React from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  Toolbar,
  Grid,
} from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useParams, useNavigate } from "react-router-dom";

// Sample card data (same as BlogServicesPage)
const cardData = [
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "EMERGING TRENDS IN TECHNOLOGY",
    title: "Key Features",
    description:
      "Emerging technology trends in 2025 include advancements in AI and machine learning, particularly in areas like generative AI and AI-powered cybersecurity. Other key trends include the expansion of 5G and edge computing, the growth of the metaverse and spatial computing, and increasing focus on sustainable technology and biotechnology in agriculture. Additionally, advancements in quantum computing, augmented and virtual reality, and the Internet of Things (IoT) continue to drive innovation. ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "SOFTWARE DEVELOPMENT BEST PRACTICES",
    title: "10 Essential Tips for Creating",
    description:
      "Software development best practices encompass a wide range of techniques and methodologies aimed at improving the quality, efficiency, and maintainability of software projects. These practices cover various aspects of the development lifecycle, from initial planning to deployment and maintenance. Key areas include version control, continuous integration, secure coding, testing, and collaboration. ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop",
    category: "MOBILE TECHNOLOGY",
    title: "Mobile Application Development",
    description:
      "Mobile application development is the process of creating software for mobile devices like smartphones and tablets, enabling them to perform specific tasks. This involves designing, coding, testing, and deploying applications, often utilizing a network connection to interact with remote computing resources. ",
  },
];

// Converts title to URL-friendly slug
const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = cardData.find((b) => slugify(b.title) === slug);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!blog) {
    return (
      <Box p={4}>
        <Typography variant="h4">Blog Not Found</Typography>
        <Button onClick={() => navigate("/blog")} sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section with Linear Gradient */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "50vh", sm: "70vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Toolbar />
        <Box textAlign="center" zIndex={1}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.2rem", sm: "3.5rem" },
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            {blog.title}
          </Typography>
          <Chip
            label={blog.category}
            sx={{
              mt: 2,
              backgroundColor: "rgba(255,255,255,0.8)",
              color: "#000",
              fontWeight: "bold",
              borderRadius: 0,
            }}
          />
        </Box>
      </Box>

      {/* Blog Description */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          py: 6,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "1.15rem", lineHeight: 1.8 }}
        >
          {blog.description}
        </Typography>

        <Button
          variant="outlined"
          sx={{ mt: 4, borderRadius: 0 }}
          onClick={() => navigate(-1)}
        >
          ← Back to Blogs
        </Button>
      </Box>

      {/* Recent Blogs */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          pb: 8,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
          }}
        >
          Recent Blogs
        </Typography>

        <Grid container spacing={2}>
          {cardData
            .filter((item) => slugify(item.title) !== slug)
            .slice(0, 2)
            .map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    border: "1px solid #e0e0e0",
                    borderRadius: 0,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 3,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: "100%", height: 180, objectFit: "cover" }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Chip
                      label={item.category}
                      sx={{
                        mb: 1,
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        borderRadius: 0,
                        backgroundColor: "#eee",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2 }}>
                      {item.description.slice(0, 100)}...
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() =>
                        navigate(`/blogdetail/${slugify(item.title)}`)
                      }
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogDetailPage;
