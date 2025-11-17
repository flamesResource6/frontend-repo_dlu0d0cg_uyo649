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
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Selected work</h2>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
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
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-5 overflow-hidden">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(2,6,23,0.15),transparent_45%)] group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
              <div className="mt-1 text-lg font-medium text-gray-900">{p.title}</div>
              <div className="mt-1 text-sm text-gray-600">{p.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
