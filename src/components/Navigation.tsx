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
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { industrySlug } = useParams<{ industrySlug?: string }>();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [industriesAnchorEl, setIndustriesAnchorEl] = useState<null | HTMLElement>(null);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPageLink?: boolean) => {
    e.preventDefault();
    
    if (isPageLink) {
      // Navigate to page route
      navigate(href);
      setMobileOpen(false);
      setServicesMenuOpen(false);
      setServicesAnchorEl(null);
    } else {
      // Handle hash navigation
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      setMobileOpen(false);
      setServicesMenuOpen(false);
      setServicesAnchorEl(null);
    }
  };

  const handleServicesMenuClose = () => {
    setServicesMenuOpen(false);
    setServicesAnchorEl(null);
  };

  const handleServicesHover = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
    setServicesMenuOpen(true);
  };

  const handleIndustriesMenuClose = () => {
    setIndustriesMenuOpen(false);
    setIndustriesAnchorEl(null);
  };

  const handleIndustriesHover = (event: React.MouseEvent<HTMLElement>) => {
    setIndustriesAnchorEl(event.currentTarget);
    setIndustriesMenuOpen(true);
  };

  const handleIndustrySelect = (slug: string) => {
    navigate(`/industries/${slug}`);
    setIndustriesMenuOpen(false);
    setIndustriesAnchorEl(null);
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
    { label: 'Blogs', href: '/blog', isPageLink: true },
    { label: 'Industries', href: '/industries', isPageLink: true, hasDropdown: true },
    { label: 'Contact', href: '#contact' },
  ];

  const industriesMenuItems = [
    { label: 'Office Building', slug: 'office-building' },
    { label: 'Healthcare Facilities', slug: 'healthcare-facilities' },
    { label: 'Retail Centers', slug: 'retail-centers' },
    { label: 'Industrial Facilities', slug: 'industrial-facilities' },
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
          if (link.hasDropdown && link.label === 'Services') {
            return (
              <Box key={link.href}>
                <ListItem
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
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
              onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
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
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
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
                    fontSize: { xs: '8px', sm: '9px', md: '10px' },
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
                if (link.hasDropdown && link.label === 'Services') {
                  return (
                    <Box
                      key={link.href}
                      sx={{ position: 'relative' }}
                      onMouseEnter={handleServicesHover}
                      onMouseLeave={handleServicesMenuClose}
                    >
                      <Button
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
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
                if (link.hasDropdown && link.label === 'Industries') {
                  return (
                    <Box
                      key={link.href}
                      sx={{ position: 'relative' }}
                      onMouseEnter={handleIndustriesHover}
                      onMouseLeave={handleIndustriesMenuClose}
                    >
                      <Button
                        href={link.href}
                        onClick={(e) => {
                          if (!industriesMenuOpen) {
                            handleNavClick(e, link.href, link.isPageLink);
                          }
                        }}
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
                        anchorEl={industriesAnchorEl}
                        open={industriesMenuOpen}
                        onClose={handleIndustriesMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleIndustriesMenuClose,
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
                        {industriesMenuItems.map((item) => (
                          <MenuItem
                            key={item.slug}
                            onClick={() => handleIndustrySelect(item.slug)}
                            selected={industrySlug === item.slug}
                            sx={{
                              py: 1.5,
                              px: 2,
                              '&:hover': {
                                bgcolor: '#F8FAFD',
                              },
                              '&.Mui-selected': {
                                bgcolor: '#F8FAFD',
                                color: '#3097C0',
                                fontWeight: 600,
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: '0.875rem',
                                color: 'inherit',
                                fontWeight: 'inherit',
                              }}
                            >
                              {item.label}
                            </Typography>
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
                    onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box
                  component="a"
                  href="tel:07438580681"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#333333',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    '&:hover': { color: '#0F223F' },
                    transition: 'color 0.3s',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    07438 580681
                  </Typography>
                </Box>
                <Box
                  component="a"
                  href="mailto:groupservefacilities@gmail.com"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#333333',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    '&:hover': { color: '#0F223F' },
                    transition: 'color 0.3s',
                }}
              >
                  <EmailIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    groupservefacilities@gmail.com
                  </Typography>
                </Box>
              </Box>
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

