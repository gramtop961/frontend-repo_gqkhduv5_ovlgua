import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-sky-50 to-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-6 pb-20 sm:pt-10 md:pt-12 lg:pt-14">
        {/* Top nav */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-200 to-sky-200 text-sky-700">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">PastelPay</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#auth" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#get-started" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Get started</a>
          </div>
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="bg-gradient-to-br from-slate-900 via-sky-700 to-rose-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              Elegant finances for modern internet businesses
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              The cleanest way to accept payments, manage cards, and grow revenue.
              Built with care, crafted in soft pastels. Beautiful. Minimal. Powerful.
            </p>
          </div>
          <div id="get-started" className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-400 to-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Start free trial
            </a>
            <a
              href="#auth"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-md transition hover:bg-white"
            >
              Sign in to your account
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">No credit card required — cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
