import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Feather, Shield, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning-fast',
    desc: 'Lean structure, minimal scripts, and best practices for speed.'
  },
  {
    icon: Feather,
    title: 'Refined minimalism',
    desc: 'Clean typography, ample whitespace, and thoughtful layout.'
  },
  {
    icon: Shield,
    title: 'Secure & reliable',
    desc: 'Hardened setup with updates and backups to keep you safe.'
  },
  {
    icon: Gauge,
    title: 'SEO-ready',
    desc: 'Semantic markup and performance optimizations out of the box.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Everything you need, and nothing you don’t
          </motion.h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            A minimalist WordPress stack with tasteful motion and premium feel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
