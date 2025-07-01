import React from "react";
import Slider from "react-slick";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Breadcrumbs,
  useTheme,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../../assets/about/macbook.png";
import img2 from "../../../../assets/about/about_slide_2.jpg";
import { Link } from "react-router-dom";
import Partical from "../Home/HomePage/Partical";

export const Gallery = [
  {
    id: 1,
    imagePath: img1,
    heading: "Workshops That Are Awesome!",
    text: "We are a company that offers design and build services for your initial projects.",
    buttonText: "Get a Quote",
  },
  {
    id: 2,
    imagePath: img2,
    heading: "Meet Our Brilliant Minds",
    text: "We are an office that offers design and build services for your initial projects.",
    buttonText: "Learn More",
  },
];

function About2() {
  // Slick Slider Settings
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white", py: 3, mt: 2 }}>
        <Box
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 12,
              lg: 12,
            },
            py: 5,
          }}
        >
          <Grid container spacing={2} justifyContent="flex-start">
            {/* Left-Side (Slider) */}
            <Grid item xs={12} md={9}>
              <Box sx={{ width: "100%", mt: 3 }}>
                <Slider {...settings}>
                  {Gallery.map((item) => (
                    <Box key={item.id} sx={{ width: "100%", mx: "auto" }}>
                      <Card
                        elevation={0}
                        sx={{
                          display: {
                            xs: "block",
                            sm: "block",
                            md: "flex",
                            lg: "flex",
                          },
                          flexDirection: "row-reverse",
                          alignItems: "center",
                          width: "100%",
                          minHeight: 400,
                          backgroundColor: item.id === 2 ? "yellow" : "yellow",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: 350,
                            height: 280,
                            objectFit: "contain",
                            ml: 2,
                          }}
                          image={item.imagePath}
                          alt={`Gallery Image ${item.id}`}
                        />

                        <CardContent
                          sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "16px",
                                sm: "18px",
                                md: "20px",
                                lg: "35px",
                              },
                              fontWeight: "900",
                              textAlign: "left",
                            }}
                          >
                            {item.heading}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "14px",
                                sm: "16px",
                                md: "15px",
                                lg: "20px",
                              },
                              textAlign: "left",
                            }}
                          >
                            {item.text}
                          </Typography>
                          <Typography py={4}>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "blue",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                  color: "blue",
                                  border: "1px solid blue",
                                },
                              }}
                            >
                              {item.buttonText}
                            </Button>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Slider>
              </Box>
              <Box py={5}>
                <Typography variant="h4" fontWeight="600" color="black">
                  Company overview
                </Typography>

                <Typography
                  variant="subtitle"
                  sx={{ mt: 2, textAlign: "justify" }}
                >
                  Spirale Group. is a leading employment
                  services industry since 2009, offering customers vital
                  services to meet their Global Recruitment & Staffing needs
                  with a PAN India presence in Delhi NCR (Noida) and Hyderabad.
                  A well established, dynamic organization on the high road to
                  further growth, expansion and success. Our extensive candidate
                  database is continuously updated and drawn from our career
                  site registration, employer branding initiatives, Job sites,
                  campus recruitment, print media advertising, referrals and
                  head hunting through our dedicated and discreet Resourcing
                  team. We use creative solutions, in-depth market research and
                  cutting-edge technology to proactively identify talent in a
                  scalable and sustainable way. We have a humungous web enabled,
                  easily searchable Database of candidates across multiple
                  levels and industries that enable The Search House to
                  recommend ideally suitable candidates to clients in the
                  fastest Turnaround time.
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 2,
                    textAlign: "justify",
                    backgroundColor: "#F2F2F2",
                    p: 2,
                    borderRadius: 1,
                  }}
                >
                  <strong>Vision:</strong> To be the leader in providing the
                  largest and most productive pool of human resource talent to
                  clients. To make a meaningful and significant contribution to
                  the growth and progress of employers, job seekers, and the
                  community at large.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4" fontWeight="600" color="black">
                  Our mission
                </Typography>

                <Typography
                  variant="subtitle"
                  sx={{ mt: 2, textAlign: "justify" }}
                >
                  To consistently deliver effective and efficient service to our
                  clients by providing quality manpower at the right time, the
                  right place and the right cost.
                </Typography>
              </Box>
            </Grid>

            {/* Right-Side (Sidebar) */}
            <Grid item xs={12} md={3}>
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  alignItems: "flex-start",
                  mt: 3,
                  position: "sticky",
                  top: 20, // Adjust as needed
                  zIndex: 1000, // Ensures it stays on top
                  backgroundColor: "white", // Prevents content from overlapping
                }}
              >
                {/* Company Overview Card */}
                <Card sx={{ backgroundColor: "grey", width: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      Company Overview
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      Careers
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      Company History
                    </Typography>
                  </CardContent>
                </Card>

                {/* Company Presentation Card */}
                <Card
                  sx={{
                    backgroundColor: "white",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "yellow",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Company Presentation</Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    width: "75%",
                    backgroundColor: "yellow",
                    transition: "background-color 0.3s ease",
                    p: 1.5, // Reduced padding
                    height: "auto", // Adjust height dynamically
                    minHeight: 150, // Ensure it's not too small
                  }}
                >
                  <CardContent sx={{ pb: 1 }}>
                    {" "}
                    {/* Reduced padding-bottom */}
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      How can we help you?
                    </Typography>
                  </CardContent>

                  <CardContent sx={{ pb: 1 }}>
                    <Typography variant="body1" sx={{ color: "#000", mb: 2 }}>
                      Contact us at the SHSPL office nearest to you or submit a
                      business inquiry online.
                    </Typography>
                  </CardContent>

                  <Button
                    variant="contained"
                    startIcon={
                      <PhoneIcon
                        sx={{ transition: "color 0.3s ease-in-out" }}
                      />
                    }
                    sx={{
                      ml: 2,
                      backgroundColor: "white",
                      color: "#fff",
                      fontSize: "14px", // Slightly smaller font
                      py: 0.8, // Reduce vertical padding inside button
                      mb: 2, // Adjust margin-bottom
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                        "& .MuiSvgIcon-root": {
                          color: "yellow",
                        },
                      },
                    }}
                  >
                    Contacts
                  </Button>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          {/* Overview Section - Corrected Placement */}
        </Box>
      </Box>
      <Partical />
    </>
  );
}

export default About2;
