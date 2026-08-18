import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  BookOpen,
  Users,
  Target,
  Code2,
} from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Foco no usuário',
    text: 'Transformo necessidades de negócio em interfaces claras, acessíveis e eficientes.',
    color: 'emerald',
  },
  {
    icon: Code2,
    title: 'Front-End',
    text: 'Atuo principalmente com React, Next.js, TypeScript e JavaScript.',
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Experiência profissional',
    text: 'Minha trajetória em gestão fortalece comunicação, organização e resolução de problemas.',
    color: 'purple',
  },
];

const professionalHighlights = [
  {
    value: '20+',
    title: 'Anos de experiência profissional',
    description: 'Gestão, operações, atendimento e desenvolvimento de pessoas',
  },
  {
    value: '2+',
    title: 'Anos em desenvolvimento',
    description: 'Foco crescente em Front-End e engenharia de software',
  },
  {
    value: '15+',
    title: 'Projetos concluídos',
    description: 'De MVPs a aplicações e sistemas para diferentes necessidades',
  },
];

const viewportConfig = {
  once: true,
  amount: 0.15,
};

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      {/* Main animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={viewportConfig}
      >
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 font-semibold mb-3">
            Sobre mim
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Experiência que vai além do código
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Uma trajetória construída entre gestão, resolução de problemas e
            desenvolvimento de software, hoje direcionada para Front-End.
          </p>
        </div>

        {/* Main story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={viewportConfig}
          className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/80 rounded-3xl p-8 md:p-12 mb-14"
        >
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 items-start">
            {/* Story */}
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <Heart className="text-cyan-400" size={26} />
                Minha trajetória
              </h3>

              <div className="space-y-5 text-slate-300 leading-relaxed">
                <p>
                  Sou{' '}
                  <strong className="text-slate-100">
                    Front-End Developer
                  </strong>{' '}
                  com foco em React, Next.js e TypeScript, criando interfaces
                  responsivas, acessíveis e centradas na experiência do usuário.
                </p>

                <p>
                  Minha trajetória profissional anterior em gestão e operações
                  trouxe uma perspectiva que hoje aplico ao desenvolvimento:
                  organização, comunicação, visão de negócio e resolução de
                  problemas.
                </p>

                <p>
                  Em 2023, iniciei minha transição para tecnologia por meio da
                  graduação em Sistemas para Internet e de uma rotina contínua
                  de estudos e projetos práticos. Desde então, venho consolidando
                  minha atuação profissional em desenvolvimento de software.
                </p>

                <p>
                  Hoje direciono minha evolução técnica para arquitetura de
                  interfaces, acessibilidade, qualidade de código, testes e
                  integração com APIs, buscando construir produtos que sejam
                  úteis tanto para o negócio quanto para as pessoas que os
                  utilizam.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, text, color }) => (
                <div
                  key={title}
                  className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/80 hover:border-slate-500 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${
                        color === 'emerald'
                          ? 'bg-emerald-500/10'
                          : color === 'purple'
                            ? 'bg-purple-500/10'
                            : 'bg-cyan-500/10'
                      }`}
                    >
                      <Icon
                        size={22}
                        className={
                          color === 'emerald'
                            ? 'text-emerald-400'
                            : color === 'purple'
                              ? 'text-purple-400'
                              : 'text-cyan-400'
                        }
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-100 mb-1">
                        {title}
                      </h4>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={viewportConfig}
          className="mb-14"
        >
          <div className="grid md:grid-cols-3 gap-5">
            {professionalHighlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/80 text-center"
              >
                <div
                  className={`text-4xl font-bold mb-2 ${
                    index === 1 ? 'text-purple-400' : 'text-cyan-400'
                  }`}
                >
                  {item.value}
                </div>

                <p className="text-slate-200 font-medium">
                  {item.title}
                </p>

                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outside the code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={viewportConfig}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-3">
              Fora do código
            </h3>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Aprendizado contínuo e conexão com a comunidade fazem parte da
              forma como desenvolvo minha carreira.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="text-center bg-slate-900/40 p-6 rounded-2xl border border-slate-700/70">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-cyan-400" size={28} />
              </div>

              <h4 className="text-lg font-semibold text-slate-100 mb-2">
                Aprendizagem contínua
              </h4>

              <p className="text-slate-400 leading-relaxed">
                Estudo novas ferramentas, boas práticas e conceitos de
                engenharia de software por meio de cursos, projetos e
                documentação técnica.
              </p>
            </div>

            <div className="text-center bg-slate-900/40 p-6 rounded-2xl border border-slate-700/70">
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-400" size={28} />
              </div>

              <h4 className="text-lg font-semibold text-slate-100 mb-2">
                Comunidade e troca
              </h4>

              <p className="text-slate-400 leading-relaxed">
                Participo de comunidades e eventos de tecnologia, compartilho
                aprendizados e valorizo ambientes de colaboração e troca de
                experiências.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/70">
            <MapPin className="text-cyan-400 shrink-0" size={20} />

            <div>
              <p className="text-slate-200 font-medium">
                Localização
              </p>

              <p className="text-slate-400 text-sm">
                Rio de Janeiro, RJ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/70">
            <Briefcase className="text-emerald-400 shrink-0" size={20} />

            <div>
              <p className="text-slate-200 font-medium">
                Posicionamento
              </p>

              <p className="text-slate-400 text-sm">
                Front-End Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/70">
            <GraduationCap
              className="text-purple-400 shrink-0"
              size={20}
            />

            <div>
              <p className="text-slate-200 font-medium">
                Formação
              </p>

              <p className="text-slate-400 text-sm">
                Sistemas para Internet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/70">
            <User className="text-cyan-400 shrink-0" size={20} />

            <div>
              <p className="text-slate-200 font-medium">
                Experiência
              </p>

              <p className="text-slate-400 text-sm">
                20+ anos profissionais
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}