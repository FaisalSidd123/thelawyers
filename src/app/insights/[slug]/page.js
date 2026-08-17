'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { Calendar, User, Clock, ArrowLeft, MessageSquare, Phone, ShieldCheck, Share2 } from 'lucide-react';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
                href={`https://wa.me/923366050615?text=Hello%2C%20I%20have%20a%20question%20regarding%20the%20article%3A%20${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-600 font-semibold hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask IP Attorney on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* Article Body Content */}
        <section className="py-16 px-4 md:px-8 bg-brand-paper">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Article Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-navy max-w-none text-xs sm:text-sm leading-relaxed text-brand-navy/90 space-y-6">
                
                {/* Parse Markdown-like Headings & Sections */}
                {article.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('# ')) {
                    return null; // Skip main title as rendered in header
                  } else if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="font-serif text-2xl font-semibold text-brand-navy mt-8 mb-4 border-b border-brand-light-gray/60 pb-2">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="font-serif text-lg font-semibold text-brand-navy mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('> ')) {
                    return (
                      <div key={idx} className="bg-brand-cream/60 border-l-4 border-amber-500 p-4 rounded-sm text-xs sm:text-sm text-brand-navy my-6 shadow-xs">
                        {paragraph.replace('> ', '')}
                      </div>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n- ');
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-2 text-xs sm:text-sm text-brand-navy/90 my-4 pl-2">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={idx} className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                })}

              </div>

              {/* In-Article WhatsApp Floating CTA Box */}
              <div className="mt-12 bg-gradient-to-r from-brand-navy to-brand-navy/95 text-brand-paper p-6 md:p-8 rounded-md border border-brand-burgundy/30 shadow-md">
                <h3 className="font-serif text-xl font-normal text-brand-paper mb-2">
                  Need Professional Legal Guidance on This Topic?
                </h3>
                <p className="text-xs text-brand-paper/80 mb-6">
                  Navigating IPO registration, objections, or litigation matters requires experienced Advocates. Get direct advice today.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://wa.me/923366050615?text=Hello%20The%20Lawyers%2C%20I%20need%20assistance%20regarding%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat with IP Team on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+923366050615"
                    className="w-full sm:w-auto bg-brand-burgundy hover:bg-red-800 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct Line</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Contact Card */}
              <div className="bg-brand-cream/30 border border-brand-light-gray p-6 rounded-md shadow-xs sticky top-24">
                <h3 className="font-serif text-lg font-semibold text-brand-navy mb-3 border-b border-brand-light-gray pb-2">
                  🏛️ The Lawyers Practice
                </h3>
                <p className="text-xs text-brand-navy/75 mb-4 leading-relaxed">
                  Full-service legal firm specializing in SECP Company Formations, FBR Tax Returns, PSEB, IPO Trademarks, & Superior Court Litigation.
                </p>
                <div className="space-y-3 text-xs border-t border-brand-light-gray/60 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-burgundy" />
                    <span className="font-medium">+92 336 6050615 / +92 307 3685421</span>
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
