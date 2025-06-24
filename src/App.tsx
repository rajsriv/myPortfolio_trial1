import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React & TypeScript', level: 95, icon: Code },
    { name: 'Modern CSS & Animations', level: 92, icon: Palette },
    { name: 'Performance Optimization', level: 88, icon: Zap },
    { name: 'Responsive Design', level: 94, icon: Globe },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with advanced filtering, real-time inventory, and seamless checkout process.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics platform with real-time charts, custom filters, and export functionality.',
      tech: ['React', 'D3.js', 'WebSocket', 'CSS Grid'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI-Powered Content Platform',
      description: 'Content management system with AI-generated recommendations and automated optimization.',
      tech: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className={`absolute inset-0 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
        }`} />
        
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-white relative group ${
                    activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="bg-black/95 backdrop-blur-lg border-b border-gray-800/50 px-6 py-4">
            {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
                Frontend
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Developer
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Crafting exceptional digital experiences with modern technologies and innovative design
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate frontend developer with a keen eye for design and a love for creating 
                  seamless user experiences. With expertise in modern web technologies, I transform ideas 
                  into interactive, performant, and visually stunning applications.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach combines technical excellence with creative problem-solving, ensuring every 
                  project not only meets requirements but exceeds expectations in both functionality and aesthetics.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                      <Code size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">5+ Years</h3>
                    <p className="text-gray-400">Building web experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="bg-gray-950/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of recent work that showcases my development capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="group">
                <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-gray-600 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-gray-600 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-gray-600 focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-gray-600 focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Frontend Developer Portfolio. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;