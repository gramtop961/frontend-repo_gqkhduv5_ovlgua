import React from 'react';

const posts = [
  {
    title: 'Designing a calmer fintech UI with pastels',
    excerpt: 'How soft color systems reduce cognitive load and boost trust in financial products.',
    tag: 'Design',
  },
  {
    title: 'Scaling payments for modern e‑commerce',
    excerpt: 'Lessons from processing millions of transactions with resilience and speed.',
    tag: 'Engineering',
  },
  {
    title: 'Reducing churn with delightful card experiences',
    excerpt: 'Micro-interactions and UX details that keep users engaged and loyal.',
    tag: 'Product',
  },
];

const BlogCard = ({ post, i }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 to-sky-50/40 opacity-0 transition group-hover:opacity-100" />
    <span className="relative inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">{post.tag}</span>
    <h3 className="relative mt-4 text-lg font-semibold text-slate-900">{post.title}</h3>
    <p className="relative mt-2 text-sm text-slate-600">{post.excerpt}</p>
    <a href="#blog" className="relative mt-4 inline-block text-sm font-semibold text-sky-700 hover:text-sky-900">Read more →</a>
  </article>
);

const BlogSection = () => {
  return (
    <section id="blog" className="bg-gradient-to-b from-white to-rose-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 text-slate-600">Insights on design, product, and engineering from our team.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <BlogCard key={i} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
