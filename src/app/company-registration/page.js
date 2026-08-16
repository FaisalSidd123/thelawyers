'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompanyRegistration() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-12 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-burgundy/20 z-0" />
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Company Registration & Compliance</span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-paper font-normal leading-tight mb-6">
                Professional SECP Company Registration Services in Pakistan
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Establish a recognized legal identity for your business. We handle full corporate structuring, SECP incorporations, FBR NTN setup, and post-incorporation compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Free Guidance on WhatsApp</span>
                </a>
                <a
                  href="tel:+923366050615"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Our Legal Team</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto rounded-md overflow-hidden shadow-2xl border border-brand-paper/10">
                <Image
                  src="/sevices images/Company Registration.jpeg"
                  alt="Company Registration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Overview */}
        <section className="py-20 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-6">Overview</h2>
            <p className="text-brand-navy/80 leading-relaxed mb-12">
              Forming a legal corporate entity is the single most critical step in establishing a scalable business in Pakistan. Whether you are an IT startup, a manufacturing firm, or an individual consultant, registering your company provides corporate status, limited liability protection, and access to corporate banking, government tenders, and global trade. At The Lawyers, we handle the entire process digitally, eliminating bureaucracy so you can focus on growing your core business.
            </p>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Entity Types We Register</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Private Limited Company (Pvt Ltd)
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Designed for businesses with two or more directors/shareholders. It offers limited liability protection, enhanced corporate credibility, and the ability to raise equity capital from investors.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Single Member Company (SMC-Pvt Ltd)
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Offers all the benefits and corporate status of a Private Limited company for single owner, maintaining total ownership while enjoying limited liability protection.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Partnership / Association of Persons
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Choose between a traditional Registrar of Firms partnership (AOP) or SECP's modern Limited Liability Partnership (LLP), which combines partner operational flexibility with corporate asset protection.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Sole Proprietorship
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  A streamlined, fast setup for individual business owners, freelancers, and local vendors seeking an official business name linked to their personal NTN.
                </p>
              </div>
            </div>

            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Not sure which entity is right for your business?</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                Choosing between an SMC, Pvt Ltd, LLP, AOP or Sole proprietorship depends on your business goals, tax strategy, and growth plans. Contact us — our corporate team will evaluate your business model and guide you completely for free!
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Contact Us Now
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Documents Required</h3>
                <p className="text-sm text-brand-navy/70 mb-4">
                  Documents vary based on your desired entity type. Here are the basic requirements to get started:
                </p>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Front and back pictures of CNIC / NICOP / Passport.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Proposed business name.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Office or house address.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Mobile number and email address.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Service Package Includes</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Preparation and filing of incorporation documents</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Assistance in obtaining Certificate of Incorporation</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Drafting of Memorandum & Articles of Association</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Filing of required registration forms</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Assistance in NTN registration process</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Post-incorporation documentation guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-12 text-center">Step-by-Step Registration Process</h2>
            <div className="space-y-8">
              {[
                { step: '1', title: 'Initial Strategy & Name Search', desc: 'You provide proposed name; we verify eligibility against SECP databases.' },
                { step: '2', title: 'Document Preparation', desc: 'We draft custom MOA/AOA agreements and prepare founder declaration forms.' },
                { step: '3', title: 'E-Filing & Fee Deposit', desc: 'Submission of digital applications to SECP alongside official state fee processing.' },
                { step: '4', title: 'Incorporation & NTN Handover', desc: 'Delivery of physical/digital Certificate of Incorporation, MoA, AoA, Form 1, NTN, NTN Inquiry, 181 Order etc.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6 bg-brand-paper p-6 rounded-md shadow-sm border border-brand-light-gray">
                  <div className="w-12 h-12 bg-brand-navy text-brand-paper rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-navy/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How long does SECP company incorporation take?', a: 'Typically, name availability takes 24–48 hours, and final incorporation takes 3 to 5 working days after complete document submission.' },
                { q: 'Can a foreign national register a company in Pakistan?', a: 'Yes, foreign individuals or entities can hold 100% equity, subject to standard SECP security clearance procedures.' },
                { q: 'Do I need to physically visit your office or the SECP office?', a: 'No, the entire company registration process is handled 100% online. You can send us your documents via WhatsApp or email, and our team will handle all SECP and FBR digital filings without requiring your physical presence.' },
                { q: 'What is the minimum capital required to register a Private Limited Company?', a: 'SECP does not mandate a high minimum paid-up capital to start a standard Private Limited Company. You can incorporate with a basic initial paid-up capital suitable for your operational needs.' },
                { q: 'Is FBR NTN registration included in the SECP company registration package?', a: 'Yes, once your company is incorporated with SECP, we generate your official Company NTN with the Federal Board of Revenue (FBR) so your business is ready to open a corporate bank account immediately.' },
                { q: 'What is the difference between a Single Member Company (SMC) and a Private Limited Company?', a: 'An SMC-Pvt Ltd requires only one director/shareholder, making it ideal for solo entrepreneurs. A standard Private Limited Company requires at least two directors/shareholders. Both provide equal corporate status and limited liability protection.' },
                { q: 'Can I open a corporate bank account right after receiving my incorporation certificate?', a: 'Yes! We provide you with the official Board Resolution drafting, SECP Certificate of Incorporation, Form II/Form 45, and Company NTN required by commercial banks to open your corporate bank account.' },
              ].map((faq, index) => (
                <div key={index} className="border-b border-brand-light-gray pb-6">
                  <h4 className="font-semibold text-brand-navy mb-2">{faq.q}</h4>
                  <p className="text-sm text-brand-navy/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h4 className="font-serif text-2xl text-brand-navy mb-4">Have a question that isn't answered here?</h4>
              <p className="text-brand-navy/70 mb-8">Every business situation is unique. Message us directly and our corporate legal team will answer your questions instantly!</p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask a Question on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
