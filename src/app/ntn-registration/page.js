'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NtnRegistration() {
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
                FBR NTN Registration for Individuals, Firms & Corporations
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Fast, error-free National Tax Number (NTN) registration on FBR IRIS to ensure compliance and Active Taxpayer status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Your NTN Now</span>
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
                  src="/sevices images/NTN Registration.png"
                  alt="NTN Registration"
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
              A National Tax Number (NTN) is mandatory for every individual, business, or company operating in Pakistan. Having an active NTN allows you to conduct major financial transactions, register vehicles, acquire property, and open business bank accounts while avoiding heavy withholding tax penalties levied on non-filers. The Lawyers provides rapid, guaranteed NTN setup directly on the FBR IRIS portal.
            </p>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">NTN Categories We Handle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Personal / Salaried Individual NTN
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Essential for employees, IT freelancers, and individuals wanting to become active tax filers.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Sole Proprietorship NTN
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Linking your business trade name to your personal tax profile.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Partnership / AOP NTN
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Registering a distinct tax identity for partnership firms.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Corporate Company NTN
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Official NTN registration for SECP-incorporated Private Limited and Single Member companies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Key Benefits of Getting Registered</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Immediate eligibility to file annual income tax returns and enter the Active Taxpayer List (ATL).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Up to 50% reduction in withholding tax rates on bank transfers, property purchases, and vehicle registrations.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Mandatory requirement for opening commercial and corporate bank accounts.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Documents Required</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Copy of valid CNIC / NICOP.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Mobile Number.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Email Address.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Residential Address.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Avoid Non-Filer Penalties & Higher Withholding Taxes</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                Don't pay double taxes on bank transactions or property transfers. Get your NTN registered with The Lawyers and claim your active filer status.
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Get Started Today
              </a>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How long does NTN registration take?', a: 'Personal and sole proprietor NTN registrations are typically completed within 24 hours.' },
                { q: 'Is my CNIC number the same as my NTN?', a: 'For individuals and salaried persons, your 13-digit CNIC serves as your NTN once enrolled on the FBR IRIS portal. For AOPs and corporate entities, FBR issues a separate 7-digit NTN.' },
                { q: 'Does simply registering an NTN make me an Active Filer?', a: 'No. Registering an NTN creates your profile on IRIS. To become an Active Filer and appear on the Active Taxpayer List (ATL), you must file your annual Income Tax Return.' },
                { q: 'Can I add a business name to my existing individual NTN later?', a: 'Yes. You can modify your existing FBR profile at any time by filing Form 181 (Modification of Registration) on IRIS to add or update Sole Proprietorship trade names, business addresses, and operational activities.' },
                { q: 'Can overseas Pakistanis (NICOP holders) get an NTN?', a: 'Yes. Non-Resident Pakistanis holding a valid NICOP or Overseas CNIC can register on IRIS using their passport or NICOP details along with an active email address.' },
                { q: 'Will FBR charge tax immediately upon NTN registration?', a: 'No. NTN registration itself is simply an identification process. Tax liabilities are calculated only when you file your annual income tax return based on your actual taxable income.' },
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
