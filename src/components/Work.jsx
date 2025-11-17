import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Brand Platform',
    desc: 'Identity, UX and website for a German consultancy',
    tag: 'Strategy & Web',
  },
  {
    title: 'SaaS Marketing Site',
    desc: 'Conversion‑focused site with motion and interactions',
    tag: 'Design & Build',
  },
  {
    title: 'Product Design System',
    desc: 'Tokenized system for enterprise apps',
    tag: 'Design Ops',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1">
            More on request <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:bg-white/10 transition"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.18),transparent_45%)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(at_10%_10%,rgba(20,184,166,0.2),transparent,rgba(56,189,248,0.2))]" />
              </div>
              <div className="text-xs uppercase tracking-wide text-white/50">{p.tag}</div>
              <div className="mt-1 text-lg font-medium text-white">{p.title}</div>
              <div className="mt-1 text-sm text-white/70">{p.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
