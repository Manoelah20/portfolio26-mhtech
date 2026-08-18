import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  X,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface Project {
  title: string;
  challenge: string;
  solution: string;
  conflict: string;
  result: string;
  metrics: {
    users: string;
    time: string;
    impact: string;
  };
  tags: string[];
  date: string;
  githubUrl: string;
  liveUrl: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Invest Simple',
    challenge:
      'Desenvolver uma interface para simulação e visualização de dados financeiros.',
    solution:
      'Aplicação desenvolvida com Vue.js 2 e Node.js, com implementação de cálculos e apresentação dos resultados em uma interface simples e responsiva.',
    conflict:
      'Trabalhar com regras de cálculo e transformar informações financeiras em uma experiência fácil de compreender.',
    result:
      'MVP funcional desenvolvido como projeto prático para aplicar conceitos de Front-End, integração com backend e manipulação de dados.',
    metrics: {
      users: 'Projeto pessoal',
      time: '2024',
      impact: 'MVP funcional',
    },
    tags: ['Vue.js 2', 'Node.js', 'JavaScript', 'MVP'],
date: '2024',
    githubUrl: 'https://github.com/Manoelah20/Invest-Simple',
    liveUrl: 'https://invest-simple-49q7.vercel.app',
  },

  {
    title: 'SkyCast Dashboard',
    challenge:
      'Criar um dashboard responsivo para consultar e visualizar informações meteorológicas.',
    solution:
      'Aplicação desenvolvida em React com integração à API OpenWeather, exibindo dados climáticos de forma organizada e adaptada a diferentes tamanhos de tela.',
    conflict:
      'Trabalhar com dados externos, estados de carregamento e tratamento de possíveis erros na comunicação com a API.',
    result:
      'Dashboard funcional desenvolvido para praticar integração com APIs REST, componentização, estados assíncronos e construção de interfaces responsivas.',
    metrics: {
      users: 'Projeto pessoal',
      time: '2024',
      impact: 'Dashboard funcional',
    },
    tags: [
      'React',
      'JavaScript',
      'OpenWeather API',
      'CSS',
      'REST API',
    ],
    date: '2024',
    githubUrl: 'https://github.com/Manoelah20/SkyCast',
    liveUrl: 'https://skycastapp-xi.vercel.app',
  },

  {
    title: 'SafeShield Mobile',
    challenge:
      'Desenvolver uma aplicação mobile para praticar autenticação, navegação e gerenciamento de informações.',
    solution:
      'Aplicação mobile desenvolvida com React Native e Expo, com foco em organização da interface, navegação entre telas e experiência do usuário.',
    conflict:
      'Adaptar a experiência de uma aplicação web para dispositivos móveis e organizar diferentes fluxos de navegação.',
    result:
      'Projeto prático utilizado para aprofundar conhecimentos em React Native, Expo, navegação e desenvolvimento mobile.',
    metrics: {
      users: 'Projeto de estudo',
      time: '2023',
      impact: 'Aplicação funcional',
    },
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'React Navigation',
    ],
    date: '2023',
    githubUrl: 'https://github.com/Manoelah20/safeshield-mobile-App',
   liveUrl: 'https://safeshield-mobile-app.vercel.app/',
  },

  {
    title: 'FinderBox',
    challenge:
      'Criar uma interface de busca e comparação de produtos com navegação simples e filtros eficientes.',
    solution:
      'Aplicação web desenvolvida com React e Tailwind CSS, com componentes reutilizáveis, busca de produtos, filtros e integração com dados externos.',
    conflict:
      'Organizar diferentes estados da interface e manter uma experiência de navegação clara enquanto novas funcionalidades eram adicionadas.',
    result:
      'Projeto desenvolvido para praticar componentização, gerenciamento de estado, consumo de APIs e construção de interfaces responsivas.',
    metrics: {
      users: 'Projeto pessoal',
      time: '2025',
      impact: 'Aplicação funcional',
    },
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
    ],
    date: '2025',
    githubUrl: 'https://github.com/Manoelah20/FinderBox',
    liveUrl: 'https://finder-box.vercel.app',
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
    >
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-gradient mb-4"
          >
            Projetos
          </motion.h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Projetos práticos desenvolvidos para aplicar conhecimentos de
            Front-End, explorar novas tecnologias e resolver problemas reais
            de interface e experiência do usuário.
          </p>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Github size={20} />
          <span className="text-sm">GitHub</span>
        </div>
      </div>

      {/* Projetos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            className="h-full"
          >
            <SpotlightCard className="card-vercel overflow-hidden h-full">
              <div className="p-5 sm:p-8">
                {/* Título */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>

                  <span className="qa-badge inline-flex items-center gap-1">
                    <CheckCircle size={12} />
                    QA & Tests Certified
                  </span>
                </div>

                {/* Desafio */}
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp size={16} />
                    O Desafio
                  </h4>

                  <p className="text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solução */}
                <div className="mb-6">
                  <h4 className="text-blue-400 font-semibold mb-2">
                    A Solução
                  </h4>

                  <p className="text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Conflito */}
                <div className="mb-6">
                  <h4 className="text-purple-400 font-semibold mb-2">
                    Conflito Enfrentado
                  </h4>

                  <p className="text-slate-300 leading-relaxed">
                    {project.conflict}
                  </p>
                </div>

                {/* Resultado */}
                <div className="mb-6">
                  <h4 className="text-emerald-400 font-semibold mb-2">
                    Resultado Concreto
                  </h4>

                  <p className="text-slate-300 leading-relaxed">
                    {project.result}
                  </p>
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="card-vercel p-3">
                    <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <Users size={14} />
                      <span className="text-xs">Usuários</span>
                    </div>

                    <p className="text-slate-200 font-semibold text-sm">
                      {project.metrics.users}
                    </p>
                  </div>

                  <div className="card-vercel p-3">
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <Clock size={14} />
                      <span className="text-xs">Timeline</span>
                    </div>

                    <p className="text-slate-200 font-semibold text-sm">
                      {project.metrics.time}
                    </p>
                  </div>

                  <div className="card-vercel p-3">
                    <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <TrendingUp size={14} />
                      <span className="text-xs">Impacto</span>
                    </div>

                    <p className="text-slate-200 font-semibold text-sm">
                      {project.metrics.impact}
                    </p>
                  </div>
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
<a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
>
  <ExternalLink size={16} />
  <span className="text-sm">Demo</span>
</a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
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
              onClick={(event) => event.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar imagem"
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
              >
                <X size={32} />
              </button>

              <img
                src={selectedImage}
                alt="Demo do projeto"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

