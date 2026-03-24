import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import ContactModal from './components/ContactModal';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#fafafa] dark:bg-[#030712] text-gray-900 dark:text-white transition-colors duration-500 cursor-none lg:cursor-auto relative">
        <div className="hidden lg:block">
          <CustomCursor />
        </div>

        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1 w-full overflow-x-hidden">
          <AnimatedRoutes />
        </main>

        <Footer onOpenContact={() => setIsContactOpen(true)} />

        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </Router>
  );
}