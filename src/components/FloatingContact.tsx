import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function FloatingContact() {
  return (
    <motion.a
      href="#contato"
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg text-white hover:shadow-cyan-500/50 transition-all"
    >
      <MessageSquare size={24} />
    </motion.a>
  );
}
