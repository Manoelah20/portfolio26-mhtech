import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 80]);
    const y2 = useTransform(scrollY, [0, 500], [0, -80]);
    const opacity = useTransform(scrollY, [0, 900], [1, 0]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-slate-900 to-[#0f172a]" />
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <div className="noise-overlay" />

            <motion.div
                style={{ y: y1 }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <motion.div
                style={{ y: y2 }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ opacity }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-7"
                >
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 via-purple-500/40 to-pink-500/40 rounded-full blur-2xl" aria-hidden="true" />
                        <img
                            src="./mhpro.jpeg"
                            alt="Manoela Harrison — Front-End Developer"
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm md:text-base uppercase tracking-[0.25em] text-cyan-300 font-semibold mb-4"
                >
                    React · Next.js · TypeScript
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold text-gradient mb-4 leading-tight neon-text"
                >
                    Front-End Developer
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-200 font-medium mb-6"
                >
                    Manoela Harrison
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
                >
                    Desenvolvo interfaces modernas, responsivas e acessíveis, com foco em
                    experiência do usuário, qualidade de código e integração com APIs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                    aria-label="Principais competências"
                >
                    {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Acessibilidade', 'REST APIs'].map((skill) => (
                        <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm md:text-base">
                            {skill}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-wrap gap-4 justify-center mb-8"
                >
                    <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} href="#projects" className="btn-primary inline-flex items-center gap-3">
                        Ver Projetos
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} href="https://linkedin.com/in/manoelaharrison" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-3">
                        LinkedIn
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} href="https://github.com/Manoelah20" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-3">
                        GitHub
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-slate-400"
                >
                    <span>Rio de Janeiro, RJ</span>
                    <span className="hidden md:inline" aria-hidden="true">·</span>
                    <span>Remoto</span>
                    <span className="hidden md:inline" aria-hidden="true">·</span>
                    <a href="mailto:harrisonmanoela@gmail.com" className="hover:text-cyan-300 transition-colors">
                        harrisonmanoela@gmail.com
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}