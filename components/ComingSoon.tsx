"use client"
import { useState } from 'react';
import { 
  ArrowRight, 
  PenTool
} from 'lucide-react';

function BlogComingSoon() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) return;
    setEmail('');
    alert('Added to the waitlist!');
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 overflow-hidden">
      
      {/* HUGE BACKGROUND TEXT */}
      {/* This blends by using 'text-transparent' with a very light 'stroke' (text-outline) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
        <h1 className="text-[15vw] font-black uppercase tracking-tighter text-transparent opacity-[0.03] leading-none" 
            style={{ WebkitTextStroke: '2px #000' }}>
          Coming Soon
        </h1>
      </div>

      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center relative z-10">
        <h1 className="text-xl font-bold tracking-tighter">
          Reli<span className="italic font-serif text-purple-600">Assist</span>
        </h1>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-slate-400">
          <span className="cursor-not-allowed">Articles</span>
          <span className="cursor-not-allowed">Newsletter</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Content Side */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-purple-600 font-bold">
              Journal / 01
            </h2>
            <h3 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-slate-900">
              Insights for the <br />
              <span className="text-slate-400 font-serif italic">modern workflow.</span>
            </h3>
            <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
              Thoughtful articles on building support systems and digital products. 
              Currently in the editing room.
            </p>
          </div>

          {/* Minimal Form */}
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-purple-600 transition-colors placeholder:text-slate-300"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-slate-900 font-bold flex items-center gap-2 hover:text-purple-600 transition-all"
              >
                Notify Me <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Visual Side */}
        <div className="relative">
          {/* Card Mockup */}
          <div className="bg-white p-10 rounded-sm border border-slate-100 shadow-2xl shadow-slate-200/60 space-y-6 relative z-10">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-600">
                  <PenTool size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Draft_v.01</span>
                </div>
                <span className="text-[10px] font-mono text-slate-300">2025</span>
             </div>
             
             <div className="space-y-3">
               <div className="h-[2px] w-full bg-slate-100" />
               <div className="h-[2px] w-full bg-slate-100" />
               <div className="h-[2px] w-2/3 bg-slate-100" />
             </div>

             <h4 className="text-2xl font-medium text-slate-800 leading-snug">
               Why "Human-in-the-loop" is the future of automated support.
             </h4>
             
             <div className="flex gap-2 pt-4">
                <div className="h-8 w-8 rounded-full bg-slate-100" />
                <div className="space-y-1">
                  <div className="h-2 w-16 bg-slate-200 rounded-full" />
                  <div className="h-2 w-12 bg-slate-100 rounded-full" />
                </div>
             </div>
          </div>

          {/* Abstract background element */}
          <div className="absolute top-10 right-10 w-full h-full border border-slate-100 rounded-sm -z-10 translate-x-4 translate-y-4"></div>
        </div>

      </main>

      {/* Footer */}
      <footer className="md:fixed bottom-8 left-8 text-slate-400">
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium">
          © 2025 ReliAssist Editorial
        </p>
      </footer>
    </div>
  );
}

export default BlogComingSoon;