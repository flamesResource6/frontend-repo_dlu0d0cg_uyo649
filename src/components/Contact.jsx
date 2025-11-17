import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s talk</h2>
          <div className="text-sm text-white/60">Available for select projects</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-white/70">Your name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="jane@company.com" required />
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="A few lines about your project" required />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black hover:shadow-[0_0_0_2px_white]" type="submit">
                Send message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <div className="prose prose-invert max-w-none">
              {sent ? (
                <div className="text-emerald-400">Thanks — I’ll get back to you shortly.</div>
              ) : (
                <>
                  <p className="text-white/80">I partner with founders and teams to design and build websites and products that feel grown‑up and perform.</p>
                  <p className="text-white/80">For new projects, share a few lines on goals, scope, and timeline.</p>
                  <p className="text-white/80">Email: hello@marcellini.de</p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
