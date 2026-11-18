import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home',      label: 'Home',      id: 'home'      },
  { href: '#about',     label: 'About',     id: 'about'     },
  { href: '#skills',    label: 'Skills',    id: 'skills'    },
  { href: '#projects',  label: 'Projects',  id: 'projects'  },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#contact',   label: 'Contact',   id: 'contact'   },
]

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-slate-200/60 dark:shadow-black/30 px-5 flex items-center justify-between gap-4" style={{ height: 58 }}>

          <a href="#home" className="shrink-0 text-2xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Rifa<span className="text-navy-600 dark:text-navy-300">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-0.5 text-[15px] font-medium">
            {LINKS.map(l => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.id)}
                  className={`nav-pill px-3 py-1.5 dark:text-slate-300 text-slate-600 hover:text-navy-600 dark:hover:text-navy-300 transition-colors ${active === l.id ? 'active' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setDark(d => !d)}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center dark:bg-white/10 bg-slate-100 hover:bg-navy-50 dark:hover:bg-navy-700/30 transition-colors"
            >
              {dark ? (
                <svg className="w-4 h-4 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-navy-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                </svg>
              )}
            </button>

            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center dark:bg-white/10 bg-slate-100"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4 dark:text-slate-300 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 border dark:border-white/8 border-black/6 px-5 py-4">
            <ul className="flex flex-col gap-1 text-[15px] font-medium">
              {LINKS.map(l => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={() => { setActive(l.id); setOpen(false) }}
                    className="block px-3 py-2 rounded-lg dark:text-slate-300 text-slate-600 hover:text-navy-600 dark:hover:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-700/20 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
