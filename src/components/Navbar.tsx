import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

const socialLinks = [
  {
    href: 'https://github.com/Manoelah20',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/manoelaharrison',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:harrisonmanoela@gmail.com',
    label: 'E-mail',
    icon: Mail,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      aria-label="Navegação principal"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-slate-950/30 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Manoela Harrison — voltar ao início"
            className="text-2xl md:text-3xl font-bold text-gradient focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            MH
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-300 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop social links */}
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-slate-400 hover:text-cyan-300 p-2.5 rounded-lg transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={label}
              >
                <Icon size={19} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden text-slate-300 hover:text-cyan-300 p-2 rounded-lg transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden mx-4 mt-2 mb-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="px-4 py-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-slate-300 hover:text-cyan-300 block px-4 py-3 text-base font-medium transition-colors rounded-xl hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 px-4 pt-4 mt-3 border-t border-white/10">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  onClick={closeMenu}
                  className="text-slate-400 hover:text-cyan-300 p-3 rounded-xl transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
