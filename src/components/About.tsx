import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap, Heart, BookOpen, Users, Target, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Minha Jornada</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Da gestão de operações ao código: uma história de transformação, resiliência e aprendizado contínuo
          </p>
        </div>

       {/* Story Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 mb-16"
>
  <div className="grid lg:grid-cols-2 gap-12">
    {/* Coluna da Esquerda: Texto da História */}
    <div>
      <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
        <Heart className="text-blue-400" size={28} />
        O Porquê da Transição
      </h3>
      <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
        <p>
          "Dediquei mais de uma década a gerir equipes e cuidar do bem-estar humano, unindo gestão operacional e nutrição. No entanto, diante de cada gargalo, uma inquietação se tornava inevitável: como eu poderia expandir esse impacto e transformar o cuidado em algo global?
          Hoje, utilizo a tecnologia para construir as pontes que eu antes apenas imaginava. Minha missão é traduzir essa maturidade em código, criando interfaces que não apenas funcionam, mas que escalam soluções e geram valor real para as pessoas."
        </p>
        <p>
          Essa curiosidade me levou ao Desenvolvimento Front-end. Hoje, não gerencio apenas operações; 
          eu construo a interface entre o problema e a solução. Unindo a visão estratégica de quem já liderou times 
          à precisão técnica de tecnologias como <strong>React, Next.js e Mobile</strong>, entrego produtos 
          pensados para o negócio e desenhados para o usuário.
        </p>
        <p>
          Em 2023, investi em uma transição sólida através da graduação em Tecnologia da Informação. 
          Com foco e disciplina, converti anos de experiência em gestão em uma base robusta para 
          criar soluções digitais estruturadas e eficientes.
        </p>
        <p className="text-emerald-400 font-semibold">
          Uno a maturidade de 10+ anos de liderança com a energia e inovação do desenvolvimento frontend para gerar valor real.
        </p>
      </div>
    </div>

    {/* Coluna da Direita: Cards de Destaque */}
    <div className="space-y-6">
      {/* Card: Propósito */}
      <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-600 hover:border-emerald-500/50 transition-colors">
        <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
          <Target size={20} />
          Meu Propósito
        </h4>
        <p className="text-slate-300 text-sm">
          Criar interfaces que resolvam problemas reais de pessoas reais, traduzindo necessidades de negócio em soluções digitais eficazes.
        </p>
      </div>

      {/* Card: Comunidade */}
      <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-600 hover:border-blue-500/50 transition-colors">
        <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
          <Users size={20} />
          Comunidade
        </h4>
        <p className="text-slate-300 text-sm">
          Ativa em ecossistemas tech focados em diversidade, apoiando especialmente mulheres acima de 30 anos em transição de carreira.
        </p>
      </div>

      {/* Card: Inovação */}
      <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-600 hover:border-red-500/50 transition-colors">
        <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
          <Cpu size={20} />
          Inovação e Tecnologia
        </h4>
        <p className="text-slate-300 text-sm">
          Busca contínua pelas melhores práticas e ferramentas modernas para garantir produtos escaláveis e de alta performance.
        </p>
      </div>
    </div>
  </div>
</motion.div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Trajetória Profissional</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-slate-300 font-medium">Anos em Gestão</p>
              <p className="text-slate-400 text-sm mt-2">Liderança de equipes e operações</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2+</div>
              <p className="text-slate-300 font-medium">Anos em Desenvolvimento</p>
              <p className="text-slate-400 text-sm mt-2">Frontend e QA focados em resultados</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <p className="text-slate-300 font-medium">Projetos Concluídos</p>
              <p className="text-slate-400 text-sm mt-2">Desde MVPs até sistemas corporativos</p>
            </div>
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Fora do Código</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Aprendizagem Contínua</h4>
              <p className="text-slate-400">
                Leitura de livros técnicos, cursos online e participação em hackathons e bootcamps
                para manter-me atualizada com as melhores práticas do mercado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-emerald-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Bem-estar e Equilíbrio</h4>
              <p className="text-slate-400">
                Prática de atividade física como Jiu-jitsu, para me sentir mais leve e equilibrada no mínimo 3x por semana, musculação e caminhadas no fim de semana. 
                Tempo de qualidade com a família. Acredito que mente saudável e equilibrada produz melhor código.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Comunidade Tech</h4>
              <p className="text-slate-400">
                Procuro participar de eventos e comunidades locais para mulheres em tech, participo de projetos 
               e compartilho experiências sobre transição de carreira. 
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <MapPin className="text-blue-400" size={20} />
            <div>
              <p className="text-slate-200 font-medium">Localização</p>
              <p className="text-slate-400 text-sm">Rio de Janeiro, RJ</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <Briefcase className="text-emerald-400" size={20} />
            <div>
              <p className="text-slate-200 font-medium">Posição</p>
              <p className="text-slate-400 text-sm">Frontend Júnior | QA Júnior</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <GraduationCap className="text-blue-400" size={20} />
            <div>
              <p className="text-slate-200 font-medium">Formação</p>
              <p className="text-slate-400 text-sm">Sistemas para Internet</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <User className="text-emerald-400" size={20} />
            <div>
              <p className="text-slate-200 font-medium">Experiência</p>
              <p className="text-slate-400 text-sm">12+ anos profissionais</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
