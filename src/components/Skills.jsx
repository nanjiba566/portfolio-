const SKILLS = [
  {
    title: 'Front-end',
    pills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Flexbox & Grid', 'Tailwind CSS'],
  },
  {
    title: 'Programming',
    pills: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    title: 'Back-end & Data',
    pills: ['Node.js', 'MySQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Workflow',
    pills: ['Git & GitHub', 'VS Code', 'Figma', 'Postman'],
  },
  {
    title: 'Soft Skills',
    desc: 'Effective team collaborator who communicates ideas clearly and confidently. Skilled at presenting technical concepts, writing structured documentation, and asking focused, precise questions when blocked — accelerating both personal and team progress.',
    wide: true,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="shade-a scroll-mt-24 py-16 md:py-20 relative w-full">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-10 fade-in">
          <p className="text-navy-600 dark:text-navy-300 text-sm font-bold uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-slate-900">
            My <span className="navy-grad-text">Skills</span>
          </h2>
          <span className="mt-4 block w-12 h-1 navy-grad-bg rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-in">
          {SKILLS.map(s => (
            <div
              key={s.title}
              className={`card-hover bg-white/95 dark:bg-slate-900/90 rounded-2xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/60 dark:shadow-none p-6${s.wide ? ' sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <p className="text-sm font-bold dark:text-white text-slate-900 mb-4">{s.title}</p>
              {s.pills ? (
                <div className="flex flex-wrap gap-2">
                  {s.pills.map(p => <span key={p} className="navy-pill">{p}</span>)}
                </div>
              ) : (
                <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed">{s.desc}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
