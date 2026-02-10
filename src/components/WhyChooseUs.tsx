import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      title: 'Experienced Professionals',
      description: 'Our team has years of experience handling all types of facilities with precision and care.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: 'Fully Licensed & Insured',
      description: 'We are fully licensed, insured, and compliant with all health and safety regulations.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: '24/7 Emergency Support',
      description: 'Our emergency response team is available round the clock to address urgent issues.',
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 20, color: '#50BB5A' }} />,
      title: 'Competitive Pricing',
      description: 'We offer transparent, competitive pricing with no hidden charges or surprises.',
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
            Why Choose Group Serve
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
            Why Choose Group Serve
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
            Discover what sets us apart from other facilities management companies.
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
                Experience the Group Serve Difference
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: '#6C757D',
                  mb: 4,
                  lineHeight: 1.75,
                }}
              >
                We utilize advanced gutter vacuum systems and reach-and-wash equipment for cleaning gutters on various property types, including multi-storey buildings, terraced houses, flats, offices, and retail properties. Our comprehensive services include gutter unblocking, downpipe cleaning, soffit and fascia cleaning, moss removal, and minor gutter repairs. We are fully insured, competitively priced, and committed to excellent customer satisfaction.
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
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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

