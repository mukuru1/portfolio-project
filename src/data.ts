import { Project, Service, Skill, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce website with responsive design, shopping cart functionality, and seamless checkout process.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Restaurant Landing Page',
    description: 'Elegant restaurant website with online reservation system, menu showcase, and customer reviews.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    imageUrl: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This very portfolio website showcasing modern web development practices and clean design principles.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    description: 'Clean and intuitive dashboard interface with data visualization, user management, and analytics.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Responsive Web Design',
    description: 'Websites that work perfectly on mobile, tablet & desktop devices.',
    icon: 'Smartphone'
  },
  {
    id: 2,
    title: 'Figma to HTML Conversion',
    description: 'Pixel-perfect code from your design files with attention to detail.',
    icon: 'Code'
  },
  {
    id: 3,
    title: 'Landing Page Development',
    description: 'High-converting pages for products or services that drive results.',
    icon: 'Rocket'
  },
  {
    id: 4,
    title: 'Website Redesign',
    description: 'Give your site a modern look and improved performance.',
    icon: 'Palette'
  },
  {
    id: 5,
    title: 'Speed & SEO Optimization',
    description: 'Fast load times + better visibility on search engines.',
    icon: 'Zap'
  },
  {
    id: 6,
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your website running smoothly.',
    icon: 'Shield'
  }
];

export const skills: Skill[] = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Figma to Code', level: 85 },
  { name: 'Responsive Design', level: 95 }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'Mukuru turned my vision into a fast, mobile-friendly site. The attention to detail and communication throughout the project was exceptional!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'Professional, reliable, and delivered exactly what we needed. Our new website has significantly improved our online presence.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Startup Founder',
    content: 'Mukuru transformed our outdated website into a modern, conversion-focused platform. Highly recommend for any web development needs!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];