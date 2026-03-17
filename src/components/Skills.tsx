import { motion } from 'framer-motion';
import { Database, Palette, Server, Smartphone, Globe, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette className="text-blue-400" size={24} />,
      skills: ['JavaScript (ES6+)', 'React', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Bootstrap 5']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="text-emerald-400" size={24} />,
      skills: ['React Native', 'Expo']
    },
    {
      title: 'Backend & Base',
      icon: <Server className="text-blue-400" size={24} />,
      skills: ['Node.js', 'PHP', 'C#', 'Python', 'SQL']
    },
    {
      title: 'QA & Ferramentas',
      icon: <CheckCircle className="text-emerald-400" size={24} />,
      skills: ['Git', 'GitHub', 'REST APIs', 'Postman', 'Metodologias Ágeis (Scrum/Kanban)', 'Trello']
    },
    {
      title: 'ERP & Dados',
      icon: <Database className="text-blue-400" size={24} />,
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'SAP (Certificação Udemy)', 'Power BI']
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Competências Técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">Formação Acadêmica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="flex items-center mb-3">
                <Globe className="text-blue-400 mr-3" size={20} />
                <h4 className="text-lg font-semibold text-slate-200">Tecnologia em Sistemas para Internet</h4>
              </div>
              <p className="text-slate-400">Senac EAD | Conclusão prevista: 10/2025</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="flex items-center mb-3">
                <Globe className="text-emerald-400 mr-3" size={20} />
                <h4 className="text-lg font-semibold text-slate-200">Graduação em Nutrição</h4>
              </div>
              <p className="text-slate-400">Universidade Santa Úrsula | Concluído: 08/2001</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
