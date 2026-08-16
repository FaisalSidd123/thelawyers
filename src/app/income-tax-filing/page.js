'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IncomeTaxFiling() {
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
                Income Tax Return Filing Services for Individuals & Businesses
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Whether you are looking for a trusted tax consultant or searching online for a reliable tax advisor, we make the entire process of income tax return filing simple, fast, and 100% remote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>File Your Tax Return Now</span>
                </a>
                <a
                  href="tel:+923366050615"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Instant Tax Quote</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto rounded-md overflow-hidden shadow-2xl border border-brand-paper/10">
                <Image
                  src="/sevices images/Income tax filing.jpeg"
                  alt="Income Tax Filing"
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
              Filing your annual Income Tax Return with the Federal Board of Revenue (FBR) is a mandatory financial responsibility for every earner in Pakistan. Timely and accurate filing ensures your placement on the Active Taxpayer List (ATL), shielding you from punitive non-filer tax rates on cash withdrawals, property transactions, vehicle purchases, and banking services. The Lawyers provides precision tax computation and filing services to minimize your legal tax liabilities.
            </p>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Specialized Filing Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Salaried Individual Returns
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Complete analysis of salary slips, provident funds, income tax withheld by employers, and claiming eligible tax credits/refunds.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Freelancer & Remote Worker Returns
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Optimized tax return filing for IT professionals, remote workers, and software exporters utilizing reduced tax brackets.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Business Return Filing
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Detailed preparation of Profit & Loss statements, balance sheets, and tax liability computations under applicable tax regimes for Sole Proprietors & Partnerships.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Private Limited Corporate Filing
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Audited financial return preparation, corporate tax computation, advance tax adjustments, and filing under the Companies Act guidelines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Tax Service Packages Includes</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Complete assistance to become a filer and get your name on the Active Taxpayers List (ATL).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> End-to-end preparation, calculation, and submission of your income tax return.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Specialized assistance with the FBR income tax return form for salaried persons.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Setting up your company with the FBR, securing your NTN, and managing annual corporate tax returns.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Year-round support from a dedicated tax advisor.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Precise drafting of your assets and liabilities to avoid audit notices.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">What Sets Our Tax Service Apart</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Thorough reconciliation of wealth statements and bank transactions to prevent FBR audit notices.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Identification of eligible tax credits (tuition fees, life insurance, charitable donations, medical allowances).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Full legal representation in the event of FBR tax audits, show-cause notices, or penalty appeals.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> 100% Remote: No need to visit physical offices.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> No hidden fees. Flat-rate pricing.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-brand-cream/40 p-8 rounded-md mb-12">
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Documents Required</h3>
              <p className="text-sm text-brand-navy/70 mb-6">
                Documents vary based on your desired filing type. Contact Us and our team will guide you on the exact requirements for your specific case completely for free. Some basic requirements are as below:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-brand-navy/80">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Bank statements for the financial year (July 1 to June 30).</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Salary certificates or employer tax deduction certificates.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Details of assets acquired or sold during the tax year (property, vehicles, stocks).</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Paid utility bills and proof of tax deducted on mobile bills or banking transactions.</li>
              </ul>
            </div>
            
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
