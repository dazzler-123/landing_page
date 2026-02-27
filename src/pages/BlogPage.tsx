import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, TextField } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const { blogSlug } = useParams<{ blogSlug?: string }>();
  
  const currentBlogSlug = blogSlug || '5-benefits-of-professional-facilities-management';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    // Scroll to top when blog slug changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [blogSlug]);

  const handleBackClick = () => {
    navigate('/');
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const blogPostsMap: Record<string, BlogPost> = {
    '5-benefits-of-professional-facilities-management': {
      id: '1',
      slug: '5-benefits-of-professional-facilities-management',
      title: '5 Benefits of Professional Facilities Management',
      description: 'Discover how professional facilities management can improve efficiency and reduce operational costs.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      content: `
        <p>Professional facilities management is essential for maintaining efficient, safe, and productive work environments. Here are five key benefits:</p>
        
        <h3>1. Cost Efficiency</h3>
        <p>Professional facilities management helps reduce operational costs through preventive maintenance, energy optimization, and strategic vendor management. By identifying issues early and implementing cost-effective solutions, businesses can significantly lower their facility-related expenses.</p>
        
        <h3>2. Improved Productivity</h3>
        <p>Well-maintained facilities create better working conditions, leading to increased employee productivity. Proper HVAC systems, clean environments, and functional equipment ensure that employees can focus on their work without distractions.</p>
        
        <h3>3. Compliance and Safety</h3>
        <p>Facilities management professionals ensure that your building meets all health, safety, and environmental regulations. This reduces the risk of violations, fines, and potential legal issues while protecting your employees and visitors.</p>
        
        <h3>4. Extended Asset Lifespan</h3>
        <p>Regular maintenance and proper care extend the lifespan of your facility's assets, including HVAC systems, electrical equipment, and building infrastructure. This reduces the need for costly replacements and major repairs.</p>
        
        <h3>5. Focus on Core Business</h3>
        <p>By outsourcing facilities management, businesses can focus on their core operations while experts handle building maintenance, repairs, and operations. This allows management to concentrate on growth and strategic initiatives.</p>
      `,
      author: 'Group Serve Facilities',
      date: 'March 15, 2024',
      readTime: '5 min read',
    },
    'preventive-maintenance-best-practices': {
      id: '2',
      slug: 'preventive-maintenance-best-practices',
      title: 'Preventive Maintenance Best Practices',
      description: 'Learn the essential preventive maintenance strategies to keep your facilities running smoothly.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      content: `
        <p>Preventive maintenance is crucial for maintaining facility operations and avoiding costly breakdowns. Here are best practices to implement:</p>
        
        <h3>1. Develop a Maintenance Schedule</h3>
        <p>Create a comprehensive maintenance schedule based on manufacturer recommendations, usage patterns, and facility requirements. Regular inspections and servicing prevent unexpected failures.</p>
        
        <h3>2. Document Everything</h3>
        <p>Maintain detailed records of all maintenance activities, inspections, and repairs. This documentation helps track asset history, identify patterns, and plan future maintenance needs.</p>
        
        <h3>3. Train Your Team</h3>
        <p>Ensure your maintenance team is properly trained on equipment operation, safety procedures, and maintenance protocols. Well-trained staff can identify issues early and perform maintenance correctly.</p>
        
        <h3>4. Use Technology</h3>
        <p>Implement facility management software and IoT sensors to monitor equipment performance, track maintenance schedules, and receive alerts for potential issues.</p>
        
        <h3>5. Prioritize Critical Systems</h3>
        <p>Focus maintenance efforts on critical systems that impact operations, safety, or compliance. HVAC, electrical, and plumbing systems should receive priority attention.</p>
      `,
      author: 'Group Serve Facilities',
      date: 'March 10, 2024',
      readTime: '6 min read',
    },
    'future-trends-in-facilities-management': {
      id: '3',
      slug: 'future-trends-in-facilities-management',
      title: 'Future Trends in Facilities Management',
      description: 'Explore the latest trends and technologies shaping the future of facilities management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      content: `
        <p>The facilities management industry is evolving rapidly with new technologies and approaches. Here are the key trends to watch:</p>
        
        <h3>1. Smart Building Technology</h3>
        <p>IoT sensors, smart HVAC systems, and automated building controls are becoming standard. These technologies enable real-time monitoring, predictive maintenance, and energy optimization.</p>
        
        <h3>2. Sustainability Focus</h3>
        <p>Green building practices, energy efficiency, and sustainable materials are increasingly important. Facilities managers are implementing eco-friendly solutions to reduce environmental impact and operational costs.</p>
        
        <h3>3. Data-Driven Decisions</h3>
        <p>Facility management software and analytics platforms provide insights into building performance, maintenance needs, and cost optimization opportunities.</p>
        
        <h3>4. Integrated Services</h3>
        <p>Organizations are consolidating facilities management services with single providers offering comprehensive solutions, simplifying vendor management and improving coordination.</p>
        
        <h3>5. Remote Monitoring</h3>
        <p>Remote monitoring and management capabilities allow facilities managers to oversee multiple locations efficiently, reducing on-site visits while maintaining service quality.</p>
      `,
      author: 'Group Serve Facilities',
      date: 'March 5, 2024',
      readTime: '7 min read',
    },
  };

  const relatedPosts: BlogPost[] = [
    blogPostsMap['5-benefits-of-professional-facilities-management'],
    blogPostsMap['preventive-maintenance-best-practices'],
    blogPostsMap['future-trends-in-facilities-management'],
  ].filter(post => post.slug !== currentBlogSlug).slice(0, 2);

  const currentPost = blogPostsMap[currentBlogSlug] || blogPostsMap['5-benefits-of-professional-facilities-management'];

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
            backgroundImage: `url(${currentPost.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0, 43, 86, 0.19)',
            },
          }}
        />
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            // startIcon={<ArrowBackIcon />}
            onClick={handleBackClick}
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
          
          <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
            <Typography
              variant="h1"
              className="font-display"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 700,
                color: 'white',
                mb: 2,
                lineHeight: 1.2,
              }}
              data-aos="fade-up"
            >
              {currentPost.title}
            </Typography>
            <Typography
              sx={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                lineHeight: 1.625,
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {currentPost.description}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }} data-aos="fade-up" data-aos-delay="200">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
                <PersonIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{currentPost.author}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
                <AccessTimeIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontSize: '0.875rem' }}>{currentPost.readTime}</Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                {currentPost.date}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Blog Content Section */}
      <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="md">
          <Card
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
            data-aos="fade-up"
          >
            <Box
              component="img"
              src={currentPost.image}
              alt={currentPost.title}
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Box
                sx={{
                  '& h3': {
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0F223F',
                    mt: 4,
                    mb: 2,
                  },
                  '& p': {
                    fontSize: '1.125rem',
                    color: '#6C757D',
                    lineHeight: 1.8,
                    mb: 2,
                  },
                  '& h3:first-of-type': {
                    mt: 0,
                  },
                }}
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <Box sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#F8FAFD' }}>
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
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
                Related Articles
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              {relatedPosts.map((post, index) => (
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
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h3"
                      className="font-display"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0F223F',
                        mb: 1.5,
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
          </Container>
        </Box>
      )}

      {/* Contact Form Section */}
      <Box id="contact-form" sx={{ py: { xs: 6, md: 12 }, px: 3, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
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
              Have Questions?
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: '#6C757D',
                mb: 4,
                lineHeight: 1.625,
              }}
            >
              Get in touch with our team for more information about our facilities management services.
            </Typography>
          </Box>

          <Card sx={{ p: { xs: 3, md: 4 }, boxShadow: 4 }} data-aos="fade-up">
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                required
                name="name"
                label="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                required
                name="email"
                label="Email Address *"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
              />
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
                  bgcolor: '#3097C0',
                  color: 'white',
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(48, 151, 192, 0.9)',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogPage;
