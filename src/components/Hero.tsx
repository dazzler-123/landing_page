import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/home.jpg';

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
        minHeight: '120vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: '#002b56',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          bgcolor: '#002b56',
        }}
      />
      
      {/* Curved Bottom Edge */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          height: '100px',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          sx={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        >
          <path
            d="M0,100 Q360,20 720,40 T1440,20 L1440,100 L0,100 Z"
            fill="#FFFFFF"
          />
        </Box>
      </Box>

      {/* Hero Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, width: '100%', px: { xs: 3, md: 6 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', gap: { xs: 4, lg: 8 } }}>
          {/* Left Side - Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '42rem' } }}>
          {/* Badge */}
          <Box
            mt={2}
            data-aos="fade-down"
            data-aos-duration="1000"
            sx={{
              display: 'inline-flex',
    
              backdropFilter: 'blur(12px)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#F0942D',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              mb: 1,
              px: 2,
              py: 1,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: '#F0942D',
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
            <Box component="span" sx={{ color: '#F0942D' }}>
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
                bgcolor: '#F0942D',
                color: '#FFFFFF',
                px: 4,
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: 4,
                '&:hover': {
                  bgcolor: 'rgba(240, 148, 45, 0.9)',
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
            {['Licensed & Insured', 'Eco-Friendly Products', '24/7 Emergency Service'].map((text, index) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: index === 1 ? '#50BB5A' : '#F0942D', fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{text}</Typography>
              </Box>
            ))}
          </Box>
          </Box>

          {/* Right Side - Image */}
          {isDesktop && (
            <Box
              data-aos="fade-left"
              data-aos-delay="400"
              sx={{
                flex: 1,
                position: 'relative',
                width: '100%',
                maxWidth: { lg: '600px' },
                display: { xs: 'none', lg: 'block' },
                overflow: 'visible',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'visible',
                  boxShadow: 8,
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Professional cleaning services"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 1,
                  }}
                />
                
                {/* 24/7 Support Badge Overlay - Top Right */}
                <Box
                  data-aos="fade-down"
                  data-aos-delay="600"
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    bgcolor: '#F0942D',
                    borderRadius: 0.5,
                    width: 200,
                    height: 80,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1.5,
                    boxShadow: 6,
                    zIndex: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AccessTimeIcon sx={{ color: '#F0942D', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.875rem', lineHeight: 1 }}>
                      24/7
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '0.75rem', lineHeight: 1 }}>
                      Support Always
                    </Typography>
                  </Box>
                </Box>

                {/* 500+ Members Badge Overlay - Bottom Right */}
                <Box
                  data-aos="fade-up"
                  data-aos-delay="800"
                  sx={{
                    position: 'absolute',
                    bottom: -10,
                    left: -10,
                    bgcolor: 'white',
                    borderRadius: 0.5,
                    p: 2,
                    boxShadow: 4,
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: '#50BB5A',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#0F223F', fontWeight: 700, fontSize: '0.875rem', lineHeight: 1 }}>
                      500+
                    </Typography>
                    <Typography sx={{ color: '#6C757D', fontSize: '0.75rem' }}>
                      Members
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
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

