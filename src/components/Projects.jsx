const PROJECTS = [
  {
    type: 'Academic Project',
    title: 'Hotel Management System',
    desc: 'A complete hotel operations platform covering room booking, guest check-in/check-out, billing, and reservation management with a structured relational database backend.',
    tags: ['Java', 'MySQL', 'HTML5', 'CSS3'],
    gradientStyle: { background: 'linear-gradient(135deg,#2e4a7d,#3b5d96)' },
  },
  {
    type: 'Academic Project',
    title: 'Smart Library Search & Recognition System',
    desc: 'A smart library platform featuring fast catalog indexing, intelligent book search with keyword matching, and an automated recognition and recommendation workflow powered by a NoSQL backend.',
    tags: ['Python', 'MongoDB', 'REST APIs', 'JavaScript'],
    gradientStyle: { background: 'linear-gradient(135deg,#3b5d96,#6d90c7)' },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="shade-b scroll-mt-24 py-16 md:py-20 relative w-full">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-10 fade-in">
          <p className="text-navy-600 dark:text-navy-300 text-sm font-bold uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-slate-900">
            My <span className="navy-grad-text">Projects</span>
          </h2>
          <span className="mt-4 block w-12 h-1 navy-grad-bg rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 fade-in">
          {PROJECTS.map(p => (
            <div
              key={p.title}
              className="card-hover bg-white/95 dark:bg-slate-900/90 rounded-2xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/60 dark:shadow-none overflow-hidden flex flex-col"
            >
              <div className="h-1.5 w-full" style={p.gradientStyle} />
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-xs dark:text-slate-500 text-slate-400 font-medium mb-2">{p.type}</p>
                <h3 className="text-base font-bold dark:text-white text-slate-900 mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed flex-1 mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => <span key={t} className="navy-pill">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
