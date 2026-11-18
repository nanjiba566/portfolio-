const ITEMS = [
  'I am a Software Engineer & Problem Solver',
  'BSc in Software Engineering @ DIU',
  'Building Clean & Responsive Web Interfaces',
  'Passionate About Algorithms & Modern Tech',
]

function MarqueeGroup({ prefix }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap pr-12">
      {ITEMS.map((item, i) => (
        <span key={`${prefix}-${i}`} className="inline-flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full navy-dot shrink-0 mx-2" />
          <span className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400">{item}</span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="shade-a scroll-mt-24 relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden w-full">
      <div className="orb w-[420px] h-[420px] -top-28 -left-36" style={{ background: 'rgba(46,74,125,.1)' }} />
      <div className="orb w-72 h-72 bottom-0 -right-20" style={{ background: 'rgba(59,93,150,.07)', animationDelay: '3.5s' }} />

      <div className="max-w-5xl mx-auto px-5 w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[rgba(46,74,125,.08)] border border-[rgba(46,74,125,.18)] text-navy-600 dark:text-navy-300 dark:bg-[rgba(137,168,216,.1)] dark:border-[rgba(137,168,216,.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-600 dark:bg-navy-300 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.07] tracking-tight dark:text-white text-slate-900">
            Hello, I'm<br />
            <span className="navy-grad-text">Rifa Nanjiba</span>
          </h1>

          <div className="marquee-wrapper my-5">
            <div className="marquee-track">
              <MarqueeGroup prefix="a" />
              <MarqueeGroup prefix="b" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="https://github.com/nanjiba566"
              target="_blank"
              rel="noopener"
              className="btn-navy px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View GitHub
            </a>
            <a href="#contact" className="btn-outline-navy px-6 py-3 rounded-xl font-semibold text-sm">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-3xl rotate-6 opacity-25 blur-sm scale-105 -z-10 pointer-events-none"
              style={{ background: 'linear-gradient(135deg,#2e4a7d,#3b5d96)' }}
            />
            <div
              className="absolute rounded-3xl pointer-events-none -z-10"
              style={{ inset: '-8px', transform: 'rotate(-3deg)', border: '2px solid rgba(46,74,125,.22)' }}
            />
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl profile-glow overflow-hidden border-2 dark:border-white/10 border-black/8">
              <img
                src="/profile.png"
                className="w-full h-full object-cover"
                alt="Rifa Nanjiba"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
