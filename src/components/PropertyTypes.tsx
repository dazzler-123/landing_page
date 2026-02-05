import React, { useEffect } from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BuildIcon from '@mui/icons-material/Build';
import HotelIcon from '@mui/icons-material/Hotel';
import SchoolIcon from '@mui/icons-material/School';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PropertyTypes: React.FC = () => {
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

  const propertyTypes = [
    { icon: <HomeIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Residential' },
    { icon: <BusinessIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Office' },
    { icon: <LocalHospitalIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Hospital' },
    { icon: <BuildIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Industrial' },
    { icon: <BusinessIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Commercial' },
    { icon: <LocalHospitalIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Healthcare' },
    { icon: <SchoolIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Educational' },
    { icon: <StoreIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Retail' },
    { icon: <WarehouseIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Warehouse' },
    { icon: <RestaurantIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Restaurant' },
    { icon: <HotelIcon sx={{ fontSize: 20, color: '#2F5F86' }} />, label: 'Hotel' },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F4F6F8' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 8, alignItems: 'center' }}>
          {/* Content */}
          <Box sx={{ width: { xs: '100%', lg: '50%' }, order: { xs: 2, lg: 1 } }}>
            <Box data-aos="fade-right">
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
                Property Types
              </Typography>
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '3rem' },
                  fontWeight: 700,
                  color: '#2F5F86',
                  mb: 2,
                }}
              >
                Cleaning Services for Every Property Type
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: 'rgba(26, 43, 37, 0.7)',
                  mb: 5,
                  lineHeight: 1.625,
                }}
              >
                From residential homes to large commercial facilities, we provide expert cleaning services tailored 
                to each property type's unique requirements.
              </Typography>

              {/* Property Types Grid */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)' }, gap: 2 }}>
                {propertyTypes.map((property) => (
                  <Box key={property.label}>
                    <Card
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 2,
                        bgcolor: 'white',
                        borderRadius: 3,
                        border: '1px solid rgba(47, 95, 134, 0.1)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#F58220',
                          '& .property-icon': {
                            bgcolor: 'rgba(245, 130, 32, 0.2)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="property-icon"
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: 'rgba(47, 95, 134, 0.1)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background-color 0.3s',
                        }}
                      >
                        {property.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#2F5F86',
                        }}
                      >
                        {property.label}
                      </Typography>
                    </Card>
                  </Box>
                ))}
              </Box>

              {/* CTA */}
              <Box sx={{ mt: 5 }}>
                <Box
                  component="a"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#2F5F86',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#F58220',
                      '& .MuiSvgIcon-root': {
                        transform: 'translateX(8px)',
                      },
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s',
                    },
                  }}
                >
                  Explore Industries We Serve
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Image */}
          <Box sx={{ width: { xs: '100%', lg: '50%' }, order: { xs: 1, lg: 2 } }}>
            <Box
              data-aos="fade-left"
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -24,
                  right: -24,
                  width: '100%',
                  height: '100%',
                  bgcolor: '#2F5F86',
                  borderRadius: 4,
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
                src="https://img.rocket.new/generatedImages/rocket_gen_img_11f39316a-1767018786783.png"
                alt="Modern commercial building exterior showcasing professional property management"
                sx={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: 6,
                  transition: 'transform 0.7s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />

              {/* Stat Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 32,
                  left: 32,
                  bgcolor: 'white',
                  borderRadius: 3,
                  p: 2,
                  boxShadow: 6,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: '#F58220',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>500+</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#2F5F86', fontWeight: 700, fontSize: '0.875rem' }}>
                      Properties Managed
                    </Typography>
                    <Typography sx={{ color: 'rgba(26, 43, 37, 0.6)', fontSize: '0.75rem' }}>
                      Across all sectors
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyTypes;

