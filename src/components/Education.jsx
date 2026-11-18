function TlDot({ style }) {
  return (
    <div
      className="hidden md:flex absolute justify-center"
      style={{ left: '50%', top: 36, transform: 'translateX(-50%)', zIndex: 10 }}
    >
      <div
        className="w-4 h-4 rounded-full tl-dot border-2"
        style={{
          ...style,
          borderColor: 'var(--dot-border, #edf2f9)',
        }}
      />
    </div>
  )
}

const TL_BORDER_STYLE = {
  light: '#edf2f9',
  dark: '#0b1120',
}

export default function Education() {
  return (
    <section id="education" className="shade-a scroll-mt-24 py-16 md:py-20 relative w-full">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-12 fade-in">
          <p className="text-navy-600 dark:text-navy-300 text-sm font-bold uppercase tracking-widest mb-3">Academic Path</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-slate-900">
            Education <span className="navy-grad-text">Journey</span>
          </h2>
          <span className="mt-4 block w-12 h-1 navy-grad-bg rounded-full mx-auto" />
        </div>

        <div className="relative fade-in">

          <div
            className="tl-line hidden md:block absolute w-0.5 opacity-20 rounded-full"
            style={{ left: '50%', top: 0, bottom: 0, transform: 'translateX(-50%)', background: 'linear-gradient(180deg,#2e4a7d,#3b5d96)' }}
          />

          <div className="space-y-8">

            <div className="relative md:grid md:grid-cols-2 md:gap-10">
              <div
                className="hidden md:flex absolute justify-center"
                style={{ left: '50%', top: 36, transform: 'translateX(-50%)', zIndex: 10 }}
              >
                <div className="w-4 h-4 rounded-full tl-dot navy-grad-bg border-2 border-[#edf2f9] dark:border-[#0b1120]" />
              </div>
              <div className="tl-left card-hover bg-white/95 dark:bg-slate-900/90 rounded-3xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/60 dark:shadow-none p-8 sm:p-9">
                <span className="inline-block navy-grad-bg text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Ongoing — 2025–2028</span>
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-3 leading-snug">
                  Bachelor of Science in<br />Software Engineering
                </h3>
                <div className="flex items-center gap-1.5 dark:text-slate-400 text-slate-500 text-sm">
                  <svg className="w-4 h-4 text-navy-500 dark:text-navy-300 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Daffodil International University
                </div>
              </div>
              <div className="hidden md:block" />
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-10">
              <div
                className="hidden md:flex absolute justify-center"
                style={{ left: '50%', top: 36, transform: 'translateX(-50%)', zIndex: 10 }}
              >
                <div className="w-4 h-4 rounded-full tl-dot navy-grad-bg border-2 border-[#edf2f9] dark:border-[#0b1120]" />
              </div>
              <div className="hidden md:block" />
              <div className="tl-right card-hover bg-white/95 dark:bg-slate-900/90 rounded-3xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/60 dark:shadow-none p-8 sm:p-9">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-block dark:bg-white/10 bg-slate-100 dark:text-slate-300 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">Completed 2024</span>
                  <span className="shrink-0 navy-grad-bg text-white text-sm font-black px-3.5 py-1.5 rounded-xl">GPA 4.92</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-3 leading-snug">
                  Higher Secondary<br />Certificate (HSC)
                </h3>
                <div className="flex items-center gap-1.5 dark:text-slate-400 text-slate-500 text-sm mb-3">
                  <svg className="w-4 h-4 text-navy-500 dark:text-navy-300 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Nawab Habibullah Model School and College
                </div>
                <span className="navy-pill">Science Group</span>
              </div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-10">
              <div
                className="hidden md:flex absolute justify-center"
                style={{ left: '50%', top: 36, transform: 'translateX(-50%)', zIndex: 10 }}
              >
                <div
                  className="w-4 h-4 rounded-full tl-dot border-2 border-[#edf2f9] dark:border-[#0b1120]"
                  style={{ background: 'linear-gradient(135deg,#3b5d96,#6d90c7)' }}
                />
              </div>
              <div className="tl-left card-hover bg-white/95 dark:bg-slate-900/90 rounded-3xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/60 dark:shadow-none p-8 sm:p-9">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-block dark:bg-white/10 bg-slate-100 dark:text-slate-300 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">Completed 2022</span>
                  <span className="shrink-0 dark:bg-navy-700/30 bg-navy-50 dark:border-navy-400/30 border-navy-200 border text-navy-500 dark:text-navy-300 text-sm font-black px-3.5 py-1.5 rounded-xl">GPA 4.56</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-3 leading-snug">
                  Secondary School<br />Certificate (SSC)
                </h3>
                <div className="flex items-center gap-1.5 dark:text-slate-400 text-slate-500 text-sm mb-3">
                  <svg className="w-4 h-4 text-navy-400 dark:text-navy-300 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Nawab Habibullah Model School and College
                </div>
                <span className="navy-pill">Science Group</span>
              </div>
              <div className="hidden md:block" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
