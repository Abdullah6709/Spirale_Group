import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import C1 from "../../../../assets/career/career.jpg";
import careerban from "../../../../assets/career/careerbanner.jpg";
import JourneyImg from "../../../../assets/career/juarney.webp";
import { useNavigate } from "react-router-dom";
import Partical from "../Home/HomePage/Partical";

const Career = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleApply = () => {
    navigate("/formpage");
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "80vh" },
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${careerban})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            position: "relative",
            zIndex: 1,
            color: theme.palette.common.white,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: 700,
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Join Our Team
        </Typography>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 3, md: 12 }, py: 5 }}>
        {/* Benefits Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={C1}
              alt="Benefits"
              sx={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: 0,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Benefits and Rewards
            </Typography>
            <Typography variant="subtitle1" paragraph>
              The Spiral Group Pvt. Ltd. came up with combined cutting-edge technology with real-world practicality...
            </Typography>
            <Typography variant="subtitle1" paragraph>
              This allowed the workers to be involved in the job instead of feeling like they had been made redundant by technology.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              The statement highlights a positive impact of technology, specifically AI, on the workforce.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleApply}
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: "0.9rem",
                borderRadius: "5px",
              }}
            >
              Apply Now
            </Button>
          </Grid>
        </Grid>

        {/* Journey Section */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Journey at SPIRAL Group
            </Typography>
            <Typography variant="subtitle1" paragraph>
              At SPIRAL Group, every journey is a transformation. We believe in empowering individuals to grow beyond boundaries, collaborate with innovators, and build meaningful solutions.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Our journey is not just about business success—it's about personal and professional growth, work-life balance, and cultivating a culture of continuous learning. From onboarding to leadership, SPIRAL nurtures every step of your career.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={JourneyImg}
              alt="Journey at SPIRAL"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 0,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Partical />
    </>
  );
};

export default Career;
