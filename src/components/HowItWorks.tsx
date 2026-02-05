import React, { useEffect } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const steps = [
    {
      icon: <PhoneIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 1,
      title: 'Contact Us',
      description: 'Reach out via phone, email, or our online form to discuss your property needs.',
      delay: 100,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 2,
      title: 'Property Assessment',
      description: 'We conduct a thorough on-site inspection to understand your property\'s unique requirements.',
      delay: 200,
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 3,
      title: 'Custom Proposal',
      description: 'Receive a detailed, customized service plan with transparent pricing and clear timelines.',
      delay: 300,
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 4,
      title: 'Service Begins',
      description: 'Our expert team starts managing your property with consistent, high-quality service delivery.',
      delay: 400,
    },
  ];

  return (
    <Box id="how-it-works" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
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
            Our Process
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3rem' },
              fontWeight: 700,
              color: '#2F5F86',
              mb: 2,
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            How We Work With You
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'rgba(26, 43, 37, 0.7)',
              maxWidth: '48rem',
              mx: 'auto',
              lineHeight: 1.625,
            }}
          >
            Getting started is simple. We've streamlined our process to get your property managed quickly and
            efficiently.
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Connecting Line (Desktop) */}
          {isDesktop && (
            <Box
              sx={{
                position: 'absolute',
                top: 96,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(to right, #2F5F86, #4F86A7, #2F5F86)',
                opacity: 0.2,
                zIndex: 0,
              }}
            />
          )}

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4, position: 'relative', zIndex: 1 }}>
            {steps.map((step, index) => (
              <Box key={step.number}>
                <Box
                  data-aos="fade-up"
                  data-aos-delay={step.delay}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover .step-icon': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', mb: 3 }}>
                    <Box
                      className="step-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        background:
                          index % 2 === 0
                            ? 'linear-gradient(135deg, #2F5F86, rgba(47, 95, 134, 0.8))'
                            : 'linear-gradient(135deg, #4F86A7, rgba(79, 134, 167, 0.8))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 4,
                        transition: 'transform 0.3s',
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 32,
                        height: 32,
                        bgcolor: '#F58220',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        boxShadow: 2,
                      }}
                    >
                      {step.number}
                    </Box>
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#2F5F86',
                      mb: 1.5,
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(26, 43, 37, 0.7)',
                      lineHeight: 1.625,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;

