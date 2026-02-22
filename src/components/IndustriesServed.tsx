import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Box, Container, Typography, Card, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Industry {
  subtitle: ReactNode;
  title: string;
  bgImage: string;
  delay: number;
}

const IndustriesServed: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const getIndustrySlug = (title: string): string => {
    const slugMap: Record<string, string> = {
      'Office Building': 'office-building',
      'Healthcare Facilities': 'healthcare-facilities',
      'Retail Centers': 'retail-centers',
      'Industrial Facilities': 'industrial-facilities',
    };
    return slugMap[title] || 'office-building';
  };

  const industries: Industry[] = [
    {
      subtitle: 'This year marks our 20-year anniversary, delivering consistent property outperformance and value',
      title: 'Office Building',
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      delay: 0,
    },
    {
      subtitle: 'Healthcare FacilitiesWe invest in a diversified commercial property portfolio across the Industrial, Office and Retail',
      title: 'Healthcare Facilities',
      bgImage: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/women-leaders-healthcare-breaking-barriers-driving-change-web-1:Small?wid=1510&hei=1787&dpr=off',
      delay: 100,
    },
    {
      subtitle: 'Group Serve has been there at every step of our journey, always ensuring we have the right space for our needs.',
      title: 'Retail Centers',
      bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      delay: 200,
    },
    {
      subtitle: 'Driven by knowledge, expertise and research-led decision making, we aim to create long-term value for all our',
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
          {industries.map((industry) => (
            <Box key={industry.title} data-aos="fade-up" data-aos-delay={industry.delay}>
              <Card
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  height: { xs: '220px', sm: '260px', md: '320px' },
                  minHeight: { xs: '180px', sm: '200px', md: '240px' },
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
                    '& .industry-subtitle': {
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'translateY(0)',
                    },
                    '& .industry-button': {
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'translateY(0)',
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
                    // bottom: 0,
                    // left: 0,
                    // right: 0,
                    mt:5,
                    p: 2,
                    height: '100%',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems:'center'
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.7rem', md: '2rem' },
                      fontWeight: 700,
                      color: 'white',
                      mb:2,
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {industry.title}
                  </Typography>
                  <Typography
                    className="industry-subtitle font-body"
                    sx={{
                      fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                      mb: 2,
                      opacity: 0,
                      visibility: 'hidden',
                      transform: 'translateY(10px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
                    }}
                  >
                    {industry.subtitle}
                  </Typography>

                  {/* Read More Button */}
                  <Button
                    className="industry-button"
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    onClick={() => {
                      const slug = getIndustrySlug(industry.title);
                      navigate(`/industries/${slug}`);
                    }}
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem' },
                      px: { xs: 2, sm: 2.5, md: 3 },
                      py: { xs: 1, sm: 1.125, md: 1.25 },
                      borderRadius: 2,
                      alignSelf: 'flex-start',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
                      opacity: 0,
                      visibility: 'hidden',
                      transform: 'translateY(10px)',
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.25)',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '&:active': {
                        transform: 'translateY(0px)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease, all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Read More
                  </Button>
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

