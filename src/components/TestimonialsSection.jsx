import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'PastelPay simplified our payment stack and made our UI feel premium. Revenue is up and support tickets are down.',
    name: 'Ariane Patel',
    role: 'Founder, Lumi Commerce',
  },
  {
    quote:
      'The card experience is delightful. Our customers actually compliment the checkout now — that never happened before.',
    name: 'Mateo Alvarez',
    role: 'Head of Product, FluxBank',
  },
  {
    quote:
      'We went live in a day. The docs are clear and the tooling feels modern. A breath of fresh air for fintech.',
    name: 'Sofia Nguyen',
    role: 'CTO, Bloom Retail',
  },
];

const TestimonialCard = ({ t }) => (
  <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    <p className="text-slate-700">“{t.quote}”</p>
    <div className="mt-6">
      <p className="font-semibold text-slate-900">{t.name}</p>
      <p className="text-sm text-slate-500">{t.role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-rose-50 to-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Loved by thoughtful teams</h2>
          <p className="mt-3 text-slate-600">What our customers say about building with a calmer financial platform.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
