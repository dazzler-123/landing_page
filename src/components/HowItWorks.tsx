import React, { useEffect } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
      icon: <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 1,
      title: 'Assessment',
      description: 'We evaluate your facility\'s needs and requirements',
      points: [
        'Comprehensive facility inspection',
        'Identify specific service requirements',
        'Assess current facility conditions',
        'Document all findings and needs',
      ],
      delay: 100,
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 2,
      title: 'Planning',
      description: 'We develop a customized facilities management plan',
      points: [
        'Create tailored service schedules',
        'Define scope of work and timelines',
        'Allocate resources and personnel',
        'Set performance metrics and KPIs',
      ],
      delay: 200,
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 3,
      title: 'Implementation',
      description: 'Our trained team executes the plan with precision',
      points: [
        'Deploy certified technicians',
        'Execute services per schedule',
        'Maintain quality standards',
        'Ensure compliance with regulations',
      ],
      delay: 300,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32, color: 'white' }} />,
      number: 4,
      title: 'Monitoring',
      description: 'We continuously monitor and optimize service delivery',
      points: [
        'Regular performance reviews',
        'Track service quality metrics',
        'Gather client feedback',
        'Continuous improvement initiatives',
      ],
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
          {/* Connecting Line (Desktop) */}
          {isDesktop && (
            <Box
              sx={{
                position: 'absolute',
                top: 96,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(to right, #0F223F 0%, #3097C0 33%, #50BB5A 66%, #F0942D 100%)',
                opacity: 0.3,
                zIndex: 0,
                animation: 'lineDraw 1.5s ease-out forwards',
                '@keyframes lineDraw': {
                  '0%': {
                    width: '0%',
                    opacity: 0,
                  },
                  '100%': {
                    width: '100%',
                    opacity: 0.3,
                  },
                },
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
                            ? 'linear-gradient(135deg, #0F223F, #2B5A8E)' // Contact Us - Dark blue gradient
                            : index === 1
                            ? 'linear-gradient(135deg, #3097C0, #20C997)' // Property Assessment - Teal/blue gradient
                            : index === 2
                            ? 'linear-gradient(135deg, #50BB5A, #28a745)' // Custom Proposal - Green gradient
                            : 'linear-gradient(135deg, #FF7E00, #FFC700)', // Service Begins - Orange to yellow gradient
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
                            ? 'linear-gradient(135deg, #0F223F, #2B5A8E)' // Contact Us
                            : index === 1
                            ? 'linear-gradient(135deg, #3097C0, #20C997)' // Property Assessment
                            : index === 2
                            ? 'linear-gradient(135deg, #50BB5A, #28a745)' // Custom Proposal
                            : 'linear-gradient(135deg, #FF7E00, #FFC700)', // Service Begins
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
                  {/* Bullet Points */}
                  <Box sx={{ textAlign: 'left', width: '100%' }}>
                    {step.points?.map((point, pointIndex) => (
                      <Box
                        key={pointIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 1,
                          gap: 1,
                          opacity: 0,
                          animation: `fadeInLeft 0.5s ease-out ${(index * 0.15 + pointIndex * 0.1 + 0.6)}s forwards`,
                          '@keyframes fadeInLeft': {
                            '0%': {
                              opacity: 0,
                              transform: 'translateX(-20px)',
                            },
                            '100%': {
                              opacity: 1,
                              transform: 'translateX(0)',
                            },
                          },
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{
                            fontSize: 8,
                            color: '#3097C0',
                            mt: 0.75,
                            flexShrink: 0,
                            animation: `bounceDot 0.6s ease-out ${(index * 0.15 + pointIndex * 0.1 + 0.8)}s`,
                            '@keyframes bounceDot': {
                              '0%, 100%': {
                                transform: 'scale(1)',
                              },
                              '50%': {
                                transform: 'scale(1.5)',
                              },
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            color: '#6C757D',
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: '#3097C0',
                            },
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

