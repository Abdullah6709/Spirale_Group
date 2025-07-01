import { Box, Typography, Divider } from "@mui/material";
import React from "react";

function Advisory() {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 10, lg: 12 },
        backgroundColor: "#f9f9f9", // subtle background for section
        borderRadius: "12px",
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        gutterBottom
        sx={{
          color: "#1a237e", // deep blue
          mb: 3,
        }}
      >
        Advisory Services Based On Proven
      </Typography>

      <Divider sx={{ mb: 2, maxWidth: 320, mx: "auto", borderColor: "#ccc" }} />

      {/* Paragraphs */}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "1rem", sm: "1rem" },
          lineHeight: 1.5,
        }}
      >
     Spirale HR Solutions Pvt. Ltd. is an executive search firm that
        specializes in partnering with engineering and technology companies to
        build world-class management teams. We provide expert advice based on
        years of sector specialism to help transform companies.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "1rem", sm: "1rem" },
          lineHeight: 1.5,
        }}
      >
        We partner with our customers to create executive search processes that
        help them to identify, qualify, and attract the best talent from across
        India. We are an active part of the technology community and believe in
        building long-term relationships with both companies and candidates
        based on trust and transparency.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "1rem", sm: "1rem" },
          lineHeight: 1.5,
        }}
      >
      Spirale HR Solutions Pvt. Ltd. is an executive search firm with a
        difference—one where our customers receive hands-on, practical advice
        from search professionals with deep experience in the technology sector.
        We work with engineering, software technology, and more across India.
      </Typography>
    </Box>
  );
}

export default Advisory;
