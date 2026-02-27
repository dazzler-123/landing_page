import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../assets/logo3.png';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePageLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    // { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0F223F',
        color: 'rgba(255, 255, 255, 0.8)',
        py: 8,
        px: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 6, mb: 6 }}>
          {/* Company Info */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box
                component="img"
                src={logo}
                alt="GroupServe"
                sx={{
                  height: { xs: 80, sm: 80, md: 80 },
                  width:  { xs: 200, sm: 200, md: 200 },
                  display: 'block',
                }}
              />
           
            </Box>
            <Typography sx={{ fontSize: '0.875rem', mb: 3, lineHeight: 1.625 }}>
            Comprehensive facilities management solutions for commercial and industrial properties. Your trusted partner for 
            professional cleaning, HVAC maintenance, security services, electrical, and plumbing solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <FacebookIcon sx={{ fontSize: 20 }} />, href: '#' },
                { icon: <InstagramIcon sx={{ fontSize: 20 }} />, href: '#' },
                { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, href: '#' },
              ].map((social, index) => (
                <Box
                  key={index}
                  component="a"
                  href={social.href}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      bgcolor: '#F0942D',
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant="h6"
              className="font-display"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: '1.125rem',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  sx={{
                    color: 'inherit',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#F0942D',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              className="font-display"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: '1.125rem',
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#F0942D', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    07438 580681
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem' }}>24/7 Emergency Line</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailIcon sx={{ color: '#F0942D', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    support@groupservefacilities.co.uk
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem' }}>General Inquiries</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#F0942D', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    Group Serve Facilities Management
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', mb: 0.5 }}>181 Walmley Road</Typography>
                  <Typography sx={{ fontSize: '0.75rem' }}>Sutton Coldfield, B761PX</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: '0.875rem', textAlign: { xs: 'center', md: 'left' } }}>
            © 2026 GroupServe. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, fontSize: '0.875rem' }}>
            <Link
              href="/privacy-policy"
              onClick={(e) => handlePageLink(e, '/privacy-policy')}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.3s',
                cursor: 'pointer',
                '&:hover': { color: '#F0942D' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              onClick={(e) => handlePageLink(e, '/terms-of-service')}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.3s',
                cursor: 'pointer',
                '&:hover': { color: '#F0942D' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

