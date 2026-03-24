import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["C++", "Java", "C", "Python", "JavaScript", "SQL"],
  "Frameworks / Concepts": ["Express.js", "React.js", "Tailwind CSS", "PHP", "DSA", "OOPS", "HTML", "CSS"],
  "Database": ["MySQL", "MongoDB", "PostgreSQL"],
  "Tools / Platforms": ["GitHub", "Docker", "XAMPP", "Git", "VS Code"],
  "Soft Skills": ["Problem-Solving", "Adaptability", "Critical Thinking", "Communication"]
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Technical <span className="text-cyan-500">Arsenal</span>
          </h1>
          <p className="text-gray-400 font-mono">My toolkit for building digital experiences.</p>
        </motion.div>

        <div className="flex flex-col gap-32">
          
          {/* Skills Area */}
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div key={category} variants={item}>
                <h2 className="text-2xl font-bold border-b border-white/10 pb-4 mb-6 text-cyan-400">
                  {category}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all cursor-crosshair whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}