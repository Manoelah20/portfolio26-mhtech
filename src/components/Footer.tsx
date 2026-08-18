import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-10">

          {/* Marca */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold text-gradient mb-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Manoela Harrison — voltar ao início"
            >
              Manoela Harrison
            </a>

            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Front-End Developer com foco em React, Next.js e TypeScript,
              unindo experiência profissional em gestão à tecnologia.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Links rápidos">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navegação
            </h2>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-slate-400 hover:text-cyan-300 transition-colors py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-800/80 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Manoela Harrison.
              Todos os direitos reservados.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors px-2 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Voltar ao topo</span>
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}

