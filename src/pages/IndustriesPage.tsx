import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

import BusinessIcon from '@mui/icons-material/Business';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FactoryIcon from '@mui/icons-material/Factory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface IndustryPageData {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  sectionTitle: string;
  sectionDescription: string;
  services: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
  }>;
  benefits: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  challenges: string[];
  solutions: string[];
}

const IndustriesPage: React.FC = () => {

  const { industrySlug } = useParams<{ industrySlug?: string }>();
  
  const currentIndustrySlug = industrySlug || 'office-building';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    industryType: currentIndustrySlug,
    message: '',
  });

  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (industrySlug && industrySlug !== formData.industryType) {
      setFormData((prev) => ({ ...prev, industryType: industrySlug }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [industrySlug]);



  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
  };

  const industryDataMap: Record<string, IndustryPageData> = {
    'office-building': {
      heroTitle: 'Facilities Management for',
      heroSubtitle: 'Office Buildings',
      heroDescription: 'Comprehensive facilities management solutions designed specifically for modern office environments. We ensure your workspace remains productive, safe, and efficient.',
      heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      sectionTitle: 'Office Building Services',
      sectionDescription: 'Tailored facilities management for corporate offices, co-working spaces, and business centers.',
      services: [
        {
          icon: <BusinessIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Commercial Cleaning',
          description: 'Professional cleaning services for office spaces, meeting rooms, and common areas.',
          features: ['Daily office cleaning', 'Deep cleaning services', 'Window cleaning', 'Carpet maintenance'],
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'HVAC Maintenance',
          description: 'Climate control and air quality management for optimal working conditions.',
          features: ['Regular HVAC inspections', 'Filter replacements', 'System optimization', 'Energy efficiency'],
        },
        {
          icon: <PhoneIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Security Services',
          description: '24/7 security monitoring and access control for office buildings.',
          features: ['Access control systems', 'Security patrols', 'CCTV monitoring', 'Emergency response'],
        },
      ],
      benefits: [
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Increased Productivity',
          description: 'Well-maintained facilities create a better working environment, boosting employee productivity.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Cost Efficiency',
          description: 'Preventive maintenance reduces long-term costs and extends facility lifespan.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Compliance Assurance',
          description: 'Ensure your office meets all health, safety, and environmental regulations.',
        },
      ],
      challenges: [
        'Maintaining clean, professional appearance',
        'Managing multiple vendors and contracts',
        'Ensuring consistent service quality',
        'Meeting health and safety standards',
      ],
      solutions: [
        'Single point of contact for all services',
        'Customized service schedules',
        'Regular quality audits',
        'Comprehensive compliance management',
      ],
    },
    'healthcare-facilities': {
      heroTitle: 'Facilities Management for',
      heroSubtitle: 'Healthcare Facilities',
      heroDescription: 'Specialized facilities management services for hospitals, clinics, and medical centers. We understand the critical importance of maintaining sterile, safe environments.',
      heroImage: 'https://iprospectcheck.com/wp-content/uploads/2020/01/healthcare-background-checks-1.jpg',
      sectionTitle: 'Healthcare Facilities Services',
      sectionDescription: 'Comprehensive facilities management tailored to the unique needs of healthcare environments.',
      services: [
        {
          icon: <LocalHospitalIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Medical Grade Cleaning',
          description: 'Specialized cleaning protocols meeting healthcare standards and infection control requirements.',
          features: ['Infection control cleaning', 'Sterilization services', 'Waste management', 'Biohazard handling'],
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'HVAC & Air Quality',
          description: 'Critical air quality management for patient safety and comfort.',
          features: ['HEPA filtration systems', 'Air quality monitoring', 'Ventilation maintenance', 'Temperature control'],
        },
        {
          icon: <PhoneIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Emergency Maintenance',
          description: '24/7 emergency response for critical facility issues.',
          features: ['Rapid response team', 'Critical system repairs', 'Emergency protocols', 'On-call technicians'],
        },
      ],
      benefits: [
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Patient Safety',
          description: 'Maintain the highest standards of cleanliness and safety for patient care.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Regulatory Compliance',
          description: 'Ensure compliance with healthcare regulations and standards.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Operational Continuity',
          description: 'Minimize disruptions to critical healthcare operations.',
        },
      ],
      challenges: [
        'Maintaining sterile environments',
        'Meeting strict regulatory requirements',
        'Managing critical systems',
        'Ensuring patient safety',
      ],
      solutions: [
        'Healthcare-certified cleaning teams',
        'Compliance-focused protocols',
        'Preventive maintenance programs',
        '24/7 emergency support',
      ],
    },
    'retail-centers': {
      heroTitle: 'Facilities Management for',
      heroSubtitle: 'Retail Centers',
      heroDescription: 'Complete facilities management solutions for shopping centers, retail stores, and commercial spaces. Keep your retail environment attractive and functional.',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      sectionTitle: 'Retail Facilities Services',
      sectionDescription: 'Comprehensive facilities management designed for retail environments and shopping centers.',
      services: [
        {
          icon: <ShoppingBagIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Retail Cleaning',
          description: 'Professional cleaning services to maintain an attractive shopping environment.',
          features: ['Storefront cleaning', 'Floor maintenance', 'Restroom services', 'Window displays'],
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Maintenance Services',
          description: 'Keep retail facilities in top condition for customers and staff.',
          features: ['Lighting maintenance', 'Plumbing repairs', 'HVAC services', 'General repairs'],
        },
        {
          icon: <PhoneIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Security & Safety',
          description: 'Comprehensive security and safety services for retail spaces.',
          features: ['Security patrols', 'Access control', 'Safety inspections', 'Emergency response'],
        },
      ],
      benefits: [
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Enhanced Customer Experience',
          description: 'Well-maintained facilities create a positive shopping experience.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Operational Efficiency',
          description: 'Streamlined facilities management reduces operational overhead.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Brand Image',
          description: 'Maintain a professional appearance that reflects your brand values.',
        },
      ],
      challenges: [
        'High foot traffic maintenance',
        'Peak hours service requirements',
        'Multiple tenant coordination',
        'Customer-facing appearance',
      ],
      solutions: [
        'Flexible service schedules',
        'Off-peak maintenance windows',
        'Centralized management',
        'Rapid response teams',
      ],
    },
    'industrial-facilities': {
      heroTitle: 'Facilities Management for',
      heroSubtitle: 'Industrial Facilities',
      heroDescription: 'Specialized facilities management for manufacturing plants, warehouses, and industrial complexes. We understand the unique challenges of industrial environments.',
      heroImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      sectionTitle: 'Industrial Facilities Services',
      sectionDescription: 'Comprehensive facilities management solutions for manufacturing and industrial operations.',
      services: [
        {
          icon: <FactoryIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Industrial Cleaning',
          description: 'Specialized cleaning for manufacturing and warehouse environments.',
          features: ['Heavy-duty cleaning', 'Equipment cleaning', 'Waste management', 'Hazardous material handling'],
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Maintenance & Repairs',
          description: 'Comprehensive maintenance for industrial equipment and facilities.',
          features: ['Equipment maintenance', 'Structural repairs', 'Electrical systems', 'Plumbing services'],
        },
        {
          icon: <PhoneIcon sx={{ fontSize: 40, color: 'rgba(240, 148, 45, 0.9)' }} />,
          title: 'Safety & Compliance',
          description: 'Ensure compliance with industrial safety and environmental regulations.',
          features: ['Safety inspections', 'Compliance audits', 'Training programs', 'Documentation'],
        },
      ],
      benefits: [
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Operational Continuity',
          description: 'Minimize downtime with proactive maintenance and rapid response.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Safety Compliance',
          description: 'Maintain compliance with industrial safety and environmental regulations.',
        },
        {
          icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
          title: 'Cost Optimization',
          description: 'Reduce operational costs through efficient facilities management.',
        },
      ],
      challenges: [
        'Complex equipment maintenance',
        'Safety and compliance requirements',
        'Large-scale operations',
        'Minimizing production downtime',
      ],
      solutions: [
        'Specialized industrial expertise',
        'Comprehensive compliance programs',
        'Scalable service solutions',
        'Preventive maintenance strategies',
      ],
    },
  };

  const pageData = industryDataMap[currentIndustrySlug] || industryDataMap['office-building'];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#002b56',
          py: { xs: 8, md: 12 },
          px: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${pageData.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(3, 3, 3, 0.09)',
            },
          }}
        />
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            // startIcon={<ArrowBackIcon />}
            // onClick={handleBackClick}
            sx={{
              color: 'white',
              mb: 4,
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            {/* Back to Home */}
          </Button>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h1"
                className="font-display"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 2,
                  lineHeight: 1.2,
                }}
                data-aos="fade-up"
              >
                {pageData.heroTitle}{' '}
                <Box component="span" sx={{ color: 'rgba(240, 148, 45, 0.9)' }}>
                  {pageData.heroSubtitle}
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '48rem',
                  mb: 4,
                  lineHeight: 1.625,
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {pageData.heroDescription}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }} data-aos="fade-up" data-aos-delay="200">
                <Button
                  variant="contained"
                  href="#contact-form"
                  onClick={(e) => handleNavClick(e, '#contact-form')}
                  sx={{
                    bgcolor: 'rgba(240, 148, 45, 0.9)',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(240, 148, 45, 0.9)',
                    },
                  }}
                >
                  Get Instant Quote
                </Button>
                <Button
                  variant="outlined"
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  View Our Services
                </Button>
              </Box>

              {/* Statistics */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(3, 1fr)' }, gap: 3 }} data-aos="fade-up" data-aos-delay="300">
                {[
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '500+', label: 'Businesses Served' },
                  { number: '24/7', label: 'Support Available' },
                ].map((stat) => (
                  <Box
                    key={stat.label}
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: 'white', mb: 0.5 }}>
                      {stat.number}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              variant="h2"
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#0F223F',
                mb: 2,
              }}
            >
              {pageData.sectionTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: '#6C757D',
                maxWidth: '48rem',
                mx: 'auto',
                lineHeight: 1.625,
              }}
            >
              {pageData.sectionDescription}
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {pageData.services.map((service, index) => (
              <Card
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  borderRadius: 2,
                  p: 3,
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography
                  variant="h3"
                  className="font-display"
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0F223F',
                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#6C757D',
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {service.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      sx={{
                        color: '#6C757D',
                        fontSize: '0.875rem',
                        mb: 1,
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8FAFD' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              variant="h2"
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#0F223F',
                mb: 2,
              }}
            >
              Why Choose Us for {pageData.heroSubtitle}
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {pageData.benefits.map((benefit, index) => (
              <Card
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  borderRadius: 2,
                  p: 3,
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ color: 'rgba(240, 148, 45, 0.9)', mb: 2 }}>{benefit.icon}</Box>
                <Typography
                  variant="h3"
                  className="font-display"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0F223F',
                    mb: 1.5,
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#6C757D',
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Challenges & Solutions */}
      <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 6 }}>
            <Box data-aos="fade-right">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 3,
                }}
              >
                Common Challenges
              </Typography>
              <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                {pageData.challenges.map((challenge, index) => (
                  <Box
                    key={index}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 2,
                      p: 2,
                      bgcolor: '#F8FAFD',
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: '#F0942D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      <Typography sx={{ color: 'white', fontSize: '0.75rem', fontWeight: 700 }}>
                        {index + 1}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: '#6C757D', lineHeight: 1.6 }}>
                      {challenge}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box data-aos="fade-left">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 3,
                }}
              >
                Our Solutions
              </Typography>
              <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                {pageData.solutions.map((solution, index) => (
                  <Box
                    key={index}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 2,
                      p: 2,
                      bgcolor: '#F8FAFD',
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: '#50BB5A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      <CheckCircleIcon sx={{ color: 'white', fontSize: 16 }} />
                    </Box>
                    <Typography sx={{ color: '#6C757D', lineHeight: 1.6 }}>
                      {solution}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box id="contact-form" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8FAFD' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 6, alignItems: 'start' }}>
            {/* Left Content */}
            <Box data-aos="fade-right">
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  fontWeight: 700,
                  color: '#0F223F',
                  mb: 2,
                }}
              >
                Get Your Free Quote
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: '#6C757D',
                  mb: 4,
                  lineHeight: 1.625,
                }}
              >
                Get a detailed, no-obligation quote for professional facilities management services tailored to your {pageData.heroSubtitle.toLowerCase()} needs.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: 'rgba(240, 148, 45, 0.9)' }} />
                  <Typography sx={{ color: '#6C757D' }}>Quote delivered within 24 hours</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: 'rgba(240, 148, 45, 0.9)' }} />
                  <Typography sx={{ color: '#6C757D' }}>Free, no-pressure assessment</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: 'rgba(240, 148, 45, 0.9)' }} />
                  <Typography sx={{ color: '#6C757D' }}>Tailored to your requirements</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography sx={{ color: '#6C757D', fontWeight: 600 }}>Prefer to call?</Typography>
                <Button
                  href="tel:07438580681"
                  sx={{
                    color: 'rgba(240, 148, 45, 0.9)',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  07438 580681
                </Button>
              </Box>
            </Box>

            {/* Right Side Form */}
            <Box sx={{ flex: 1 }} data-aos="fade-left">
              <Card sx={{ p: 3, boxShadow: 4 }}>
                <Typography
                  variant="h3"
                  className="font-display"
                  sx={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#0F223F',
                    mb: 1,
                  }}
                >
                  Request a Quote
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: '#6C757D',
                    mb: 3,
                  }}
                >
                  Complete the form below and we'll respond within 24 hours
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      required
                      name="firstName"
                      label="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      fullWidth
                      size="small"
                    />
                    <TextField
                      required
                      name="lastName"
                      label="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      fullWidth
                      size="small"
                    />
                  </Box>
                  <TextField
                    required
                    name="email"
                    label="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    size="small"
                  />
                  <TextField
                    required
                    name="phoneNumber"
                    label="Phone Number *"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    fullWidth
                    size="small"
                  />
                  <TextField
                    name="companyName"
                    label="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    fullWidth
                    size="small"
                  />
                  <FormControl fullWidth size="small">
                    <InputLabel>Industry Type *</InputLabel>
                    <Select
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleSelectChange('industryType')}
                      label="Industry Type *"
                    >
                      <MenuItem value="office-building">Office Building</MenuItem>
                      <MenuItem value="healthcare-facilities">Healthcare Facilities</MenuItem>
                      <MenuItem value="retail-centers">Retail Centers</MenuItem>
                      <MenuItem value="industrial-facilities">Industrial Facilities</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: 'rgba(240, 148, 45, 0.9)',
                      color: 'white',
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: 'rgba(240, 148, 45, 0.9)',
                      },
                    }}
                  >
                    Request Quote
                  </Button>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default IndustriesPage;
