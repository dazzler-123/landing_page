import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
  bgImage: string;
}

const ServicePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleContactClick = () => {
    navigate('/#contact');
  };

  // Cleaning service images
  const cleaningImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ];

  const services: Service[] = [
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
          <path d="M12 2v20M2 12h20" />
        </Box>
      ),
      title: 'Commercial & Residential Cleaning Services',
      description: 'Complete cleaning solutions for all environments',
      features: [
        'Daily office cleaning: Regular maintenance to ensure clean, professional workspaces',
        'Deep cleaning: Periodic intensive cleaning for carpets, upholstery, and hard floors',
        'Window cleaning: Internal and external window cleaning for clear visibility',
        'Specialist treatments: Stone cleaning, facade cleaning, and high-level access cleaning',
        'Residential cleaning: Regular cleaning services for residential complexes and apartments',
        'COVID-19 sanitization: Specialist disinfection and sanitization services',
      ],
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
      title: 'HVAC Maintenance & Installation',
      description: 'Complete heating, ventilation, and air conditioning solutions',
      features: [
        'Regular maintenance: Scheduled servicing to ensure optimal performance',
        'Emergency repairs: 24/7 emergency call-out for HVAC system failures',
        'System installation: New HVAC system design, installation, and commissioning',
        'Energy efficiency: System optimization to reduce energy consumption',
        'Air quality management: Testing and improvement of indoor air quality',
        'Duct cleaning: Comprehensive ductwork cleaning and sanitization',
      ],
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
      title: 'Electrical & Plumbing Services',
      description: 'Full electrical and plumbing installation, maintenance, and testing',
      features: [
        'Electrical installations: Complete rewiring, lighting installations, and power distribution',
        'Plumbing systems: Installation, maintenance, and repair of all plumbing systems',
        'PAT testing: Portable appliance testing and electrical safety inspections',
        'Emergency repairs: Fast response to electrical and plumbing emergencies',
        'Water hygiene: Legionella risk assessment and water system management',
        'Energy-efficient upgrades: LED lighting conversions and water-saving installations',
      ],
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
      description: 'Specialist exterior maintenance services',
      features: [
        'Gutter cleaning: Removal of debris, leaves, and blockages from all gutter systems',
        'Roof cleaning: Moss and algae removal, roof inspections, and maintenance',
        'High-level access: Specialist equipment for safe access to roofs and gutters',
        'Downpipe clearing: Unblocking and maintenance of rainwater drainage systems',
        'Preventative maintenance: Regular scheduled cleaning to prevent issues',
        'Safety inspections: Identification of potential roof and gutter problems',
      ],
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
      title: 'Landscaping & Grounds Maintenance',
      description: 'Professional exterior maintenance and landscaping',
      features: [
        'Lawn care: Regular mowing, edging, and lawn maintenance',
        'Hedge maintenance: Trimming, pruning, and shaping of hedges and shrubs',
        'Seasonal planting: Design and implementation of seasonal planting schemes',
        'Irrigation systems: Installation, maintenance, and repair of irrigation systems',
        'Hard landscaping: Maintenance of pathways, car parks, and outdoor areas',
        'Seasonal services: Leaf clearance, snow removal, and winter preparation',
      ],
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
      title: 'Building Maintenance & Repairs',
      description: 'Complete building maintenance and repair services',
      features: [
        'Reactive maintenance: Fast response to repair requests and issues',
        'Planned maintenance: Scheduled inspections and preventative maintenance',
        'Carpentry services: Repair and installation of doors, windows, and fixtures',
        'Decorating: Internal and external painting and decorating services',
        'Flooring: Repair and installation of all types of flooring',
        'Building fabric: Maintenance of walls, ceilings, and structural elements',
      ],
      delay: 100,
      bgImage: cleaningImages[5],
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
          <path d="M12 2v20M2 12h20" />
        </Box>
      ),
      title: 'Facilities Management (Integrated Services)',
      description: 'Complete facilities management solutions',
      features: [
        'Total FM solutions: Integrated management of all facilities services',
        'Helpdesk services: Single point of contact for all facilities issues',
        'Contract management: Management of all facilities-related contracts',
        'Compliance management: Ensuring all statutory compliance requirements are met',
        'Reporting & analytics: Detailed reporting on facilities performance and costs',
        'Strategic planning: Long-term facilities strategy and budgeting',
      ],
      delay: 200,
      bgImage: cleaningImages[0],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#002b56',
          py: { xs: 8, md: 12 },
          px: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0, 43, 86, 0.75)',
            },
          }}
        />
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBackClick}
            sx={{
              color: 'white',
              mb: 4,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Back to Home
          </Button>
          
          <Typography
            variant="h1"
            className="font-display"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
            data-aos="fade-up"
          >
            Our Comprehensive Facilities Management Services
          </Typography>
          <Typography
            sx={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '48rem',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Group Serve Facilities Management offers a complete suite of professional services designed to maintain, enhance, and protect your business premises. Each service is delivered by certified professionals using the latest technology and industry best practices.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: '#F8FAFD',
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={service.title}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 4,
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: 8,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(15, 34, 63, 0.7)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
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
                        boxShadow: 4,
                      }}
                    >
                      <Box sx={{ '& svg': { width: 32, height: 32 } }}>
                        {service.icon}
                      </Box>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h3"
                      className="font-display"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#0F223F',
                        mb: 1.5,
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography
                      sx={{
                        color: '#6C757D',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#0F223F',
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Services Include:
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          component="li"
                          key={idx}
                          sx={{
                            color: '#6C757D',
                            mb: 1,
                            fontSize: '0.9375rem',
                            '&::marker': {
                              color: '#F0942D',
                            },
                          }}
                        >
                          {feature}
                        </Box>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={handleContactClick}
                      sx={{
                        bgcolor: '#F0942D',
                        color: 'white',
                        px: 3,
                        py: 1.25,
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: 'rgba(240, 148, 45, 0.9)',
                        },
                      }}
                    >
                      Get a Quote
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ServicePage;
