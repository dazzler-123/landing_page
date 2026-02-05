import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 12 },
        px: 3,
        background: 'linear-gradient(135deg, #2F5F86, rgba(47, 95, 134, 0.9))',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ textAlign: 'center' }} data-aos="fade-up">
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: '9999px',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.025em',
              mb: 4,
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
            Get Started Today
          </Box>

          {/* Headline */}
          <Typography
            variant="h2"
            className="font-display"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3rem', lg: '3.75rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            Ready for Spotless Cleaning Services?
          </Typography>

          {/* Subheadline */}
          <Typography
            sx={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 6,
              maxWidth: '42rem',
              mx: 'auto',
              lineHeight: 1.625,
            }}
          >
            Get a free quote from our cleaning experts. No obligation, just honest pricing and professional service recommendations.
          </Typography>

          {/* CTAs */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 6,
            }}
          >
            <Button
              variant="contained"
              href="tel:+1234567890"
              startIcon={<PhoneIcon />}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                bgcolor: '#F58220',
                color: '#1F3F5B',
                px: 5,
                py: 2.5,
                fontSize: '1.125rem',
                fontWeight: 700,
                boxShadow: 6,
                '&:hover': {
                  bgcolor: 'rgba(245, 130, 32, 0.9)',
                  boxShadow: 8,
                },
              }}
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outlined"
              href="tel:+1234567890"
              startIcon={<PhoneIcon />}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                px: 4,
                py: 2.5,
                fontSize: '1.125rem',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Call Now: (555) 123-4567
            </Button>
          </Box>

          {/* Trust Indicators */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.875rem',
            }}
          >
            {['No Long-Term Contracts', 'Free Property Assessment', 'Same-Day Response'].map((text) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: '#F58220', fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

