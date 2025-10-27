import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star size={14} className="text-cyan-300" />
            Fintech-grade visuals, built for modern brands
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">Media Triple Seven</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
            A modern creative studio delivering glassmorphic, 3D-forward design and cinematic content across web and social.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-600 text-black px-5 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] hover:opacity-90 transition"
            >
              Explore Services <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition backdrop-blur"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
