import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 flex min-h-[92vh] items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur-md"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500"></span>
            Minimal WordPress design, engineered for speed
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
          >
            Build a clean, modern WordPress site
            <span className="block text-neutral-500">that feels effortless</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600"
          >
            Launch a crisp, minimalist presence with smooth interactions, optimized performance, and a focus on content. No clutter. No distractions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none"
            >
              Start a project
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/60 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:bg-white"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
