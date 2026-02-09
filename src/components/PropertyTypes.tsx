import React, { useEffect } from 'react';
import { Box, Container, Typography, Card, Button } from '@mui/material';
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
    { icon: <BusinessIcon sx={{ fontSize: 20, color: '#0F223F' }} />, label: 'Offices & Corporate Buildings' },
    { icon: <HomeIcon sx={{ fontSize: 20, color: '#3097C0' }} />, label: 'Residential Complexes' },
    { icon: <StoreIcon sx={{ fontSize: 20, color: '#50BB5A' }} />, label: 'Retail & Shopping Centres' },
    { icon: <WarehouseIcon sx={{ fontSize: 20, color: '#3097C0' }} />, label: 'Industrial & Warehousing' },
    { icon: <SchoolIcon sx={{ fontSize: 20, color: '#0F223F' }} />, label: 'Educational Institutions' },
    { icon: <LocalHospitalIcon sx={{ fontSize: 20, color: '#50BB5A' }} />, label: 'Healthcare Facilities' },
    { icon: <HotelIcon sx={{ fontSize: 20, color: '#F0942D' }} />, label: 'Hospitality & Leisure' },
    { icon: <BuildIcon sx={{ fontSize: 20, color: '#3097C0' }} />, label: 'Public Sector Buildings' },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8FAFD' }}>
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
                  color: '#50BB5A',
                }}
              >
                Industries We Serve
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
                No Matter the Industry
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: '#6C757D',
                  mb: 5,
                  lineHeight: 1.625,
                }}
              >
                We tailor our services to meet specific site requirements across all industries. From offices to healthcare facilities, we deliver comprehensive facilities management solutions.
              </Typography>

              {/* Property Types Grid */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)' }, gap: 2,justifyContent: 'center',alignItems: 'center' }}>
                {propertyTypes.map((property) => (
                  <Box key={property.label}>
                    <Card
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        bgcolor: 'white',
                        borderRadius: 0.5,
                        border: '1px solid rgba(15, 34, 63, 0.1)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#F0942D',
                          '& .property-icon': {
                            bgcolor: 'rgba(240, 148, 45, 0.2)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="property-icon"
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: 'rgba(15, 34, 63, 0.1)',
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
                          color: '#0F223F',
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
                <Button
                  variant="contained"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: '#0F223F',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 0.5,
                    boxShadow: 2,
                    '&:hover': {
                      bgcolor: 'rgba(15, 34, 63, 0.9)',
                      boxShadow: 4,
                      '& .MuiSvgIcon-root': {
                        transform: 'translateX(4px)',
                      },
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s',
                    },
                  }}
                >
                  Get Your Free Quote
                </Button>
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
                  bgcolor: '#0F223F',
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
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional cleaning services for various property types"
                sx={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: 2,
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
                  borderRadius: 0.5,
                  p: 2,
                  boxShadow: 6,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: '#50BB5A',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>500+</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#0F223F', fontWeight: 700, fontSize: '0.875rem' }}>
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

