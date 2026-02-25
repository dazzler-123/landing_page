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
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElevatorIcon from '@mui/icons-material/Elevator';
// import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StoreIcon from '@mui/icons-material/Store';
import FactoryIcon from '@mui/icons-material/Factory';
// import ArticleIcon from '@mui/icons-material/Article';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import logo from '../assets/logo2.png';

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
    
    // Handle Home link - scroll to top
    if (href === '/') {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first, then scroll to top
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home page, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setMobileOpen(false);
      setServicesMenuOpen(false);
      setServicesAnchorEl(null);
      return;
    }
    
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
    { 
      label: 'Lift and Elevator Maintenance', 
      href: '/services/lift-elevator-maintenance',
      icon: <ElevatorIcon sx={{ fontSize: 20 }} />
    },
  ];

  const navLinks = [
    { label: 'Home', href: '/', hasDropdown: false, icon: <></> },
    { label: 'Services', href: '#services', hasDropdown: true, icon: <></> },
    { label: 'Industries', href: '/industries', isPageLink: true, hasDropdown: true, icon: <></> },
    { label: 'Blogs', href: '/blog', isPageLink: true, icon: <></> },
    { label: 'Contact', href: '#contact', icon: <></> },
  ];

  const industriesMenuItems = [
    { label: 'Office Building', slug: 'office-building', icon: <BusinessIcon sx={{ fontSize: 20 }} /> },
    { label: 'Healthcare Facilities', slug: 'healthcare-facilities', icon: <LocalHospitalIcon sx={{ fontSize: 20 }} /> },
    { label: 'Retail Centers', slug: 'retail-centers', icon: <StoreIcon sx={{ fontSize: 20 }} /> },
    { label: 'Industrial Facilities', slug: 'industrial-facilities', icon: <FactoryIcon sx={{ fontSize: 20 }} /> },
  ];

  const drawer = (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'rgb(255, 255, 255)',
        backdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(15, 34, 63, 0.1)',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
      }}
    >
      <List sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {navLinks.map((link) => {
          if (link.hasDropdown && link.label === 'Services') {
            return (
              <Box key={link.href} sx={{ padding: 0 }}>
                <ListItem
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
                  sx={{
                    color: '#333333',
                    '&:hover': { color: '#0F223F' },
                    cursor: 'pointer',
                    mb: 1,
                  }}
                >
                  <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center', mr: 1.5 }}>
                    {link.icon}
                  </Box>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
                        pl: 4,
                        '&:hover': { color: '#0F223F', bgcolor: '#F8FAFD' },
                        cursor: 'pointer',
                        borderRadius: 1,
                      }}
                    >
                      <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center', mr: 1.5 }}>
                        {item.icon}
                      </Box>
                      <Typography sx={{ fontSize: '0.875rem' }}>{item.label}</Typography>
                    </ListItem>
                  ))}
                </Box>
              </Box>
            );
          }
          if (link.hasDropdown && link.label === 'Industries') {
            return (
              <Box key={link.href} sx={{ padding: 0 }}>
                <ListItem
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
                  sx={{
                    color: '#333333',
                    '&:hover': { color: '#0F223F' },
                    cursor: 'pointer',
                    mb: 1,
                  }}
                >
                  <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center', mr: 1.5 }}>
                    {link.icon}
                  </Box>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {industriesMenuItems.map((item) => (
                    <ListItem
                      key={item.slug}
                      component="button"
                      onClick={() => {
                        handleIndustrySelect(item.slug);
                        handleDrawerToggle();
                      }}
                      sx={{
                        color: '#6C757D',
                        fontSize: '0.875rem',
                        py: 0.5,
                        pl: 4,
                        '&:hover': { color: '#0F223F', bgcolor: '#F8FAFD' },
                        cursor: 'pointer',
                        borderRadius: 1,
                        border: 'none',
                        background: 'none',
                        width: '100%',
                        textAlign: 'left',
                      }}
                    >
                      <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center', mr: 1.5 }}>
                        {item.icon}
                      </Box>
                      <Typography sx={{ fontSize: '0.875rem' }}>{item.label}</Typography>
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
                color: '#333333',
                '&:hover': { color: '#0F223F' },
                cursor: 'pointer',
              }}
            >
              <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center', mr: 1.5 }}>
                {link.icon}
              </Box>
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
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgb(255, 255, 255)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(15, 34, 63, 0.1)',
          boxShadow: 'none',
          zIndex: 50,
          overflowX: 'hidden',
          left: 0,
          right: 0,
          width: '100%',
          maxWidth: '100vw',
        }}
      >
        <Container maxWidth="xl" sx={{ maxWidth: '100%', minWidth: 0, px: { xs: 1.5, sm: 2 } }}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 1,
              minWidth: 0,
              width: '100%',
            }}
          >
            {/* Logo - visible on all breakpoints including mobile */}
            <Box
              component="a"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setMobileOpen(false);
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': { opacity: 0.9 },
                transition: 'opacity 0.2s',
                flexShrink: 0,
                minWidth: 0,
              }}
            >
              <Box sx={{ display: 'block', p: { xs: 0.5, sm: 1 } }}>
                <Box
                  component="img"
                  src={logo}
                  alt="GroupServe"
                  sx={{
                    height: { xs: 32, sm: 40, md: 50 },
                    width: 'auto',
                    maxHeight: 50,
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>

            {/* Desktop Menu - hidden on mobile; hamburger shown instead */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
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
                        startIcon={<Box sx={{ color: '#3097C0', display: 'flex' }}>{link.icon}</Box>}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                          padding:0,
                          minWidth:0,
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
                        disableScrollLock={true}
                        anchorReference="anchorEl"
                        MenuListProps={{
                          onMouseLeave: handleServicesMenuClose,
                        }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            minWidth: 200,
                            maxWidth: 'calc(100vw - 32px)',
                            boxShadow: 4,
                            borderRadius: 2,
                            border: '1px solid rgba(15, 34, 63, 0.1)',
                            overflow: 'hidden',
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
                        startIcon={<Box sx={{ color: '#3097C0', display: 'flex' }}>{link.icon}</Box>}
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
                        disableScrollLock={true}
                        anchorReference="anchorEl"
                        MenuListProps={{
                          onMouseLeave: handleIndustriesMenuClose,
                        }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            minWidth: 280,
                            maxWidth: 'calc(100vw - 32px)',
                            boxShadow: 4,
                            borderRadius: 2,
                            border: '1px solid rgba(15, 34, 63, 0.1)',
                            overflow: 'hidden',
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                              <Box sx={{ color: '#3097C0', display: 'flex', alignItems: 'center' }}>
                                {item.icon}
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: '0.875rem',
                                  color: 'inherit',
                                  fontWeight: 'inherit',
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
                    onClick={(e) => handleNavClick(e, link.href, link.isPageLink)}
                    startIcon={<Box sx={{ color: '#3097C0', display: 'flex' }}>{link.icon}</Box>}
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
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }}>
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
                  href="mailto:support@groupservefacilities.co.uk"
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
                    support@groupservefacilities.co.uk
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Mobile Menu Button - right side */}
            <IconButton
              color="inherit"
              aria-label={mobileOpen ? 'close menu' : 'open menu'}
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: '#0F223F',
                ml: 'auto',
                flexShrink: 0,
              }}
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

