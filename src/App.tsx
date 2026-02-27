import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import IndustriesServed from './components/IndustriesServed';
import CaseStudies from './components/CaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import IndustriesPage from './pages/IndustriesPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import Achievements from './components/Achievements';
import Partners from './components/Partners';
import BlogTestimonialsFAQ from './components/BlogTestimonialsFAQ';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      {/* <About /> */}
      <WhyChooseUs />
      <IndustriesServed />
      <Achievements />
      <HowItWorks />
      <CaseStudies />
      {/* <PropertyTypes /> */}
      <Contact />
      <Partners />
      <BlogTestimonialsFAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/services/:serviceType" element={<ServicePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:industrySlug" element={<IndustriesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogSlug" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
