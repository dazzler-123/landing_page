import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import PropertyTypes from './components/PropertyTypes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <PropertyTypes />
      <Contact />
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
