import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'InvestSmart',
      challenge: 'Validar modelo de negócio em 30 dias com MVP funcional',
      solution: 'Simulador financeiro desenvolvido com Vue.js 2 e Node.js, integrando cálculos complexos e visualização de dados em tempo real',
      conflict: 'Prazo apertado e falta de experiência prévia com cálculos financeiros complexos',
      result: 'MVP entregue em 28 dias, validando R$50k em investimentos potenciais',
      metrics: {
        users: '150+',
        time: '28 dias',
        impact: 'R$50k validados'
      },
      tags: ['Vue.js 2', 'Node.js', 'Financeiro', 'MVP'],
      githubUrl: 'https://github.com/Manoelah20',
      liveUrl: 'https://example.com',
      date: '2024'
    },
    {
      title: 'SkyCast Dashboard',
      challenge: 'Dashboard meteorológico para tomada de decisão logística',
      solution: 'Aplicação em React utilizando API OpenWeather com Dark Mode e alertas personalizados',
      conflict: 'API externa com limitações de requisições e necessidade de cache inteligente',
      result: 'Redução de 40% em decisões logísticas baseadas em clima adverso',
      metrics: {
        users: '500+',
        time: '15 dias',
        impact: '40% redução de custos'
      },
      tags: ['React', 'API OpenWeather', 'CSS Dinâmico', 'Dashboard'],
      githubUrl: 'https://github.com/Manoelah20',
      liveUrl: 'https://example.com',
      date: '2024'
    },
    {
      title: 'SafeShield Mobile',
      challenge: 'Solução mobile para gestão de senhas corporativas',
      solution: 'App mobile com React Native e Expo focado em segurança e usabilidade',
      conflict: 'Requisitos de segurança corporativa vs experiência do usuário',
      result: 'Adoção por 3 equipes com zero incidentes de segurança em 6 meses',
      metrics: {
        users: '3 equipes',
        time: '21 dias',
        impact: '0 incidentes segurança'
      },
      tags: ['React Native', 'Expo', 'Mobile', 'Segurança'],
      githubUrl: 'https://github.com/Manoelah20',
      liveUrl: 'https://example.com',
      date: '2023'
    },
    {
      title: 'Portfólio Profissional',
      challenge: 'Necessidade pessoal de criar portfólio que demonstrasse transição de carreira',
      solution: 'Desenvolvimento com React e Bootstrap 5 focado em storytelling e métricas',
      conflict: 'Equilibrar narrativa pessoal com profissionalismo técnico',
      result: 'Primeiro projeto pago conquistado através do portfólio',
      metrics: {
        users: '1 (eu)',
        time: '10 dias',
        impact: '1 cliente pago'
      },
      tags: ['React', 'Bootstrap 5', 'Storytelling', 'Personal Branding'],
      githubUrl: 'https://github.com/Manoelah20',
      liveUrl: 'https://example.com',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Projetos</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Projetos reais com desafios complexos, decisões sob pressão e resultados mensuráveis
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="card-vercel overflow-hidden hover:border-cyan-500/50 transition-all">
                {/* Header */}
                <div className="p-8 border-b border-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-slate-500 text-sm mb-4">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </div>
                      {/* QA Badge */}
                      <span className="qa-badge mb-4">
                        <CheckCircle size={12} /> QA & Tests Certified
                      </span>
                    </div>
                  </div>
                  
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp size={16} />
                      O Desafio
                    </h4>
                    <p className="text-slate-300">{project.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-2">A Solução</h4>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>

                  {/* Conflict */}
                  <div className="mb-6">
                    <h4 className="text-orange-400 font-semibold mb-2">Conflito Enfrentado</h4>
                    <p className="text-slate-300">{project.conflict}</p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-blue-400 font-semibold mb-2">Resultado Concreto</h4>
                    <p className="text-slate-300">{project.result}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#0f172a]/50 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <Users size={14} />
                        <span className="text-xs">Usuários</span>
                      </div>
                      <p className="text-slate-200 font-semibold">{project.metrics.users}</p>
                    </div>
                    <div className="bg-[#0f172a]/50 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 text-blue-400 mb-1">
                        <Clock size={14} />
                        <span className="text-xs">Timeline</span>
                      </div>
                      <p className="text-slate-200 font-semibold">{project.metrics.time}</p>
                    </div>
                    <div className="bg-[#0f172a]/50 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <TrendingUp size={14} />
                        <span className="text-xs">Impacto</span>
                      </div>
                      <p className="text-slate-200 font-semibold">{project.metrics.impact}</p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group-hover:text-cyan-400"
                    >
                      <Github size={16} />
                      <span className="text-sm">Código</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group-hover:text-blue-400"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
