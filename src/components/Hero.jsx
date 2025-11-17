import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(50%_50%_at_50%_20%,black,transparent)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(34,197,94,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-36 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-black tracking-tight text-white"
          >
            <span className="block">Digital experiences</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-[conic-gradient(at_top_left,cyan,emerald,cyan)] drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
              that feel inevitable
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-white/70"
          >
            Strategy, design, and engineering for brands who want a serious presence—elegant, fast, and memorable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-6 py-3 font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_2px_white] transition"
            >
              See work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/15 hover:bg-white/20"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
