import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CommercialImg from '../assets/Commercial.png';
import HVACImg from '../assets/HVAC.png';
import ElectricalImg from '../assets/Electrical.png';
import GutterImg from '../assets/Gutter.png';
import LandscapingImg from '../assets/Landscaping.png';
import BuildingImg from '../assets/Building.png';

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

  const handleViewAllServices = () => {
    navigate('/services');
  };

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
      description: 'Complete heating, ventilation, and air conditioning solutions including regular maintenance, emergency repairs, system installation, and energy efficiency optimization.',
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
      title: 'Electrical & Plumbing',
      description: 'Full electrical and plumbing installation, maintenance, and testing services including PAT testing, emergency repairs, and energy-efficient upgrades.',
      delay: 300,
      bgImage: ElectricalImg,
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
      title: 'Landscaping & Grounds',
      description: 'Professional exterior maintenance and landscaping including lawn care, hedge maintenance, seasonal planting, irrigation systems, and hard landscaping.',
      delay: 200,
      bgImage: LandscapingImg,
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
      bgImage: BuildingImg,
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
                  borderRadius: 2,
                  height: '100%',
                  minHeight: '400px',
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
                <Box
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
                </Box>

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

