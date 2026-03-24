import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-32 z-10 w-full overflow-hidden">
      
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="bg-[#030712]/80 backdrop-blur-2xl pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Big CTA Section */}
          <div className="mb-24 md:flex items-end justify-between border-b border-white/5 pb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-none font-heading bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent mb-8 md:mb-0"
            >
              Let's Talk
            </motion.h2>

            <motion.a 
              href="mailto:gauravkkr345@gmail.com"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative group-hover:text-white transition-colors duration-300">Start a Project</span>
            </motion.a>
          </div>

          {/* Nav & Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-3xl font-black text-white tracking-tighter font-heading mb-4">
                GAURAV<span className="text-cyan-500">.</span>
              </h3>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                Full-stack engineer building exceptional digital experiences. Specialized in React, backend architectures, and AI integrations.
              </p>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 font-heading">Navigation</h4>
              <Link to="/" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors w-fit">Home</Link>
              <Link to="/projects" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors w-fit">Projects</Link>
              <Link to="/skills" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors w-fit">Skills</Link>
              <Link to="/contact" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors w-fit">Contact</Link>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 font-heading">Socials</h4>
              <a href="https://linkedin.com/in/gauravk2005" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit">
                LinkedIn <span className="text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </a>
              <a href="https://github.com/AlphaGaurav13" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit">
                GitHub <span className="text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </a>
              <a href="mailto:gauravkkr345@gmail.com" className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit">
                Email <span className="text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-gray-500">
              &copy; {new Date().getFullYear()} Gaurav Kumar. Designed with precision.
            </p>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-500 uppercase tracking-widest">Available for hire</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}