'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NgoNpoTrustRegistration() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-20 pb-10 md:pt-40 md:pb-20 px-4 md:px-12 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-burgundy/20 z-0" />
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Company Registration & Compliance</span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-paper font-normal leading-tight mb-6">
                NGO, NPO & Charitable Trust Registration Services
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Secure legal status, donor credibility, tax exemptions, and government approvals for non-profit organizations and social foundations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923073685421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Free Guidance on WhatsApp</span>
                </a>
                <a
                  href="tel:+923073685421"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Our Legal Team</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl border border-brand-paper/15 bg-brand-navy/60 p-1 md:p-2">
                <Image
                  src="/sevices images/NGO, NPO AND TRUST.png"
                  alt="NGO, NPO and Trust Registration"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain rounded-md"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Overview */}
        <section className="py-6 md:py-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 md:mb-6">Overview</h2>
            <p className="text-sm md:text-base text-brand-navy/80 leading-relaxed mb-8 md:mb-12">
              Operating a non-governmental or non-profit organization in Pakistan requires strict adherence to statutory framework guidelines to ensure transparency, donor trust, and immunity from compliance penalties. At The Lawyers, we guide founders, philanthropists, and international donors through the precise legal mechanisms needed to establish and operate an NGO, NPO, or Charitable Trust.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Legal Structures That We Register</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Section 42 Non-Profit Company</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  The gold standard for structured non-profits, offering national reach, corporate status, and high donor credibility.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Societies Registration Act (1860)</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  Ideal for welfare societies, educational institutions, and community-based organizations.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Trust Act (1882)</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  Designed for family trusts, welfare funds, and charitable endowments with designated trustees.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-12">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">End-to-End Legal Assistance</h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Obtaining SECP License under Section 42 of the Companies Act, 2017.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Drafting customized Constitutions, Bye-Laws, Rules, and Trust Deeds.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>FBR Tax Exemption status processing under Section 100C of the Income Tax Ordinance.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Economic Affairs Division (EAD) MOU filing for foreign donation approvals.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Ministry of Interior (MOI) security clearances and compliance reporting.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Documents Required</h3>
                <p className="text-xs md:text-sm text-brand-navy/70 mb-4">
                  Documents vary based on your desired entity type. Here are some basic requirements to get started:
                </p>
                <ul className="space-y-2.5 text-xs md:text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span>CNIC / Passport copies of all Founding Members, Directors, or Trustees.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span>Mission statement, objectives, and initial 3-year operational plan.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span>Registered office address lease agreement or ownership document.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span>Resume / Profile of key founding members.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-6 md:py-16 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'What is the main difference between a Trust and a Section 42 NPO?', a: 'A Section 42 NPO is registered with SECP as a corporate non-profit company with nationwide jurisdiction, whereas a Trust is registered under provincial Trust Acts.' },
                { q: 'Can an NPO or NGO receive foreign funds in Pakistan?', a: 'Yes, but non-profits intending to receive foreign contributions or donations must sign a Memorandum of Understanding (MOU) with the Economic Affairs Division (EAD) and secure security clearance from the Ministry of Interior.' },
                { q: 'How do I get 100% Tax Exemption for my NGO/NPO under FBR laws?', a: 'After incorporation, your organization must apply for Section 100C Tax Credit Approval with the Commissioner Inland Revenue (FBR). Requirements include audited accounts, proper record-keeping, and demonstrating that administrative expenses remain within statutory limits.' },
                { q: 'Can founders or directors draw a salary from a Section 42 NPO?', a: 'Promoters and directors of a Section 42 company cannot receive remuneration or profits simply by virtue of being directors. However, officers appointed to executive roles (e.g., Executive Director, CEO) may receive reasonable, FBR-compliant salaries for actual operational work performed.' },
                { q: 'Can an existing Trust or Society be converted into a Section 42 NPO?', a: 'Yes. An existing Society or Trust can incorporate a Section 42 company under the SECP and formally transfer its assets, operations, and programs to the new corporate entity for better governance and funding opportunities.' },
              ].map((faq, index) => (
                <div key={index} className="border-b border-brand-light-gray pb-6">
                  <h4 className="font-semibold text-brand-navy mb-2">{faq.q}</h4>
                  <p className="text-sm text-brand-navy/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brand-navy text-brand-paper p-8 rounded-md text-center">
              <h4 className="font-serif text-2xl mb-4">Ready to Launch Your Social Impact Organization?</h4>
              <p className="text-brand-paper/80 mb-8 max-w-2xl mx-auto">Let The Lawyers handle the legal complexities, SECP licensing, document drafting, and tax approvals so you can focus entirely on driving social change.</p>
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Register Your NGO / NPO Today</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
