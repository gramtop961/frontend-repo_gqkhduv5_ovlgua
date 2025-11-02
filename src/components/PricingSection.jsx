import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    features: ['Basic analytics', 'Community support', 'Up to 1,000 transactions/mo'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    cadence: 'per month',
    features: ['Advanced insights', 'Priority support', '10,000 transactions/mo', 'Cards & payouts'],
    highlight: true,
  },
  {
    name: 'Business',
    price: '$99',
    cadence: 'per month',
    features: ['All Pro features', 'Dedicated manager', 'Unlimited transactions', 'Custom limits'],
    highlight: false,
  },
];

const PricingCard = ({ tier }) => (
  <div
    className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
      tier.highlight
        ? 'border-sky-200 bg-gradient-to-br from-sky-50 to-rose-50'
        : 'border-slate-200 bg-white'
    }`}
  >
    {tier.highlight && (
      <span className="absolute -top-3 left-6 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white shadow">Popular</span>
    )}
    <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
    <div className="mt-4 flex items-end gap-1">
      <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
      <span className="mb-1 text-sm text-slate-500">{tier.cadence}</span>
    </div>
    <ul className="mt-6 flex-1 space-y-3">
      {tier.features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
          <Check size={16} className="text-sky-600" /> {f}
        </li>
      ))}
    </ul>
    <a
      href="#auth"
      className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm ${
        tier.highlight
          ? 'bg-slate-900 text-white hover:bg-slate-800'
          : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
      }`}
    >
      Choose {tier.name}
    </a>
  </div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Only pay for what you need. Upgrade or cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <PricingCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
