import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  
  const itemsPerView = 3;
  const cardWidth = isXs ? 140 : isSm ? 150 : 160;
  const gap = 16; // gap: 2 = 16px
  const gapValue = isXs ? 12 : isSm ? 14 : gap; // Responsive gap for transform calculation

  const partners = [
    {
      name: 'Acronis',
      badge: 'PREMIER CLOUD DISTRIBUTOR',
      bgColor: '#0F223F',
      textColor: 'white',
    },
    {
      name: 'Dell PartnerDirect',
      badge: 'Registered Partner',
      bgColor: '#F8FAFD',
      textColor: '#0F223F',
      logoColor: '#3097C0',
    },
    {
      name: 'Hewlett Packard Enterprise',
      badge: 'Silver Partner',
      bgColor: '#0F223F',
      textColor: 'white',
    },
    {
      name: 'Microsoft',
      badge: 'Gold Partner',
      bgColor: '#F8FAFD',
      textColor: '#0F223F',
      logoColor: '#0078D4',
    },
    {
      name: 'Amazon Web Services',
      badge: 'Advanced Partner',
      bgColor: '#0F223F',
      textColor: 'white',
    },
    {
      name: 'Cisco',
      badge: 'Premier Partner',
      bgColor: '#F8FAFD',
      textColor: '#0F223F',
      logoColor: '#1BA0D7',
    },
    {
      name: 'IBM',
      badge: 'Business Partner',
      bgColor: '#0F223F',
      textColor: 'white',
    },
    {
      name: 'Oracle',
      badge: 'Platinum Partner',
      bgColor: '#F8FAFD',
      textColor: '#0F223F',
      logoColor: '#F80000',
    },
  ];

  // Duplicate partners for infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];
  const [currentIndex, setCurrentIndex] = useState<number>(partners.length);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const totalSlides = Math.ceil(partners.length / itemsPerView);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // When we reach the end, instantly reset to start without transition for seamless loop
        if (next >= partners.length * 2) {
          // Reset immediately without transition
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(partners.length);
            // Re-enable transition after reset
            setTimeout(() => {
              setIsTransitioning(true);
            }, 10);
          }, 2000);
          return next;
        }
        setIsTransitioning(true);
        return next;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [partners.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= partners.length * 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(partners.length);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 2000);
        return next;
      }
      return next;
    });
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < partners.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(partners.length * 2 - 1);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 2000);
        return next;
      }
      return next;
    });
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(partners.length + index);
  };


  return (
    <Box
      sx={{
        py: { xs: 3, md: 4 },
        px: { xs: 2, sm: 3 },
        bgcolor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth="xl" sx={{ width: '100%', px: { xs: 1, sm: 2, md: 3 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Left Content */}
          <Box data-aos="fade-right" sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
            {/* Partners Label */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: '9999px',
                bgcolor: 'rgba(48, 151, 192, 0.1)',
                color: '#3097C0',
                fontSize: { xs: '0.625rem', sm: '0.6875rem', md: '0.75rem' },
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: { xs: 2, sm: 3 },
                border: '1px solid rgba(48, 151, 192, 0.2)',
              }}
            >
              <Box
                component="svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                sx={{ color: '#3097C0' }}
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Box>
              PARTNERS
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h2"
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#0F223F',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Recognized by the{' '}
              <Box component="span" sx={{ color: '#F0942D' }}>
                best
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
                color: '#6C757D',
                lineHeight: 1.6,
                mb: 3,
                maxWidth: { xs: '100%', md: '90%' },
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
            </Typography>

            {/* Stylized Indicator */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 3,
                  bgcolor: '#0F223F',
                  borderRadius: 2,
                }}
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: '#F0942D',
                }}
              />
              <Box
                sx={{
                  width: 20,
                  height: 3,
                  bgcolor: '#F0942D',
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>

          {/* Right Content - Partner Logos Card */}
          <Box 
            data-aos="fade-left" 
            sx={{ 
              width: '100%', 
              maxWidth: '100%', 
              overflow: 'hidden',
              minWidth: 0, // Prevents flex item from overflowing
            }}
          >
            <Card
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 0,
                bgcolor: 'white',
                borderTop: '4px solid',
                borderImage: 'linear-gradient(to right, #0F223F, #F0942D) 1',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '100%',
                minWidth: 0, // Prevents flex item from overflowing
                boxShadow: 'none',
              }}
            >
              {/* Navigation Arrows */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: { xs: 4, sm: 8 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  bgcolor: 'white',
                  width: { xs: 32, sm: 40 },
                  height: { xs: 32, sm: 40 },
                  '&:hover': {
                    bgcolor: '#F8FAFD',
                  },
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <ArrowBackIosIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#0F223F' }} />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: { xs: 4, sm: 8 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  bgcolor: 'white',
                  width: { xs: 32, sm: 40 },
                  height: { xs: 32, sm: 40 },
                  '&:hover': {
                    bgcolor: '#F8FAFD',
                  },
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#0F223F' }} />
              </IconButton>

              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  maxWidth: '100%',
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 1.5, sm: 2 },
                    padding: { xs: 0.5, sm: 1 },
                    transform: `translateX(calc(-${currentIndex} * (${cardWidth}px + ${gapValue}px)))`,
                    transition: isTransitioning ? 'transform 2s ease-in-out' : 'none',
                    width: 'max-content',
                    minWidth: '100%',
                  }}
                >
                  {duplicatedPartners.map((partner, index) => (
                  <Card
                    key={index}
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: 2,
                      bgcolor: partner.bgColor,
                      color: partner.textColor,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: { xs: 100, sm: 120, md: 140 },
                      textAlign: 'center',
                      width: { xs: 140, sm: 150, md: 160 },
                      flexShrink: 0,
                      transition: 'all 0.3s',
                      border: '1px solid',
                      borderColor: partner.bgColor === '#0F223F' 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : 'rgba(15, 34, 63, 0.15)',
                      boxShadow: partner.bgColor === '#0F223F'
                        ? '0 2px 8px rgba(0, 0, 0, 0.15)'
                        : '0 2px 8px rgba(15, 34, 63, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: partner.bgColor === '#0F223F'
                          ? 'rgba(255, 255, 255, 0.4)'
                          : 'rgba(15, 34, 63, 0.3)',
                        boxShadow: partner.bgColor === '#0F223F'
                          ? '0 4px 12px rgba(0, 0, 0, 0.25)'
                          : '0 4px 12px rgba(15, 34, 63, 0.2)',
                      },
                    }}
                  >
                    {partner.name === 'Dell PartnerDirect' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: partner.logoColor,
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <path
                          d="M12 6V18M6 12H18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </Box>
                    ) : partner.name === 'Microsoft' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: partner.logoColor,
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <rect x="2" y="2" width="10" height="10" fill="currentColor" />
                        <rect x="12" y="2" width="10" height="10" fill="currentColor" />
                        <rect x="2" y="12" width="10" height="10" fill="currentColor" />
                        <rect x="12" y="12" width="10" height="10" fill="currentColor" />
                      </Box>
                    ) : partner.name === 'Amazon Web Services' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: '#FF9900',
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2 17L12 22L22 17L12 12L2 17Z"
                          fill="currentColor"
                        />
                      </Box>
                    ) : partner.name === 'Cisco' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: partner.logoColor,
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <path
                          d="M8 12L12 8L16 12L12 16L8 12Z"
                          fill="white"
                        />
                      </Box>
                    ) : partner.name === 'IBM' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: '#006699',
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <rect x="2" y="2" width="20" height="20" fill="currentColor" />
                        <text x="12" y="16" fill="white" fontSize="12" fontWeight="700" textAnchor="middle">IBM</text>
                      </Box>
                    ) : partner.name === 'Oracle' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: partner.logoColor,
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                        <path
                          d="M8 8H16V16H8V8Z"
                          fill="white"
                        />
                      </Box>
                    ) : partner.name === 'Acronis' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: '#0092FF',
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <path
                          d="M12 6L8 10L12 14L16 10L12 6Z"
                          fill="white"
                        />
                        <path
                          d="M8 10L12 14L16 10L12 6L8 10Z"
                          stroke="white"
                          strokeWidth="1"
                          fill="none"
                        />
                      </Box>
                    ) : partner.name === 'Hewlett Packard Enterprise' ? (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: '#01A982',
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                        <path
                          d="M7 12L12 7L17 12L12 17L7 12Z"
                          fill="white"
                        />
                      </Box>
                    ) : (
                      <Box
                        component="svg"
                        viewBox="0 0 24 24"
                        sx={{ 
                          color: partner.textColor === 'white' ? '#3097C0' : '#0F223F',
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                        }}
                      >
                        <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.1} />
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          fill="currentColor"
                          opacity={0.3}
                        />
                      </Box>
                    )}
                  </Card>
                ))}
                </Box>
              </Box>

              {/* Dot Indicators */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: { xs: 0.75, sm: 1 },
                  mt: { xs: 2, sm: 3 },
                }}
              >
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => handleDotClick(index)}
                    sx={{
                      width: currentIndex === index * itemsPerView ? { xs: 20, sm: 24 } : { xs: 6, sm: 8 },
                      height: { xs: 6, sm: 8 },
                      borderRadius: 4,
                      bgcolor:
                        currentIndex === index * itemsPerView
                          ? '#F0942D'
                          : 'rgba(15, 34, 63, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor:
                          currentIndex === index * itemsPerView
                            ? '#F0942D'
                            : 'rgba(15, 34, 63, 0.4)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
