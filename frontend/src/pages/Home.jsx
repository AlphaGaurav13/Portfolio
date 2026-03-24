import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, Text3D } from '@react-three/drei';
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
    <div className="relative w-full min-h-screen bg-[#030712] text-white overflow-hidden">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
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
          <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-6 text-white leading-[1.05]">
            I'm Gaurav, a <br className="hidden md:block" />
            creative <span className="font-serif italic font-black bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent pr-4">engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mt-6">
            A proactive full-stack developer passionate about creating dynamic web experiences. Building scalable, secure, and modern web applications.
          </p>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎓</span> Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white">Bachelor of Technology - CSE</h4>
                <p className="text-gray-400">Lovely Professional University, Punjab, India</p>
                <p className="text-cyan-500 font-mono text-sm mt-1">Since April 2023 • CGPA: 8.55</p>
              </div>
              <div className="h-px w-full bg-white/10"></div>
              <div>
                <h4 className="text-lg font-bold text-white">Intermediate (PCM)</h4>
                <p className="text-gray-400">Kendriya Vidyalaya No.4 Jalandhar</p>
                <p className="text-gray-500 font-mono text-sm mt-1">2021 - 2022 • Percentage: 83.2%</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span> Achievements
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <p>Solved <strong>500+ problems</strong> on LeetCode, strengthening skills in Data Structures & Algorithms.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <p>Recognized on the <strong>Dean's List</strong> for academic excellence, ranking among the top 10% of students.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <p><strong>5-Star Coder</strong> at HackerRank in C++.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}