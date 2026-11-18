import { useEffect, useState } from 'react'

const DRAFT_KEY = 'rn_draft'
const EMPTY = { name: '', email: '', subject: '', msg: '' }

function GmailIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M6 10c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4v5.6L24 28 6 15.6V10z"/>
      <path fill="#C5221F" d="M6 15.6V38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V15.6L24 28 6 15.6z" opacity=".1"/>
      <path fill="#FBBC04" d="M6 38V15.6L24 28l18-12.4V38c0 2.21-1.79 4-4 4H10c-2.21 0-4-1.79-4-4z" opacity=".2"/>
      <path fill="#34A853" d="M42 10v5.6L24 28 6 15.6V10c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4z" opacity=".1"/>
      <path fill="#EA4335" fillRule="evenodd" d="M6 10.6V38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10.6L24 23 6 10.6z" clipRule="evenodd"/>
      <path fill="#fff" d="M42 10L24 23 6 10h36z"/>
    </svg>
  )
}

function MonoIcon({ children, href, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener"
      aria-label={label}
      className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 text-slate-800 hover:bg-slate-200 border border-transparent dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || '{}')
      setForm(f => ({ ...f, ...d }))
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(form))
  }, [form])

  function field(key) {
    return { value: form[key], onChange: e => setForm(f => ({ ...f, [key]: e.target.value }) ) }
  }

  function showToast(title, body) {
    setToast({ title, body })
    setTimeout(() => setToast(null), 3200)
  }

  function sendMsg(e) {
    e.preventDefault()
    const { name, email, subject, msg } = form
    const sub  = encodeURIComponent(`[Portfolio] ${subject} — from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`)
    window.location.href = `mailto:251-35-566@diu.edu.bd?subject=${sub}&body=${body}`
    showToast('Message Sent!', 'Your email client should open now.')
    setForm(EMPTY)
    localStorage.removeItem(DRAFT_KEY)
  }

  function copyText() {
    const { name, email, subject, msg } = form
    if (!name && !msg) { showToast('Nothing to copy', 'Fill in the form first.'); return }
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`
    navigator.clipboard.writeText(text)
      .then(() => showToast('Copied!', 'Message copied to clipboard.'))
      .catch(()  => showToast('Failed', 'Could not access clipboard.'))
  }

  function clearForm() {
    setForm(EMPTY)
    localStorage.removeItem(DRAFT_KEY)
    showToast('Cleared', 'Form has been reset.')
  }

  const inputCls = 'navy-input w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 dark:text-white text-slate-900 dark:placeholder-slate-500 placeholder-slate-400 text-sm'

  return (
    <section id="contact" className="shade-b scroll-mt-24 py-16 md:py-20 relative w-full">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-10 fade-in">
          <p className="text-navy-600 dark:text-navy-300 text-sm font-bold uppercase tracking-widest mb-3">Let's Connect</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-slate-900">
            Send me a <span className="navy-grad-text">message</span>
          </h2>
          <span className="mt-4 block w-12 h-1 navy-grad-bg rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start fade-in">

          <div className="space-y-3">

            <div className="ci-card bg-white/95 dark:bg-slate-900/90 dark:border-white/8 border-black/7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#22c55e' }}>
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs dark:text-slate-500 text-slate-400 font-semibold mb-1">Phone / WhatsApp</p>
                <p className="text-sm dark:text-white text-slate-900 font-bold mb-2">01818497517</p>
                <div className="flex gap-3">
                  <a href="tel:+8801818497517" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-white hover:opacity-80 transition-opacity" style={{ background: '#22c55e' }}>
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call
                  </a>
                  <a href="https://wa.me/8801818497517" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-white hover:opacity-80 transition-opacity" style={{ background: '#25d366' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="ci-card bg-white/95 dark:bg-slate-900/90 dark:border-white/8 border-black/7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white border border-slate-100 dark:border-slate-700 dark:bg-slate-800">
                <GmailIcon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs dark:text-slate-500 text-slate-400 font-semibold mb-1">Email</p>
                <a href="mailto:251-35-566@diu.edu.bd" className="text-sm text-navy-600 dark:text-navy-300 hover:underline font-bold break-all">
                  251-35-566@diu.edu.bd
                </a>
              </div>
            </div>

            <div className="ci-card bg-white/95 dark:bg-slate-900/90 dark:border-white/8 border-black/7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white border border-slate-100 dark:border-slate-700 dark:bg-slate-800">
                <svg viewBox="0 0 48 48" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C16.27 4 10 10.27 10 18c0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14z" fill="#EA4335"/>
                  <circle cx="24" cy="18" r="6" fill="#ffffff"/>
                </svg>
              </div>
              <div>
                <p className="text-xs dark:text-slate-500 text-slate-400 font-semibold mb-1">Location</p>
                <p className="text-sm dark:text-white text-slate-900 font-bold">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="bg-white/95 dark:bg-slate-900/90 rounded-2xl border dark:border-white/8 border-black/7 p-5">
              <p className="text-xs font-bold uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-4">Follow Me</p>
              <div className="flex flex-wrap gap-2">
                <MonoIcon href="https://github.com/nanjiba566" label="GitHub">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </MonoIcon>
                <MonoIcon href="https://www.facebook.com/raya.saka.69808" label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </MonoIcon>
                <MonoIcon href="https://www.instagram.com/____baby_girl____9_7" label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </MonoIcon>
                <MonoIcon href="mailto:251-35-566@diu.edu.bd" label="Email">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </MonoIcon>
              </div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-slate-900/90 rounded-3xl border dark:border-white/8 border-black/7 shadow-sm shadow-slate-200/60 dark:shadow-none p-7 sm:p-8">
            <form onSubmit={sendMsg} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5">Your Name</label>
                <input type="text" required placeholder="Rifa Nanjiba" className={inputCls} {...field('name')} />
              </div>
              <div>
                <label className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5">Your Email</label>
                <input type="email" required placeholder="you@example.com" className={inputCls} {...field('email')} />
              </div>
              <div>
                <label className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5">Subject</label>
                <input type="text" required placeholder="What's this about?" className={inputCls} {...field('subject')} />
              </div>
              <div>
                <label className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5">Message</label>
                <textarea rows={5} required placeholder="Write your message here..." className={`${inputCls} resize-none`} {...field('msg')} />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <button type="submit" className="btn-navy flex-1 min-w-fit py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Message
                </button>
                <button type="button" onClick={copyText} className="flex-1 min-w-fit py-3 rounded-xl font-semibold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  Copy as text
                </button>
                <button type="button" onClick={clearForm} className="py-3 px-4 rounded-xl font-semibold text-sm dark:bg-white/5 bg-white dark:text-slate-400 text-slate-500 border dark:border-white/8 border-slate-200 dark:hover:bg-white/10 hover:bg-slate-50 transition-colors">
                  Clear
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <div className={`fixed bottom-6 right-5 z-50 transition-all duration-300 ${toast ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border dark:border-white/10 border-black/8 shadow-2xl rounded-2xl px-5 py-3.5">
          <div className="w-7 h-7 rounded-lg navy-grad-bg flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div>
            <p className="font-bold dark:text-white text-slate-900 text-xs">{toast?.title}</p>
            <p className="dark:text-slate-400 text-slate-500 text-xs mt-0.5">{toast?.body}</p>
          </div>
        </div>
      </div>

    </section>
  )
}
