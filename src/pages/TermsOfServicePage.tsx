import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfServicePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#002b56',
          py: { xs: 6, md: 8 },
          px: 3,
          pt: { xs: 12, md: 16 },
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
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            className="font-display"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
            data-aos="fade-up"
          >
            Terms of Service
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 1,
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Group Serve Facilities Management Ltd
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Effective Date: 10/10/2025
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 3,
          bgcolor: '#F8FAFD',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ bgcolor: 'white', p: { xs: 4, md: 6 }, borderRadius: 2, boxShadow: 2 }}>
            
            {/* Section 1 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                1. Introduction
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                These Terms of Service apply to all services provided by Group Serve Facilities Management Ltd ("the Company") to its clients ("the Client").
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                By booking or using our services, you agree to these Terms.
              </Typography>
            </Box>

            {/* Section 2 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                2. Services
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We provide facilities management services including:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Gutter cleaning',
                  'Property maintenance',
                  'Residential and commercial cleaning',
                  'Reactive maintenance',
                  'Emergency call-out services',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mt: 2,
                }}
              >
                All services are subject to availability and confirmation.
              </Typography>
            </Box>

            {/* Section 3 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                3. Quotations & Pricing
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Quotes are valid for 14 days unless stated otherwise.',
                  'Prices may vary if scope changes.',
                  'VAT will be applied where applicable.',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Section 4 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                4. Payment Terms
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Payment may be required in advance for one-off services.',
                  'Commercial contracts may be invoiced with agreed payment terms.',
                  'Late payments may result in service suspension and additional charges.',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Section 5 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                5. Client Responsibilities
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                Clients must:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Provide accurate property details',
                  'Ensure safe and clear access to work areas',
                  'Inform us of any known hazards',
                  'Secure pets and valuables',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mt: 2,
                }}
              >
                Failure to meet these requirements may result in additional charges or rescheduling.
              </Typography>
            </Box>

            {/* Section 6 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                6. Health & Safety
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We operate in accordance with UK Health & Safety regulations.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                We reserve the right to refuse work in unsafe conditions.
              </Typography>
            </Box>

            {/* Section 7 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                7. Liability
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'We carry out services with reasonable care and skill.',
                  'We are not responsible for pre-existing damage.',
                  'Our liability is limited to the value of the service provided unless otherwise required by law.',
                  'We are not liable for indirect or consequential losses.',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Section 8 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                8. Cancellations
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  "24 hours' notice is required for cancellations.",
                  'Deposits may be non-refundable.',
                  'Emergency bookings may not be eligible for cancellation refunds.',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Section 9 */}
            <Box sx={{ mb: 5 }} data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                9. Force Majeure
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                We are not liable for delays caused by events beyond our control, including extreme weather conditions.
              </Typography>
            </Box>

            {/* Section 10 */}
            <Box data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                10. Governing Law
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                These Terms are governed by the laws of England and Wales.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                Any disputes shall be subject to the exclusive jurisdiction of UK courts.
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default TermsOfServicePage;
