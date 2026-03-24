import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

function FloatingShapes() {
  const meshRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, -2]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <MeshDistortMaterial 
          color="#06b6d4" 
          envMapIntensity={1} 
          clearcoat={0.8} 
          clearcoatRoughness={0} 
          metalness={0.9} 
          roughness={0.1}
          distort={0.4}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#fafafa] dark:bg-[#030712] text-gray-900 dark:text-white overflow-hidden transition-colors duration-500">
      
      {/* 3D Background - Hidden in Light mode to prevent broken aesthetic */}
      <div className="absolute inset-0 z-0 hidden dark:block opacity-100">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-6 text-gray-900 dark:text-white leading-[1.05]">
            I'm Gaurav, a <br className="hidden md:block" />
            creative <span className="font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-500 dark:to-purple-500 bg-clip-text text-transparent pr-4">engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mt-6 font-medium">
            A proactive full-stack developer passionate about creating dynamic web experiences. Building scalable, secure, and modern web applications.
          </p>
        </motion.div>

        {/* Socials & Coding Profiles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mt-24"
        >
          <div className="w-full max-w-4xl bg-white dark:bg-[#080b14]/50 p-8 pb-10 sm:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-xl dark:shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Socials</h3>
            
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                {
                  name: 'Codechef',
                  link: 'https://www.codechef.com/users/white_lion13',
                  icon: <img src="https://cdn.simpleicons.org/codechef/5B4638" alt="Codechef" className="w-[30px] h-[30px]" />
                },
                {
                  name: 'Codolio',
                  link: 'https://codolio.com/profile/qQRjCvYu',
                  icon: (
                    <div className="w-[30px] h-[30px] bg-gray-900 dark:bg-black rounded-lg flex items-center justify-center shadow-inner relative overflow-hidden">
                      <span className="text-[#00E676] font-extrabold text-[22px] leading-none tracking-tighter -ml-0.5">C</span>
                    </div>
                  )
                },
                {
                  name: 'LinkedIn',
                  link: 'https://linkedin.com/in/gauravk2005',
                  icon: <svg className="w-[30px] h-[30px] text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                },
                {
                  name: 'X',
                  link: 'https://twitter.com',
                  icon: <img src="https://cdn.simpleicons.org/x/000000" alt="X" className="w-[30px] h-[30px] dark:invert opacity-80 dark:opacity-100" />
                },
                {
                  name: 'Github',
                  link: 'https://github.com/AlphaGaurav13',
                  icon: <img src="https://cdn.simpleicons.org/github/181717" alt="Github" className="w-[30px] h-[30px] dark:invert opacity-80 dark:opacity-100" />
                },
                {
                  name: 'Leetcode',
                  link: 'https://leetcode.com/u/gauravkkr345/',
                  icon: <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="Leetcode" className="w-[30px] h-[30px]" />
                },
                {
                  name: 'CodeForces',
                  link: 'https://codeforces.com/profile/WhiteLion', 
                  icon: <img src="https://cdn.simpleicons.org/codeforces/1F8ACB" alt="CodeForces" className="w-[30px] h-[30px]" />
                }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link !== '#' ? social.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center w-[84px] h-[92px] sm:w-[96px] sm:h-[104px] bg-gray-50 dark:bg-[#18181b] border border-black/5 dark:border-white/5 rounded-[1.25rem] shadow-sm hover:shadow-lg dark:hover:shadow-white/5 hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-700 dark:text-gray-400 w-full text-center truncate px-2">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Achievements grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-none backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-fuchsia-600 dark:text-cyan-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎓</span> Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology - CSE</h4>
                <p className="text-gray-600 dark:text-gray-400">Lovely Professional University, Punjab, India</p>
                <p className="text-fuchsia-600 dark:text-cyan-500 font-mono text-sm mt-1">Since April 2023 • CGPA: 8.55</p>
              </div>
              <div className="h-px w-full bg-black/10 dark:bg-white/10"></div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Intermediate (PCM)</h4>
                <p className="text-gray-600 dark:text-gray-400">Kendriya Vidyalaya No.4 Jalandhar</p>
                <p className="text-gray-500 dark:text-gray-500 font-mono text-sm mt-1">2021 - 2022 • Percentage: 83.2%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-none backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-fuchsia-600 dark:text-cyan-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span> Achievements
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-fuchsia-600 dark:text-cyan-500 mt-1">▹</span>
                <p>Solved <strong className="text-gray-900 dark:text-white">500+ problems</strong> on LeetCode, strengthening skills in Data Structures & Algorithms.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fuchsia-600 dark:text-cyan-500 mt-1">▹</span>
                <p>Recognized on the <strong className="text-gray-900 dark:text-white">Dean's List</strong> for academic excellence, ranking among the top 10% of students.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fuchsia-600 dark:text-cyan-500 mt-1">▹</span>
                <p><strong className="text-gray-900 dark:text-white">5-Star Coder</strong> at HackerRank in C++.</p>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  );
}