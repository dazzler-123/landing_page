import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
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
        minHeight: { xs: '100vh', sm: '120vh', md: '130vh' },
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
          // bgcolor: '#002b56',
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0, 43, 86, 0.26)',
            zIndex: 1,
          },
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
            fill="#F8FAFD"
          />
        </Box>
      </Box>

      {/* Hero Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, width: '100%', px: { xs: 3, md: 8 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: { xs: 'center', lg: 'flex-start' }, justifyContent: 'space-between', gap: { xs: 4, lg: 8 } }}>
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
                marginRight: 1,
                borderRadius: '50%',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                '@keyframes pulse': {
                  '50%': { opacity: 0.5 },
                },
              }}
            />
            <Typography sx={{ color: 'white' }}>Professional • Reliable • Efficient</Typography>
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
            Your Complete{' '}
            <Box component="span" sx={{ color: '#F0942D' }}>
              Facilities Management
            </Box>
            {' '}Partner
          </Typography>

          {/* Subheadline */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 5,
              lineHeight: 1.625,
            }}
          >
            Professional, reliable, and comprehensive facilities management solutions tailored to your business needs.
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
              Get Free Site Survey
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
              View Our Services
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
            {['4.8 / 5 Rated Service', '24/7 Emergency Support', 'Fully Licensed & Insured'].map((text, index) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: index === 1 ? '#50BB5A' : '#F0942D', fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{text}</Typography>
              </Box>
            ))}
          </Box>
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

