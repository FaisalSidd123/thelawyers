'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PashaRegistration() {
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
                P@SHA Membership Registration Services for IT Companies
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Join the Pakistan Software Houses Association (P@SHA) to amplify your voice, gain technology network access, and secure industry recognition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Join P@SHA Today</span>
                </a>
                <a
                  href="tel:+923366050615"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat with Our Legal Team</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl border border-brand-paper/15 bg-brand-navy/60 p-1 md:p-2">
                <Image
                  src="/sevices images/P@SHA Registration.jpeg"
                  alt="P@SHA Registration"
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
        <section className="py-20 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-6">Overview</h2>
            <p className="text-brand-navy/80 leading-relaxed mb-12">
              P@SHA (Pakistan Software Houses Association) is the premier trade association representing Pakistan's IT, software, and tech services sector. A P@SHA membership validates your software firm's industry standing, gives you direct access to B2B networking, provides discounts on global tech summits, and ensures your company is included in top-tier industry advocacy groups.
              <br/><br/>
              At The Lawyers, we handle your complete P@SHA onboarding—from business eligibility audits and corporate verification to application filing, peer endorsement coordination, and annual renewal management—so your leadership team can focus on scaling tech operations.
            </p>

            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Scaling Your IT Firm, SaaS Product, or BPO Operations?</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                P@SHA membership validates your firm’s standing in the international market, protects your interests in regulatory policy shifts, and connects you with top-tier tech leaders. Speak with our corporate IT legal team to fast-track your enrollment.
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Consult Our Tech Legal Team on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">What We Do For Your Firm</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Profile evaluation and eligibility documentation.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Submission of formal P@SHA membership applications.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Coordination for corporate verification and endorsement.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Facilitating annual renewals and access to P@SHA industry survey reports.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Eligibility Criteria</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Must be a registered business entity in Pakistan (SECP Company or Partnership/Proprietorship).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Must be actively engaged in software development, IT services, BPO, or digital tech operations.</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Target Business Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Software Development Houses
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Custom software developers, mobile app studios, SaaS builders, AI/ML firms, and web engineering agencies.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> BPO & Call Centers
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Inbound/outbound customer experience centers, back-office processing units, and virtual assistance agencies.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Tech Startups & Incubators
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Emerging technology ventures, fintech platforms, edtech solutions, and enterprise tech platforms.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Digital & IT Consultancies
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Cybersecurity advisors, cloud architects, DevOps specialists, and digital transformation agencies.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Service Scope</h3>
            <ul className="space-y-4 text-sm text-brand-navy/80 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span><strong>Eligibility Evaluation:</strong> Assessing your business structure, tax profiles, and trade operations against P@SHA membership criteria.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span><strong>Dossier Preparation:</strong> Compiling corporate documents, company background briefs, product/service portfolios, and financial disclosures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span><strong>Peer Endorsement Coordination:</strong> Assisting in securing required member references and executive endorsements from existing P@SHA member firms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span><strong>Portal Submission & Verification:</strong> Executing application filing on the official P@SHA portal and coordinating with regional administrative offices.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span><strong>Renewal & Compliance Management:</strong> Managing annual membership renewals, updating company directory profiles, and maintaining active status.</span>
              </li>
            </ul>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'What is the main difference between PSEB and P@SHA?', a: 'PSEB (Pakistan Software Export Board) is a government body under the Ministry of IT, handling regulatory matters, call center licenses, and official export tax accreditation. P@SHA (Pakistan Software Houses Association) is a private, trade association run by and for tech business leaders, focusing on policy advocacy, networking, industry events, and commercial growth. Most established IT firms maintain memberships with both entities.' },
                { q: 'How long does it take to process a P@SHA membership application?', a: 'Once all corporate documents, financial proof, and peer endorsements are submitted, P@SHA membership approval typically takes 7 to 14 working days, following verification by the P@SHA Secretariat.' },
                { q: 'Can a tech startup or sole proprietor join P@SHA?', a: 'Yes. P@SHA welcomes businesses of all scales—from solo tech entrepreneurs and early-stage startups to mid-sized software agencies and multinational tech enterprises. Membership tier fees are scaled according to company size and revenue.' },
                { q: 'What are the P@SHA ICT Awards, and who can participate?', a: 'The P@SHA ICT Awards is Pakistan\'s premier technology competition celebrating innovation across software products, digital services, gender diversity, and startup excellence. Active P@SHA members receive priority entry rights, and national winners advance to represent Pakistan at the international APICTA Awards.' },
              ].map((faq, index) => (
                <div key={index} className="border-b border-brand-light-gray pb-6">
                  <h4 className="font-semibold text-brand-navy mb-2">{faq.q}</h4>
                  <p className="text-sm text-brand-navy/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
