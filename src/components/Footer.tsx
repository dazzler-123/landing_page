import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A2B25',
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
                sx={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(135deg, #0B4F3D, rgba(11, 79, 61, 0.8))',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 2,
                }}
              >
                <HomeIcon sx={{ color: 'white', fontSize: 24 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                    fontFamily: "'Instrument Serif', serif",
                  }}
                >
                  GroupServe
                </Typography>
                <Typography
                  sx={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#E8A54C',
                    fontWeight: 500,
                  }}
                >
                  Facilities Management
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '0.875rem', mb: 3, lineHeight: 1.625 }}>
              Professional facilities management services for commercial and residential properties. Your trusted
              partner in property excellence.
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
                      bgcolor: '#E8A54C',
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
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: '1.125rem',
                fontFamily: "'Instrument Serif', serif",
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
                      color: '#E8A54C',
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
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: '1.125rem',
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#E8A54C', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    (555) 123-4567
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem' }}>24/7 Emergency Line</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailIcon sx={{ color: '#E8A54C', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    info@groupserve.com
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem' }}>General Inquiries</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#E8A54C', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    123 Business Ave
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem' }}>New York, NY 10001</Typography>
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
              href="#"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: '#E8A54C' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: '#E8A54C' },
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

