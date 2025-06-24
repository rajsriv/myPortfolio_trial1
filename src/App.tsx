import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Globe, ArrowRight, Star, Sparkles } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React Mastery', level: 98, icon: Code, color: 'from-emerald-400 to-teal-600' },
    { name: 'Design Systems', level: 95, icon: Palette, color: 'from-pink-400 to-rose-600' },
    { name: 'Performance Wizardry', level: 92, icon: Zap, color: 'from-yellow-400 to-orange-600' },
    { name: 'Creative Innovation', level: 97, icon: Globe, color: 'from-purple-400 to-indigo-600' },
  ];

  const projects = [
    {
      title: 'Neural Commerce',
      description: 'AI-powered shopping experience with mind-reading recommendations and quantum checkout processes.',
      tech: ['React', 'WebGL', 'AI/ML', 'Quantum CSS'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMTExODI3Ii8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIyNSIgcj0iMTAwIiBmaWxsPSIjMTBiOTgxIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSIxNTAiIHI9IjYwIiBmaWxsPSIjZWM0ODk5IiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHN2Zz4K',
      accent: 'from-emerald-400 to-cyan-600'
    },
    {
      title: 'Holographic Analytics',
      description: 'Data visualization in 3D space with gesture controls and telepathic user interfaces.',
      tech: ['Three.js', 'WebXR', 'Neural Networks', 'Hologram API'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMTExODI3Ii8+CjxwYXRoIGQ9Ik0yMDAgMjI1TDQwMCAxMDBMNjAwIDIyNUw0MDAgMzUwWiIgZmlsbD0iI2VjNDg5OSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHN2Zz4K',
      accent: 'from-pink-400 to-purple-600'
    },
    {
      title: 'Consciousness Platform',
      description: 'Content management system that reads your thoughts and creates content before you think it.',
      tech: ['Next.js', 'Brain.js', 'Quantum State', 'Time Travel API'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMTExODI3Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjI1MCIgcng9IjIwIiBmaWxsPSIjZjU5ZTBiIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHN2Zz4K',
      accent: 'from-yellow-400 to-red-600'
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full animate-pulse" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-emerald-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-pink-400/20 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 transform rotate-12 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-purple-400/20 transform -rotate-12 animate-float" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-gradient-rainbow' : 'bg-transparent'
        }`} />
        
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
              ∞DEV
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-bold transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-400 hover:to-pink-400 hover:bg-clip-text relative group ${
                    activeSection === item.toLowerCase() ? 'text-transparent bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-pink-400 transition-all duration-500 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-gray-700 hover:border-emerald-400/50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-b border-gray-800 px-6 py-6 space-y-4">
            {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-full blur-3xl animate-spin-very-slow" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-emerald-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up tracking-tighter">
                CREATIVE
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-yellow-400 to-white bg-clip-text text-transparent animate-fade-in-up tracking-tighter" style={{ animationDelay: '0.2s' }}>
                CHAOS
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.4s' }}>
                Where <span className="text-transparent bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text font-bold">impossible</span> meets 
                <span className="text-transparent bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text font-bold"> inevitable</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-10 py-5 bg-gradient-to-r from-emerald-400 to-pink-400 text-black font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  WITNESS MAGIC <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-10 py-5 border-2 border-gray-600 text-white font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:border-emerald-400"
              >
                <span className="relative z-10">LET'S COLLABORATE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-pink-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="flex flex-col items-center space-y-2">
              <Sparkles size={24} className="text-emerald-400 animate-pulse" />
              <ChevronDown size={24} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                DIGITAL
                <br />
                ALCHEMIST
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-xl leading-relaxed font-light">
                  I don't just write code—I <span className="text-emerald-400 font-bold">conjure digital experiences</span> that 
                  defy reality and redefine possibility. Every pixel is a spell, every animation a ritual.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  My craft transcends traditional development. I architect <span className="text-pink-400 font-bold">impossible interfaces</span>, 
                  sculpt <span className="text-yellow-400 font-bold">quantum interactions</span>, and breathe life into the void between imagination and code.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="group p-4 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-700 hover:border-emerald-400/50 transition-all duration-500 hover:scale-110 hover:rotate-12">
                  <Github size={24} className="group-hover:text-emerald-400 transition-colors duration-300" />
                </a>
                <a href="#" className="group p-4 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-700 hover:border-pink-400/50 transition-all duration-500 hover:scale-110 hover:-rotate-12">
                  <Linkedin size={24} className="group-hover:text-pink-400 transition-colors duration-300" />
                </a>
                <a href="#" className="group p-4 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-110 hover:rotate-12">
                  <Mail size={24} className="group-hover:text-yellow-400 transition-colors duration-300" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-pink-400/10" />
                <div className="h-full flex items-center justify-center relative z-10">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-pink-400 rounded-full mx-auto flex items-center justify-center animate-pulse-glow">
                        <Star size={48} className="text-black animate-spin-slow" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" />
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-4xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">∞</h3>
                    <p className="text-gray-400 font-light">Years of breaking reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-emerald-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
              SUPERNATURAL
              <br />
              ABILITIES
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
              Powers that transcend the ordinary realm of development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-br from-gray-950 to-black rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 bg-gradient-to-r ${skill.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon size={28} className="text-black" />
                      </div>
                      <h3 className="font-black text-xl text-white">{skill.name}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400 font-medium">MASTERY LEVEL</span>
                        <span className="text-white font-black">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-noise-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-6 leading-tight">
              REALITY
              <br />
              DISTORTIONS
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
              Projects that exist in the space between possible and impossible
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={project.title} className="group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-br from-gray-950 to-black rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-700 hover:transform hover:scale-105 hover:-rotate-1 relative">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                        <ExternalLink size={32} className="text-white animate-pulse" />
                      </div>
                    </div>
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.accent} rounded-full text-black text-xs font-black`}>
                      LIVE
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed font-light">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={tech} 
                          className={`px-4 py-2 bg-gradient-to-r ${project.accent} text-black text-sm font-black rounded-full transform hover:scale-110 transition-transform duration-300`}
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
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
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-emerald-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
              SUMMON
              <br />
              THE MAGIC
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
              Ready to transcend the boundaries of digital reality?
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-gradient-to-r from-gray-950 to-black border border-gray-800 rounded-2xl focus:border-emerald-400 focus:outline-none transition-all duration-500 text-white placeholder-gray-500 group-hover:border-gray-600"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-gradient-to-r from-gray-950 to-black border border-gray-800 rounded-2xl focus:border-pink-400 focus:outline-none transition-all duration-500 text-white placeholder-gray-500 group-hover:border-gray-600"
                  />
                </div>
              </div>
              
              <div className="group">
                <input
                  type="text"
                  placeholder="Project Vision"
                  className="w-full px-6 py-4 bg-gradient-to-r from-gray-950 to-black border border-gray-800 rounded-2xl focus:border-yellow-400 focus:outline-none transition-all duration-500 text-white placeholder-gray-500 group-hover:border-gray-600"
                />
              </div>
              
              <div className="group">
                <textarea
                  placeholder="Describe Your Impossible Dream"
                  rows={6}
                  className="w-full px-6 py-4 bg-gradient-to-r from-gray-950 to-black border border-gray-800 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-500 text-white placeholder-gray-500 resize-none group-hover:border-gray-600"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group relative px-12 py-5 bg-gradient-to-r from-emerald-400 via-pink-400 to-yellow-400 text-black font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-2"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    CAST THE SPELL <Sparkles size={20} className="group-hover:animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 font-light">
            © 2025 Digital Alchemist. <span className="text-transparent bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text">Reality is just the beginning.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;