import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import PropertyTypes from './components/PropertyTypes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <PropertyTypes />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
