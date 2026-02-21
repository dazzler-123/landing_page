import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievements: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box 
      id="services" 
      sx={{ 
        py: { xs: 6, md: 12 }, 
        px: 3, 
        bgcolor: '#F8FAFD',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          // backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
          <Typography
            sx={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
              mb: 1,
              color: '#50BB5A',
            }}
          >
          Our Achievements
          </Typography>
          <Typography
            variant="h2"
            className="font-display"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3rem' },
              fontWeight: 700,
              color: '#0F223F',
              mb: 2,
              
            }}
          >
           Company Highlights
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: '#6C757D',
              maxWidth: '48rem',
              mx: 'auto',
              lineHeight: 1.625,
            }}
          >
          Numbers that showcase our experience and commitment to excellence in facilities management.
          </Typography>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 8 }} data-aos="fade-up">
          {[
            { number: '15+', label: 'Providing quality facilities management',title: 'Years Experience' },
            { number: '500+', label: 'Satisfied businesses',title: 'Happy Clients' },
            { number: '24/7', label: 'Emergency response team always ready',title: 'Support Available' },
            { number: '98%', label: 'Long-term relationships with our clients',title: 'Client Retention' },
          ].map((stat) => (
            <Box
              
              key={stat.label}
              sx={{
               
                textAlign: 'center',
                p: 3,
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 6,
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow: 4,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#0056b3',
                  mb: 2,
                  mt: 3,
                  // color: '#0056b3',
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 1,
                }}
              >
                {stat.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  color: '#6C757D',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

      
      </Container>
    </Box>
  );
};

export default Achievements;
