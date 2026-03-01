import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BuildingImg from '../assets/image7.jpeg';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const features: Feature[] = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: 'UK-wide coverage & 24/7 response',
      description: 'Wherever you are in the UK, our teams can support you around the clock with both planned visits and urgent call-outs.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: 'Fully insured & safety compliant',
      description: 'We operate with comprehensive insurance and work in line with current UK health and safety regulations.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: 'Transparent pricing & fast turnaround',
      description: 'Clear quotes with no hidden extras and efficient scheduling designed to minimise disruption to your site.',
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: 'Customer-focused, long-term care',
      description: 'We build ongoing maintenance plans around your property, focusing on long-term reliability rather than one-off fixes.',
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
              fontWeight: 700,
              mb: 1,
              color: '#50BB5A',
            }}
          >
            Why Choose Us
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
            Trusted, Efficient & Professional Services
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
            At Group Serve Facilities Management, we deliver dependable, high-quality property care solutions for residential, commercial, and industrial clients. Our trained technicians and responsive support ensure your facility is always in excellent condition.
          </Typography>
        </Box>

        {/* Main Content Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 8, alignItems: 'center' }}>
          {/* Left Content */}
          <Box sx={{ width: { xs: '100%', lg: '50%' }, order: { xs: 1, lg: 1 } }}>
            <Box data-aos="fade-right">
              <Typography
                variant="h3"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 3,
                }}
              >
                Why Choose Us
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: '#6C757D',
                  mb: 4,
                  lineHeight: 1.75,
                }}
              >
                From commercial offices and industrial sites to residential properties, we provide reliable facilities management and property maintenance that keeps everything running smoothly. Whether you need routine cleaning, reactive maintenance, grounds and external upkeep, or 24/7 emergency call-outs, we tailor our service to the way you operate.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.0625rem' },
                  fontWeight: 600,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                Key benefits:
              </Typography>

              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {features.map((feature, index) => (
                  <Box
                    key={feature.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        bgcolor: 'rgba(80, 187, 90, 0.2)',
                        transition: 'background-color 0.3s',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: '1.125rem',
                          fontWeight: 700,
                          color: '#0F223F',
                          mb: 0.5,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.875rem',
                          color: '#6C757D',
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right Image */}
          <Box sx={{ width: { xs: '100%', lg: '50%' }, order: { xs: 2, lg: 2 } }}>
            <Box
              data-aos="fade-left"
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: -24,
                  left: -24,
                  width: '100%',
                  height: '100%',
                  // bgcolor: '#002b56',
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
                src={BuildingImg}
                alt="Professional gutter cleaning and building maintenance"
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
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

