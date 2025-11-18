import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Contact CTA */}
        <section id="contact" className="relative bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-10 shadow-sm backdrop-blur-md">
              <h3 className="text-2xl font-semibold tracking-tight">Ready to launch something beautiful?</h3>
              <p className="mt-3 max-w-2xl text-neutral-600">Tell us about your WordPress project and we’ll respond with a tailored plan and timeline.</p>
              <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your name" className="w-full rounded-xl border border-neutral-300 bg-white/60 px-4 py-3 text-sm outline-none ring-offset-0 placeholder:text-neutral-400 focus:border-neutral-400" />
                <input type="email" placeholder="Email address" className="w-full rounded-xl border border-neutral-300 bg-white/60 px-4 py-3 text-sm outline-none ring-offset-0 placeholder:text-neutral-400 focus:border-neutral-400" />
                <input type="text" placeholder="Website or brand" className="w-full rounded-xl border border-neutral-300 bg-white/60 px-4 py-3 text-sm outline-none ring-offset-0 placeholder:text-neutral-400 focus:border-neutral-400 sm:col-span-2" />
                <textarea placeholder="Tell us about your project" rows="4" className="w-full rounded-xl border border-neutral-300 bg-white/60 px-4 py-3 text-sm outline-none ring-offset-0 placeholder:text-neutral-400 focus:border-neutral-400 sm:col-span-2"></textarea>
                <div className="sm:col-span-2 mt-2 flex items-center justify-between">
                  <p className="text-xs text-neutral-500">We’ll get back within 1 business day.</p>
                  <button className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
