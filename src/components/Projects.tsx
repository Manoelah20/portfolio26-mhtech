import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, TrendingUp, Users, Clock, CheckCircle, X } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projects = [
    {
      title: 'Invest Simple',
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
      liveUrl: 'https://invest-simple-49q7.vercel.app/',
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
      liveUrl: 'https://skycastapp-xi.vercel.app/',
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
      title: 'FinderBox',
      challenge: 'Criar plataforma de busca e comparação de produtos com interface intuitiva',
      solution: 'Aplicação web com React e TailwindCSS, integrando API de produtos e filtros avançados',
      conflict: 'Balancear performance com grande volume de dados e funcionalidades complexas',
      result: 'Plataforma funcional com 100+ produtos indexados e busca em tempo real',
      metrics: {
        users: '200+',
        time: '30 dias',
        impact: '100+ produtos'
      },
      tags: ['React', 'TailwindCSS', 'API', 'Search'],
      githubUrl: 'https://github.com/Manoelah20',
      liveUrl: 'https://finder-box.vercel.app/',
      date: '2025'
    },
    {
      title: 'Meu Cão no Divã',
      challenge: 'Criar aplicativo completo para gestão e cuidados de pets',
      solution: 'App mobile com React Native para controle de vacinas, alimentação e consultas veterinárias',
      conflict: 'Integração de múltiplas funcionalidades em interface simples e intuitiva',
      result: 'Aplicativo funcional com 500+ downloads e avaliações positivas',
      metrics: {
        users: '500+',
        time: '45 dias',
        impact: '4.8★ avaliações'
      },
      tags: ['React Native', 'Mobile', 'Pets', 'Gestão'],
      githubUrl: 'https://github.com/Manoelah20',
      liveUrl: 'https://example.com',
      date: '2024',
      image: '/caonodiva.png'
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gradient mb-4"
            >
              Projetos
            </motion.h2>
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
              className="group h-full"
            >
              <SpotlightCard className="card-vercel overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className="p-8 border-b border-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-200 group-hover:text-gradient transition-all mb-2">
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
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp size={16} />
                      O Desafio
                    </h4>
                    <p className="text-slate-300">{project.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-blue-400 font-semibold mb-2">A Solução</h4>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>

                  {/* Conflict */}
                  <div className="mb-6">
                    <h4 className="text-purple-400 font-semibold mb-2">Conflito Enfrentado</h4>
                    <p className="text-slate-300">{project.conflict}</p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-emerald-400 font-semibold mb-2">Resultado Concreto</h4>
                    <p className="text-slate-300">{project.result}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card-vercel p-3"
                    >
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <Users size={14} />
                        <span className="text-xs">Usuários</span>
                      </div>
                      <p className="text-slate-200 font-semibold">{project.metrics.users}</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card-vercel p-3"
                    >
                      <div className="flex items-center gap-2 text-blue-400 mb-1">
                        <Clock size={14} />
                        <span className="text-xs">Timeline</span>
                      </div>
                      <p className="text-slate-200 font-semibold">{project.metrics.time}</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card-vercel p-3"
                    >
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <TrendingUp size={14} />
                        <span className="text-xs">Impacto</span>
                      </div>
                      <p className="text-slate-200 font-semibold">{project.metrics.impact}</p>
                    </motion.div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
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
                    {project.image ? (
                      <button
                        onClick={() => setSelectedImage(project.image!)}
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group-hover:text-blue-400"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group-hover:text-blue-400"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar imagem"
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Demo"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
