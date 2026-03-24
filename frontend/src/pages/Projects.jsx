import { motion } from 'framer-motion';

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
    title: 'TechShop - Real-Time E-commerce',
    date: 'Jun 2025 - Jul 2025',
    description: 'Built a responsive marketplace interface enabling smooth browsing of hundreds of products. Developed product listing, cart & checkout, Wishlist, and user dashboard modules. Implemented secure authentication, password hashing, and optimized SQL caching to support 300+ concurrent users.',
    technologies: ['JavaScript', 'PHP', 'Tailwind CSS', 'SQL', 'MySQL', 'XAMPP'],
    githubLink: 'https://github.com/AlphaGaurav13'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-2xl mb-8">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Featured <span className="font-serif italic bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent pr-2">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of my recent work, experiments, and side projects. Each piece represents a journey of learning and problem-solving.
          </p>
        </motion.div>

        {/* Projects List */}
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
  // Alternate layout (Image left / Image right)
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
    >
      
      {/* Visual / Image Side */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 rounded-[3rem]"></div>
        <div className="relative aspect-video bg-[#0a0f1e] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
           {/* Beautiful Placeholder Image via Placehold.co generating a clean mockup representation */}
           <img 
             src={`https://placehold.co/800x450/030712/a855f7?text=${project.title.split(' - ')[0]}&font=Inter`} 
             alt={project.title} 
             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
           />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-mono text-gray-500">0{index + 1}</span>
          <div className="h-px w-12 bg-white/20"></div>
        </div>

        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          {project.title.split(' - ')[0]} 
          {project.title.split(' - ')[1] && (
            <>
              <span className="text-gray-500 font-light mx-3">~</span>
              <span className="block mt-2 text-[0.65em] opacity-80">{project.title.split(' - ')[1]}</span>
            </>
          )}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map(tech => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 pointer-events-none">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium group"
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
              className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 group ml-auto lg:ml-0 shadow-lg shadow-white/5"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Live Site
              <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}