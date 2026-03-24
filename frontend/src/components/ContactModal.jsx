import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6 pb-0 sm:pb-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "100%", opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-[480px] bg-white dark:bg-[#0c0c0e]/95 backdrop-blur-3xl border border-black/10 dark:border-white/5 rounded-t-[2.5rem] sm:rounded-[2.5rem] p-5 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-black/20 dark:bg-white/10 rounded-full mx-auto mb-5 cursor-grab active:cursor-grabbing"></div>
            
            {/* Social Icons */}
            <div className="flex justify-center items-center gap-6 mb-6">
              <a href="https://linkedin.com/in/gauravk2005" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://github.com/AlphaGaurav13" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
            </div>

            {/* Tab Selector */}
            <div className="flex p-1 bg-black/5 dark:bg-[#18181b]/50 border border-black/5 dark:border-white/5 rounded-xl mb-6">
              <button 
                type="button"
                onClick={() => setActiveTab('connect')}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'connect' ? 'bg-white dark:bg-[#27272a] text-gray-900 dark:text-white shadow-md border border-black/5 dark:border-white/5' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
              >
                 Quick connect
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'form' ? 'bg-white dark:bg-[#27272a] text-gray-900 dark:text-white shadow-md border border-black/5 dark:border-white/5' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
              >
                 Fill a form
              </button>
            </div>

            {/* Tab Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {activeTab === 'form' ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                    onSubmit={(e) => { e.preventDefault(); onClose(); }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-bold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                        <input 
                          type="text" 
                          placeholder="Your name" 
                          required
                          className="w-full bg-gray-50 dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] shadow-inner transition-all hover:border-black/20 dark:hover:border-white/20" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-bold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                        <input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required
                          className="w-full bg-gray-50 dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] shadow-inner transition-all hover:border-black/20 dark:hover:border-white/20" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-[13px] font-bold text-gray-700 dark:text-gray-300">Message</label>
                        <span className="text-[11px] text-gray-500 font-mono">0/1000</span>
                      </div>
                      <textarea 
                        rows="3" 
                        placeholder="What would you like to discuss?" 
                        required
                        className="w-full bg-gray-50 dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] shadow-inner transition-all hover:border-black/20 dark:hover:border-white/20 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/20"
                    >
                      <svg className="w-5 h-5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send message
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="connect"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <a href="mailto:gauravkkr345@gmail.com" className="flex items-center gap-5 p-4 bg-white dark:bg-[#0a0a0c] border border-black/5 dark:border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-inner">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-[#18181b] border border-black/5 dark:border-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 transition-all font-mono shadow-sm">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-500 dark:text-gray-400 dark:group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-sm">Send an email</h4>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">gauravkkr345@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+918789044093" className="flex items-center gap-5 p-4 bg-white dark:bg-[#0a0a0c] border border-black/5 dark:border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-inner">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-[#18181b] border border-black/5 dark:border-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 transition-all font-mono shadow-sm">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-500 dark:text-gray-400 dark:group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-sm">Give me a call</h4>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">+91-8789044093</p>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Availability Pill */}
            <div className="mt-6">
              <div className="flex items-center justify-center gap-2.5 py-3 bg-green-50 dark:bg-[#0a0c0a] border border-green-500/20 dark:border-green-500/30 rounded-xl px-4 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold sm:font-medium text-green-700 dark:text-green-500 tracking-wide">Currently available for new opportunities</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
