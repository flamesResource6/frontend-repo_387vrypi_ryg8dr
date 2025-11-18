import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-between rounded-full border border-neutral-200/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md"
        >
          <a href="#" className="text-sm font-medium text-neutral-900">Minimal WP</a>
          <div className="flex items-center gap-2">
            <a href="#features" className="rounded-full px-3 py-1.5 text-sm text-neutral-700 hover:bg-white">Features</a>
            <a href="#contact" className="rounded-full bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-800">Contact</a>
          </div>
        </motion.nav>
      </div>
    </div>
  )
}
