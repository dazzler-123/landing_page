import React, { useEffect } from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Industry {
  title: string;
  bgImage: string;
  delay: number;
}

const IndustriesServed: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const industries: Industry[] = [
    {
      title: 'Office Building',
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      delay: 0,
    },
    {
      title: 'Healthcare Facilities',
      bgImage: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/women-leaders-healthcare-breaking-barriers-driving-change-web-1:Small?wid=1510&hei=1787&dpr=off',
      delay: 100,
    },
    {
      title: 'Retail Centers',
      bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      delay: 200,
    },
    {
      title: 'Industrial Facilities',
      bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      delay: 300,
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
          <Typography
            variant="h2"
            className="font-display"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: '#0F223F',
              mb: 2,
            }}
          >
            Industries Served
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              color: '#6C757D',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.625,
            }}
          >
            Explore the foundations of our success and our approach to creating sustainable growth.
          </Typography>
        </Box>

        {/* Industry Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {industries.map((industry, index) => (
            <Box key={industry.title} data-aos="fade-up" data-aos-delay={industry.delay}>
              <Card
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  height: { xs: '300px', sm: '350px', md: '400px' },
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  width: '100%',
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    '& .industry-overlay': {
                      opacity: 1,
                      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)',
                    },
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  src={industry.bgImage}
                  alt={industry.title}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                  }}
                />

                {/* Gradient Overlay - Top to Bottom (Light at top, Dark at bottom) */}
                <Box
                  className="industry-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.85) 100%)',
                    transition: 'opacity 0.3s',
                    zIndex: 1,
                    opacity: 1,
                  }}
                />

                {/* Additional Dark Layer at Bottom for Text Readability */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content - Positioned at Bottom */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                      fontWeight: 700,
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {industry.title}
                  </Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustriesServed;

