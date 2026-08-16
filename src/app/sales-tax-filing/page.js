'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SalesTaxFiling() {
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
                Monthly Sales Tax Return Filing & Compliance Services
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Precise monthly sales tax returns, Annexure reconciliations, input tax claiming, and audit protection for FBR and Provincial Revenue Authorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>File Monthly Sales Tax Now</span>
                </a>
                <a
                  href="tel:+923366050615"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Our Tax Filing Team</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto rounded-md overflow-hidden shadow-2xl border border-brand-paper/10">
                <Image
                  src="/sevices images/Sales tax filing.png"
                  alt="Sales Tax Filing"
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
              Sales tax compliance is an ongoing, monthly obligation. Registered businesses must submit monthly sales tax returns detailing their sales (output tax) and business purchases (input tax). Missing deadlines or submitting inaccurate returns leads to immediate blocking of sales tax profiles, automatic inclusion on non-active tax lists, and severe financial penalties. The Lawyers manages your complete monthly sales tax cycle with total accuracy.
            </p>

            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Facing Deadline Pressure or Annexure Discrepancies?</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                Unclaimed input tax or mismatched supplier invoices can cost your business thousands. Let our corporate tax experts reconcile your ledgers before filing.
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Consult Our Sales Tax Filing Team on WhatsApp
              </a>
            </div>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Who Requires This Service?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Goods Entities (FBR)
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Manufacturers, Wholesalers, Distributors, Importers, Exporters, and Commercial Retailers.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Service Entities (Provincial)
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  IT Software & Services firms, Construction & Engineering contractors, Advertising agencies, Restaurants, Logistics companies, and Legal/Financial consultants registered with PRA, SRB, KPRA, BRA, or ICT.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Corporate Withholding Agents
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Companies designated as withholding agents required to deduct sales tax at source under applicable rules.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Monthly Management Scope</h3>
            <ul className="space-y-3 text-sm text-brand-navy/80 mb-12">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Compilation and verification of sales invoices (Annexure C) and purchase invoices (Annexure A).</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Reconciliation of input tax adjustments to maximize cash flow savings legally.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Electronic submission of monthly returns on FBR IRIS and Provincial Portals (PRA, SRB, KPRA).</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Generation of CPR (Computerized Payment Receipts) for tax payment liabilities.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Handling sales tax withholding returns (Annexure I) and sales tax audit notices.</li>
            </ul>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'What are the monthly due dates for filing Sales Tax Returns in Pakistan?', a: 'Under FBR rules, the sales tax cycle follows strict statutory deadlines every month:\n• Tax Payment (PSID / CPR Deposit): Due by the 15th of the month following the tax period.\n• Return Submission: Final electronic return submission on IRIS is due by the 18th of the month.\n• Note: Provincial authorities (PRA, SRB, KPRA) follow similar schedules, typically falling between the 15th and 18th of each month.' },
                { q: 'What happens if I miss the sales tax filing deadline?', a: 'Missing the deadline results in an automatic penalty (minimum PKR 10,000 to PKR 25,000 for late filing under the Sales Tax Act, 1990). Furthermore, your profile will be flagged, preventing you from issuing valid tax invoices or appearing on the Active Taxpayer List (ATL).' },
                { q: 'Do I still need to file if my company had zero sales or purchases this month?', a: 'Yes. Filing a "Nil" Sales Tax Return is legally mandatory even if there were no business operations or transactions during the month. Failure to file a Nil return triggers automatic late fees and suspension notices.' },
                { q: 'What is the maximum limit for Input Tax Credit claims?', a: 'Under Section 8B of the Sales Tax Act, 1990, a registered person is generally not allowed to adjust input tax in excess of 90% of the output tax payable for that tax period. The remaining balance can be carried forward to subsequent tax periods.' },
              ].map((faq, index) => (
                <div key={index} className="border-b border-brand-light-gray pb-6">
                  <h4 className="font-semibold text-brand-navy mb-2">{faq.q}</h4>
                  <p className="text-sm text-brand-navy/70 leading-relaxed whitespace-pre-wrap">{faq.a}</p>
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
