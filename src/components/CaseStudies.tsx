import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const CaseStudies: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      title: 'Office Complex Maintenance',
      description: 'Comprehensive facilities management for a 50,000 sq ft office building in Birmingham.',
      image: 'https://bsateam.com/wp-content/uploads/Maintenance-Tech.webp',
      delay: 0,
    },
    {
      title: 'Healthcare Facility Services',
      description: 'Specialized cleaning and maintenance for a private hospital in Sutton Coldfield.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      delay: 100,
    },
    {
      title: 'Retail Center Management',
      description: 'Complete facilities management solution for a large shopping center.',
      image: 'https://www.itrobes.com/wp-content/uploads/2024/04/benefits-of-mall-management-software.jpg',
      delay: 200,
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8FAFD' }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
          <Typography
            sx={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
              color: '#6C757D',
              mb: 1,
            }}
          >
            OUR WORK
          </Typography>
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
            Case Studies
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
            Explore how we've helped businesses improve their facilities management.
          </Typography>
        </Box>

        {/* Case Study Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {caseStudies.map((caseStudy) => (
            <Box key={caseStudy.title} data-aos="fade-up" data-aos-delay={caseStudy.delay}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: '#FFFFFF',
                  boxShadow: 2,
                  transition: 'all 0.3s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  sx={{
                    width: '100%',
                    height: { xs: '250px', sm: '280px', md: '300px' },
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Content */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      fontWeight: 700,
                      color: '#0F223F',
                      mb: 1.5,
                    }}
                  >
                    {caseStudy.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: '0.9375rem',
                      color: '#6C757D',
                      mb: 3,
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {caseStudy.description}
                  </Typography>

                  {/* Button */}
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: '#0F223F',
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 1,
                      alignSelf: 'flex-start',
                      boxShadow: 2,
                      '&:hover': {
                        bgcolor: 'rgba(15, 34, 63, 0.9)',
                        boxShadow: 4,
                        '& .MuiSvgIcon-root': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '& .MuiSvgIcon-root': {
                        transition: 'transform 0.3s',
                      },
                    }}
                  >
                    Read case study
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudies;

