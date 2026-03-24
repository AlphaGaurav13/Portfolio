import { motion } from 'framer-motion';

const projectsData = [
  {
    _id: '4',
    title: 'SpotAndPlay Web Application',
    date: 'Feb 2026',
    description: 'A fully functional sports venue booking platform featuring precise day and time slot filtering, dynamic ground search, and an intuitive real-time reservation flow. Provides comprehensive dashboards for both local players and ground owners.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://playnsports-app.vercel.app/',
    githubLink: 'https://github.com/AlphaGaurav13/SpotNPlay',
    color1: 'bg-emerald-500',
    color2: 'bg-teal-600'
  },
  {
    _id: '3',
    title: 'AirStay - Accommodation Platform',
    date: 'Mar 2026',
    description: 'A full-stack accommodation booking platform inspired by Airbnb. Features include property listings, dynamic search filters, robust user authentication, booking management, and a highly responsive modern UI design.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://air-bnb-azure-two.vercel.app/',
    githubLink: 'https://github.com/AlphaGaurav13',
    color1: 'bg-rose-500',
    color2: 'bg-orange-500'
  },
  {
    _id: '1',
    title: 'Jetter - Smart Expense Tracking',
    date: 'Dec 2025 - Jan 2026',
    description: 'Created a full-stack MERN application with JWT authentication, role-based access control. Implemented AI-powered expense analysis using Gemini 2.5 API (LLM) to provide spending insights, anomaly detection. Designed real-time budget alerts via Socket.IO and secure subscription payments using Razorpay/Stripe.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/AlphaGaurav13',
    color1: 'bg-blue-500',
    color2: 'bg-indigo-600'
  },
  {
    _id: '2',
    title: 'TechShop - Real-Time E-commerce',
    date: 'Jun 2025 - Jul 2025',
    description: 'Built a responsive marketplace interface enabling smooth browsing of hundreds of products. Developed product listing, cart & checkout, Wishlist, and user dashboard modules. Implemented secure authentication, password hashing, and optimized SQL caching to support 300+ concurrent users.',
    technologies: ['JavaScript', 'PHP', 'Tailwind CSS', 'SQL', 'MySQL', 'XAMPP'],
    githubLink: 'https://github.com/AlphaGaurav13',
    color1: 'bg-purple-500',
    color2: 'bg-fuchsia-600'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030712] text-gray-900 dark:text-white pt-32 pb-32 px-6 transition-colors duration-500 relative overflow-hidden">
      
      {/* Ambient Rotating Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] right-[20%] w-[300px] h-[300px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm dark:shadow-none rounded-2xl mb-8">
            <svg className="w-8 h-8 text-fuchsia-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-6">
            Featured <span className="font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-500 dark:to-purple-500 bg-clip-text text-transparent pr-2">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A collection of my recent work, experiments, and side projects. Each piece represents a journey of learning and problem-solving.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group/card`}
    >
      <div className="w-full lg:w-1/2 relative group">
        
        {/* Animated Glow Backdrop */}
        <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 blur-2xl opacity-15 dark:opacity-10 group-hover:opacity-30 dark:group-hover:opacity-30 transition-opacity duration-700 rounded-[3rem]"></div>
        
        {/* Dynamic Animated Canvas Replacing the Static Image */}
        <div className="relative w-full aspect-video bg-gray-900 dark:bg-[#0a0f1e] border border-black/5 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-xl dark:shadow-2xl flex items-center justify-center">
           
           {/* Floating Blobs dedicated to each project's bespoke colors */}
           <motion.div 
             animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className={`absolute -top-[30%] -left-[20%] w-[80%] h-[80%] rounded-full opacity-70 blur-[60px] ${project.color1}`} 
           />
           <motion.div 
             animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
             transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 1 }}
             className={`absolute -bottom-[30%] -right-[20%] w-[80%] h-[80%] rounded-full opacity-60 blur-[70px] ${project.color2}`} 
           />
           
           {/* Frosted Grid Pattern Overlay */}
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50 dark:opacity-30 mix-blend-overlay"></div>
           
           {/* Dark Scrim to keep text legible */}
           <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/0 transition-colors duration-700"></div>

           <h4 className="relative z-10 text-3xl md:text-5xl lg:text-5xl font-black text-white/90 uppercase tracking-tighter mix-blend-overlay filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 px-6 text-center leading-tight">
             {project.title.split(' - ')[0]}
           </h4>

        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-mono font-bold text-gray-400 dark:text-gray-500">0{index + 1}</span>
          <div className="h-px w-12 bg-black/10 dark:bg-white/20"></div>
        </div>

        <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight group-hover/card:text-fuchsia-600 dark:group-hover/card:text-cyan-400 transition-colors duration-500">
          {project.title.split(' - ')[0]} 
          {project.title.split(' - ')[1] && (
            <>
              <span className="text-gray-400 dark:text-gray-500 font-light mx-3 opacity-50">~</span>
              <span className="block mt-2 text-[0.65em] opacity-80 text-gray-600 dark:text-gray-400">{project.title.split(' - ')[1]}</span>
            </>
          )}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map(tech => (
            <span key={tech} className="px-4 py-2 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm dark:shadow-none rounded-full text-sm font-bold text-gray-700 dark:text-gray-300 pointer-events-none">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-bold group"
          >
            <svg className="w-6 h-6 group-hover:-rotate-6 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>

          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 group ml-auto lg:ml-0 shadow-lg dark:shadow-white/5 whitespace-nowrap text-sm"
            >
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Live Site
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}