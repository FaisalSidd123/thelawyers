'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PsebRegistration() {
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
                PSEB Registration Services for IT Companies & Freelancers
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Unlock 100% income tax credits, foreign remittance facilitation, whitelisted IP call center setups, and international export credibility with Pakistan Software Export Board.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923073685421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Register with PSEB Now</span>
                </a>
                <a
                  href="tel:+923073685421"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp IT Legal Team</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl border border-brand-paper/15 bg-brand-navy/60 p-1 md:p-2">
                <Image
                  src="/sevices images/PSEB Registration.png"
                  alt="PSEB Registration"
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
              Registering your IT company, software house, BPO center, or freelance profile with PSEB provides official state recognition as an accredited IT exporter. This opens access to crucial FBR tax credits on foreign IT earnings, foreign currency account retention, commercial call center IP whitelisting, discounted international trade shows, and preferred participation in government tech initiatives.
              <br/><br/>
              At The Lawyers, we handle the complete PSEB portal setup, corporate filing, call center licensing, and annual renewal compliance so software teams and tech professionals can scale seamlessly.
            </p>

            <div className="bg-brand-navy text-brand-paper p-6 md:p-8 rounded-md mb-8 md:mb-12 text-center">
              <h4 className="font-serif text-lg md:text-xl mb-3 md:mb-4">Exporting Software or Digital Services Overseas?</h4>
              <p className="text-xs md:text-sm text-brand-paper/80 mb-5 md:mb-6 max-w-2xl mx-auto">
                Unregistered IT revenue brought into Pakistan via traditional banking channels may be subjected to unnecessary withholding taxes or delays. Speak with our legal consultants to secure your official PSEB export status.
              </p>
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Consult Our IT Legal Team on WhatsApp
              </a>
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Who Benefits From PSEB Registration?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm text-brand-navy/80 mb-8 md:mb-12">
              <li className="flex items-start gap-2.5 bg-brand-cream/40 p-4 rounded-md border border-brand-light-gray"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span>Software Development Agencies & IT Consultancy Services.</span></li>
              <li className="flex items-start gap-2.5 bg-brand-cream/40 p-4 rounded-md border border-brand-light-gray"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span>Call Centers and BPO (Business Process Outsourcing) Providers.</span></li>
              <li className="flex items-start gap-2.5 bg-brand-cream/40 p-4 rounded-md border border-brand-light-gray"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span>Independent Freelancers and Digital Agencies.</span></li>
            </ul>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Key Incentives Secured</h3>
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>100% FBR Income Tax Credit</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  Full eligibility to claim tax credits/exemptions on foreign IT export earnings under Section 65F of the Income Tax Ordinance, 2001.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Specialized Foreign Currency (FCY) Accounts</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  Facilitation under State Bank of Pakistan (SBP) rules to retain up to 50% of foreign currency export earnings in specialized business bank accounts for overseas software purchases, marketing, and expansion.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Call Center Whitelisting</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  Regulatory clearance for static IP address whitelisting via PTA and telecom operators for legal VoIP/SIP traffic routing.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>International Directory Listing & Tech Events</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  Official corporate listing in PSEB’s public IT Exporters Directory, boosting trust with foreign enterprise clients. Priority access and subsidized booths at major global tech expos (e.g., GITEX, Web Summit) and subsidized CMMI/ISO certification programs.
                </p>
              </div>
            </div>

            <div className="bg-brand-cream/40 border border-brand-burgundy/30 p-8 rounded-md text-center">
              <h4 className="font-serif text-xl mb-4 text-brand-navy">Planning to Setup a Call Center or BPO in Pakistan?</h4>
              <p className="text-sm text-brand-navy/80 mb-6 max-w-2xl mx-auto">
                Call centers operate under strict PTA telecom regulations. PSEB registration is a mandatory pre-requisite for securing call center IP whitelisting. Contact us to learn about requirements for your registration tier.
              </p>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How long does PSEB registration take?', a: 'Standard Freelancer and IT Company registrations are typically approved and issued within 3 to 7 working days. Call Center registrations (requiring static IP verification) take 7 to 10 working days.' },
                { q: 'Does PSEB registration automatically guarantee 100% Tax Exemption with FBR?', a: 'PSEB registration is a mandatory statutory requirement to qualify for tax incentives under Section 65F of the Income Tax Ordinance. However, to claim the 100% tax credit, you must also ensure your export remittances enter Pakistan through formal banking channels, file annual income tax returns, and submit withholding tax statements.' },
                { q: 'Can I register with PSEB if my business operates as a Sole Proprietorship?', a: 'Yes. PSEB allows IT firms registered as Sole Proprietorships, Partnership Firms (AOPs), Single Member Companies (SMC-Pvt Ltd), and Private Limited Companies to enroll.' },
                { q: 'How does PSEB help in retaining foreign currency in local bank accounts?', a: 'Under SBP framework guidelines, PSEB-registered IT exporters can open Exporters\' Special Foreign Currency Accounts (ESFCA) with commercial banks, allowing them to retain up to 50% of foreign currency receipts abroad/locally to pay overseas AWS/cloud bills, digital marketing expenses, or remote contractor fees without conversion loss.' },
                { q: 'Can foreign IT companies operating in Pakistan register with PSEB?', a: 'Yes. Foreign companies registered with SECP as branch offices or liaison offices providing IT/ITeS services in Pakistan can apply for PSEB enrollment.' },
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
