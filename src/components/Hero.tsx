import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 relative overflow-hidden">
      {/* Background com proporção 16:9 otimizada */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-cyan-900/10 to-blue-900/10"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGR5Ij48ZyBmaWxsPSIjOUNBM0FGIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC12djRoLTR2Mmg0djRoMlY2aDRWNHptLTZ6bTYgMzR2LTRINGg0SDB2Mmg0djRoMnYtNGg0djJINHp6bTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjR6eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        {/* Foto Profissional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50"></div>
            <img 
              src="/public/mhpro.jpeg" 
              alt="Manoela Harrison - Desenvolvedora Frontend"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight">
          Manoela<br/>Harrison
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
        >
          Da gestão de operações ao código: <span className="text-cyan-400 font-semibold">+10 anos de liderança</span> 
          <br />ao<span className="text-blue-400 font-semibold">desenvolvimento frontend</span> e QA.
        </motion.p>
        
        {/* Seção de Conflito/Desafio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-vercel p-8 max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">O Desafio Real</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            "Em 2023, enfrentei a decisão mais arriscada da minha carreira: deixar uma posição consolidada 
            em gestão para entrar no mundo tech. Sem mentor formal e com recursos limitados, 
            precisei aplicar 10 anos de experiência em liderança para aprender programação enquanto 
            mantinha a responsabilidade financeira da minha família."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#0f172a]/50 p-4 rounded-lg border border-white/5">
              <h4 className="text-blue-400 font-semibold mb-2">Transição de Carreira</h4>
              <p className="text-slate-400 text-sm">Investimento próprio em formação tech enquanto gerenciava responsabilidades familiares e compromissos financeiros</p>
            </div>
            <div className="bg-[#0f172a]/50 p-4 rounded-lg border border-white/5">
              <h4 className="text-cyan-400 font-semibold mb-2">Decisão</h4>
              <p className="text-slate-400 text-sm">Decisão baseada em minhas habilidades e análise de mercado. Escolhi o Frontend com React e metodologias QA para garantir entregas de alta performance, usando ferramentas robustas que atendem às demandas dos produtos digitais modernos.</p>
            </div>
            <div className="bg-[#0f172a]/50 p-4 rounded-lg border border-white/5">
              <h4 className="text-blue-400 font-semibold mb-2">Resultados</h4>
              <p className="text-slate-400 text-sm">Primeiro projeto pago em 6 meses, validando a transição. Resultados que provem que esforço e consistência geram retorno concreto.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Contatos e CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap gap-6 text-slate-300 justify-center">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">📍</span>
              <span>Rio de Janeiro, RJ (Remoto)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">📧</span>
              <span>manoela.n20@gmail.com</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Projetos</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4"
            >
              <span className="text-cyan-400">🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
