import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Globe,
  GraduationCap,
  Server,
  Wrench,
  Smartphone,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Front-End',
    description: 'Tecnologias que concentram minha atuação profissional.',
    icon: <Code2 className="text-cyan-400" size={24} />,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'],
    featured: true,
  },
  {
    title: 'UI, UX & Acessibilidade',
    description: 'Construção de interfaces responsivas e inclusivas.',
    icon: <Palette className="text-purple-400" size={24} />,
    skills: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'WCAG / A11Y',
    ],
    featured: true,
  },
  {
    title: 'APIs & Qualidade',
    description: 'Integração de dados e práticas para código confiável.',
    icon: <Server className="text-emerald-400" size={24} />,
    skills: [
      'REST APIs',
      'Axios / Fetch',
      'Jest',
      'React Testing Library',
      'Postman',
    ],
    featured: false,
  },
  {
    title: 'Ferramentas & Workflow',
    description: 'Ferramentas utilizadas no desenvolvimento e colaboração.',
    icon: <Wrench className="text-cyan-400" size={24} />,
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Vercel',
      'Scrum / Kanban',
      'Azure DevOps',
    ],
    featured: false,
  },
  {
    title: 'Tecnologias Complementares',
    description: 'Conhecimentos que ampliam minha atuação.',
    icon: <Smartphone className="text-purple-400" size={24} />,
    skills: [
      'React Native',
      'Expo',
      'Angular',
      'Node.js',
      'SQL',
    ],
    featured: false,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 font-semibold mb-3">
            Stack & competências
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Tecnologias que utilizo
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Meu foco está no desenvolvimento Front-End com React, Next.js e
            TypeScript, complementado por conhecimentos em APIs, qualidade,
            acessibilidade e ferramentas de desenvolvimento.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl bg-slate-800/40 border transition-all ${category.featured
                  ? 'border-cyan-500/30 hover:border-cyan-400/60'
                  : 'border-slate-700/80 hover:border-slate-500'
                }`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-slate-900/70 flex items-center justify-center shrink-0">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {category.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-900/60 text-slate-300 rounded-full text-sm border border-slate-700/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Academic background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 font-semibold mb-2">
              Formação
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              Formação acadêmica
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/80">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <GraduationCap
                    className="text-cyan-400"
                    size={22}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-100">
                    Tecnologia em Sistemas para Internet
                  </h4>

                  <p className="text-slate-400 mt-1">
                    Senac · Concluído em 10/2025
                  </p>
                </div>
              </div>
            </article>

            <article className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/80">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Globe
                    className="text-purple-400"
                    size={22}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-100">
                    Graduação em Nutrição
                  </h4>

                  <p className="text-slate-400 mt-1">
                    Universidade Santa Úrsula · Concluído em 08/2001
                  </p>
                </div>
              </div>
            </article>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}