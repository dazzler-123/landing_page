import React, { useEffect } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
      icon: <DescriptionIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 1,
      title: 'Request Quote',
      description: 'Get a free, no-obligation quote tailored to your needs',
      points: [
        'Fill out our quick quote form',
        'Specify your service requirements',
        'Receive detailed pricing breakdown',
        'No commitment required',
      ],
      delay: 100,
    },
    {
      icon: <EventIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 2,
      title: 'Book Appointment',
      description: 'Schedule a convenient time for consultation',
      points: [
        'Choose your preferred date and time',
        'Confirm appointment details',
        'Receive confirmation via email/SMS',
        'Flexible scheduling options',
      ],
      delay: 200,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 3,
      title: 'Site Visit',
      description: 'Our team visits your facility for assessment',
      points: [
        'Comprehensive facility inspection',
        'Identify specific service requirements',
        'Assess current facility conditions',
        'Document all findings and needs',
      ],
      delay: 300,
    },
    {
      icon: <DeliveryDiningIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 4,
      title: 'Service Delivery',
      description: 'Professional service execution by certified technicians',
      points: [
        'Deploy certified technicians',
        'Execute services per schedule',
        'Maintain quality standards',
        'Ensure compliance with regulations',
      ],
      delay: 400,
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 5,
      title: 'Ongoing Support',
      description: 'Continuous monitoring and support for your facility',
      points: [
        '24/7 emergency support available',
        'Regular performance reviews',
        'Track service quality metrics',
        'Continuous improvement initiatives',
      ],
      delay: 500,
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
              color: '#50BB5A',
            }}
          >
            Our Service Process
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
            How We Work
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
            We follow a structured approach to ensure efficient and effective facilities management services.
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Connecting Line (Desktop) - Stepper Animation */}
          {isDesktop && (
            <Box
              sx={{
                position: 'absolute',
                top: 96,
                left: 0,
                height: 4,
                background: 'linear-gradient(to right, #0F223F 0%, #3097C0 25%, #50BB5A 50%, #FF7E00 75%, #F0942D 100%)',
                opacity: 0.3,
                zIndex: 0,
                width: '0%',
                animation: 'stepperLine 2s ease-out forwards',
                '@keyframes stepperLine': {
                  '0%': {
                    width: '0%',
                    opacity: 0,
                  },
                  '20%': {
                    width: '20%',
                    opacity: 0.2,
                  },
                  '40%': {
                    width: '40%',
                    opacity: 0.25,
                  },
                  '60%': {
                    width: '60%',
                    opacity: 0.28,
                  },
                  '80%': {
                    width: '80%',
                    opacity: 0.3,
                  },
                  '100%': {
                    width: '100%',
                    opacity: 0.3,
                  },
                },
              }}
            />
          )}

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 4, position: 'relative', zIndex: 1 }}>
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
                    opacity: 0,
                    animation: `slideInUp 0.6s ease-out ${index * 0.15}s forwards`,
                    '@keyframes slideInUp': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(40px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      '& .step-points': {
                        maxHeight: '500px',
                        opacity: 1,
                        mt: 2,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', mb: 3 }}>
                    <Box
                      className="step-icon"
                      sx={{
                        width: { xs: 60, sm: 70, md: 80 },
                        height: { xs: 60, sm: 70, md: 80 },
                        background:
                          index === 0
                            ? 'linear-gradient(135deg, #0F223F, #2B5A8E)' // Request Quote - Dark blue gradient
                            : index === 1
                            ? 'linear-gradient(135deg, #3097C0, #20C997)' // Book Appointment - Teal/blue gradient
                            : index === 2
                            ? 'linear-gradient(135deg, #50BB5A, #28a745)' // Site Visit - Green gradient
                            : index === 3
                            ? 'linear-gradient(135deg, #FF7E00, #FFC700)' // Service Delivery - Orange to yellow gradient
                            : 'linear-gradient(135deg, #F0942D, #FFB84D)', // Ongoing Support - Orange gradient
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 4,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: `pulseIcon 2s ease-in-out infinite ${index * 0.2}s`,
                        '@keyframes pulseIcon': {
                          '0%, 100%': {
                            transform: 'scale(1)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                          },
                          '50%': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                          },
                        },
                        '&:hover': {
                          transform: 'scale(1.15) rotate(5deg)',
                          animation: 'none',
                        },
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
                        background:
                          index === 0
                            ? 'linear-gradient(135deg, #0F223F, #2B5A8E)' // Request Quote
                            : index === 1
                            ? 'linear-gradient(135deg, #3097C0, #20C997)' // Book Appointment
                            : index === 2
                            ? 'linear-gradient(135deg, #50BB5A, #28a745)' // Site Visit
                            : index === 3
                            ? 'linear-gradient(135deg, #FF7E00, #FFC700)' // Service Delivery
                            : 'linear-gradient(135deg, #F0942D, #FFB84D)', // Ongoing Support
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
                    className="font-display"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#0F223F',
                      mb: 1.5,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#6C757D',
                      lineHeight: 1.625,
                      mb: 2,
                    }}
                  >
                    {step.description}
                  </Typography>
                  {/* Bullet Points - Show on Hover */}
                  <Box 
                    sx={{ 
                      textAlign: 'left', 
                      width: '100%',
                      maxHeight: 0,
                      overflow: 'hidden',
                      opacity: 0,
                      transition: 'all 0.4s ease-in-out',
                    }}
                    className="step-points"
                  >
                    {step.points?.map((point, pointIndex) => (
                      <Box
                        key={pointIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 1,
                          gap: 1,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: 8,
                            color: '#3097C0',
                            mt: 0.75,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: '#6C757D',
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
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

