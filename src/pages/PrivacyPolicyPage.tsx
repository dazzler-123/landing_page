import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicyPage: React.FC = () => {
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
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Group Serve Facilities Management Ltd
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
                1. Who We Are
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                Group Serve Facilities Management Ltd ("we", "our", "us") is a UK-based facilities management company providing gutter cleaning, property maintenance, and related services.
              </Typography>
              <Box sx={{ bgcolor: '#F8FAFD', p: 3, borderRadius: 2, mt: 2 }}>
                <Typography sx={{ fontSize: '0.9375rem', color: '#0F223F', fontWeight: 600, mb: 1 }}>
                  Company Name:
                </Typography>
                <Typography sx={{ fontSize: '0.9375rem', color: '#6C757D', mb: 2 }}>
                  Group Serve Facilities Management Ltd
                </Typography>
                
                <Typography sx={{ fontSize: '0.9375rem', color: '#0F223F', fontWeight: 600, mb: 1 }}>
                  Registered Address:
                </Typography>
                <Typography sx={{ fontSize: '0.9375rem', color: '#6C757D', mb: 1 }}>
                  181 Walmley Road
                </Typography>
                <Typography sx={{ fontSize: '0.9375rem', color: '#6C757D', mb: 1 }}>
                  Sutton Coldfield
                </Typography>
                <Typography sx={{ fontSize: '0.9375rem', color: '#6C757D', mb: 2 }}>
                  B76 1PX, United Kingdom
                </Typography>
                
                <Typography sx={{ fontSize: '0.9375rem', color: '#0F223F', fontWeight: 600, mb: 1 }}>
                  Phone:
                </Typography>
                <Typography sx={{ fontSize: '0.9375rem', color: '#6C757D', mb: 2 }}>
                  07438 580681 (24/7 Emergency Line)
                </Typography>
                
                <Typography sx={{ fontSize: '0.9375rem', color: '#0F223F', fontWeight: 600, mb: 1 }}>
                  Email:
                </Typography>
                <Typography sx={{ fontSize: '0.9375rem', color: '#6C757D' }}>
                  support@groupservefacilities.co.uk
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mt: 2,
                }}
              >
                We are committed to protecting and respecting your privacy in accordance with the UK GDPR and the Data Protection Act 2018.
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
                2. Information We Collect
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We may collect:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Full name',
                  'Contact details (email, phone number)',
                  'Property address',
                  'Service requirements',
                  'Payment details (processed securely via third-party providers)',
                  'Website usage data (IP address, browser type, cookies)',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
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
                3. How We Use Your Information
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We use your personal data to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Provide requested services',
                  'Respond to enquiries',
                  'Issue invoices and process payments',
                  'Arrange emergency call-outs',
                  'Improve our services',
                  'Meet legal and regulatory obligations',
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
                We process your data under lawful bases including contract performance, legitimate interests, legal obligation, and consent where required.
              </Typography>
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
                4. Sharing Your Information
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We do not sell or rent your personal data.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                We may share information with:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Payment processors',
                  'Accountants and auditors',
                  'IT and hosting providers',
                  'Legal authorities where required',
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
                All third parties are required to protect your data.
              </Typography>
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
                5. Data Retention
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                We retain data only as necessary, including up to 6 years for accounting and tax purposes in line with UK regulations.
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
                6. Your Rights
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                Under UK data protection law, you have the right to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {[
                  'Access your personal data',
                  'Request correction',
                  'Request deletion (where applicable)',
                  'Object to processing',
                  "Lodge a complaint with the Information Commissioner's Office (ICO)",
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ fontSize: '1rem', color: '#6C757D', mb: 1, lineHeight: 1.75 }}>
                    {item}
                  </Box>
                ))}
              </Box>
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
                7. Cookies
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                Our website may use cookies for essential functionality and analytics. You can manage cookies through your browser settings.
              </Typography>
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
                8. Data Security
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                We implement appropriate technical and organisational measures to safeguard your information.
              </Typography>
            </Box>

            {/* Section 9 */}
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
                9. Updates
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6C757D',
                  lineHeight: 1.75,
                }}
              >
                We may update this Privacy Policy periodically. The latest version will always be available on our website.
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PrivacyPolicyPage;
