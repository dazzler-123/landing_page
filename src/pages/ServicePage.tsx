import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FactoryIcon from '@mui/icons-material/Factory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BuildIcon from '@mui/icons-material/Build';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import RoofingIcon from '@mui/icons-material/Roofing';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BrushIcon from '@mui/icons-material/Brush';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

interface ServicePageData {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  sectionTitle: string;
  sectionDescription: string;
  services: Service[];
  benefits: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  portfolioTitle: string;
  portfolioDescription: string;
}

const ServicePage: React.FC = () => {
  const navigate = useNavigate();
  const { serviceType } = useParams<{ serviceType?: string }>();
  
  // Get service data based on URL parameter or default to commercial-cleaning
  const currentServiceType = serviceType || 'commercial-cleaning';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    serviceType: currentServiceType,
    cleaningFrequency: '',
    message: '',
    serviceTypeRadio: '',
    cleaningFrequencyRadio: '',
    additionalNotes: '',
  });

  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo(0, 0);
  }, []);

  // Update form service type when URL parameter changes
  useEffect(() => {
    if (serviceType && serviceType !== formData.serviceType) {
      setFormData((prev) => ({ ...prev, serviceType: serviceType }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceType]);

  const handleBackClick = () => {
    navigate('/');
  };

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

  // Service data for different service types
  const serviceDataMap: Record<string, ServicePageData> = {
    'commercial-cleaning': {
      heroTitle: 'Transform Your Workplace',
      heroSubtitle: 'With Professional Cleaning',
      heroDescription: 'Experience pristine, hygienic workspaces that boost productivity and impress clients. Group Serve\'s certified specialists deliver exceptional commercial cleaning solutions with eco-friendly products and flexible scheduling.',
      sectionTitle: 'Comprehensive Commercial Cleaning Services',
      sectionDescription: 'Group Serve Facilities Management delivers exceptional commercial cleaning services designed to meet the unique needs of businesses throughout the United Kingdom. With over 15 years of industry expertise, we understand that a clean, well-maintained workplace is essential for employee wellbeing, client impressions, and operational efficiency.',
      services: [
        {
          icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
          title: 'Daily Office Cleaning',
          description: 'Regular maintenance cleaning including dusting, vacuuming, waste removal, and surface sanitization for daily operational excellence.',
          features: [
            'Desk and workstation cleaning',
            'Carpet and floor maintenance',
            'Kitchen and breakroom sanitization',
            'Restroom deep cleaning',
          ],
          delay: 100,
        },
        {
          icon: <CleaningServicesIcon sx={{ fontSize: 32 }} />,
          title: 'Deep Cleaning Services',
          description: 'Comprehensive intensive cleaning for carpets, upholstery, windows, and hard-to-reach areas to restore pristine conditions.',
          features: [
            'Carpet steam cleaning',
            'Window and glass cleaning',
            'High-level dusting',
            'Upholstery cleaning',
          ],
          delay: 200,
        },
        {
          icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />,
          title: 'Healthcare Facility Cleaning',
          description: 'Specialized medical-grade cleaning and disinfection services meeting NHS and healthcare compliance standards.',
          features: [
            'Clinical waste management',
            'Infection control cleaning',
            'Sterilization procedures',
            'Compliance documentation',
          ],
          delay: 300,
        },
        {
          icon: <FactoryIcon sx={{ fontSize: 32 }} />,
          title: 'Industrial & Warehouse Cleaning',
          description: 'Heavy-duty cleaning solutions for manufacturing facilities, warehouses, and industrial complexes with specialized equipment.',
          features: [
            'High-pressure washing',
            'Industrial floor cleaning',
            'Machinery cleaning',
            'Waste management systems',
          ],
          delay: 100,
        },
        {
          icon: <ShoppingBagIcon sx={{ fontSize: 32 }} />,
          title: 'Retail & Commercial Space Cleaning',
          description: 'Customer-facing environment cleaning that enhances shopping experience while maintaining brand image and standards.',
          features: [
            'Display cleaning',
            'Entrance maintenance',
            'Changing room sanitization',
            'Floor polishing',
          ],
          delay: 200,
        },
        {
          icon: <SchoolIcon sx={{ fontSize: 32 }} />,
          title: 'Educational Facility Cleaning',
          description: 'Specialized cleaning for schools, colleges, and universities focusing on hygiene and creating optimal learning environments.',
          features: [
            'Classroom sanitization',
            'Laboratory cleaning',
            'Sports facility maintenance',
            'Term-time flexibility',
          ],
          delay: 300,
        },
        {
          icon: <RoofingIcon sx={{ fontSize: 32 }} />,
          title: 'Roof Cleaning',
          description: 'Professional roof cleaning and maintenance to remove moss, algae, debris, and staining—extending roof life and improving building appearance.',
          features: [
            'Moss and algae removal',
            'Debris and gutter run-off clearance',
            'Soft washing and safe treatments',
            'Inspection and minor repair advice',
          ],
          delay: 100,
        },
        {
          icon: <WaterDropIcon sx={{ fontSize: 32 }} />,
          title: 'Gutter Cleaning',
          description: 'Thorough gutter and downpipe cleaning to prevent blockages, water damage, and overflow—keeping drainage systems clear year-round.',
          features: [
            'Gutter debris and leaf removal',
            'Downpipe unblocking',
            'Fascia and soffit cleaning',
            'Pre-winter and seasonal clearance',
          ],
          delay: 200,
        },
        {
          icon: <BrushIcon sx={{ fontSize: 32 }} />,
          title: 'Graphic & Signage Cleaning',
          description: 'Careful cleaning of signs, graphics, display boards, and branded surfaces to maintain a professional, legible appearance.',
          features: [
            'Exterior and interior sign cleaning',
            'Digital display and screen cleaning',
            'Graffiti removal and prevention',
            'Branded surface restoration',
          ],
          delay: 300,
        },
      ],
      benefits: [
        {
          icon: <EmojiEmotionsIcon sx={{ fontSize: 32 }} />,
          title: 'Enhanced Workplace Productivity',
          description: 'Clean, organized environments boost employee morale and productivity by up to 25%, reducing sick days and improving focus.',
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Positive Client Impressions',
          description: 'First impressions matter. A pristine commercial space demonstrates professionalism and attention to detail that impresses clients and visitors.',
        },
        {
          icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
          title: 'Health & Safety Compliance',
          description: 'Our services meet all UK health and safety regulations, reducing liability and creating safer working environments for employees and visitors.',
        },
        {
          icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
          title: 'Cost-Effective Solutions',
          description: 'Professional cleaning extends asset lifespan, reduces maintenance costs, and eliminates the need for expensive in-house cleaning teams.',
        },
      ],
      portfolioTitle: 'Commercial Cleaning Portfolio',
      portfolioDescription: 'Browse our gallery showcasing professional cleaning transformations across various commercial sectors.',
    },
    'hvac-maintenance': {
      heroTitle: 'Transform Your Workplace',
      heroSubtitle: 'With Professional HVAC Maintenance',
      heroDescription: 'Ensure optimal comfort and air quality with Group Serve\'s comprehensive HVAC maintenance services. Our certified technicians deliver reliable heating, ventilation, and air conditioning solutions.',
      sectionTitle: 'Comprehensive HVAC Maintenance Services',
      sectionDescription: 'Group Serve Facilities Management provides complete HVAC solutions designed to maintain optimal indoor air quality and comfort. With over 15 years of expertise, we ensure your heating and cooling systems operate efficiently, reducing energy costs and extending equipment lifespan.',
      services: [
        {
          icon: <BuildIcon sx={{ fontSize: 32 }} />,
          title: 'Regular Maintenance',
          description: 'Scheduled servicing to ensure optimal performance and prevent costly breakdowns.',
          features: [
            'Filter replacement and cleaning',
            'System inspection and diagnostics',
            'Lubrication and component checks',
            'Performance optimization',
          ],
          delay: 100,
        },
        {
          icon: <BuildIcon sx={{ fontSize: 32 }} />,
          title: 'Emergency Repairs',
          description: '24/7 emergency call-out service for HVAC system failures and urgent issues.',
          features: [
            'Fast response times',
            'Expert troubleshooting',
            'Quality parts replacement',
            'System restoration',
          ],
          delay: 200,
        },
        {
          icon: <BuildIcon sx={{ fontSize: 32 }} />,
          title: 'System Installation',
          description: 'Complete HVAC system design, installation, and commissioning services.',
          features: [
            'Custom system design',
            'Professional installation',
            'System commissioning',
            'Warranty coverage',
          ],
          delay: 300,
        },
        {
          icon: <BuildIcon sx={{ fontSize: 32 }} />,
          title: 'Energy Efficiency',
          description: 'System optimization to reduce energy consumption and lower operating costs.',
          features: [
            'Energy audits',
            'Efficiency upgrades',
            'Smart controls installation',
            'Cost savings analysis',
          ],
          delay: 100,
        },
        {
          icon: <BuildIcon sx={{ fontSize: 32 }} />,
          title: 'Air Quality Management',
          description: 'Testing and improvement of indoor air quality for healthier environments.',
          features: [
            'Air quality testing',
            'Duct cleaning services',
            'Ventilation improvements',
            'Compliance certification',
          ],
          delay: 200,
        },
        {
          icon: <BuildIcon sx={{ fontSize: 32 }} />,
          title: 'Duct Cleaning',
          description: 'Comprehensive ductwork cleaning and sanitization for improved air flow.',
          features: [
            'Deep duct cleaning',
            'Sanitization treatment',
            'Mold removal',
            'Air flow optimization',
          ],
          delay: 300,
        },
      ],
      benefits: [
        {
          icon: <EmojiEmotionsIcon sx={{ fontSize: 32 }} />,
          title: 'Improved Comfort',
          description: 'Maintain optimal temperature and air quality for enhanced employee comfort and productivity.',
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Energy Savings',
          description: 'Optimized systems reduce energy consumption by up to 30%, significantly lowering utility costs.',
        },
        {
          icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
          title: 'Extended Equipment Life',
          description: 'Regular maintenance extends HVAC system lifespan and prevents costly premature replacements.',
        },
        {
          icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
          title: '24/7 Support',
          description: 'Round-the-clock emergency support ensures your systems are always operational when needed.',
        },
      ],
      portfolioTitle: 'HVAC Maintenance Portfolio',
      portfolioDescription: 'View our successful HVAC maintenance projects across various commercial facilities.',
    },
    'security-services': {
      heroTitle: 'Transform Your Workplace',
      heroSubtitle: 'With Professional Security Services',
      heroDescription: 'Protect your business with Group Serve\'s comprehensive security solutions. Our trained security professionals provide reliable protection services.',
      sectionTitle: 'Comprehensive Security Services',
      sectionDescription: 'Group Serve Facilities Management delivers professional security services designed to protect your business, employees, and assets. With certified security personnel and advanced monitoring systems, we ensure your premises remain secure 24/7.',
      services: [
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Manned Guarding',
          description: 'Professional security officers providing on-site protection and monitoring.',
          features: [
            'Trained security personnel',
            '24/7 site coverage',
            'Access control management',
            'Incident response',
          ],
          delay: 100,
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Mobile Patrol Services',
          description: 'Regular patrols of your premises to deter crime and ensure security.',
          features: [
            'Scheduled patrols',
            'Security checks',
            'Incident reporting',
            'Rapid response',
          ],
          delay: 200,
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Access Control Systems',
          description: 'Advanced access control solutions to manage entry and exit points.',
          features: [
            'Card access systems',
            'Biometric security',
            'Visitor management',
            'Access monitoring',
          ],
          delay: 300,
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'CCTV Monitoring',
          description: 'Professional CCTV installation and monitoring services.',
          features: [
            'HD camera installation',
            '24/7 monitoring',
            'Remote viewing access',
            'Evidence recording',
          ],
          delay: 100,
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Alarm Systems',
          description: 'Intruder alarm installation and monitoring for comprehensive protection.',
          features: [
            'Intruder detection',
            'Fire alarm systems',
            'Remote monitoring',
            'Emergency response',
          ],
          delay: 200,
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Security Consultancy',
          description: 'Expert security assessments and risk management consulting.',
          features: [
            'Security audits',
            'Risk assessments',
            'Security planning',
            'Compliance advice',
          ],
          delay: 300,
        },
      ],
      benefits: [
        {
          icon: <EmojiEmotionsIcon sx={{ fontSize: 32 }} />,
          title: 'Peace of Mind',
          description: 'Professional security services provide peace of mind knowing your business is protected.',
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Crime Prevention',
          description: 'Visible security presence deters criminal activity and protects your assets.',
        },
        {
          icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
          title: 'Compliance Assurance',
          description: 'Meet all security compliance requirements with professional security management.',
        },
        {
          icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
          title: 'Cost-Effective Protection',
          description: 'Reduce insurance costs and protect against losses with comprehensive security solutions.',
        },
      ],
      portfolioTitle: 'Security Services Portfolio',
      portfolioDescription: 'Explore our security service implementations across various commercial sectors.',
    },
    'electrical-maintenance': {
      heroTitle: 'Transform Your Workplace',
      heroSubtitle: 'With Professional Electrical Maintenance',
      heroDescription: 'Ensure safe and reliable electrical systems with Group Serve\'s comprehensive electrical maintenance services. Our certified electricians deliver expert solutions .',
      sectionTitle: 'Comprehensive Electrical Maintenance Services ',
      sectionDescription: 'Group Serve Facilities Management provides complete electrical services designed to maintain safe and efficient electrical systems. With certified electricians and advanced testing equipment, we ensure your electrical infrastructure meets all safety standards.',
      services: [
        {
          icon: <ElectricalServicesIcon sx={{ fontSize: 32 }} />,
          title: 'Electrical Installations',
          description: 'Complete electrical installation services for new builds and renovations.',
          features: [
            'Wiring and rewiring',
            'Lighting installations',
            'Power distribution',
            'Panel upgrades',
          ],
          delay: 100,
        },
        {
          icon: <ElectricalServicesIcon sx={{ fontSize: 32 }} />,
          title: 'PAT Testing',
          description: 'Portable appliance testing and electrical safety inspections.',
          features: [
            'Equipment testing',
            'Safety certification',
            'Compliance documentation',
            'Regular testing schedules',
          ],
          delay: 200,
        },
        {
          icon: <ElectricalServicesIcon sx={{ fontSize: 32 }} />,
          title: 'Emergency Repairs',
          description: 'Fast response to electrical emergencies and urgent repairs.',
          features: [
            '24/7 emergency service',
            'Rapid response times',
            'Expert troubleshooting',
            'Safe repairs',
          ],
          delay: 300,
        },
        {
          icon: <ElectricalServicesIcon sx={{ fontSize: 32 }} />,
          title: 'Maintenance Contracts',
          description: 'Regular scheduled maintenance to prevent issues and ensure safety.',
          features: [
            'Preventive maintenance',
            'System inspections',
            'Component replacement',
            'Performance monitoring',
          ],
          delay: 100,
        },
        {
          icon: <ElectricalServicesIcon sx={{ fontSize: 32 }} />,
          title: 'LED Lighting Upgrades',
          description: 'Energy-efficient LED lighting conversions to reduce costs.',
          features: [
            'LED installation',
            'Energy savings',
            'Improved lighting quality',
            'Long-term cost reduction',
          ],
          delay: 200,
        },
        {
          icon: <ElectricalServicesIcon sx={{ fontSize: 32 }} />,
          title: 'Electrical Safety Inspections',
          description: 'Comprehensive electrical safety assessments and compliance checks.',
          features: [
            'Full system inspection',
            'Safety certification',
            'Compliance reporting',
            'Remediation recommendations',
          ],
          delay: 300,
        },
      ],
      benefits: [
        {
          icon: <EmojiEmotionsIcon sx={{ fontSize: 32 }} />,
          title: 'Safety Assurance',
          description: 'Regular maintenance ensures electrical safety and compliance with all regulations.',
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Preventive Maintenance',
          description: 'Scheduled maintenance prevents costly breakdowns and extends equipment life.',
        },
        {
          icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
          title: 'Compliance Guaranteed',
          description: 'All work meets UK electrical safety standards and building regulations.',
        },
        {
          icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
          title: 'Energy Efficiency',
          description: 'Optimized electrical systems reduce energy consumption and lower costs.',
        },
      ],
      portfolioTitle: 'Electrical Maintenance Portfolio',
      portfolioDescription: 'View our electrical maintenance projects across various commercial facilities.',
    },
    'plumbing-services': {
      heroTitle: 'Transform Your Workplace',
      heroSubtitle: 'With Professional Plumbing Services',
      heroDescription: 'Maintain reliable water systems with Group Serve\'s comprehensive plumbing services. Our certified plumbers deliver expert solutions .',
      sectionTitle: 'Comprehensive Plumbing Services',
      sectionDescription: 'Group Serve Facilities Management provides complete plumbing solutions designed to maintain efficient water systems and prevent costly water damage. With certified plumbers and advanced equipment, we ensure your plumbing infrastructure operates reliably.',
      services: [
        {
          icon: <PlumbingIcon sx={{ fontSize: 32 }} />,
          title: 'Plumbing Installations',
          description: 'Complete plumbing installation services for new builds and renovations.',
          features: [
            'Pipe installation',
            'Fixture installation',
            'Water system setup',
            'Drainage systems',
          ],
          delay: 100,
        },
        {
          icon: <PlumbingIcon sx={{ fontSize: 32 }} />,
          title: 'Emergency Repairs',
          description: 'Fast response to plumbing emergencies and urgent repairs.',
          features: [
            '24/7 emergency service',
            'Leak repairs',
            'Blockage clearance',
            'Burst pipe repairs',
          ],
          delay: 200,
        },
        {
          icon: <PlumbingIcon sx={{ fontSize: 32 }} />,
          title: 'Water Hygiene',
          description: 'Legionella risk assessment and water system management.',
          features: [
            'Risk assessments',
            'Water testing',
            'System maintenance',
            'Compliance documentation',
          ],
          delay: 300,
        },
        {
          icon: <PlumbingIcon sx={{ fontSize: 32 }} />,
          title: 'Preventive Maintenance',
          description: 'Regular scheduled maintenance to prevent issues and ensure reliability.',
          features: [
            'System inspections',
            'Component replacement',
            'Leak detection',
            'Performance monitoring',
          ],
          delay: 100,
        },
        {
          icon: <PlumbingIcon sx={{ fontSize: 32 }} />,
          title: 'Drainage Services',
          description: 'Drain cleaning, unblocking, and maintenance services.',
          features: [
            'Drain unblocking',
            'CCTV drain surveys',
            'Drain cleaning',
            'Preventive maintenance',
          ],
          delay: 200,
        },
        {
          icon: <PlumbingIcon sx={{ fontSize: 32 }} />,
          title: 'Water-Saving Solutions',
          description: 'Installation of water-saving fixtures and systems.',
          features: [
            'Low-flow fixtures',
            'Water-efficient systems',
            'Cost reduction',
            'Environmental benefits',
          ],
          delay: 300,
        },
      ],
      benefits: [
        {
          icon: <EmojiEmotionsIcon sx={{ fontSize: 32 }} />,
          title: 'Reliable Systems',
          description: 'Well-maintained plumbing systems ensure uninterrupted operations and prevent costly water damage.',
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 32 }} />,
          title: 'Water Safety',
          description: 'Professional water hygiene management ensures safe, compliant water systems.',
        },
        {
          icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
          title: 'Compliance Assurance',
          description: 'All work meets UK water regulations and health and safety standards.',
        },
        {
          icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
          title: 'Cost Savings',
          description: 'Preventive maintenance and water-saving solutions reduce operational costs significantly.',
        },
      ],
      portfolioTitle: 'Plumbing Services Portfolio',
      portfolioDescription: 'View our plumbing service projects across various commercial facilities.',
    },
  };

  const pageData = serviceDataMap[currentServiceType] || serviceDataMap['commercial-cleaning'];

  const services: Service[] = pageData.services;

  const benefits = pageData.benefits;

  const processSteps = [
    {
      number: '01',
      icon: <ComputerIcon sx={{ fontSize: 32 }} />,
      title: 'Consultation & Planning',
      description: 'We start with a comprehensive facility assessment and create a customized cleaning plan tailored to your specific needs.',
      details: [
        'Detailed site inspection',
        'Custom cleaning schedule',
        'Transparent pricing structure',
      ],
    },
    {
      number: '02',
      icon: <PeopleIcon sx={{ fontSize: 32 }} />,
      title: 'Expert Team Deployment',
      description: 'Our certified, vetted cleaning specialists arrive fully equipped with advanced tools and sustainable cleaning products.',
      details: [
        'Background-checked professionals',
        'Specialized equipment setup',
        'Supervisor oversight',
      ],
    },
    {
      number: '03',
      icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
      title: 'Quality Assurance & Review',
      description: 'Regular inspections and client feedback ensure consistent service excellence and continuous improvement.',
      details: [
        'Performance monitoring',
        'Client satisfaction reviews',
        'Continuous training updates',
      ],
    },
  ];

  // Service-specific portfolio images
  const portfolioImagesMap: Record<string, string[]> = {
    'commercial-cleaning': [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Office cleaning
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Professional cleaner
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cleaning equipment
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Clean office space
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Window cleaning
    ],
    'hvac-maintenance': [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // HVAC system
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Air conditioning unit
      'https://images.unsplash.com/photo-1621905252472-b7d3b1e478e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // HVAC technician
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Ventilation system
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // HVAC maintenance
    ],
    'security-services': [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Security guard
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Security camera
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Security system
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Access control
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Security monitoring
    ],
    'electrical-maintenance': [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Electrical panel
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Electrician working
      'https://images.unsplash.com/photo-1621905252472-b7d3b1e478e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Electrical wiring
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Electrical maintenance
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Electrical installation
    ],
    'plumbing-services': [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Plumbing tools
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Plumber working
      'https://images.unsplash.com/photo-1621905252472-b7d3b1e478e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Pipe installation
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Plumbing repair
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Water system
    ],
  };

  // Get portfolio images for current service type, fallback to commercial-cleaning
  const portfolioImages: string[] = portfolioImagesMap[currentServiceType] || portfolioImagesMap['commercial-cleaning'] || [];

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0, 43, 86, 0.75)',
            },
          }}
        />
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            startIcon={<ArrowBackIcon />}
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
            Back to Home
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
                <Box component="span" sx={{ color: '#3097C0' }}>
                  {pageData.heroSubtitle}
                </Box>
                {' '}Services
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
                    bgcolor: '#3097C0',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(48, 151, 192, 0.9)',
                    },
                  }}
                >
                  Get Instant Quote
                </Button>
                <Button
                  variant="outlined"
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
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
                  View Our Process
                </Button>
              </Box>

              {/* Statistics */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(3, 1fr)' }, gap: 3, mb: 4 }} data-aos="fade-up" data-aos-delay="300">
                {[
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '500+', label: 'Businesses Served' },
                  { number: '24/7', label: 'Emergency Service' },
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

              {/* Trust Indicators */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }} data-aos="fade-up" data-aos-delay="400">
                {[
                  'Certified & Insured',
                  'Eco-Friendly Products',
                  'No Contract Required',
                ].map((text) => (
                  <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#50BB5A', fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right Side Image */}
            <Box sx={{ flex: { xs: '0 0 auto', lg: '0 0 400px' }, display: { xs: 'none', lg: 'block' } }} data-aos="fade-left">
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 8,
                }}
              >
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    bgcolor: '#3097C0',
                    color: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  Professional Cleaning
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Comprehensive Commercial Cleaning Services Section */}
      <Box
        id="services"
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                mb: 1,
                color: '#3097C0',
              }}
              data-aos="fade-up"
            >
              Our Services
            </Typography>
            <Typography
              variant="h2"
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#0F223F',
                mb: 3,
              }}
              data-aos="fade-up"
            >
              {pageData.sectionTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: '#6C757D',
                mb: 4,
                lineHeight: 1.625,
              }}
              data-aos="fade-up"
            >
              {pageData.sectionDescription}
            </Typography>

            {/* Statistics */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }} data-aos="fade-up">
              {[
                { number: '500+', label: 'Commercial Clients' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: 'ISO', label: '9001 Certified' },
                { number: '24/7', label: 'Emergency Service' },
              ].map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    bgcolor: '#F8FAFD',
                    borderRadius: 2,
                  }}
                >
                  <Typography sx={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F223F', mb: 0.5 }}>
                    {stat.number}
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#6C757D' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Specialized Commercial Cleaning Solutions Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: '#F8FAFD',
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                mb: 1,
                color: '#3097C0',
              }}
            >
              Our Solutions
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
              Specialized {pageData.sectionTitle.split(' ').slice(1).join(' ')}
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
              Tailored services for every commercial environment, ensuring optimal standards and professional results.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            {services.map((service, index) => (
              <Card
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={service.delay}
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Icon */}
                  <Box
                    className="service-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      background: index % 3 === 0
                        ? 'linear-gradient(135deg, #0F223F, rgba(15, 34, 63, 0.8))'
                        : index % 3 === 1
                        ? 'linear-gradient(135deg, #3097C0, rgba(48, 151, 192, 0.8))'
                        : 'linear-gradient(135deg, #50BB5A, rgba(80, 187, 90, 0.8))',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'transform 0.3s',
                      color: 'white',
                    }}
                  >
                    {service.icon}
                  </Box>
                  
                  {/* Title */}
                  <Typography
                    variant="h3"
                    className="font-display"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#0F223F',
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  {/* Description */}
                  <Typography
                    sx={{
                      color: '#6C757D',
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '0.9375rem',
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Features List */}
                  <Box component="ul" sx={{ pl: 2, mb: 3, m: 0 }}>
                    {service.features.map((feature, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          color: '#6C757D',
                          mb: 1,
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                          '&::marker': {
                            color: '#F0942D',
                          },
                        }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Box>

                  {/* CTA Button */}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  mb: 1,
                  color: '#3097C0',
                }}
                data-aos="fade-up"
              >
                Our Benefits
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
                data-aos="fade-up"
              >
                Benefits of Professional Commercial Cleaning
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: '#6C757D',
                  mb: 4,
                  lineHeight: 1.625,
                }}
                data-aos="fade-up"
              >
                Investing in professional commercial cleaning services delivers measurable returns for your business beyond just cleanliness.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {benefits.map((benefit, index) => (
                  <Box
                    key={benefit.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    sx={{ display: 'flex', gap: 3 }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: '#3097C0',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        className="font-display"
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#0F223F',
                          mb: 1,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#6C757D',
                          lineHeight: 1.625,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right Side Image */}
            <Box sx={{ flex:1}} data-aos="fade-left">
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Benefits"
                sx={{
                  width: '100%',
                  height: '100% ',
                  borderRadius: 2,
                  boxShadow: 4,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: '#F8FAFD',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                mb: 1,
                color: '#3097C0',
              }}
            >
              Our Portfolio
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
              {pageData.portfolioTitle}
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
              {pageData.portfolioDescription}
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 2 }}>
            {portfolioImages.map((img, index) => (
              <Box
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  aspectRatio: '1',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s',
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* How We Deliver Excellence Section */}
      <Box
        id="process"
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                mb: 1,
                color: '#3097C0',
              }}
            >
              Our Process
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
              How We Deliver Excellence
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
              A streamlined 3-step approach ensuring consistent, high-quality cleaning results for businesses.
            </Typography>
          </Box>

          {/* Process Steps */}
          <Box sx={{ position: 'relative', mb: 4 }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                top: 80,
                left: 0,
                right: 0,
                height: 4,
                bgcolor: '#3097C0',
                opacity: 0.2,
                display: { xs: 'none', md: 'block' },
              }}
            />
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, position: 'relative' }}>
              {processSteps.map((step, index) => (
                <Box
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{ textAlign: 'center' }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: '#3097C0',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      mb: 2,
                      mx: 'auto',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.number}
                  </Box>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: '#3097C0',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mb: 2,
                      mx: 'auto',
                    }}
                  >
                    {step.icon}
                  </Box>
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
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#6C757D',
                      lineHeight: 1.625,
                      mb: 2,
                    }}
                  >
                    {step.description}
                  </Typography>
                  {step.details && (
                    <Box component="ul" sx={{ pl: 2, m: 0, textAlign: 'left' }}>
                      {step.details.map((detail, idx) => (
                        <Box
                          component="li"
                          key={idx}
                          sx={{
                            color: '#6C757D',
                            fontSize: '0.875rem',
                            mb: 0.5,
                            '&::marker': {
                              color: '#3097C0',
                            },
                          }}
                        >
                          {detail}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Ready to Experience Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 3,
          bgcolor: '#0F223F',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            className="font-display"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
            data-aos="fade-up"
          >
            Ready to Experience Our Process?
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              lineHeight: 1.625,
            }}
            data-aos="fade-up"
          >
            Schedule your free facility assessment and see how our systematic approach can transform your workspace.
          </Typography>
          <Button
            variant="contained"
            href="#contact-form"
            onClick={(e) => handleNavClick(e, '#contact-form')}
            sx={{
              bgcolor: '#3097C0',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'rgba(48, 151, 192, 0.9)',
              },
            }}
            data-aos="fade-up"
          >
            Get Your Free Quote
          </Button>
        </Container>
      </Box>

      {/* Request Quote Section */}
      <Box
        id="contact-form"
        sx={{
          py: { xs: 6, md: 12 },
          px: 3,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6 }}>
            {/* Left Side */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  mb: 1,
                  color: '#3097C0',
                }}
                data-aos="fade-up"
              >
                Get a Quote
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
                data-aos="fade-up"
              >
                Request Your {pageData.sectionTitle.split(' ').slice(1, -3).join(' ')} Quote
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: '#6C757D',
                  mb: 4,
                  lineHeight: 1.625,
                }}
                data-aos="fade-up"
              >
                Get a detailed, no-obligation quote for professional services tailored to your facility's specific needs.
              </Typography>
              
              {/* Quick Info */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }} data-aos="fade-up">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: '#3097C0' }} />
                  <Typography sx={{ color: '#6C757D' }}>Quote delivered within 24 hours</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: '#3097C0' }} />
                  <Typography sx={{ color: '#6C757D' }}>Free, no-pressure assessment</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: '#3097C0' }} />
                  <Typography sx={{ color: '#6C757D' }}>Tailored to your requirements</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }} data-aos="fade-up">
                <Typography sx={{ color: '#6C757D', fontWeight: 600 }}>Prefer to call?</Typography>
                <Button
                  href="tel:07438580681"
                  sx={{
                    color: '#3097C0',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  07438580681
                </Button>
              </Box>

              {/* Service Type Radio */}
             
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
                  Get Your Free Quote
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
                    <InputLabel>Service Type</InputLabel>
                    <Select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleSelectChange('serviceType')}
                      label="Service Type"
                    >
                      <MenuItem value="daily-office">Daily Office Cleaning</MenuItem>
                      <MenuItem value="deep-cleaning">Deep Cleaning Services</MenuItem>
                      <MenuItem value="healthcare">Healthcare Facility Cleaning</MenuItem>
                      <MenuItem value="industrial">Industrial & Warehouse Cleaning</MenuItem>
                      <MenuItem value="retail">Retail & Commercial Space Cleaning</MenuItem>
                      <MenuItem value="educational">Educational Facility Cleaning</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>Cleaning Frequency</InputLabel>
                    <Select
                      name="cleaningFrequency"
                      value={formData.cleaningFrequency}
                      onChange={handleSelectChange('cleaningFrequency')}
                      label="Cleaning Frequency"
                    >
                      <MenuItem value="daily">Daily</MenuItem>
                      <MenuItem value="weekly">Weekly</MenuItem>
                      <MenuItem value="bi-weekly">Bi-Weekly</MenuItem>
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="one-time">One-Time</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    name="message"
                    label="Tell us about your cleaning requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <input type="checkbox" id="privacy" required />
                    <Typography component="label" htmlFor="privacy" sx={{ fontSize: '0.875rem', color: '#6C757D', cursor: 'pointer' }}>
                      I agree to the Privacy Policy and consent to being contacted regarding my enquiry *
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
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
                    Request Free Quote
                  </Button>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Experience the Group Serve Difference Section */}
      <Box
        sx={{
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(15, 34, 63, 0.85)',
            },
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h2"
            className="font-display"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
            data-aos="fade-up"
          >
            Experience the Group Serve Difference
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              lineHeight: 1.625,
            }}
            data-aos="fade-up"
          >
            Join 500+ UK businesses enjoying pristine, professional environments. Let's discuss how we can transform your commercial space today.
          </Typography>
          
          {/* Trust Indicators */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mb: 4 }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ color: '#50BB5A', fontSize: 20 }} />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                Certified cleaning specialists
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ color: '#50BB5A', fontSize: 20 }} />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                Eco-friendly products & methods
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ color: '#50BB5A', fontSize: 20 }} />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                Flexible scheduling 24/7
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            href="#contact-form"
            onClick={(e) => handleNavClick(e, '#contact-form')}
            sx={{
              bgcolor: '#3097C0',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              mb: 4,
              '&:hover': {
                bgcolor: 'rgba(48, 151, 192, 0.9)',
              },
            }}
            data-aos="fade-up"
          >
            Get Your Free Quote
          </Button>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, justifyContent: 'center' }} data-aos="fade-up">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                px: 3,
                py: 2,
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
              }}
            >
              <PhoneIcon sx={{ color: '#3097C0', fontSize: 32 }} />
              <Box>
                <Typography sx={{ color: 'white', fontWeight: 600 }}>0121 123 4567</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                px: 3,
                py: 2,
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
              }}
            >
              <EmailIcon sx={{ color: '#3097C0', fontSize: 32 }} />
              <Box>
                <Typography sx={{ color: 'white', fontWeight: 600 }}>support@groupservefacilities.co.uk</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ServicePage;
