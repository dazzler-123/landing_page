import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceInterested: '',
    facilityType: '',
    specificRequirements: '',
  });

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '140vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: '#002b56',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          // bgcolor: '#002b56',
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0, 43, 86, 0.75)',
            zIndex: 1,
          },
        }}
      />
      
      {/* Curved Bottom Edge */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          height: '100px',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          sx={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        >
          <path
            d="M0,100 Q360,20 720,40 T1440,20 L1440,100 L0,100 Z"
            fill="#F8FAFD"
          />
        </Box>
      </Box>

      {/* Hero Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, width: '100%', px: { xs: 3, md: 6 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: { xs: 'center', lg: 'flex-start' }, justifyContent: 'space-between', gap: { xs: 4, lg: 8 } }}>
          {/* Left Side - Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '42rem' } }}>
          {/* Badge */}
          <Box
            mt={2}
            data-aos="fade-down"
            data-aos-duration="1000"
            sx={{
              display: 'inline-flex',
    
              backdropFilter: 'blur(12px)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#F0942D',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              mb: 1,
              px: 2,
              py: 1,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: '#F0942D',
                borderRadius: '50%',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                '@keyframes pulse': {
                  '50%': { opacity: 0.5 },
                },
              }}
            />
            Professional • Reliable • Efficient
          </Box>

          {/* Headline */}
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            variant="h1"
            className="font-display"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', lg: '4.5rem' },
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.025em',
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            Your Complete{' '}
            <Box component="span" sx={{ color: '#F0942D' }}>
              Facilities Management
            </Box>
            {' '}Partner
          </Typography>

          {/* Subheadline */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            sx={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 5,
              lineHeight: 1.625,
            }}
          >
            Professional, reliable, and comprehensive facilities management solutions tailored to your business needs across the UK.
          </Typography>

          {/* CTAs */}
          <Box
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}
          >
            <Button
              variant="contained"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#F0942D',
                color: '#FFFFFF',
                px: 4,
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: 4,
                '&:hover': {
                  bgcolor: 'rgba(240, 148, 45, 0.9)',
                  boxShadow: 6,
                  '& .MuiSvgIcon-root': {
                    transform: 'translateX(4px)',
                  },
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.3s',
                },
              }}
            >
              Get Free Site Survey
            </Button>
            <Button
              variant="outlined"
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              View Our Services
            </Button>
          </Box>

          {/* Trust Indicators */}
          <Box
            data-aos="fade-up"
            data-aos-delay="600"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 4,
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.875rem',
            }}
          >
            {['4.8 / 5 Rated Service', '24/7 Emergency Support', 'Fully Licensed & Insured'].map((text, index) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: index === 1 ? '#50BB5A' : '#F0942D', fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{text}</Typography>
              </Box>
            ))}
          </Box>
          </Box>

          {/* Right Side - Form */}
          <Box
            data-aos="fade-left"
            data-aos-delay="400"
            sx={{
              flex: { xs: '0 0 auto', lg: '0 0 auto' },
              width: '100%',
              maxWidth: { xs: '100%', lg: '380px' },
              ml: { lg: 'auto' },
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
                p: 2.5,
                boxShadow: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.75,
              }}
            >
              {/* Form Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: '#0F223F',
                  }}
                >
                  Get a Free Quote
                </Typography>
                <Box
                  sx={{
                    bgcolor: '#FFF4E6',
                    color: '#0F223F',
                    px: 1.1,
                    py: 0.35,
                    borderRadius: '9999px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                  }}
                >
                  NO OBLIGATION
                </Box>
              </Box>

              {/* Full Name */}
              <TextField
                required
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                fullWidth
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  },
                }}
              />

              {/* Phone Number */}
              <TextField
                required
                name="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                fullWidth
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  },
                }}
              />

              {/* Email Address */}
              <TextField
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  },
                }}
              />

              {/* Service Interested In */}
              <FormControl fullWidth required size="small">
                <InputLabel>Service Interested In</InputLabel>
                <Select
                  name="serviceInterested"
                  value={formData.serviceInterested}
                  onChange={handleSelectChange('serviceInterested')}
                  label="Service Interested In"
                  sx={{
                    bgcolor: 'white',
                  }}
                >
                  <MenuItem value="commercial-cleaning">Commercial Cleaning</MenuItem>
                  <MenuItem value="deep-cleaning">Deep Cleaning</MenuItem>
                  <MenuItem value="carpet-upholstery">Carpet & Upholstery</MenuItem>
                  <MenuItem value="window-cleaning">Window Cleaning</MenuItem>
                  <MenuItem value="floor-care">Floor Care & Maintenance</MenuItem>
                  <MenuItem value="gutter-cleaning">Gutter Cleaning</MenuItem>
                </Select>
              </FormControl>

              {/* Facility Type */}
              <FormControl fullWidth required size="small">
                <InputLabel>Facility Type</InputLabel>
                <Select
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleSelectChange('facilityType')}
                  label="Facility Type"
                  sx={{
                    bgcolor: 'white',
                  }}
                >
                  <MenuItem value="office">Office</MenuItem>
                  <MenuItem value="hospital">Hospital</MenuItem>
                  <MenuItem value="hotel">Hotel</MenuItem>
                  <MenuItem value="restaurant">Restaurant</MenuItem>
                  <MenuItem value="retail">Retail Store</MenuItem>
                  <MenuItem value="warehouse">Warehouse</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              {/* Specific Requirements */}
              <TextField
                name="specificRequirements"
                label="Specific Requirements"
                value={formData.specificRequirements}
                onChange={handleInputChange}
                multiline
                rows={3}
                fullWidth
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#F0942D',
                  color: 'white',
                  py: 1.1,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(240, 148, 45, 0.9)',
                  },
                }}
              >
                Request Quote Now
              </Button>

              {/* Footer Info */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 0.25,
                  pt: 1.25,
                  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <LockIcon sx={{ fontSize: 13, color: '#6C757D' }} />
                  <Typography sx={{ fontSize: '0.75rem', color: '#6C757D' }}>
                    Your details are 100% secure.
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.75rem', color: '#0F223F', fontWeight: 500 }}>
                  Call: 0121-123-4567
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
          animation: 'bounce 1s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(-25%)' },
            '50%': { transform: 'translateX(-50%) translateY(0)' },
          },
        }}
      >
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
          sx={{ opacity: 0.6 }}
        >
          <path d="m6 9l6 6l6-6" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

