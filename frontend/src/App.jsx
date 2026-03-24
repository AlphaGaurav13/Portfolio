import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './index.css';

// We wrap the Routes in a separate component to use the useLocation hook for animations
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={<PageWrapper><Home /></PageWrapper>} 
        />
        <Route 
          path="/projects" 
          element={<PageWrapper><Projects /></PageWrapper>} 
        />
        <Route 
          path="/skills" 
          element={<PageWrapper><Skills /></PageWrapper>} 
        />
        <Route 
          path="/contact" 
          element={<PageWrapper><Contact /></PageWrapper>} 
        />
      </Routes>
    </AnimatePresence>
  );
}

// A simple wrapper to handle the entry/exit animation for every page
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
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#030712] cursor-none lg:cursor-auto">
        {/* Only show custom cursor on non-touch devices (typically md/lg up can handle cursor-none, but we enforce cursor-none globally in CSS if needed. Let's rely on component) */}
        <div className="hidden lg:block">
          <CustomCursor />
        </div>

        {/* Navbar sits on top of everything */}
        <Navbar />

        {/* Removed pt-32 pb-20 to let pages handle their own padding seamlessly. */}
        <main className="flex-1 w-full overflow-x-hidden">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}