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
        <div className="mt-4 rounded-xl border border-white/20 bg-white/60 backdrop-blur shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="group inline-flex items-center space-x-2">
              <span className="relative text-xl font-semibold tracking-tight text-gray-900">
                Marcellini
                <span className="absolute -right-3 -top-2 h-2 w-2 rounded-full bg-rose-500/80 group-hover:scale-125 transition" />
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/90 transition"
              >
                <Mail size={16} /> Contact
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-white/80"
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
                className="md:hidden border-t border-white/40"
              >
                <div className="px-4 py-3 space-y-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-white/80"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/90"
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
