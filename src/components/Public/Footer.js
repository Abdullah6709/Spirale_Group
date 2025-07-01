import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowButton(scrollPercent > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(145deg, #e3f2fd, #f9fbfd)",
          px: { xs: 3, md: 10 },
          pt: 5,
          pb: 2,
        }}
      >
        <Grid container spacing={6} justifyContent="space-between">
          {/* Logo & Description */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mb: 2,
                color: "#0D47A1",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              SPIRALE GROUP
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ mb: 2, color: "#000", lineHeight: 1 }}
            >
              We provide educational opportunities and scholarships to empower
              learners and build a brighter future.
            </Typography>
          </Grid>

          {/* Important Links */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2, color: "#0D47A1", textTransform: "uppercase" }}
            >
              Important Links
            </Typography>
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Blog", to: "/blog" },
              { label: "Career", to: "/career" },
              { label: "Contact", to: "/contact" },
            ].map((link, i) => (
              <Link
                key={i}
                component={RouterLink}
                to={link.to}
                underline="none"
                variant="subtitle"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#000",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#0D47A1",
                    transform: "translateX(5px)",
                  },
                }}
              >
                • {link.label}
              </Link>
            ))}
          </Grid>

          {/* Quick Access */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2, color: "#0D47A1", textTransform: "uppercase" }}
            >
              Quick Access
            </Typography>
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Blog", to: "/blog" },
              { label: "Career", to: "/career" },
              { label: "Contact", to: "/contact" },
            ].map((link, i) => (
              <Link
                key={i}
                component={RouterLink}
                to={link.to}
                underline="none"
                variant="subtitle"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#000",
                  transition: "0.3s",
                }}
              >
                → {link.label}
              </Link>
            ))}
          </Grid>

          {/* Contact Us */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ textAlign: { xs: "left", md: "right" } }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2, color: "#0D47A1", textTransform: "uppercase" }}
            >
              Contact Us
            </Typography>
            <Typography variant="subtitle" sx={{ mb: 1, color: "#000" }}>
              2nd Floor, B 25, Sector-64
            </Typography>
            <Typography variant="subtitle" sx={{ mb: 1, color: "#000" }}>
              Noida-201304
            </Typography>
            <Typography variant="subtitle" sx={{ mb: 1, color: "#000" }}>
              Phone: +91 8178898506
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
              mt={2}
            >
              {[FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon].map(
                (Icon, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #ccc",
                      color: "#0D47A1",
                      "&:hover": {
                        backgroundColor: "#0D47A1",
                        color: "#fff",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, borderColor: "#ccc" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#000", fontSize: 12 }}
        >
          © 2022 SPIRALE GROUP. All rights reserved.
        </Typography>
      </Box>

      {/* Back to Top Button (shown only after scrolling 30%) */}
      {showButton && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              boxShadow: 3,
              "&:hover": (theme) => ({
                backgroundColor: "#fff",
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.main}`,
              }),
            }}
            aria-label="Back to top"
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default Footer;
