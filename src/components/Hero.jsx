import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2xJw0Wk7JmE1F1sQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <Star size={14} className="text-yellow-300" />
            Elevating brands with story-driven media
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
            Media Triple Seven
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
            Full-service creative studio crafting cinematic content, bold design, and digital experiences that convert.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Explore Services <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
