import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import IndustriesServed from './components/IndustriesServed';
import CaseStudies from './components/CaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import IndustriesPage from './pages/IndustriesPage';
import BlogPage from './pages/BlogPage';
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
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:serviceType" element={<ServicePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:industrySlug" element={<IndustriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogSlug" element={<BlogPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
