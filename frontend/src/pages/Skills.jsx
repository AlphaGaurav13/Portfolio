import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["C++", "Java", "C", "Python", "JavaScript", "SQL"],
  "Frameworks / Concepts": ["Express.js", "React.js", "Tailwind CSS", "PHP", "DSA", "OOPS", "HTML", "CSS"],
  "Database": ["MySQL", "MongoDB", "PostgreSQL"],
  "Tools / Platforms": ["GitHub", "Docker", "XAMPP", "Git", "VS Code"],
  "Soft Skills": ["Problem-Solving", "Adaptability", "Critical Thinking", "Communication"]
};

const trainingAndCerts = [
  {
    title: "Fundamentals of Data Structures And Algorithms in C++",
    issuer: "byteXL",
    date: "Jun 2025 - Jul 2025",
    link: "https://drive.google.com/file/d/1UApLswBAiRegvj3tRRJbl_qJJd4Op_yj/view?usp=drive_link"
  },
  {
    title: "Fundamentals of Virtual Reality",
    issuer: "NPTEL",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1bCfu2RSXEZVhQZAnKosEb1GG04EDmiig/view?usp=drive_link"
  },
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "Aug 2025",
    link: "#"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Aug 2025",
    link: "#"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Feb 2024",
    link: "https://coursera.org/share/e59761fd30fe2c4f90bdde031fe8fa6a"
  }
];

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

          {/* Certifications Area */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="text-center mb-16">
              <h3 className="text-gray-400 uppercase tracking-[0.2em] text-sm mb-4 font-mono">Recognition</h3>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                Certifications & <span className="font-serif italic bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingAndCerts.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.link !== "#" ? cert.link : undefined}
                  target={cert.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`block p-8 bg-white/5 border border-white/10 rounded-3xl transition-all duration-300 ${cert.link !== "#" ? 'hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 cursor-pointer group' : ''}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-xl font-bold text-white ${cert.link !== "#" ? 'group-hover:text-fuchsia-400 transition-colors' : ''} leading-tight max-w-[85%]`}>
                      {cert.title}
                    </h3>
                    {cert.link !== "#" && (
                      <svg className="w-5 h-5 text-gray-500 group-hover:text-fuchsia-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-medium">{cert.issuer}</span>
                    <span className="text-gray-500 font-mono tracking-widest uppercase text-xs">{cert.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}