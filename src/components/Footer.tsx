import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Manoela Harrison
            </h3>
            <p className="text-slate-400 mb-4">
              Desenvolvedora Full Stack (Foco em Front-end) | QA. Unindo 20 anos de gestão à paixão por tecnologia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Manoelah20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/manoelaharrison"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:harrisonmanoela@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Competências
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 sm:mb-0">
              © 2025 Manoela Harrison. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Voltar ao topo"
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


