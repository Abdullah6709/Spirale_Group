import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import axios from "axios";
import img from "../../../../assets/cotact/img1.jpg";
//import Looking from "../../Component/Public/Looking";
import Partical from "./Partical";

const contactData = [
  { icon: <AddIcCallIcon />, heading: "Call Us", number: "+91 8178898506" },
  { icon: <AddIcCallIcon />, heading: "Landing", number: "+91 1204099066" },
  {
    icon: <AddIcCallIcon />,
    heading: "Have any query?",
    number: "info@tcspl.in",
  },
  {
    icon: <AddIcCallIcon />,
    heading: "Location",
    number: "3rd Floor, Havi Complex, Sector 27, Noida",
  },
];

const Contact = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await axios.post("http://localhost:5000/api/inquiries", formData);
      setStatus({ type: "success", message: "Inquiry sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setStatus({ type: "error", message: "Failed to send inquiry." });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "80vh" },
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            zIndex: 1,
            color: theme.palette.common.white,
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
            fontWeight: 700,
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Contact Us
        </Typography>
      </Box>

      {/* Contact Info */}
      <Box sx={{ py: 5, px: { xs: 2, sm: 3, md: 12 } }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.info.main,
            mb: 2,
            fontSize: { md: "1.3rem", sm: "1rem" },
          }}
        >
          Please let us know if you have a question, want to leave a comment, or
          would like further information about SPIRALE GROUP.
        </Typography>

        <Grid container spacing={3} justifyContent={"space-between"}>
          {contactData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: theme.palette.grey[100],
                }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.warning.light,
                    color: theme.palette.primary.main,
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="h6">{item.heading}</Typography>
                  <Typography variant="caption">{item.number}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Form */}
      <Box sx={{ py: 3, px: { xs: 2, sm: 3, md: 12 } }}>
        <Typography variant="h6" sx={{ color: theme.palette.info.main, mb: 2 }}>
          Feedback Form
        </Typography>

        {status.message && (
          <Alert severity={status.type} sx={{ mb: 2 }}>
            {status.message}
          </Alert>
        )}

        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          error={!!errors.message}
          helperText={errors.message}
          placeholder="Type your message here..."
          sx={{
            mb: 3,
            backgroundColor: theme.palette.grey[200],
            borderRadius: 2,
          }}
          InputProps={{ sx: { fontSize: "1.2rem", padding: "12px" } }}
          InputLabelProps={{ sx: { fontSize: "1rem" } }}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
              placeholder="Name..."
              sx={{ backgroundColor: theme.palette.grey[200], borderRadius: 2 }}
              InputProps={{ sx: { fontSize: "1.2rem", padding: "12px" } }}
              InputLabelProps={{ sx: { fontSize: "1rem" } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              placeholder="Email..."
              sx={{ backgroundColor: theme.palette.grey[200], borderRadius: 2 }}
              InputProps={{ sx: { fontSize: "1.2rem", padding: "12px" } }}
              InputLabelProps={{ sx: { fontSize: "1rem" } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              error={!!errors.subject}
              helperText={errors.subject}
              placeholder="Subject..."
              sx={{ backgroundColor: theme.palette.grey[200], borderRadius: 2 }}
              InputProps={{ sx: { fontSize: "1.2rem", padding: "12px" } }}
              InputLabelProps={{ sx: { fontSize: "1rem" } }}
            />
          </Grid>
        </Grid>

        <Box>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              fontSize: "15px",
              py: 1.5,
              mt: 3,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: theme.palette.warning.light,
                color: "black",
              },
            }}
          >
            Send Inquiry
          </Button>
        </Box>
      </Box>

      <Partical />
    </>
  );
};

export default Contact;
