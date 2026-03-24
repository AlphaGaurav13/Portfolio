import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["C++", "Java", "C", "Python", "JavaScript", "SQL"],
  "Frameworks / Concepts": ["Express.js", "React.js", "Tailwind CSS", "PHP", "DSA", "OOPS", "HTML", "CSS"],
  "Database": ["MySQL", "MongoDB", "PostgreSQL"],
  "Tools / Platforms": ["GitHub", "Docker", "XAMPP", "Git", "VS Code"],
  "Soft Skills": ["Problem-Solving", "Adaptability", "Critical Thinking", "Communication"]
};

// Icons mapping for categories to add premium feel
const categoryIcons = {
  "Languages": "💻",
  "Frameworks / Concepts": "⚡",
  "Database": "🗄️",
  "Tools / Platforms": "🛠️",
  "Soft Skills": "🧠"
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030712] text-gray-900 dark:text-white pt-32 pb-32 px-6 transition-colors duration-500 relative overflow-hidden">
      
      {/* Ambient Animated Background Blob Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 80, 0], 
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-fuchsia-500/20 dark:bg-fuchsia-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-gray-900 dark:text-white leading-none drop-shadow-sm">
            Technical <span className="font-black bg-gradient-to-r from-fuchsia-600 to-cyan-500 dark:from-fuchsia-500 dark:to-cyan-400 bg-clip-text text-transparent pr-2">Arsenal</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto drop-shadow-sm">
            My curated toolkit for building high-performance, scalable, and visually stunning digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {/* Skills Floating Dashboard */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(skillsData).map(([category, skills], idx) => (
              <motion.div 
                key={category} 
                variants={item}
                className={`p-8 bg-white/70 dark:bg-[#0a0f1e]/80 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2.5rem] shadow-xl dark:shadow-2xl hover:border-fuchsia-500/30 dark:hover:border-cyan-500/30 transition-colors group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{categoryIcons[category]}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {category}
                  </h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 bg-gray-50 dark:bg-[#18181b] border border-black/10 dark:border-white/10 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-gray-900 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-cyan-500 dark:hover:from-cyan-400 dark:hover:to-fuchsia-400 hover:shadow-lg hover:border-transparent transition-all cursor-default select-none"
                    >
                      {skill}
                    </motion.div>
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