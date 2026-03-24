import { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const projectsData = [
  {
    _id: '3',
    title: 'AirStay - Accommodation Platform',
    date: 'Mar 2026',
    description: 'A full-stack accommodation booking platform inspired by Airbnb. Features include property listings, dynamic search filters, robust user authentication, booking management, and a highly responsive modern UI design.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://air-bnb-azure-two.vercel.app/',
    githubLink: 'https://github.com/AlphaGaurav13'
  },
  {
    _id: '1',
    title: 'Jetter - Smart Expense Tracking',
    date: 'Dec 2025 - Jan 2026',
    description: 'Created a full-stack MERN application with JWT authentication, role-based access control. Implemented AI-powered expense analysis using Gemini 2.5 API (LLM) to provide spending insights, anomaly detection. Designed real-time budget alerts via Socket.IO and secure subscription payments using Razorpay/Stripe.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/AlphaGaurav13'
  },
  {
    _id: '2',
    title: 'TechShop (Real-Time E-commerce)',
    date: 'Jun 2025 - Jul 2025',
    description: 'Built a responsive marketplace interface enabling smooth browsing of hundreds of products. Developed product listing, cart & checkout, Wishlist, and user dashboard modules. Implemented secure authentication, password hashing, and optimized SQL caching to support 300+ concurrent users.',
    technologies: ['JavaScript', 'PHP', 'Tailwind CSS', 'SQL', 'MySQL', 'XAMPP'],
    githubLink: 'https://github.com/AlphaGaurav13'
  }
];

export default function Projects() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#030712]">
      {/* 3D Space Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
          </Canvas>
        </Suspense>
      </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Title */}
        <motion.h2 
          style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
          className="absolute top-32 left-10 text-[15vw] font-black text-white/5 whitespace-nowrap pointer-events-none uppercase"
        >
          Project Work
        </motion.h2>

        <motion.div style={{ x }} className="flex gap-16 px-10 md:px-32 relative z-10 w-max">
          {projectsData.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
          {/* Transparent spacer block to push scroll slightly further */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative w-[80vw] md:w-[600px] h-[550px] flex-shrink-0"
    >
      {/* Index Number */}
      <div className="absolute -top-12 -left-8 text-9xl font-black text-cyan-500/10 z-0">
        0{index + 1}
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full h-full bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col p-10">
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
              {project.title}
            </h3>
            <span className="text-sm font-mono text-cyan-500 whitespace-nowrap ml-4 border border-cyan-500/30 px-3 py-1 rounded-full">
              {project.date}
            </span>
          </div>
          
          <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map(tech => (
              <span key={tech} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex gap-6">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-black tracking-[0.2em] text-fuchsia-400 hover:text-white transition-colors uppercase flex items-center gap-2">
              Live Demo ↗
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-black tracking-[0.2em] text-cyan-400 hover:text-white transition-colors uppercase flex items-center gap-2">
            View Source ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}