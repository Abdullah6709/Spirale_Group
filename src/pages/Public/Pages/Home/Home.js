import React, { useState, useEffect } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  Fade,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import Logo from '../../../../assets/images/new logo.jpeg';

// Optional animated background effect
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Background = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(-45deg, #e0f7fa, #f1f8e9, #fffde7, #e3f2fd)',
  backgroundSize: '400% 400%',
  animation: `${gradientAnimation} 12s ease infinite`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3),
  textAlign: 'center',
  boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.015)',
  },
}));

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
`;

const LogoImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 280,
  height: 'auto',
  animation: `${pulse} 5s infinite ease-in-out`,
  [theme.breakpoints.down('sm')]: {
    maxWidth: 200,
  },
}));

const HighlightText = styled(Typography)(({ theme }) => ({
  color: '#00796b',
  fontWeight: 600,
  fontSize: '1.25rem',
  letterSpacing: 0.5,
  marginTop: theme.spacing(2),
}));

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Background>
      <Fade in={showContent}>
        <ContentWrapper>
          <LogoImage src={Logo} alt="Logo" />
          <HighlightText variant="h6">
            Your Innovating Partner
          </HighlightText>

          <Stack
            sx={{ mt: isMobile ? 3 : 4 }}
            direction="column"
            gap={2}
            alignItems="center"
          >
          </Stack>
        </ContentWrapper>
      </Fade>
    </Background>
  );
};

export default Home;
