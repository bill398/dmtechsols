import { 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Cog 
} from 'lucide-react';

export const servicesData = [
  {
    slug: 'software-development',
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with modern technologies and best practices.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
    color: 'from-blue-500 to-blue-600',
    image: '/images/software-development.jpg',
    longDescription: 'Our custom software development services are designed to bring your vision to life. We build robust, scalable, and secure applications that streamline your operations and provide a competitive edge.',
    process: [
      { title: 'Discovery & Planning', description: 'Understanding your goals and requirements to create a roadmap.' },
      { title: 'UI/UX Design', description: 'Designing intuitive and engaging interfaces.' },
      { title: 'Development & Testing', description: 'Building and testing robust applications.' },
      { title: 'Deployment & Support', description: 'Launching the application and providing support.' }
    ],
    techStack: ['React', 'Node.js', 'Python', 'Go', 'iOS/Android', 'PostgreSQL']
  },
  {
    slug: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Serverless Architecture'],
    color: 'from-cyan-500 to-cyan-600',
    image: '/images/cloud-solutions.jpg',
    longDescription: 'Leverage the power of the cloud with our expert solutions. We help you design, build, and manage scalable cloud infrastructure on leading platforms.',
    process: [
      { title: 'Cloud Strategy', description: 'Developing a tailored cloud strategy.' },
      { title: 'Infrastructure Setup', description: 'Provisioning and configuring cloud environments.' },
      { title: 'Migration & Integration', description: 'Migrating existing applications and data.' },
      { title: 'Management & Optimization', description: 'Monitoring, managing, and optimizing costs.' }
    ],
    techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    slug: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR, HIPAA)', '24/7 Monitoring'],
    color: 'from-green-500 to-green-600',
    image: '/images/cybersecurity.jpg',
    longDescription: 'Our cybersecurity services provide comprehensive protection for your digital assets. We identify vulnerabilities and implement robust security measures.',
    process: [
      { title: 'Risk Assessment', description: 'Identifying and analyzing potential risks.' },
      { title: 'Security Implementation', description: 'Deploying advanced security tools.' },
      { title: 'Testing & Validation', description: 'Conducting penetration testing.' },
      { title: 'Monitoring & Response', description: 'Providing 24/7 monitoring and rapid response.' }
    ],
    techStack: ['NIST Framework', 'OWASP', 'SIEM', 'Firewall', 'Endpoint Security', 'Encryption']
  },
  {
    slug: 'digital-transformation',
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Transform your business processes with digital solutions that drive efficiency and growth.',
    features: ['Process Automation', 'Digital Strategy', 'Legacy Modernization', 'Data Analytics & BI'],
    color: 'from-purple-500 to-purple-600',
    image: '/images/digital-transformation.jpg',
    longDescription: 'Embrace the future with our digital transformation services. We help you rethink business processes and leverage technology for efficiency and innovation.',
    process: [
      { title: 'Strategy Workshop', description: 'Defining your digital roadmap.' },
      { title: 'Process Re-engineering', description: 'Redesigning workflows for efficiency.' },
      { title: 'Technology Implementation', description: 'Implementing the right digital tools.' },
      { title: 'Change Management', description: 'Supporting training and adoption.' }
    ],
    techStack: ['RPA', 'AI/ML', 'Big Data', 'IoT', 'Power BI', 'Tableau']
  },
  {
    slug: 'it-consulting',
    icon: BarChart3,
    title: 'IT Consulting',
    description: 'Strategic IT guidance to help you make informed technology decisions and optimize investments.',
    features: ['Technology Strategy', 'Architecture Review', 'Cost Optimization', 'Risk Assessment'],
    color: 'from-orange-500 to-orange-600',
    image: '/images/it-consulting.jpg',
    longDescription: 'Make smarter technology decisions with our IT consulting services. We align your IT strategy with business goals and help optimize investments.',
    process: [
      { title: 'Initial Assessment', description: 'Analyzing your IT landscape and objectives.' },
      { title: 'Strategic Planning', description: 'Creating a long-term IT roadmap.' },
      { title: 'Vendor Selection', description: 'Choosing the best technology partners.' },
      { title: 'Implementation Guidance', description: 'Overseeing the implementation process.' }
    ],
    techStack: ['Gartner', 'Forrester', 'TOGAF', 'ITIL', 'Agile/Scrum', 'COBIT']
  },
  {
    slug: 'website-design',
    icon: Cog,
    title: 'Website Design',
    description: 'Modern, responsive websites that deliver exceptional user experiences and drive conversions.',
    features: ['Responsive Design', 'UX/UI Design', 'E-commerce', 'SEO Optimization'],
    color: 'from-pink-500 to-pink-600',
    image: '/images/website-design.jpg',
    longDescription: 'Your website is your digital storefront. We create beautiful, responsive websites that captivate your audience and convert visitors into customers.',
    process: [
      { title: 'Discovery', description: 'Understanding your brand and goals.' },
      { title: 'Wireframing & Prototyping', description: 'Visualizing the layout and user flow.' },
      { title: 'Visual Design', description: 'Crafting a stunning visual identity.' },
      { title: 'Development & Launch', description: 'Building and launching your website.' }
    ],
    techStack: ['Figma', 'Adobe XD', 'React', 'Next.js', 'TailwindCSS', 'Shopify']
  }
];
