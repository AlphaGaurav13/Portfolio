import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        clearcoat={1}
      />
    </Sphere>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* 3D Object Background */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-30 md:opacity-60 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
            Let's <span className="text-cyan-500">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 font-mono">
            Open for opportunities. Let's build something amazing together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactLink 
              icon="📧" 
              label="Email" 
              value="gauravkkr345@gmail.com" 
              href="mailto:gauravkkr345@gmail.com" 
            />
            <ContactLink 
              icon="📱" 
              label="Phone" 
              value="+91-8789044093" 
              href="tel:+918789044093" 
            />
            <ContactLink 
              icon="🔗" 
              label="LinkedIn" 
              value="gauravk2005" 
              href="https://linkedin.com/in/gauravk2005" 
            />
            <ContactLink 
              icon="💻" 
              label="GitHub" 
              value="AlphaGaurav13" 
              href="https://github.com/AlphaGaurav13" 
            />
          </div>

          <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Availability</h3>
            <p className="text-gray-400">
              I am currently open to full-time roles, internships, and freelance projects. Reach out via email or LinkedIn for fastest response.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all flex items-center gap-4"
    >
      <div className="text-3xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest">{label}</h4>
        <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors break-all">
          {value}
        </p>
      </div>
    </a>
  );
}