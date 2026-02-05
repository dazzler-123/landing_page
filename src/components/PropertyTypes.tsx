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
    { icon: <BusinessIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Commercial Office' },
    { icon: <StoreIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Retail Stores' },
    { icon: <HomeIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Residential Buildings' },
    { icon: <WarehouseIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Warehouses' },
    { icon: <LocalHospitalIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Healthcare Facilities' },
    { icon: <BuildIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Industrial Properties' },
    { icon: <HotelIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Hotels & Hospitality' },
    { icon: <SchoolIcon sx={{ fontSize: 20, color: '#0B4F3D' }} />, label: 'Educational Institutions' },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8F7F4' }}>
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
                  color: '#E8A54C',
                }}
              >
                Property Types
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '3rem' },
                  fontWeight: 700,
                  color: '#0B4F3D',
                  mb: 2,
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                We Serve All Types of Properties
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: 'rgba(26, 43, 37, 0.7)',
                  mb: 5,
                  lineHeight: 1.625,
                }}
              >
                From small retail stores to large commercial complexes, we have the expertise and resources to manage
                any property type.
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
                        border: '1px solid rgba(11, 79, 61, 0.1)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#E8A54C',
                          '& .property-icon': {
                            bgcolor: 'rgba(232, 165, 76, 0.2)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="property-icon"
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: 'rgba(11, 79, 61, 0.1)',
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
                          color: '#0B4F3D',
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
                    color: '#0B4F3D',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#E8A54C',
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
                  bgcolor: '#0B4F3D',
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
                      bgcolor: '#E8A54C',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>500+</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#0B4F3D', fontWeight: 700, fontSize: '0.875rem' }}>
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

