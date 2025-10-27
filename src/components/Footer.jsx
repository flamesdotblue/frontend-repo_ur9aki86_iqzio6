import { Mail, Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-white text-xl font-semibold">Let’s build something bold</h3>
            <p className="mt-2 text-white/70 text-sm max-w-sm">
              Tell us about your goals and we’ll craft a creative plan that drives measurable results.
            </p>
          </div>
          <div className="md:col-span-2">
            <form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="bg-white/5 border border-white/10 rounded-md px-3 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" />
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-md px-3 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" />
              <button type="submit" className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-semibold rounded-md px-4 py-3 hover:opacity-90 transition shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset]">Request Quote</button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-white/70">
              <a href="mailto:hello@mediatripleseven.com" className="inline-flex items-center gap-2 hover:text-white transition">
                <Mail size={18} /> hello@mediatripleseven.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
                <Youtube size={18} /> YouTube
              </a>
              <a href="https://mediatripleseven.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                <Globe size={18} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Media Triple Seven. All rights reserved.</p>
          <p>Built with passion ✦</p>
        </div>
      </div>
    </footer>
  );
}
