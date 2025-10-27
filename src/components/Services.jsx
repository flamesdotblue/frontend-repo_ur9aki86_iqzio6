import { Camera, Play, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Premium product, lifestyle, and brand photography engineered to capture attention and tell your story.',
    perks: ['Studio & on-location', 'Art direction included', 'Color grading'],
  },
  {
    icon: Play,
    title: 'Video Production',
    desc: 'From concept to final cut — commercials, promos, and social-first video that converts.',
    perks: ['Scripting & storyboards', 'Cinematic lighting', 'Motion graphics'],
  },
  {
    icon: Globe,
    title: 'Digital & Web',
    desc: 'Conversion-focused landing pages and content strategy to launch and scale your brand online.',
    perks: ['Web design & dev', 'SEO-ready content', 'Analytics setup'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles size={14} className="text-cyan-300" /> Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Creative built for impact</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            We blend production quality with digital strategy to turn views into value.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, perks }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hover:from-white/10 hover:border-white/20 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-white text-black flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-2">
                {perks.map((p) => (
                  <li key={p} className="text-sm text-white/70 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="work" className="mt-16 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Featured Work</h3>
              <p className="mt-2 text-white/70 text-sm">
                A glimpse into recent campaigns — product reveals, brand films, and interactive experiences for startups and global brands.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1 w-full">
              {['/placeholder1.jpg','/placeholder2.jpg','/placeholder3.jpg','/placeholder4.jpg','/placeholder5.jpg','/placeholder6.jpg'].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-lg bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
