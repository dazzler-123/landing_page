import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  // Cleaning service images
  const cleaningImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Commercial cleaning
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Deep cleaning
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Carpet cleaning
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Window cleaning
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Floor care
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Post-construction
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Gutter cleaning
  ];

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
      title: 'Commercial & Residential Cleaning',
      description: 'Complete cleaning solutions for all environments including daily office cleaning, deep cleaning, window cleaning, and specialist treatments.',
      delay: 100,
      bgImage: cleaningImages[0],
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
      description: 'Complete heating, ventilation, and air conditioning solutions including regular maintenance, emergency repairs, system installation, and energy efficiency optimization.',
      delay: 200,
      bgImage: cleaningImages[1],
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
      title: 'Electrical & Plumbing',
      description: 'Full electrical and plumbing installation, maintenance, and testing services including PAT testing, emergency repairs, and energy-efficient upgrades.',
      delay: 300,
      bgImage: cleaningImages[2],
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
      title: 'Gutter & Roof Cleaning',
      description: 'Specialist exterior maintenance services including gutter cleaning, roof cleaning, high-level access, and preventative maintenance to prevent water damage.',
      delay: 100,
      bgImage: cleaningImages[3],
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
      title: 'Landscaping & Grounds',
      description: 'Professional exterior maintenance and landscaping including lawn care, hedge maintenance, seasonal planting, irrigation systems, and hard landscaping.',
      delay: 200,
      bgImage: cleaningImages[4],
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
      title: 'Building Maintenance',
      description: 'Complete building maintenance and repair services including reactive maintenance, planned maintenance, carpentry, decorating, flooring, and building fabric maintenance.',
      delay: 100,
      bgImage: cleaningImages[5],
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
            Our Services
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
            Comprehensive Facilities Management Solutions
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
            Group Serve Facilities Management is a full-service facilities management company providing integrated hard and soft services tailored to your operational needs.
          </Typography>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 8 }} data-aos="fade-up">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' },
            { number: '98%', label: 'Client Retention' },
          ].map((stat, index) => (
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
        </Box>

        {/* Services Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4, alignItems: 'stretch' }}>
          {services.map((service, index) => (
            <Box key={service.title} sx={{ display: 'flex' }}>
              <Card
                data-aos="fade-up"
                data-aos-delay={service.delay}
                sx={{
                  position: 'relative',
                  borderRadius: 0.5,
                  backgroundColor: '#e7f0ff',
                  p: 2,
                  border: '1px solid rgba(15, 34, 63, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  width: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    // backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 0,
                    transition: 'opacity 0.3s',
                  },
                  '&:hover': {
                    borderColor: '#F0942D',
                    boxShadow: 6,
                    '&::before': {
                      opacity: 0.25,
                    },
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 0, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Box
                    className="service-icon"
                    sx={{
                      width: 48,
                      height: 48,
                      background: index % 3 === 0
                        ? 'linear-gradient(135deg, #0F223F, rgba(15, 34, 63, 0.8))'
                        : index % 3 === 1
                        ? 'linear-gradient(135deg, #3097C0, rgba(48, 151, 192, 0.8))'
                        : 'linear-gradient(135deg, #50BB5A, rgba(80, 187, 90, 0.8))',
                      borderRadius: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      transition: 'transform 0.3s',
                    }}
                  >
                    <Box sx={{ '& svg': { width: 20, height: 20 } }}>
                      {service.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: '#0F223F',
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#6C757D',
                      mb: 2,
                      lineHeight: 1.5,
                      fontSize: '0.875rem',
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: '#0F223F',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      p: 0,
                      '&:hover': {
                        color: index % 3 === 2 ? '#50BB5A' : '#F0942D',
                        '& .MuiSvgIcon-root': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '& .MuiSvgIcon-root': {
                        transition: 'transform 0.3s',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* View All Button */}
        <Box sx={{ textAlign: 'center', mt: 8 }} data-aos="fade-up">
          <Button
            variant="contained"
            onClick={handleViewAllServices}
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#0F223F',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: 4,
              '&:hover': {
                bgcolor: 'rgba(15, 34, 63, 0.9)',
                boxShadow: 6,
              },
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

