import { motion } from 'framer-motion'
import { Layout, Rocket, Workflow } from 'lucide-react'

const items = [
  {
    icon: Layout,
    title: 'Web & Product',
    desc: 'Websites, apps, and design systems built with rigor and taste.',
  },
  {
    icon: Workflow,
    title: 'Strategy',
    desc: 'Positioning, narrative and structure that supports growth.',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    desc: 'Senior, reliable execution with clean communication.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Expertise</h2>
          <div className="text-sm text-white/60">Berlin — Remote first</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:bg-white/10 transition"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <it.icon />
              </div>
              <div className="text-lg font-medium text-white">{it.title}</div>
              <div className="mt-1 text-sm text-white/70">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
