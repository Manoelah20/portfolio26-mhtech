import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const CONTACT_EMAIL = 'harrisonmanoela@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/manoelaharrison';
const GITHUB_URL = 'https://github.com/Manoelah20';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject =
      formData.subject || `Contato pelo portfólio — ${formData.name}`;

    const body = [
      `Nome: ${formData.name}`,
      `E-mail: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20"
      aria-labelledby="contact-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 font-semibold mb-3">
            Vamos conversar
          </p>

          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold mb-5"
          >
            Entre em contato
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Estou aberta a oportunidades em desenvolvimento Front-End,
            projetos e conexões profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">
                Vamos conectar
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Se você está buscando uma desenvolvedora Front-End para sua
                equipe, projeto ou oportunidade, ficarei feliz em conversar.
              </p>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/80 hover:border-cyan-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Mail className="text-cyan-400" size={21} />
              </span>

              <span>
                <span className="block text-sm text-slate-500 mb-1">
                  E-mail
                </span>
                <span className="text-slate-200 group-hover:text-cyan-300 transition-colors break-all">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>

            <div>
              <h4 className="font-medium text-slate-200 mb-4">
                Encontre-me também
              </h4>

              <div className="flex gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-slate-800/40 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Linkedin size={21} />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl bg-slate-800/40 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Github size={21} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-800/40 border border-slate-700/80 p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Nome
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400 outline-none transition-all text-slate-200 placeholder-slate-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400 outline-none transition-all text-slate-200 placeholder-slate-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Assunto
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400 outline-none transition-all text-slate-200 placeholder-slate-600"
                  placeholder="Oportunidade Front-End"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400 outline-none transition-all resize-none text-slate-200 placeholder-slate-600"
                  placeholder="Olá, Manoela. Gostaria de conversar sobre..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={19} />
                <span>Enviar por e-mail</span>
              </motion.button>

              <p className="text-xs text-slate-500 text-center leading-relaxed">
                Ao enviar, seu aplicativo de e-mail será aberto com a mensagem
                preenchida.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
