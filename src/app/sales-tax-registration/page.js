'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SalesTaxRegistration() {
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
                FBR & Provincial Sales Tax Registration (STRN) Services
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Obtain your Sales Tax Registration Number (STRN) for goods and services to issue tax invoices, claim input adjustments, and secure government contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Register for Sales Tax Now</span>
                </a>
                <a
                  href="tel:+923366050615"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Speak to Our Tax Expert</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl border border-brand-paper/15 bg-brand-navy/60 p-1 md:p-2">
                <Image
                  src="/sevices images/Sales Tax Registration (STRN).png"
                  alt="Sales Tax Registration"
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
              If your business is engaged in manufacturing, importing, exporting, wholesale, or providing taxable services, Sales Tax Registration is a strict statutory requirement. Registering for Sales Tax equips your business with a Sales Tax Registration Number (STRN), enabling you to legally collect sales tax, issue sales tax invoices, and claim input tax deductions on your business purchases.
              <br/><br/>
              At The Lawyers, we handle complete sales tax registration across both federal and provincial jurisdictions—guaranteeing seamless portal setup, biometric coordination, and post-registration compliance.
            </p>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Sales Tax Jurisdictions We Cover</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Federal Sales Tax (FBR)
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  For businesses dealing in the supply, manufacture, import, or export of goods.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Provincial Sales Tax Authorities
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed mb-2">For service-based businesses registered under:</p>
                <ul className="text-sm text-brand-navy/70 list-disc pl-5">
                  <li>Punjab Revenue Authority (PRA)</li>
                  <li>Sindh Revenue Board (SRB)</li>
                  <li>Khyber Pakhtunkhwa Revenue Authority (KPRA)</li>
                  <li>Balochistan Revenue Authority (BRA)</li>
                  <li>Islamabad Capital Territory (ICT Sales Tax)</li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Need Guidance on Federal vs. Provincial Sales Tax?</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                Supplying goods falls under the Federal Board of Revenue (FBR), while providing services falls under your relevant provincial revenue authority. Speak with our tax experts to map your business correctly.
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Consult Our Tax Legal Team on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Comprehensive Service Includes</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Application preparation and online filing on the FBR IRIS / Provincial portals.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Assistance with mandatory Biometric Verification at e-Sahulat centers.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Physical premises inspection verification guidance (for FBR Sales Tax on goods).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Generation of Sales Tax Registration Certificate and portal access setup.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Documents Required</h3>
                <p className="text-sm text-brand-navy/70 mb-4">
                  Documents vary based on your desired registration type. Here are some basic requirements to get started:
                </p>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Business NTN Certificate and CNICs of Directors/Owners.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Commercial bank account maintenance certificate with IBAN.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Paid commercial utility bill (Electricity/Gas) and tenancy agreement of business premises.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> GPS-tagged photographs of business premises, main entrance, and utility meter.</li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-cream/40 border border-brand-burgundy/30 p-8 rounded-md text-center">
              <h4 className="font-serif text-xl mb-4 text-brand-navy">Avoid Application Rejection Due to Address Mismatches</h4>
              <p className="text-sm text-brand-navy/80 mb-6 max-w-2xl mx-auto">
                FBR and provincial authorities strictly cross-check utility bills, rent agreements, bank certificates, and GPS coordinates. Let our experienced team audit your file before submission.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
