'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { Calendar, User, Clock, ArrowLeft, MessageSquare, Phone, ShieldCheck, Share2 } from 'lucide-react';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles excluding current
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">

        <Navbar />

        {/* Article Header Banner */}
        <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-gradient-to-b from-brand-paper via-brand-cream/30 to-brand-paper border-b border-brand-light-gray/60">
          <div className="max-w-4xl mx-auto px-4 md:px-8">

            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-burgundy hover:text-brand-navy transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Legal Insights</span>
            </Link>

            <div className="flex items-center gap-3 text-xs text-brand-muted-gray mb-4 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-navy leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-serif italic border-l-2 border-brand-burgundy pl-4 my-4">
              {article.subtitle}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-brand-light-gray/60 text-xs text-brand-muted-gray">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-burgundy" />
                <span className="font-medium text-brand-navy">{article.author}</span>
              </div>
              <a
                href={`https://wa.me/923073685421?text=Hello%2C%20I%20have%20a%20question%20regarding%20the%20article%3A%20${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-600 font-semibold hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* Article Body Content */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-brand-paper">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Main Article Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-navy max-w-none text-brand-navy/90">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => null, // Skip duplicate main title
                    h2: ({ node, children, ...props }) => {
                      const textContent = String(children);
                      if (textContent.startsWith('Q') && textContent.includes(':')) {
                        return (
                          <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-burgundy mt-7 mb-3 flex items-start gap-2 bg-brand-cream/40 p-3 rounded-md border-l-4 border-brand-burgundy" {...props}>
                            <span>{children}</span>
                          </h2>
                        );
                      }
                      return (
                        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-4 border-b border-brand-light-gray/60 pb-2.5 leading-snug tracking-tight" {...props}>
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ node, ...props }) => (
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-brand-navy mt-7 mb-3 leading-snug" {...props} />
                    ),
                    h4: ({ node, ...props }) => (
                      <h4 className="font-sans text-sm sm:text-base font-bold text-brand-navy mt-5 mb-2 leading-snug" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-xs sm:text-sm md:text-base text-brand-navy/85 leading-relaxed mb-4 font-normal" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-bold text-brand-navy" {...props} />
                    ),
                    em: ({ node, ...props }) => (
                      <em className="italic text-brand-navy/90" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="space-y-2.5 my-4 pl-5 text-xs sm:text-sm md:text-base text-brand-navy/85 list-disc leading-relaxed" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="space-y-2.5 my-4 pl-5 text-xs sm:text-sm md:text-base text-brand-navy/85 list-decimal leading-relaxed" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="pl-1" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="bg-gradient-to-r from-brand-cream/80 to-brand-cream/40 border-l-4 border-amber-500 p-4 md:p-5 rounded-r-md text-xs sm:text-sm md:text-base text-brand-navy my-6 font-medium shadow-xs leading-relaxed" {...props} />
                    ),
                    hr: ({ node, ...props }) => (
                      <hr className="my-8 border-brand-light-gray/70" {...props} />
                    ),
                    a: ({ node, href, children, ...props }) => {
                      const isWhatsApp = href?.includes('wa.me') || href?.includes('whatsapp') || href === '/contact' || href?.includes('contact');
                      const targetUrl = isWhatsApp ? 'https://wa.me/923073685421?text=Hello%20The%20Lawyers%2C%20I%20have%20an%20inquiry%20regarding%20legal%20services.' : (href || '#');
                      const isExternal = isWhatsApp || href?.startsWith('http') || href?.startsWith('https');

                      if (isExternal) {
                        return (
                          <a
                            href={targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 text-xs sm:text-sm transition-colors my-1 shadow-2xs"
                            {...props}
                          >
                            <span>{children}</span>
                          </a>
                        );
                      }
                      return (
                        <Link
                          href={targetUrl}
                          className="inline-flex items-center gap-1 text-brand-burgundy font-semibold hover:underline bg-brand-burgundy/5 px-2 py-0.5 rounded border border-brand-burgundy/15 text-xs sm:text-sm transition-colors my-0.5"
                          {...props}
                        >
                          <span>{children}</span>
                        </Link>
                      );
                    },
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-6 rounded-md border border-brand-light-gray shadow-xs">
                        <table className="w-full text-xs sm:text-sm text-left border-collapse" {...props} />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead className="bg-brand-navy text-brand-paper uppercase font-serif text-[11px] tracking-wider" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                      <th className="px-4 py-3.5 bg-brand-navy text-brand-paper [&_*]:text-brand-paper border-b border-brand-paper/20 font-bold text-xs uppercase tracking-wider text-left" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                      <td className="px-4 py-3 border-b border-brand-light-gray/60 text-brand-navy/90 font-medium" {...props} />
                    ),
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>

              {/* In-Article WhatsApp Floating CTA Box */}
              <div className="mt-12 bg-gradient-to-r from-brand-navy to-brand-navy/95 text-brand-paper p-6 md:p-8 rounded-md border border-brand-burgundy/30 shadow-md">
                <h3 className="font-serif text-xl font-normal text-brand-paper mb-2">
                  Need Professional Legal Guidance on This Topic?
                </h3>
                <p className="text-xs text-brand-paper/80 mb-6">
                  Navigating registration, objections, or litigation matters requires experienced Advocates. Get direct advice today.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://wa.me/923073685421?text=Hello%20The%20Lawyers%2C%20I%20need%20assistance%20regarding%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+923073685421"
                    className="w-full sm:w-auto bg-brand-burgundy hover:bg-red-800 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct Line</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="lg:col-span-4 space-y-6 sticky top-24 self-start">

              {/* Contact Card */}
              <div className="bg-brand-cream/30 border border-brand-light-gray p-6 rounded-md shadow-xs">
                <h3 className="font-serif text-lg font-semibold text-brand-navy mb-3 border-b border-brand-light-gray pb-2">
                  🏛️ The Lawyers Practice
                </h3>
                <p className="text-xs text-brand-navy/75 mb-4 leading-relaxed">
                  Full-service legal firm specializing in SECP Company Formations, FBR Tax Returns, PSEB, IPO Trademarks, & Superior Court Litigation.
                </p>
                <div className="space-y-3 text-xs border-t border-brand-light-gray/60 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-burgundy" />
                    <span className="font-medium">+92 307 3685421</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-burgundy" />
                    <span>FBR & SECP Registered</span>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-brand-paper border border-brand-light-gray p-6 rounded-md shadow-xs">
                <h4 className="font-serif text-base font-semibold text-brand-navy mb-4 border-b border-brand-light-gray pb-2">
                  Related Guides
                </h4>
                <div className="space-y-4">
                  {relatedArticles.map((rel, idx) => (
                    <div key={idx} className="border-b border-brand-light-gray/50 pb-3 last:border-0 last:pb-0">
                      <Link
                        href={`/insights/${rel.slug}`}
                        className="text-xs font-serif font-semibold text-brand-navy hover:text-brand-burgundy transition-colors block mb-1 line-clamp-2"
                      >
                        {rel.title}
                      </Link>
                      <span className="text-[11px] text-brand-muted-gray">{rel.readTime}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        <Footer />

      </div>
    </SmoothScroll>
  );
}
