'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';

export default function CompanyRegistration() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        <Navbar />

        {/* ============================================================
            HERO SECTION — Commented out, preserved for restoration
            ============================================================
        <section className="pt-20 pb-10 md:pt-40 md:pb-20 px-4 md:px-12 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-burgundy/20 z-0" />
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">Company Registration & Compliance</span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-paper font-normal leading-tight mb-6">
                Professional Company Registration Services in Pakistan
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Establish a recognized legal identity for your business. We handle full corporate structuring, SECP incorporations, FBR NTN setup, and post-incorporation compliance.
              </p>
              ... hero buttons and image ...
            </div>
          </div>
        </section>
        ============================================================ */}


        {/* ============================================================
            NEW CONTENT SECTION — Active
            ============================================================ */}

        {/* Disclaimer Notice */}
        <section className="py-10 md:py-16 px-4 md:px-12 bg-amber-50 border-y border-amber-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white border border-amber-300 rounded-lg p-6 md:p-8 shadow-sm">
              <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">!</div>
              <div>
                <h2 className="font-serif text-lg md:text-xl text-brand-navy font-semibold mb-3">Important Disclosure</h2>
                <p className="text-sm md:text-base text-brand-navy/80 leading-relaxed">
                  The Lawyers is a private, independent law firm and corporate consultancy. We are not affiliated with, endorsed by, or an official representative of the Securities and Exchange Commission of Pakistan (SECP), Federal Board of Revenue (FBR), or any government agency. We provide private legal advisory, document drafting, and corporate consulting services. Official government forms and filing portals can be accessed directly through respective government websites without third-party assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-10 md:py-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* What We Do */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4">Our Legal Services</h2>
              <p className="text-sm md:text-base text-brand-navy/80 leading-relaxed">
                We provide legal representation, statutory drafting, and corporate advisory services for business formation. Our legal team assists in drafting Articles of Association, Memorandum documents, and organizing compliance paperwork for submission.
              </p>
            </div>

            {/* Fee Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-navy text-brand-paper rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
                  <h3 className="font-serif text-lg md:text-xl">Our Service Fee</h3>
                </div>
                <p className="text-sm text-brand-paper/80 leading-relaxed">
                  Represents private legal counsel, document preparation, and corporate consulting provided by The Lawyers.
                </p>
              </div>

              <div className="bg-brand-cream/60 border border-brand-light-gray rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-burgundy shrink-0" />
                  <h3 className="font-serif text-lg md:text-xl text-brand-navy">Government Statutory Fees</h3>
                </div>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Official regulatory fees payable directly to government registries where applicable. These are separate from our service fee.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-lg p-6 md:p-8 text-center">
              <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-3">Ready to get started?</h3>
              <p className="text-sm text-brand-navy/70 mb-6 max-w-xl mx-auto">
                Contact our legal team on WhatsApp for a free initial consultation on company formation and to understand the process in detail.
              </p>
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* ============================================================
            OLD CONTENT — Commented out, preserved for restoration
            ============================================================

        {/* Detailed Overview * /}
        <section className="py-6 md:py-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 md:mb-6">Overview</h2>
            <p className="text-sm md:text-base text-brand-navy/80 leading-relaxed mb-6 md:mb-10">
              Forming a legal corporate entity is the single most critical step in establishing a scalable business in Pakistan. Whether you are an IT startup, a manufacturing firm, or an individual consultant, registering your company provides corporate status, limited liability protection, and access to corporate banking, government tenders, and global trade. At The Lawyers, we handle the entire process digitally, eliminating bureaucracy so you can focus on growing your core business.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Entity Types We Register</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
              ... entity cards ...
            </div>

            ... documents + service package + process + FAQs sections ...
          </div>
        </section>

        ============================================================ */}

        {/* <RelatedServices currentSlug="company-registration" /> — Commented out, preserved for restoration */}

        <Footer />
      </div>
    </SmoothScroll>
  );
}
