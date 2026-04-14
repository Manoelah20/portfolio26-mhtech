import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 relative overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
      
      {/* Background com gradientes neon vibrantes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-slate-900/50 to-[#0f172a]"></div>
      
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-50"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGR5Ij48ZyBmaWxsPSIjMDBmNWZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC12djRoLTR2Mmg0djRoMlY2aDRWNHptLTZ6bTYgMzR2LTRINGg0SDB2Mmg0djRoMnYtNGg0djJINHp6bTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjR6eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      {/* Orbs decorativos com animação e parallax */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ opacity }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        {/* Foto Profissional com efeito glow neon ousado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="mb-8"
        >
          <div className="relative inline-block animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-70 glow-cyan"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
            <img 
              src="./mhpro.jpeg" 
              alt="Manoela Harrison - Desenvolvedora Full Stack (Foco em Front-end)"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="text-6xl md:text-8xl font-bold text-gradient mb-8 leading-tight neon-text"
        >
          Manoela<br/>Harrison
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
        >
          Da gestão de operações ao código: <span className="gradient-text-cyan font-bold text-2xl">mais de 20 anos de liderança</span> 
          <br />ao <span className="text-gradient font-bold text-2xl">desenvolvimento Full Stack (Foco em Front-end)</span> e QA.
        </motion.p>
        
        {/* Seção de Conflito/Desafio com design ousado */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
          className="glass-card p-10 max-w-5xl mx-auto mb-12 neon-border"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold gradient-text-cyan mb-8 neon-text"
          >
            O Desafio Real
          </motion.h3>
          <p className="text-slate-300 leading-relaxed mb-10 text-xl">
            "Em 2023, enfrentei a decisão mais arriscada da minha carreira: deixar uma posição consolidada 
            em gestão para entrar no mundo tech. Sem mentor formal e com recursos limitados, 
            precisei aplicar 20 anos de experiência em liderança para aprender programação enquanto 
            mantinha a responsabilidade financeira da minha família."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.9, type: "spring" }}
              className="glass-card p-6 neon-border"
            >
              <h4 className="text-cyan-400 font-bold mb-3 text-xl">Transição de Carreira</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Investimento próprio em formação tech enquanto gerenciava responsabilidades familiares e compromissos financeiros</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 1.0, type: "spring" }}
              className="glass-card p-6 neon-border"
            >
              <h4 className="text-purple-400 font-bold mb-3 text-xl">Decisão</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Decisão baseada em minhas habilidades e análise de mercado. Escolhi o Full Stack (Foco em Front-end) com React e metodologias QA para garantir entregas de alta performance.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 1.1, type: "spring" }}
              className="glass-card p-6 neon-border"
            >
              <h4 className="text-pink-400 font-bold mb-3 text-xl">Resultados</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Primeiro projeto pago em 6 meses, validando a transição. Resultados que provem que esforço e consistência geram retorno concreto.</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contatos e CTA com botões ousados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex flex-wrap gap-8 text-slate-300 justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 glass-card px-6 py-4 neon-border"
            >
              <span className="text-cyan-400 text-2xl">📍</span>
              <span className="font-semibold text-lg">Rio de Janeiro, RJ (Remoto)</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 glass-card px-6 py-4 neon-border"
            >
              <span className="text-cyan-400 text-2xl">📧</span>
              <span className="font-semibold text-lg">harrisonmanoela@gmail.com</span>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn-primary inline-flex items-center gap-3"
            >
              <span>Ver Projetos</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/manoelaharrison" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-3"
            >
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
