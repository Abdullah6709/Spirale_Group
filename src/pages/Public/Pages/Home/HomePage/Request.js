import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  TextField,
  Stack,
} from "@mui/material";
import React from "react";

function Request() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#222222",
        width: "100wv",
        py: 6,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        alignItems: "center",
      }}
    >
      <Grid container spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: theme.palette.warning.light }}
            >
              Request a call back
            </Typography>
            <Typography variant="body" sx={{ py: 3, fontSize: "15px", color: "#fff" }}>
              Would you like to speak to one of our financial advisers over the
              phone? Just submit your details and we’ll be in touch shortly. You
              can also email us if you would prefer.
            </Typography>
          </Box>
        </Grid>

        {/* Form Fields - Ensuring they are in a row */}
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: theme.palette.white.main }} variant="h4">
            I would like to discuss:
          </Typography>
          <Stack sx={{ pb: 2 }} maxWidth="lg" direction={"row"} spacing={2} py={1}>
            <TextField
              fullWidth
              label="Your Contact Number"
              name="contact_number"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                my: 2,
                maxWidth: 300,
                borderRadius: 1,
              
              }}
            />

            <TextField
              fullWidth
              label="Your Email Id"
              name="email"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                my: 2,
                maxWidth: 300,
                borderRadius: 1,
              }}
            />

          </Stack>
          <Stack sx={{ pb: 2 }} maxWidth="lg" direction={"row"} spacing={2}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                my: 2,
                maxWidth: 300,
                borderRadius: 1,
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                my: 2,
                maxWidth: 300,
                fontWeight: "bold",
                textTransform: "uppercase",
                py: 1.2,
                borderRadius: 1,
              }}
            >
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Request;
