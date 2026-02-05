import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(11, 79, 61, 0.1)',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
      }}
    >
      <List sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navLinks.map((link) => (
          <ListItem
            key={link.href}
            component="a"
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            sx={{
              textAlign: 'center',
              color: '#1A2B25',
              '&:hover': { color: '#0B4F3D' },
              cursor: 'pointer',
            }}
          >
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{
                fontSize: '1.125rem',
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
        <Button
          variant="contained"
          fullWidth
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          sx={{
            bgcolor: '#0B4F3D',
            color: 'white',
            py: 1.5,
            mt: 1,
            '&:hover': { bgcolor: 'rgba(11, 79, 61, 0.9)' },
          }}
        >
          Get A Free Quote
        </Button>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(11, 79, 61, 0.1)',
          boxShadow: 'none',
          zIndex: 50,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              py: 1,
            }}
          >
            {/* Logo */}
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': { transform: 'scale(1.05)' },
                transition: 'transform 0.3s',
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: '#0B4F3D',
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
                    color: '#0B4F3D',
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

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  sx={{
                    color: 'rgba(26, 43, 37, 0.8)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    '&:hover': { color: '#0B4F3D' },
                    textTransform: 'none',
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: '#0B4F3D',
                  color: 'white',
                  px: 3,
                  py: 1.25,
                  boxShadow: 2,
                  '&:hover': {
                    bgcolor: 'rgba(11, 79, 61, 0.9)',
                    boxShadow: 4,
                  },
                }}
              >
                Get A Free Quote
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#0B4F3D' }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            top: 64,
            height: 'auto',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;

