import { Link } from 'react-router-dom';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="w-full bg-[#fafafa] dark:bg-[#0a0f1e] text-gray-600 dark:text-gray-400 py-16 px-6 border-t border-black/10 dark:border-white/10 mt-auto transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4 max-w-sm">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter uppercase flex items-center gap-2">
              Gaurav<span className="text-fuchsia-600 dark:text-cyan-500">.</span>
            </h3>
            <p className="font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Full-stack engineer building exceptional digital experiences. Specialized in React, backend architectures, and AI integrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16 md:gap-32 w-full md:w-auto">
            <div className="col-span-1 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 font-heading">Navigation</h4>
              <Link to="/" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit">Home</Link>
              <Link to="/about" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit">About</Link>
              <Link to="/projects" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit">Projects</Link>
              <Link to="/skills" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit">Skills</Link>
              <button onClick={onOpenContact} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left w-fit">Contact</button>
            </div>
            
            <div className="col-span-1 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 font-heading">Socials</h4>
              <a href="https://linkedin.com/in/gauravk2005" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-3 group w-fit">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-fuchsia-600 dark:group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn <span className="text-fuchsia-600 dark:text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </a>
              <a href="https://github.com/AlphaGaurav13" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-3 group w-fit">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-fuchsia-600 dark:group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub <span className="text-fuchsia-600 dark:text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </a>
              <button onClick={onOpenContact} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-3 group w-fit">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-fuchsia-600 dark:group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email <span className="text-fuchsia-600 dark:text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-mono text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Gaurav Kumar. Designed with precision.</p>
          <div className="flex items-center gap-2 text-fuchsia-600 dark:text-cyan-500">
             <div className="w-2 h-2 rounded-full bg-fuchsia-600 dark:bg-cyan-500 animate-pulse"></div>
             <span className="text-sm font-bold uppercase tracking-wider">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}