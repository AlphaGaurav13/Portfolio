import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {links.map((link, i) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-colors"
            >
              {/* Active Indicator (Underline/Dot) */}
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Hover Background Pill */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  />
                )}
              </AnimatePresence>

              <span className={`relative z-10 transition-colors duration-300 ${
                isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}>
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}