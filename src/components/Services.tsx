import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CommercialImg from '../assets/image1.png';
import HVACImg from '../assets/HVAC.png';
import GutterImg from '../assets/Electrical.png';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  bgImage: string;
}

const Services: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const services: Service[] = [
    {
      icon: (
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </Box>
      ),
      title: 'Commercial Cleaning',
      description: 'Professional cleaning services with eco-friendly products.',
      delay: 100,
      bgImage: CommercialImg,
    },
    {
      icon: (
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </Box>
      ),
      title: 'HVAC Maintenance',
      description: 'Heating, ventilation and air conditioning services',
      delay: 200,
      bgImage: HVACImg,
    },
    {
      icon: (
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </Box>
      ),
      title: 'Security Services',
      description: 'Comprehensive security solutions for your facility.',
      delay: 300,
      bgImage: 'https://content.jdmagicbox.com/comp/def_content/security-services-for-industrial/shutterstock-390449341-security-services-for-industrial-10-gt037.jpg',
    },
    {
      icon: (
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8Z" />
          <path d="M12 2v20" />
        </Box>
      ),
      title: 'Electrical Maintenance',
      description: 'Safe and reliable electrical system maintenance and repairs.',
      delay: 100,
      bgImage: GutterImg,
    },
    {
      icon: (
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </Box>
      ),
      title: 'Plumbing Services',
      description:'Professional plumbing services and repairs.',
      delay: 200,
      bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJhpUP0xpqkF6BBGvV5cbe8eO0XkUsCJslQ&s',
    },
    {
      icon: (
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="12" cy="20" r="1" />
        </Box>
      ),
      title: 'Lift and Elevator Maintenance',
      description: 'Professional lift and elevator maintenance and repair services.',
      delay: 100,
      bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <Box 
      id="services" 
      sx={{ 
        py: { xs: 6, md: 12 }, 
        px: 3, 
        bgcolor: '#F8FAFD',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          // backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
            Our Expertise
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
            Comprehensive Facilities Solutions
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
           We provide end-to-end facilities management services tailored to your specific needs.
          </Typography>
        </Box>

        {/* Statistics Section */}
        {/* <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 8 }} data-aos="fade-up">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' },
            { number: '98%', label: 'Client Retention' },
          ].map((stat) => (
            <Box
              key={stat.label}
              sx={{
                textAlign: 'center',
                p: 3,
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow: 4,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 1,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  color: '#6C757D',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box> */}

        {/* Services Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, alignItems: 'stretch' }}>
          {services.map((service) => (
            <Box key={service.title} sx={{ display: 'flex' }}>
              <Card
                data-aos="fade-up"
                data-aos-delay={service.delay}
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  height: '100%',
                  minHeight: { xs: '300px', sm: '350px', md: '400px' },
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  width: '100%',
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                    },
                    '& .service-overlay': {
                      opacity: 1,
                      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)',
                    },
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  src={service.bgImage}
                  alt={service.title}
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
                  className="service-overlay"
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

                {/* Icon - Positioned at Top */}
                {/* <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: 3,
                    pb: 0,
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      background: index % 3 === 0
                        ? 'linear-gradient(135deg, #0F223F, rgba(15, 34, 63, 0.8))'
                        : index % 3 === 1
                        ? 'linear-gradient(135deg, #3097C0, rgba(48, 151, 192, 0.8))'
                        : 'linear-gradient(135deg, #50BB5A, rgba(80, 187, 90, 0.8))',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s',
                      boxShadow: 4,
                    }}
                  >
                    <Box sx={{ '& svg': { width: 32, height: 32 } }}>
                      {service.icon}
                    </Box>
                  </Box>
                </Box> */}

                {/* Content - Positioned at Bottom */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '100%',
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'white',
                      mb: 1.5,
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      mb: 2,
                      lineHeight: 1.6,
                      fontSize: '0.9375rem',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Learn More Button */}
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    onClick={() => navigate('/services')}
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      px: 3,
                      py: 1.25,
                      borderRadius: 2,
                      alignSelf: 'flex-start',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
                      mt: 0.5,
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
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Learn More
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

export default Services;

