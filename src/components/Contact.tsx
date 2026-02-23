import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceInterested: '',
    facilityType: '',
    specificRequirements: '',
  });

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const benefits = [
    'Expert Team',
    '24/7 Support',
    'Eco-Friendly Solutions',
    'Cost-Effective',
    'Fully Insured',
    'Customized Plans',
  ];

  const steps = [
    'We schedule a free consultation at your convenience',
    'We assess your facility and discuss your specific needs',
    'We prepare a customized quote tailored to your requirements',
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 12 },
        px: 3,
         bgcolor: 'white',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', bgcolor: 'white', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        {/* Background Box on Top */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: { xs: '205px', sm: '170px', md: '250px' },
            background: 'linear-gradient(135deg, #0F223F 0%, #3097C0 100%)',
            borderRadius: '8px 8px 0 0',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'start',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left Content Section */}
          <Box data-aos="fade-right">
            {/* Header */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  color: '#3097C0',
                  mb: 1,
                }}
              >
                GET STARTED TODAY
              </Typography>
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 4,
                  lineHeight: 1.2,
                }}
              >
                Partner With Us For Comprehensive Facilities Management
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.6,
                  maxWidth: '90%',
                }}
              >
                Get a free quote from our facilities management experts. No obligation, just honest pricing and professional service recommendations tailored to your business needs.
              </Typography>
            </Box>

            {/* Benefits Section */}
            <Box sx={{ mb: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem' },
                  fontWeight: 600,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                Your benefits:
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 1.5,
                }}
              >
                {benefits.map((benefit) => (
                  <Box
                    key={benefit}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: '#3097C0',
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.9375rem',
                        color: '#333333',
                        fontWeight: 500,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* What Happens Next Section */}
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem' },
                  fontWeight: 600,
                  color: '#0F223F',
                  mb: 3,
                }}
              >
                What happens next?
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {steps.map((step, index) => (
                  <Card
                    key={index}
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      bgcolor: 'white',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#3097C0',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem' },
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '0.9375rem',
                        color: '#333333',
                        fontWeight: 500,
                      }}
                    >
                      {step}
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right Form Section */}
          <Box data-aos="fade-left">
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Form Title */}
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                <Typography
                  variant="h3"
                  className="font-display"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                    fontWeight: 700,
                    color: '#333333',
                  }}
                >
                  Get a Free Quote
                </Typography>
                <Box
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: '9999px',
                    bgcolor: '#F0942D',
                    color: '#333333',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  NO OBLIGATION
                </Box>
              </Box>

              {/* Form */}
              <Box component="form" onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {/* Full Name */}
                  <TextField
                    required
                    name="fullName"
                    label="Full Name"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'white',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#F0942D',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F0942D',
                        },
                      },
                    }}
                  />

                  {/* Phone Number */}
                  <TextField
                    required
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="Phone Number *"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'white',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#F0942D',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F0942D',
                        },
                      },
                    }}
                  />

                  {/* Email Address */}
                  <TextField
                    type="email"
                    name="emailAddress"
                    label="Email Address"
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'white',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#F0942D',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F0942D',
                        },
                      },
                    }}
                  />

                  {/* Service Interested In */}
                  <FormControl fullWidth required>
                    <InputLabel
                      sx={{
                        '&.Mui-focused': {
                          color: '#F0942D',
                        },
                      }}
                    >
                      Service Interested In
                    </InputLabel>
                    <Select
                      value={formData.serviceInterested}
                      onChange={handleSelectChange('serviceInterested')}
                      label="Service Interested In"
                      sx={{
                        borderRadius: 1,
                        bgcolor: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#E0E0E0',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#F0942D',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#F0942D',
                        },
                      }}
                    >
                      <MenuItem value="commercial-cleaning">Commercial Cleaning</MenuItem>
                      <MenuItem value="hvac-maintenance">HVAC Maintenance</MenuItem>
                      <MenuItem value="security-services">Security Services</MenuItem>
                      <MenuItem value="electrical-maintenance">Electrical Maintenance</MenuItem>
                      <MenuItem value="plumbing-services">Plumbing Services</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Facility Type */}
                  <FormControl fullWidth required>
                    <InputLabel
                      sx={{
                        '&.Mui-focused': {
                          color: '#F0942D',
                        },
                      }}
                    >
                      Facility Type
                    </InputLabel>
                    <Select
                      value={formData.facilityType}
                      onChange={handleSelectChange('facilityType')}
                      label="Facility Type"
                      sx={{
                        borderRadius: 1,
                        bgcolor: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#E0E0E0',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#F0942D',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#F0942D',
                        },
                      }}
                    >
                      <MenuItem value="office">Office Building</MenuItem>
                      <MenuItem value="healthcare">Healthcare Facilities</MenuItem>
                      <MenuItem value="retail">Retail Centers</MenuItem>
                      <MenuItem value="industrial">Industrial Facilities</MenuItem>
                      <MenuItem value="residential">Residential Complex</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Specific Requirements */}
                  <TextField
                    name="specificRequirements"
                    label="Specific Requirements"
                    placeholder="Specific Requirements"
                    value={formData.specificRequirements}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        bgcolor: 'white',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#F0942D',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F0942D',
                        },
                      },
                    }}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 1,
                      py: 1.75,
                      borderRadius: 1,
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      bgcolor: '#F0942D',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(240, 148, 45, 0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(240, 148, 45, 0.9)',
                        boxShadow: '0 6px 16px rgba(240, 148, 45, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Request Quote Now
                  </Button>

                  {/* Footer */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LockIcon sx={{ color: '#F0942D', fontSize: 18 }} />
                      <Typography sx={{ fontSize: '0.875rem', color: '#333333' }}>
                        Your details are 100% secure.
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon sx={{ color: '#F0942D', fontSize: 18 }} />
                      <Typography sx={{ fontSize: '0.875rem', color: '#333333', fontWeight: 500 }}>
                        Call: 07438 580681
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
