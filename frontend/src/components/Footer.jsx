import { Link } from 'react-router-dom';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="w-full bg-[#fafafa]/80 dark:bg-[#030712]/80 backdrop-blur-3xl border-t border-black/5 dark:border-white/5 pt-20 pb-10 mt-auto transition-colors duration-500 relative z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Bio */}
          <div className="max-w-[280px]">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-6 flex items-center gap-1">
              Gaurav<span className="text-fuchsia-600 dark:text-cyan-500">.</span>
            </h2>
            <p className="text-[14px] font-medium leading-[1.8] text-gray-600 dark:text-gray-400">
              I'm Gaurav - a full-stack developer & problem solver. Thanks for checking out my site!
            </p>
          </div>
          
          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] mb-1 font-mono">General</h4>
              <Link to="/" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">Home</Link>
              <Link to="/about" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">About</Link>
              <Link to="/projects" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">Projects</Link>
              <Link to="/skills" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">Skills</Link>
            </div>
            
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] mb-1 font-mono">Specifics</h4>
              <a href="https://leetcode.com/u/gauravkkr345/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">LeetCode</a>
              <a href="https://codeforces.com/profile/WhiteLion" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">CodeForces</a>
              <a href="https://codolio.com/profile/qQRjCvYu" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">Codolio</a>
              <a href="https://www.codechef.com/users/white_lion13" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors w-fit">CodeChef</a>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] mb-1 font-mono">More</h4>
              <button className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left w-fit cursor-default">Privacy Policy</button>
              <button className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left w-fit cursor-default">Terms & Conditions</button>
              <button onClick={onOpenContact} className="text-[14px] font-medium text-fuchsia-600 dark:text-cyan-400 hover:text-fuchsia-700 dark:hover:text-cyan-300 transition-colors text-left w-fit mt-2">Book a call ↗</button>
            </div>

          </div>
        </div>
        
        {/* Bottom Strip */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[13px] font-medium text-gray-500 dark:text-gray-500">
            <p>&copy; {new Date().getFullYear()} Gaurav Kumar. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://linkedin.com/in/gauravk2005" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/AlphaGaurav13" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors pointer-events-none">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 hidden md:flex pointer-events-none">
        
        <a href="https://drive.google.com/file/d/15aM3IK_T32bgTQynGxGLm9jBr7QQpDOD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 pointer-events-auto cursor-pointer">
          <span className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 px-4 py-2 text-[12px] font-bold tracking-wide bg-black dark:bg-[#18181b] border border-black/10 dark:border-white/10 text-white rounded-full whitespace-nowrap shadow-lg">
            My Resume
          </span>
          <div className="w-12 h-12 bg-white dark:bg-[#18181b] border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </a>

      </div>
    </footer>
  );
}