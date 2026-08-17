'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, Clock, ArrowRight, Search, Shield, Tag } from 'lucide-react';
import { articles } from '@/data/articles';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter((art) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;
    return (
      (art.title && art.title.toLowerCase().includes(query)) ||
      (art.subtitle && art.subtitle.toLowerCase().includes(query)) ||
      (art.summary && art.summary.toLowerCase().includes(query)) ||
      (art.content && art.content.toLowerCase().includes(query)) ||
      (art.author && art.author.toLowerCase().includes(query))
    );
  });

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        
        <Navbar />

        {/* Banner Section */}
        <section className="relative pt-20 pb-6 md:pt-28 md:pb-10 bg-gradient-to-b from-brand-paper via-brand-cream/30 to-brand-paper border-b border-brand-light-gray/60">
          <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
            
            <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
              Knowledge Hub & Publications
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-navy mt-3 mb-4">
              Legal Insights & Comprehensive Guides
            </h1>

            <p className="text-sm sm:text-base text-brand-navy/75 max-w-2xl mx-auto leading-relaxed mb-6">
              Authoritative guides on trademark registration, IPO-Pakistan journal monitoring, corporate compliance, and legal defense in Pakistan.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-brand-muted-gray absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles or trademark guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-brand-paper border border-brand-light-gray rounded-sm pl-10 pr-4 py-2.5 text-xs text-brand-navy focus:outline-none focus:border-brand-burgundy shadow-xs"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="pt-6 pb-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-brand-cream/20 border border-brand-light-gray rounded-sm max-w-md mx-auto">
                <BookOpen className="w-8 h-8 text-brand-burgundy mx-auto mb-2 opacity-60" />
                <h3 className="font-serif text-lg text-brand-navy font-medium">No Articles Found</h3>
                <p className="text-xs text-brand-muted-gray mt-1">Try adjusting your search terms.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, idx) => (
                  <motion.article
                    key={idx}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-brand-paper border border-brand-light-gray rounded-md p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-brand-muted-gray mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif text-lg font-semibold text-brand-navy mb-2 line-clamp-2 hover:text-brand-burgundy transition-colors">
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-xs text-brand-navy/70 leading-relaxed mb-6 line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-light-gray/60 flex items-center justify-between">
                      <span className="text-[11px] text-brand-muted-gray">
                        {article.date}
                      </span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="text-xs font-semibold text-brand-burgundy hover:text-brand-navy flex items-center gap-1 transition-colors"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

          </div>
        </section>

        <Footer />

      </div>
    </SmoothScroll>
  );
}
