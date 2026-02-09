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
      title: 'Experienced and trained service teams',
      description: 'Our teams have industry certifications and extensive experience delivering facilities management services.',
    },
    {
      title: 'Integrated hard & soft FM solutions',
      description: 'Complete facilities management from a single provider - from cleaning to HVAC, electrical, and more.',
    },
    {
      title: 'Transparent pricing and detailed reporting',
      description: 'No hidden costs. We provide clear pricing and comprehensive reporting on facilities performance.',
    },
    {
      title: 'Compliance-focused service delivery',
      description: 'Meeting all regulatory standards and ensuring your facilities remain compliant with industry requirements.',
    },
    {
      title: 'Flexible schedules',
      description: 'Tailored to your operational needs - we work around your business hours and requirements.',
    },
    {
      title: 'Dedicated customer support',
      description: 'Single-point contact with dedicated support ensuring consistent service delivery and quick response times.',
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8FAFD' }}>
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
                  bgcolor: '#F0942D',
                  borderRadius: 2,
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
                  borderRadius: 2,
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
                  color: '#50BB5A',
                }}
              >
                Why Choose Group Serve
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
                Professional. Reliable. Responsive.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: '#6C757D',
                  mb: 4,
                  lineHeight: 1.625,
                }}
              >
                We don't just maintain buildings — we help create safe, efficient, and professional environments. Our experienced team, structured processes, and proactive approach ensure consistent service delivery with minimal disruption.
              </Typography>

              {/* Benefits */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {benefits.map((benefit) => (
                  <Card
                    key={benefit.title}
                    sx={{
                      // p: 2,
                      // borderRadius: 0.5,
                      bgcolor: 'transparent',
                      boxShadow: 'none',
                      border: 'none',
                      transition: 'all 0.3s',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        className="benefit-icon"
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: 'rgba(80, 187, 90, 0.2)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background-color 0.3s',
                        }}
                      >
                        <CheckCircleIcon sx={{ color: '#50BB5A', fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: '#0F223F',
                            mb: 0.5,
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.875rem',
                            color: '#6C757D',
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
                    color: '#0F223F',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    p: 0,
                    '&:hover': {
                      color: '#F0942D',
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

