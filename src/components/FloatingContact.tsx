import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function FloatingContact() {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Ir para a seção de contato"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg text-white hover:shadow-cyan-500/30 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <MessageSquare size={19} />
      <span className="hidden sm:inline text-sm font-medium">
        Contato
      </span>
    </motion.a>
  );
}
