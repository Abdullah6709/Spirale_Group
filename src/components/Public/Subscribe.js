import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const NewsletterSubscription = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://media.springernature.com/lw630/nature-cms/uploads/collections/Networks-Collection-img-final-f2c265a59e457f48645e2aa3ff90e942.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        px: { xs: 2, md: 10 },
        py: 6,
        borderRadius: 3,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            textAlign: { xs: "center", md: "left" },
            letterSpacing: 1.2,
          }}
        >
          Subscribe to Our Newsletter
        </Typography>

        {/* Email Input & Button */}
        <Stack
          direction="row"
          sx={{
            backgroundColor: "white",
            borderRadius: "50px",
            overflow: "hidden",
            width: { xs: "100%", md: "50%" },
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                paddingLeft: 2,
              },
              "& fieldset": { border: "none" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              backgroundColor: "#ff9800",
              px: 4,
              fontWeight: "bold",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#fb8c00",
              },
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NewsletterSubscription;
