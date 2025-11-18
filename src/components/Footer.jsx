import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 border-t border-neutral-200">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Minimal WP Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="#features" className="hover:text-neutral-900">Features</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
            <a href="#" className="hover:text-neutral-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
