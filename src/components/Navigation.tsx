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
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

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
    setServicesMenuOpen(false);
    setServicesAnchorEl(null);
  };

  const handleServicesMenuClose = () => {
    setServicesMenuOpen(false);
    setServicesAnchorEl(null);
  };

  const handleServicesHover = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
    setServicesMenuOpen(true);
  };

  const servicesMenuItems = [
    { 
      label: 'Commercial Cleaning', 
      href: '/services/commercial-cleaning',
      icon: <CleaningServicesIcon sx={{ fontSize: 20 }} />
    },
    { 
      label: 'HVAC Maintenance', 
      href: '/services/hvac-maintenance',
      icon: <BuildIcon sx={{ fontSize: 20 }} />
    },
    { 
      label: 'Security Services', 
      href: '/services/security-services',
      icon: <SecurityIcon sx={{ fontSize: 20 }} />
    },
    { 
      label: 'Electrical Maintenance', 
      href: '/services/electrical-maintenance',
      icon: <ElectricalServicesIcon sx={{ fontSize: 20 }} />
    },
    { 
      label: 'Plumbing Services', 
      href: '/services/plumbing-services',
      icon: <PlumbingIcon sx={{ fontSize: 20 }} />
    },
  ];

  const navLinks = [
    { label: 'Services', href: '#services', hasDropdown: true },
    // { label: 'About Us', href: '#about' },
    // { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(15, 34, 63, 0.1)',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
      }}
    >
      <List sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navLinks.map((link) => {
          if (link.hasDropdown) {
            return (
              <Box key={link.href}>
                <ListItem
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  sx={{
                    textAlign: 'center',
                    color: '#333333',
                    '&:hover': { color: '#0F223F' },
                    cursor: 'pointer',
                    mb: 1,
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
                <Box sx={{ pl: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {servicesMenuItems.map((item) => (
                    <ListItem
                      key={item.label}
                      component="a"
                      href={item.href}
                      onClick={() => {
                        handleDrawerToggle();
                        window.location.href = item.href;
                      }}
                      sx={{
                        color: '#6C757D',
                        fontSize: '0.875rem',
                        py: 0.5,
                        '&:hover': { color: '#0F223F', bgcolor: '#F8FAFD' },
                        cursor: 'pointer',
                        borderRadius: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center' }}>
                          {item.icon}
                        </Box>
                        <Typography sx={{ fontSize: '0.875rem' }}>{item.label}</Typography>
                      </Box>
                    </ListItem>
                  ))}
                </Box>
              </Box>
            );
          }
          return (
            <ListItem
              key={link.href}
              component="a"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              sx={{
                textAlign: 'center',
                color: '#333333',
                '&:hover': { color: '#0F223F' },
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
          );
        })}
        <Button
          variant="contained"
          fullWidth
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          sx={{
            bgcolor: '#F0942D',
            color: 'white',
            py: 1.5,
            mt: 1,
            '&:hover': { bgcolor: 'rgba(240, 148, 45, 0.9)' },
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
          borderBottom: '1px solid rgba(15, 34, 63, 0.1)',
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
                  bgcolor: '#0F223F',
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
                  className="font-display"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0F223F',
                    lineHeight: 1,
                  }}
                >
                  GroupServe
                </Typography>
                <Typography
                  className="font-body"
                  sx={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#F0942D',
                    fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Professional Cleaning Services
                </Typography>
              </Box>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <Box
                      key={link.href}
                      sx={{ position: 'relative' }}
                      onMouseEnter={handleServicesHover}
                      onMouseLeave={handleServicesMenuClose}
                    >
                      <Button
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                          color: '#333333',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          '&:hover': { color: '#0F223F' },
                          textTransform: 'none',
                        }}
                      >
                        {link.label}
                      </Button>
                      <Menu
                        anchorEl={servicesAnchorEl}
                        open={servicesMenuOpen}
                        onClose={handleServicesMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleServicesMenuClose,
                        }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            minWidth: 280,
                            boxShadow: 4,
                            borderRadius: 2,
                            border: '1px solid rgba(15, 34, 63, 0.1)',
                          },
                        }}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                      >
                        {servicesMenuItems.map((item) => (
                          <MenuItem
                            key={item.label}
                            onClick={() => {
                              handleServicesMenuClose();
                              window.location.href = item.href;
                            }}
                            sx={{
                              py: 1.5,
                              px: 2,
                              '&:hover': {
                                bgcolor: '#F8FAFD',
                              },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                              <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center' }}>
                                {item.icon}
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: '0.875rem',
                                  color: '#0F223F',
                                  fontWeight: 500,
                                }}
                              >
                                {item.label}
                              </Typography>
                            </Box>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }
                return (
                  <Button
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    sx={{
                      color: '#333333',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      '&:hover': { color: '#0F223F' },
                      textTransform: 'none',
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
              <Button
                variant="contained"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: '#0F223F',
                  color: 'white',
                  px: 3,
                  py: 1.25,
                  boxShadow: 2,
                  '&:hover': {
                    bgcolor: 'rgba(15, 34, 63, 0.9)',
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
              sx={{ display: { md: 'none' }, color: '#0F223F' }}
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

