import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', action: 'contact' },
];

export default function Navbar({ onOpenContact }) {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return true; 
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      <div className="flex flex-wrap items-center gap-1 sm:gap-2 p-2 bg-white/60 dark:bg-[#18181b]/50 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors">
        {links.map((link, i) => {
          const isActive = link.path && location.pathname === link.path;
          
          const content = (
            <>
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-fuchsia-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                  />
                )}
              </AnimatePresence>
              <span className={`relative z-10 transition-colors duration-300 ${
                isActive ? 'text-fuchsia-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}>
                {link.name}
              </span>
            </>
          );

          if (link.action === 'contact') {
            return (
              <button
                key={link.name}
                onClick={onOpenContact}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors"
              >
                {content}
              </button>
            );
          }

          return (
            <Link
              key={link.name}
              to={link.path}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors"
            >
              {content}
            </Link>
          );
        })}
        
        <div className="h-6 w-px bg-black/10 dark:bg-white/20 mx-1"></div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 sm:p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-white transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
}