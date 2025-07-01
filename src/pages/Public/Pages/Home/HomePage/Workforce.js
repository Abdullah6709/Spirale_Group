import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import bg from "../../../../../assets/home/workforce.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Workforce() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 10 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          zIndex: 1,
        },
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{ position: "relative", zIndex: 2 }}
        alignItems="stretch"
      >
        {/* First Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: 500,
            }}
          >
            <Box
            sx={{
              textAlign:"center",
              alignItems:"center"
            }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: theme.palette.warning.light,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                Workforce Solution
              </Typography>

              <Typography variant="body"
                sx={{
                  py: 2,
                  fontSize: { xs: "14px", sm: "15px" },
                 // lineHeight: 1.8,
                  color: "#fff",
                }}
              >
                SHSPL flexible partnership models allow us to be <br/>
responsive to your unique needs.
              </Typography>
            </Box>

            <Button
  variant="contained"
  onClick={() => navigate("/learnmore")}
  endIcon={<ArrowForwardIosIcon />}
  sx={{
    mt: 3,
    alignSelf: "center", 
    fontSize: "14px",
    px: 3,
    py: 1.2,
    fontWeight: "bold",
    bgcolor: "primary.main",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: theme.palette.warning.light,
      color: "black",
      boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
    },
  }}
>
  See How
</Button>

          </Box>
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: 500,
              textAlign:"center",
              alignItems:"center"
            
            }}
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: theme.palette.warning.light,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                Skilled & Scalable Teams
              </Typography>

              <Typography variant="body"
                sx={{
                  py: 2,
                  fontSize: { xs: "14px", sm: "15px" },
                 // lineHeight: 1.8,
                  color: "#fff",
                }}
              >
             Interested in career opportunities with SHSPL? <br/>
Hear how it works and what you can expect.
              </Typography>
            </Box>

            <Button
              variant="contained"
              onClick={() => navigate("/begin")}
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                mt: 3,
                alignSelf: "center",
                fontSize: "14px",
                px: 3,
                py: 1.2,
                fontWeight: "bold",
                bgcolor: "primary.main",
                borderRadius: 8,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: theme.palette.warning.light,
                  color: "black",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                },
              }}
            >
              Begin Here
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Workforce;
