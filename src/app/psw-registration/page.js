'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PswRegistration() {
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
                Pakistan Single Window (PSW) Trade Registration Services
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Mandatory digital platform registration for importers, exporters, customs clearing agents, and international traders in Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923073685421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Register for PSW Today</span>
                </a>
                <a
                  href="tel:+923073685421"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Quick Assistance</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl border border-brand-paper/15 bg-brand-navy/60 p-1 md:p-2">
                <Image
                  src="/sevices images/Chamber of Commerce Registration.jpeg"
                  alt="PSW Registration"
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
              Whether you are importing raw materials, exporting finished products, operating a customs clearing agency, or managing logistics, PSW registration is legally required to execute trade declarations, process Goods Declarations (GD), obtain regulatory LPCOs (Licenses, Permits, Certificates, and Others), and secure foreign exchange remittance approvals from commercial banks (replacing legacy Form I and Form E mechanisms).
              <br/><br/>
              At The Lawyers, we handle complete PSW onboarding, biometric verification coordination, banking profile linking, WeBOC role association, and portal lock resolutions—ensuring your import/export operations launch without regulatory delays.
            </p>

            <div className="bg-brand-navy text-brand-paper p-6 md:p-8 rounded-md mb-8 md:mb-12 text-center">
              <h4 className="font-serif text-lg md:text-xl mb-3 md:mb-4">Starting an Import/Export Business or Stuck in Customs Clearance?</h4>
              <p className="text-xs md:text-sm text-brand-paper/80 mb-5 md:mb-6 max-w-2xl mx-auto">
                Mismatched FBR NTN data, unlinked corporate bank accounts, or biometric verification errors can cause immediate account locks on the PSW portal. Speak with our customs legal experts to activate your trader profile seamlessly.
              </p>
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Consult Our Trade Legal Team on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-12">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Our PSW Onboarding Package</h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Complete PSW Subscription profile setup.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Biometric verification guidance at e-Sahulat / Customs touchpoints.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Integration of WebOC ID, Sales Tax (STRN), and NTN with the PSW ecosystem.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Trader Profile Activation for Commercial and Non-Commercial Importers/Exporters.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Resolution of PSW profile locks, banking verification errors, and regulatory approvals.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Importing Regulated Goods or Food Items?</h3>
                <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                  <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed mb-4">
                    Certain commodities require mandatory pre-shipment approvals, phytosanitary certificates, or PSQCA compliance before customs arrival. Let The Lawyers review your trade HS codes and secure necessary regulatory clearances.
                  </p>
                  <a
                    href="https://wa.me/923073685421"
                    className="text-brand-burgundy font-semibold text-xs md:text-sm hover:underline"
                  >
                    Call Our Trade Practice Team
                  </a>
                </div>
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
                { q: 'What is the main difference between WeBOC and PSW?', a: 'PSW (Pakistan Single Window) is the unified national trade portal that connects importers, exporters, banks, and 22+ regulatory agencies. WeBOC (Web-Based One Customs) is the backend customs clearance system used specifically for filing Goods Declarations (GDs) and assessing customs duties. Today, you register through PSW, which automatically grants access to WeBOC functionality without needing a separate manual application.' },
                { q: 'How long does it take to complete PSW registration and profile activation?', a: 'If your FBR NTN, SECP, and banking details are completely aligned, online PSW subscription takes 24 to 48 hours following NADRA e-Sahulat biometric verification and banking profile approval by your bank.' },
                { q: 'Where do I need to go for biometric verification?', a: 'Biometric verification is completed electronically at any authorized NADRA e-Sahulat franchise across Pakistan. You simply visit the franchise with your CNIC and the PSW verification voucher issued during subscription.' },
                { q: 'Why is my bank account profile not showing on the PSW portal?', a: 'Your commercial bank must actively verify and map your business account and IBAN to the PSW financial database. Mismatches in the business title or NTN between FBR records and bank account records will delay banking profile linking.' },
                { q: 'Is a Chamber of Commerce membership mandatory for PSW registration?', a: 'While initial PSW subscription can be initiated with an NTN, obtaining an active Chamber of Commerce & Industry membership is standard commercial practice and mandatory for clearance, quota allocations, and trade verification across customs stations.' },
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
