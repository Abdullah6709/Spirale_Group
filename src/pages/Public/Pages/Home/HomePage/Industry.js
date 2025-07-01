import React, { useState } from "react";
import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { default as AddCallIcon } from '@mui/icons-material/AddIcCall';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";

// Consulting Data
const consultingData = [
  {
    title: "Business Strategy",
    cod: "Providing technical, commercial, and financial advice to various industries.",
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
  },
  {
    title: "Financial Consulting",
    cod: "Expertise in automobiles, manufacturing, telecom, and power distribution.",
    icon: <AddCallIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Marketing Solutions",
    cod: "Developing advertising and marketing strategies for businesses.",
    icon: <AddHomeIcon fontSize="large" color="success" />,
  },
  {
    title: "Aviation & Aerospace",
    cod: "Offering specialized consulting in aviation and aerospace industries.",
    icon: <AcUnitIcon fontSize="large" color="error" />,
  },
  {
    title: "Banking & Insurance",
    cod: "Providing financial strategies for banks and insurance companies.",
    icon: <AddModeratorIcon fontSize="large" color="warning" />,
  },
  {
    title: "Health Care",
    cod: "Assisting in healthcare marketing and strategic communication.",
    icon: <AirlineSeatReclineExtraIcon fontSize="large" color="info" />,
  },
  {
    title: "Aviation & Aerospace",
    cod: "Offering specialized consulting in aviation and aerospace industries.",
    icon: <AcUnitIcon fontSize="large" color="error" />,
  },
  {
    title: "Banking & Insurance",
    cod: "Providing financial strategies for banks and insurance companies.",
    icon: <AddModeratorIcon fontSize="large" color="warning" />,
  },
  {
    title: "Health Care",
    cod: "Assisting in healthcare marketing and strategic communication.",
    icon: <AirlineSeatReclineExtraIcon fontSize="large" color="info" />,
  },
  {
    title: "Banking & Insurance",
    cod: "Providing financial strategies for banks and insurance companies.",
    icon: <AddModeratorIcon fontSize="large" color="warning" />,
  },
  {
    title: "Health Care",
    cod: "Assisting in healthcare marketing and strategic communication.",
    icon: <AirlineSeatReclineExtraIcon fontSize="large" color="info" />,
  },
  {
    title: "Health Care",
    cod: "Assisting in healthcare marketing and strategic communication.",
    icon: <AirlineSeatReclineExtraIcon fontSize="large" color="info" />,
  },
];

export default function Industry() {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6;
  const displayedItems = showAll
    ? consultingData
    : consultingData.slice(0, initialItems);

  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        backgroundColor: "#f2f2f2",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing={1.5}
        mb={4}
      >
        Industries
      </Typography>

      {/* Industry Grid */}
      <Grid container spacing={3}>
        {displayedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                // backgroundColor: "white",
                borderRadius: 2,
                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "0.3s",
                height: "100%",
                // "&:hover": {
                //   transform: "translateY(-5px)",
                //   boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                // },
              }}
            >
              {/* Icon and Title in Row */}
              <Stack direction="row" spacing={2} justifyContent="center">
                {item.icon}
                <Stack spacing={2}>
                  <Typography textAlign={"left"} variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography
                    textAlign={"left"}
                    variant="body"
                    color="#000"
                    mt={1}
                  >
                    {item.cod}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* View More Button */}
      {consultingData.length > initialItems && (
        <Button
          variant="outlined"
          size="large"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            borderWidth: 2,
            // "&:hover": {
            //   borderWidth: 2,
            // },
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View More"}
        </Button>
      )}
    </Box>
  );
}
