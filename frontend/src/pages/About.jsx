import { motion } from 'framer-motion';

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
    link: "https://drive.google.com/file/d/1bCfu2RSXEZVhQZAnKosEb1GG04EDmiig/view?usp=drive_link"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1bCfu2RSXEZVhQZAnKosEb1GG04EDmiig/view?usp=drive_link"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Feb 2024",
    link: "https://coursera.org/share/e59761fd30fe2c4f90bdde031fe8fa6a"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030712] text-gray-900 dark:text-white pt-32 pb-32 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {/* Top Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          {/* Left Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-sm mb-4 font-mono">Who I Am</h3>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                About <span className="font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-500 dark:to-purple-500 bg-clip-text text-transparent pr-2">Me</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-xl text-gray-700 dark:text-gray-400 leading-relaxed font-medium">
              <p>
                I am <strong className="text-gray-900 dark:text-white">Gaurav Kumar</strong>, a proactive full-stack developer passionate about creating extraordinary dynamic web experiences. From interactive frontends to robust backend architectures, I thrive on solving complex problems with clean, efficient code.
              </p>
              <p>
                When I'm not immersed in working on applications, I'm exploring new ideas, staying curious, and learning the latest technologies. I believe in waking up each day eager to make a difference!
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] backdrop-blur-md shadow-xl dark:shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 dark:bg-purple-500/10 blur-3xl rounded-full group-hover:bg-fuchsia-500/20 transition-colors"></div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tight">Availability</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed relative z-10">
                I am currently open to full-time roles, internships, and freelance projects. I am always open for opportunities—let's build something amazing together! Reach out via the Contact page or LinkedIn for the fastest response.
              </p>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-fuchsia-500 to-cyan-500 blur-3xl opacity-15 dark:opacity-20 group-hover:opacity-25 dark:group-hover:opacity-40 transition-opacity duration-1000 rounded-full"></div>
            <div className="relative aspect-[4/5] max-w-md mx-auto bg-gray-100 dark:bg-[#0a0f1e] border border-black/5 dark:border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/hero.png" 
                alt="Gaurav Kumar" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-100 dark:opacity-90"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x800/050510/a855f7?text=Gaurav+Kumar&font=Inter';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Certifications Area */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="text-center mb-16">
            <h3 className="text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-sm mb-4 font-mono">Recognition</h3>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
              Certifications & <span className="font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-500 dark:to-purple-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingAndCerts.map((cert, index) => (
              <a 
                key={index}
                href={cert.link !== "#" ? cert.link : undefined}
                target={cert.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`block p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl transition-all duration-300 shadow-sm dark:shadow-none ${cert.link !== "#" ? 'hover:bg-gray-50 dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/20 hover:-translate-y-1 cursor-pointer group hover:shadow-md' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${cert.link !== "#" ? 'group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors' : ''} leading-tight max-w-[85%]`}>
                    {cert.title}
                  </h3>
                  {cert.link !== "#" && (
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">{cert.issuer}</span>
                  <span className="text-gray-500 font-mono tracking-widest uppercase text-xs">{cert.date}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
