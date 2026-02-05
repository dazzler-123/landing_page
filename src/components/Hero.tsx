import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://img.rocket.new/generatedImages/rocket_gen_img_1d2785cd0-1765233866657.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(47, 95, 134, 0.95), rgba(47, 95, 134, 0.7), transparent)',
            zIndex: 2,
          },
        }}
      />

      {/* Floating 24/7 Badge */}
      {isDesktop && (
        <Box
          data-aos="fade-left"
          data-aos-delay="400"
          sx={{
            position: 'absolute',
            top: 128,
            right: 32,
            zIndex: 10,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            p: 2,
            boxShadow: 6,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#F58220',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AccessTimeIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', lineHeight: 1 }}>
                24/7
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem' }}>
                Support Available
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Hero Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, width: '100%', px: { xs: 3, md: 6 } }}>
        <Box sx={{ maxWidth: '42rem' }}>
          {/* Badge */}
          <Box
            data-aos="fade-down"
            data-aos-duration="1000"
            sx={{
              display: 'inline-flex',
              gap: 1,
              backdropFilter: 'blur(12px)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#F58220',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              mb: 4,
              px: 2,
              py: 1,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: '#F58220',
                borderRadius: '50%',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                '@keyframes pulse': {
                  '50%': { opacity: 0.5 },
                },
              }}
            />
            Trusted by 500+ Businesses & Property Owners
          </Box>

          {/* Headline */}
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            variant="h1"
            className="font-display"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', lg: '4.5rem' },
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.025em',
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            Professional Cleaning Services{' '}
            <Box component="span" sx={{ color: '#F58220' }}>
              You Can Trust
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            sx={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 5,
              lineHeight: 1.625,
            }}
          >
            Expert cleaning solutions for offices, hospitals, hotels, restaurants, and all commercial properties. 
            Spotless results, every time.
          </Typography>

          {/* CTAs */}
          <Box
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}
          >
            <Button
              variant="contained"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#F58220',
                color: '#1F3F5B',
                px: 4,
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: 4,
                '&:hover': {
                  bgcolor: 'rgba(245, 130, 32, 0.9)',
                  boxShadow: 6,
                  '& .MuiSvgIcon-root': {
                    transform: 'translateX(4px)',
                  },
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.3s',
                },
              }}
            >
              Get Started Today
            </Button>
            <Button
              variant="outlined"
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              View All Services
            </Button>
          </Box>

          {/* Trust Indicators */}
          <Box
            data-aos="fade-up"
            data-aos-delay="600"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 4,
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.875rem',
            }}
          >
            {['Licensed & Insured', 'Eco-Friendly Products', '24/7 Emergency Service'].map((text) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: '#F58220', fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
          animation: 'bounce 1s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(-25%)' },
            '50%': { transform: 'translateX(-50%) translateY(0)' },
          },
        }}
      >
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          sx={{ opacity: 0.6 }}
        >
          <path d="m6 9l6 6l6-6" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

