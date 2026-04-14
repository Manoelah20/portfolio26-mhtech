import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Competências' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-gradient">
              MH
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/5 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/Manoelah20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 p-2 rounded-lg" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/manoelaharrison" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 p-2 rounded-lg" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:harrisonmanoela@gmail.com" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 p-2 rounded-lg" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors p-2 hover:bg-white/5 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/5 mx-4 mt-2 rounded-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-4 py-4 pt-6 border-t border-white/5">
              <a 
                href="https://github.com/Manoelah20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 p-3 rounded-xl" 
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/manoelaharrison" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 p-3 rounded-xl" 
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:harrisonmanoela@gmail.com" 
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 p-3 rounded-xl" 
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
