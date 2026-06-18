import React, { useState, useEffect } from 'react';
import { Mic, Wind, HeartPulse, ShieldAlert, CheckCircle, MapPin } from 'lucide-react';

export default function App() {
  const [view, setView] = useState('entry'); // 'entry', 'processing', 'action'
  const [breathingText, setBreathingText] = useState('Breathe In...');

  // Handle fake AI Processing delay
  const handleInput = () => {
    setView('processing');
    setTimeout(() => {
      setView('action');
    }, 4000); // 4 seconds of fake loading/translating
  };

  // Breathing Text Logic for Action View
  useEffect(() => {
    if (view === 'action') {
      const interval = setInterval(() => {
        setBreathingText((prev) => (prev === 'Breathe In...' ? 'Breathe Out...' : 'Breathe In...'));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [view]);

  return (
    <div className="min-h-screen text-slate-100 font-sans flex flex-col items-center justify-center p-6 transition-all duration-700">
      
      {/* ---------------- STATE 1: ENTRY (Frictionless Input) ---------------- */}
      {view === 'entry' && (
        <div className="w-full max-w-md flex flex-col items-center space-y-12 animate-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-light text-mint-400 tracking-wide">Aero</h1>
            <p className="text-slate-400">We are here. You are safe.</p>
          </div>

          <button 
            onClick={handleInput}
            className="relative flex items-center justify-center w-40 h-40 rounded-full bg-slate-800 border border-slate-700 shadow-2xl hover:scale-105 transition-transform group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-mint-500/20 animate-pulse-slow"></div>
            <Mic size={48} className="text-mint-400 group-hover:text-mint-300 transition-colors z-10" />
            <span className="absolute -bottom-8 text-sm text-slate-400 whitespace-nowrap">Tap to speak or breathe</span>
          </button>

          <div className="w-full pt-8">
            <p className="text-sm text-center text-slate-500 mb-4 uppercase tracking-widest">Or select how you feel</p>
            <div className="grid grid-cols-3 gap-4">
              <EmojiBtn icon={<HeartPulse size={24}/>} label="Heart Racing" onClick={handleInput} />
              <EmojiBtn icon={<Wind size={24}/>} label="Can't Breathe" onClick={handleInput} />
              <EmojiBtn icon={<ShieldAlert size={24}/>} label="Panicking" onClick={handleInput} />
            </div>
          </div>
        </div>
      )}

      {/* ---------------- STATE 2: PROCESSING (Calming Load) ---------------- */}
      {view === 'processing' && (
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-mint-400 animate-spin"></div>
          <h2 className="text-2xl font-light text-mint-400">Aero is helping you.</h2>
          <p className="text-slate-400 animate-pulse">Just keep breathing...</p>
        </div>
      )}

      {/* ---------------- STATE 3: ACTION (The Dashboard) ---------------- */}
      {view === 'action' && (
        <div className="w-full max-w-lg flex flex-col space-y-6 animate-fade-in">
          
          {/* A. Grounding UI (Breathing) */}
          <div className="flex flex-col items-center justify-center py-8 bg-slate-850 rounded-3xl border border-slate-800 shadow-lg">
            <div className="relative flex items-center justify-center w-32 h-32">
              <div className="absolute w-20 h-20 bg-mint-500/30 rounded-full animate-breathe blur-md"></div>
              <div className="absolute w-24 h-24 bg-mint-500/20 rounded-full animate-breathe blur-sm" style={{animationDelay: '0.5s'}}></div>
              <span className="text-mint-400 font-medium z-10">{breathingText}</span>
            </div>
          </div>

          {/* B. The Silent Pass */}
          <div className="relative bg-emerald-900/20 border-2 border-emerald-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
            <div className="flex items-center space-x-3 mb-4">
              <ShieldAlert className="text-emerald-400" size={28} />
              <h3 className="text-xl font-bold text-emerald-400 tracking-wider">OFFICIAL EMERGENCY PASS</h3>
            </div>
            <p className="text-emerald-100/90 text-lg leading-relaxed">
              This student requires immediate emotional support. 
              <br/>
              <span className="font-semibold text-white">Please allow departure without questioning.</span>
            </p>
          </div>

          {/* C. Auto-Routing Card */}
          <div className="bg-slate-850 rounded-2xl p-5 border border-slate-800 flex items-start space-x-4">
            <div className="bg-slate-800 p-3 rounded-full text-mint-400 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-200">Counselor Ahmed is waiting.</h4>
              <p className="text-sm text-slate-400 mt-1">Room 3B. Your support form has been auto-filled and submitted securely.</p>
              <div className="flex items-center mt-3 text-xs text-mint-400 font-medium">
                <CheckCircle size={14} className="mr-1" /> System Notified
              </div>
            </div>
          </div>

          {/* Reset Button for Demo purposes */}
          <button onClick={() => setView('entry')} className="mt-8 text-slate-500 hover:text-slate-300 text-sm underline text-center">
            Start Over (Demo Reset)
          </button>
        </div>
      )}

    </div>
  );
}

// Helper Component for Emoji Buttons
function EmojiBtn({ icon, label, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-slate-800 border border-slate-700 rounded-2xl hover:bg-slate-700 transition-colors w-full"
    >
      <div className="text-mint-400 mb-2">{icon}</div>
      <span className="text-xs text-slate-300 font-medium text-center">{label}</span>
    </button>
  );
}