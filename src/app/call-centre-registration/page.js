'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CallCentreRegistration() {
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
                Legal Call Centre Registration & PTA/PSEB Licensing
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Secure mandatory legal approvals, call center registrations, and IP whitelisting from PSEB and PTA for international and domestic call center operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Register Call Centre Today</span>
                </a>
                <a
                  href="tel:+923366050615"
                  className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Speak to Legal Team</span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto rounded-md overflow-hidden shadow-2xl border border-brand-paper/10">
                <Image
                  src="/sevices images/Call Centre Registration.png"
                  alt="Call Centre Registration"
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
              Operating an international or domestic call center in Pakistan without official clearance from the Pakistan Software Export Board (PSEB) and the Pakistan Telecommunication Authority (PTA) is an illegal act under telecommunication laws.
              <br/><br/>
              Unregistered Voice over IP (VoIP) operations and non-whitelisted IP routing trigger immediate automated network blocks, ISP bandwidth cutoffs, abrupt premises raids, heavy regulatory fines, and legal prosecution for unauthorized call termination.
              <br/><br/>
              At The Lawyers, we handle the complete end-to-end legal and technical workflow—from SECP company incorporation and PSEB Call Center Portal registration to PTA static IP whitelisting and foreign currency account compliance. Whether you operate a 5-seat outbound agency or a multi-location enterprise BPO, we ensure your telecommunication channels remain 100% compliant, secure, and uninterrupted.
            </p>

            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Planning to Launch an Inbound/Outbound Call Center or BPO?</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                Bypassing PTA IP whitelisting or using non-reported VoIP lines risks immediate internet termination by your ISP. Speak with our legal consultants before deploying your network infrastructure.
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
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Comprehensive Legal Workflow</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Verification of business entity structure (Company or Partnership).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Drafting and submitting Call Center Registration applications on the PSEB portal.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Facilitating PTA coordination for legal Voice over IP (VoIP) and Bandwidth allocation.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Securing Whitelisted IP Approvals to ensure uninterrupted, legal call routing.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Annual Call Center License Renewals and capacity expansion filings.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Documents Required</h3>
                <p className="text-sm text-brand-navy/70 mb-4">
                  Requirements vary based on your registration tier (Freelancer vs. IT Company vs. Call Center). Contact Us for exact requirements. Generally, you need:
                </p>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Company Registration Certificate (SECP) or Partnership Deed.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> NTN & STRN Certificates.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> ISP Bandwidth Agreement and static IP details.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> Director/Proprietor CNIC copies and lease agreement of operational premises.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-brand-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'What is PTA IP Whitelisting and why is it mandatory for call centers?', a: 'IP Whitelisting is the official regulatory authorization granted by the Pakistan Telecommunication Authority (PTA) that allows your call center\'s static IP address to route Voice over IP (VoIP) traffic across international borders. Without PTA whitelisting, telecom filters automatically identify and block unregistered voice traffic to prevent illegal call termination (grey traffic).' },
                { q: 'How long does the entire Call Center registration and IP whitelisting process take?', a: 'Initial PSEB call center portal approval typically takes 3 to 7 working days after document submission. PTA static IP whitelisting coordination takes an additional 5 to 10 working days once PSEB forwards the verified file to PTA.' },
                { q: 'Can a call center be registered under a Sole Proprietorship?', a: 'While sole proprietorships can register with PSEB, PTA and international enterprise clients strongly recommend forming a Single Member Company (SMC-Pvt Ltd) or Private Limited Company. A corporate structure simplifies multi-seat expansion, bank account opening, and SBP foreign currency remittance retention.' },
                { q: 'What happens if I use dynamic IP addresses instead of static IPs for my call center?', a: 'Call centers cannot use dynamic IP addresses. PTA whitelisting requires fixed, dedicated static IP addresses issued directly by a licensed ISP. Voice traffic originating from non-whitelisted dynamic IPs is subject to instant automated port blocking by local telecom operators.' },
                { q: 'What are the tax benefits of registering a call center with PSEB?', a: 'PSEB-registered call centers exporting BPO, IT, or customer support services qualify for 100% tax credits on foreign IT export earnings under Section 65F of the Income Tax Ordinance, 2001, alongside the right to retain up to 50% of foreign currency receipts in specialized foreign currency bank accounts (ESFCA).' },
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
