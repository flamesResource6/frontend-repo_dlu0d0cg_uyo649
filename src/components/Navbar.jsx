import { useState } from 'react'
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="group inline-flex items-center space-x-2">
              <span className="relative text-xl font-semibold tracking-tight text-white">
                Marcellini
                <span className="absolute -right-3 -top-2 h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition" />
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition ring-1 ring-white/15"
              >
                <Mail size={16} /> Contact
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10"
              >
                <div className="px-4 py-3 space-y-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 ring-1 ring-white/15"
                  >
                    Let’s talk <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
