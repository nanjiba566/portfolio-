export default function About() {
  return (
    <section id="about" className="shade-b scroll-mt-24 py-16 md:py-20 relative w-full">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-10 fade-in">
          <p className="text-navy-600 dark:text-navy-300 text-sm font-bold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-slate-900">
            Who I <span className="navy-grad-text">Am</span>
          </h2>
          <span className="mt-4 block w-12 h-1 navy-grad-bg rounded-full mx-auto" />
        </div>

        <div className="card-hover bg-white/95 dark:bg-slate-900/90 rounded-3xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/70 dark:shadow-none overflow-hidden fade-in">

          <div className="p-6 sm:p-8 md:p-9">
            <div className="space-y-4 text-sm sm:text-[15px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl">
              <p>
                Hi! I'm{' '}
                <span className="navy-grad-text font-semibold">Rifa Nanjiba</span>, a passionate learner and aspiring software engineer currently pursuing my{' '}
                <span className="dark:text-slate-200 text-slate-800 font-semibold">BSc in Software Engineering at Daffodil International University (DIU)</span>.
              </p>
              <p>
                My journey in Science has built a strong analytical foundation. I'm deeply interested in{' '}
                <span className="text-navy-600 dark:text-navy-300 font-medium">problem-solving</span>,
                designing{' '}
                <span className="text-navy-600 dark:text-navy-300 font-medium">clean, responsive user interfaces</span>, and
                building{' '}
                <span className="text-navy-600 dark:text-navy-300 font-medium">full-stack applications</span>{' '}
                — from intuitive front-ends to robust back-end APIs.
              </p>
              <p>
                I believe great software sits at the intersection of logic and creativity. I'm here to build exactly that — one meaningful project at a time.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {['Problem Solver', 'UI/UX Enthusiast', 'Full-Stack Learner', 'DIU Student'].map(tag => (
                <span key={tag} className="navy-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div className="border-t dark:border-slate-700/60 border-black/7 px-7 sm:px-9 py-6 dark:bg-slate-800/60 bg-slate-50/60">
            <p className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-slate-400 mb-5">Career Path</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { n: '1', title: 'Foundation', desc: 'Core CS, DSA, OOP & Software Engineering fundamentals.' },
                { n: '2', title: 'Focus',      desc: 'Responsive web interfaces, backend APIs & database systems.' },
                { n: '3', title: 'Goal',       desc: 'Building scalable, impactful real-world software products.' },
              ].map(step => (
                <div key={step.n} className="flex items-start gap-3">
                  <div className="w-8 h-8 navy-grad-bg rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-black">{step.n}</div>
                  <div>
                    <p className="text-xs font-bold dark:text-white text-slate-800 mb-1">{step.title}</p>
                    <p className="text-xs dark:text-slate-300 text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
