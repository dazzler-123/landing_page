import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Services: React.FC = () => {
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
      title: 'Professional Cleaning',
      description: 'Daily janitorial services, deep cleaning, carpet care, and window washing to keep your property spotless.',
      delay: 100,
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
      title: 'Building Maintenance',
      description: 'Preventive and corrective maintenance for plumbing, electrical, painting, and general repairs.',
      delay: 200,
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
      title: 'HVAC Services',
      description: 'Installation, maintenance, and emergency repairs for heating, ventilation, and air conditioning systems.',
      delay: 300,
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
      title: 'Landscaping',
      description: 'Lawn care, seasonal planting, irrigation systems, and grounds maintenance to enhance curb appeal.',
      delay: 100,
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
      title: 'Roof & Gutter Cleaning',
      description: 'Regular inspections, debris removal, and maintenance to prevent water damage and extend roof life.',
      delay: 200,
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </Box>
      ),
      title: 'Security Services',
      description: '24/7 monitoring, access control, surveillance systems, and on-site security personnel for your peace of mind.',
      delay: 300,
    },
  ];

  return (
    <Box id="services" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: 'white' }}>
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
            Our Services
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
            Complete Facilities Management Solutions
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
            From cleaning to HVAC, we provide comprehensive property management services tailored to your needs.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {services.map((service, index) => (
            <Box key={service.title}>
              <Card
                data-aos="fade-up"
                data-aos-delay={service.delay}
                sx={{
                  bgcolor: '#F4F6F8',
                  borderRadius: 4,
                  p: 4,
                  border: '1px solid rgba(47, 95, 134, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: '#F58220',
                    boxShadow: 6,
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                    },
                },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  <Box
                    className="service-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      background: index % 2 === 0
                        ? 'linear-gradient(135deg, #2F5F86, rgba(47, 95, 134, 0.8))'
                        : 'linear-gradient(135deg, #4F86A7, rgba(79, 134, 167, 0.8))',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'transform 0.3s',
                    }}
                  >
                    {service.icon}
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
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(26, 43, 37, 0.7)',
                      mb: 3,
                      lineHeight: 1.625,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: '#2F5F86',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      p: 0,
                      '&:hover': {
                        color: '#F58220',
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
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#2F5F86',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: 4,
              '&:hover': {
                bgcolor: 'rgba(47, 95, 134, 0.9)',
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

