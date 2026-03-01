import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Rating,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogTestimonialsFAQ: React.FC = () => {
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>('panel0');

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const getBlogSlug = (title: string): string => {
    const slugMap: Record<string, string> = {
      '5 Benefits of Professional Facilities Management': '5-benefits-of-professional-facilities-management',
      'Preventive Maintenance Best Practices': 'preventive-maintenance-best-practices',
      'Future Trends in Facilities Management': 'future-trends-in-facilities-management',
    };
    return slugMap[title] || '5-benefits-of-professional-facilities-management';
  };

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
      title: '5 Benefits of Professional Facilities Management',
      description: 'Discover how professional facilities management can improve efficiency and reduce operational costs.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      title: 'Preventive Maintenance Best Practices',
      description: 'Learn the essential preventive maintenance strategies to keep your facilities running smoothly.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      title: 'Future Trends in Facilities Management',
      description: 'Explore the latest trends and technologies shaping the future of facilities management.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'What impressed me most was their responsiveness. No matter what time of day they were available to address our concerns. The final product was beautifully designed.',
      name: 'David Wilson',
      role: 'Operations Manager',
      company: 'RetailPlus',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 5,
    },
    {
      id: 2,
      quote: 'Group Serve Facilities has transformed our facility management. Their team is professional, efficient, and always goes above and beyond.',
      name: 'Sarah Johnson',
      role: 'Facility Director',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rating: 5,
    },
    {
      id: 3,
      quote: 'Outstanding service quality and attention to detail. They have become an integral part of our operations.',
      name: 'Michael Brown',
      role: 'CEO',
      company: 'Manufacturing Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 5,
    },
    {
      id: 4,
      quote: 'Reliable, professional, and cost-effective. Group Serve Facilities exceeded our expectations in every way.',
      name: 'Emily Davis',
      role: 'Property Manager',
      company: 'RealEstate Group',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 5,
    },
    {
      id: 5,
      quote: 'Their comprehensive approach to facilities management has significantly improved our operational efficiency.',
      name: 'James Miller',
      role: 'Director of Operations',
      company: 'Healthcare Plus',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What services does Group Serve Facilities Management offer?',
      answer:
        'We provide a wide range of facilities management services including gutter cleaning, property maintenance, commercial & residential cleaning, reactive maintenance, grounds & external maintenance, and 24/7 emergency call-outs. If you require a service not listed, please contact us — we may still be able to help.',
    },
    {
      question: 'Do you provide emergency services?',
      answer:
        'Yes. We operate a 24/7 emergency line to respond to urgent property issues. Response times may vary depending on your location and the severity of the issue.',
    },
    {
      question: 'Which areas do you cover?',
      answer:
        'We are based in Sutton Coldfield and serve the surrounding areas, as well as wider UK locations depending on the service required. Contact us to confirm coverage for your property.',
    },
    {
      question: 'Are you insured?',
      answer:
        'Yes. We operate with appropriate insurance coverage to protect both our clients and our team while carrying out services. Insurance documentation can be provided upon request.',
    },
    {
      question: 'How do I request a quote?',
      answer:
        "You can request a quote by filling out our online enquiry form, emailing support@groupservefacilities.co.uk, or calling us directly on 07438 580681. We aim to respond to all enquiries promptly.",
    },
  ];

  const handleTestimonialNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTestimonialPrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <Box id="blog-testimonials-faq" component="section" sx={{ bgcolor: '#F8FAFD', py: { xs: 6, md: 12 } }}>
      <Container maxWidth="xl">
        {/* Blog Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }} data-aos="fade-up">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                color: '#3097C0',
                mb: 1,
              }}
            >
              Latest Insights
            </Typography>
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
              Facilities Management Blog
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: '#6C757D',
                maxWidth: '48rem',
                mx: 'auto',
              }}
            >
              Stay updated with the latest trends and insights in facilities management.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 },
            }}
          >
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem' },
                      fontWeight: 700,
                      color: '#0F223F',
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#6C757D',
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {post.description}
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                      const slug = getBlogSlug(post.title);
                      navigate(`/blog/${slug}`);
                    }}
                    sx={{
                      color: '#3097C0',
                      textTransform: 'none',
                      fontWeight: 600,
                      p: 0,
                      '&:hover': {
                        color: '#0F223F',
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }} data-aos="fade-up">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#0F223F',
                mb: 1,
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: '#6C757D',
              }}
            >
              Hear from satisfied customers worldwide.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
            {/* Navigation Arrows */}
            <IconButton
              onClick={handleTestimonialPrev}
              sx={{
                position: 'absolute',
                left: { xs: -40, sm: -60 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                border: '1px solid rgba(15, 34, 63, 0.1)',
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                zIndex: 2,
                '&:hover': {
                  bgcolor: '#F8FAFD',
                  borderColor: '#3097C0',
                },
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: 20, color: '#0F223F' }} />
            </IconButton>

            <IconButton
              onClick={handleTestimonialNext}
              sx={{
                position: 'absolute',
                right: { xs: -40, sm: -60 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                border: '1px solid rgba(15, 34, 63, 0.1)',
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                zIndex: 2,
                '&:hover': {
                  bgcolor: '#F8FAFD',
                  borderColor: '#3097C0',
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 20, color: '#0F223F' }} />
            </IconButton>

            {/* Testimonial Card */}
            <Card
              sx={{
                borderRadius: 3,
                p: { xs: 3, sm: 4, md: 5 },
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
              }}
            >
              <Rating value={testimonials[testimonialIndex].rating} readOnly sx={{ mb: 3, color: '#F0942D' }} />
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  color: '#6C757D',
                  fontStyle: 'italic',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                "{testimonials[testimonialIndex].quote}"
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Avatar
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].name}
                  sx={{ width: { xs: 56, sm: 64 }, height: { xs: 56, sm: 64 } }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0F223F',
                      mb: 0.5,
                    }}
                  >
                    {testimonials[testimonialIndex].name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#6C757D',
                    }}
                  >
                    {testimonials[testimonialIndex].role}, {testimonials[testimonialIndex].company}
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* Dot Indicators */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 4 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  sx={{
                    width: testimonialIndex === index ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: testimonialIndex === index ? '#3097C0' : 'rgba(15, 34, 63, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: testimonialIndex === index ? '#3097C0' : 'rgba(15, 34, 63, 0.4)',
                    },
                  }}
                />
              ))}
              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={handleTestimonialNext}
                sx={{
                  ml: 2,
                  color: '#3097C0',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: '#0F223F',
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box data-aos="fade-up" id="faq" component="section">
          <Box component="section" sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                color: '#3097C0',
                mb: 1,
              }}
            >
              Common Questions
            </Typography>
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
              Frequently Asked Questions
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: '#6C757D',
                maxWidth: '48rem',
                mx: 'auto',
              }}
            >
              Find answers to the most common questions about our facilities management services.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedAccordion === `panel${index}`}
                onChange={handleAccordionChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    border: '1px solid #3097C0',
                    boxShadow: '0 4px 12px rgba(48, 151, 192, 0.15)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#3097C0' }} />}
                  sx={{
                    px: 3,
                    py: 2,
                    '&:hover': {
                      bgcolor: '#F8FAFD',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9375rem', sm: '1rem' },
                      fontWeight: 600,
                      color: '#0F223F',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography
                    sx={{
                      fontSize: '0.9375rem',
                      color: '#6C757D',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogTestimonialsFAQ;
