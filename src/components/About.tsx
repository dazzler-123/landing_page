import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      title: 'Trained & Certified Staff',
      description: 'Our cleaning professionals are thoroughly trained, background-checked, and certified in industry best practices.',
    },
    {
      title: 'Eco-Friendly Products',
      description: 'We use green cleaning products that are safe for your employees, customers, and the environment.',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Customized cleaning schedules that work around your business hours - daily, weekly, or on-demand service.',
    },
    {
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind with comprehensive insurance coverage and bonded cleaning professionals.',
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F4F6F8' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 8, alignItems: 'center' }}>
          {/* Image */}
          <Box sx={{ width: { xs: '100%', lg: '50%' }, order: { xs: 2, lg: 1 } }}>
            <Box
              data-aos="fade-right"
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: -24,
                  left: -24,
                  width: '100%',
                  height: '100%',
                  bgcolor: '#F58220',
                  borderRadius: 4,
                  zIndex: -1,
                  transition: 'transform 0.5s',
                },
                '&:hover::before': {
                  transform: 'translate(8px, 8px)',
                },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional cleaning team at work"
                sx={{
                  width: '100%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: 6,
                  transition: 'transform 0.7s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ width: { xs: '100%', lg: '50%' }, order: { xs: 1, lg: 2 } }}>
            <Box data-aos="fade-left">
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  mb: 1,
                  color: '#F58220',
                }}
              >
                Why Choose Our Cleaning Services
              </Typography>
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '3rem' },
                  fontWeight: 700,
                  color: '#2F5F86',
                  mb: 2,
                }}
              >
                Your Trusted Cleaning Partner
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: 'rgba(26, 43, 37, 0.7)',
                  mb: 4,
                  lineHeight: 1.625,
                }}
              >
                We deliver exceptional cleaning services with trained professionals, eco-friendly products, and flexible schedules 
                to keep your property spotless and healthy.
              </Typography>

              {/* Benefits */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {benefits.map((benefit) => (
                  <Card
                    key={benefit.title}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: 'white',
                      boxShadow: 1,
                      border: '1px solid rgba(47, 95, 134, 0.1)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: '#F58220',
                        '& .benefit-icon': {
                          bgcolor: '#F58220',
                        },
                    },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        className="benefit-icon"
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: 'rgba(245, 130, 32, 0.2)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background-color 0.3s',
                        }}
                      >
                        <CheckCircleIcon sx={{ color: '#2F5F86', fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: '#2F5F86',
                            mb: 0.5,
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.875rem',
                            color: 'rgba(31, 63, 91, 0.7)',
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>

              {/* CTA */}
              <Box sx={{ mt: 4 }}>
                <Button
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: '#2F5F86',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    p: 0,
                    '&:hover': {
                      color: '#F58220',
                      '& .MuiSvgIcon-root': {
                        transform: 'translateX(8px)',
                      },
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s',
                    },
                  }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

