import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-800">
      <HeroSection />
      <PricingSection />
      <BlogSection />
      <TestimonialsSection />

      {/* Connect with us */}
      <section id="connect" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Connect with us</h3>
            <p className="mt-2 text-slate-600">Questions, partnerships, or media? We’d love to hear from you.</p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <a aria-label="Twitter" href="#" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:bg-sky-50 hover:text-sky-700">
                <Twitter size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:bg-sky-50 hover:text-sky-700">
                <Linkedin size={18} />
              </a>
              <a aria-label="GitHub" href="#" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:bg-sky-50 hover:text-sky-700">
                <Github size={18} />
              </a>
              <a aria-label="Email" href="mailto:hello@pastelpay.app" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:bg-sky-50 hover:text-sky-700">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Lightweight contact form (no backend) */}
          <form id="auth" className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-gradient-to-br from-rose-50/60 to-sky-50/60 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 focus:ring" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" placeholder="Tell us a little about your needs" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 focus:ring" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-slate-500">We’ll get back within one business day.</p>
              <button type="button" className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">Send</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-sky-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#connect" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
