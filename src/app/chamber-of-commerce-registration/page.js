'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ChamberOfCommerceRegistration() {
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
                Chamber of Commerce Membership Registration Services
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Elevate your corporate standing, unlock international trade privileges, obtain commercial visa recommendation letters, and join elite business networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Chamber Membership Now</span>
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
            <div className="flex-1 w-full relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl border border-brand-paper/15 bg-brand-navy/60 p-1 md:p-2">
                <Image
                  src="/sevices images/Chamber of Commerce Registration.jpeg"
                  alt="Chamber of Commerce Registration"
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
              Membership in a recognized Chamber of Commerce and Industry is a major milestone for any operating business in Pakistan. A Chamber membership validates your commercial standing, unlocks access to international trade delegations, provides essential recommendation letters for foreign business visas, and is a mandatory legal prerequisite for import/export licensing, government tender participation, and specialized corporate operations.
              <br/><br/>
              Whether you run a sole proprietorship in Lahore, an expanding partnership in Karachi, or a corporation in Islamabad, The Lawyers streamlines your entire Chamber enrollment process—from document preparation and proposer/seconder endorsement to certificate issuance.
            </p>

            <div className="bg-brand-navy text-brand-paper p-6 md:p-8 rounded-md mb-8 md:mb-12 text-center">
              <h4 className="font-serif text-lg md:text-xl mb-3 md:mb-4">Planning International Business Travel or Applying for Import/Export Licenses?</h4>
              <p className="text-xs md:text-sm text-brand-paper/80 mb-5 md:mb-6 max-w-2xl mx-auto">
                Embassies and government bodies heavily prioritize businesses backed by an active Chamber Membership Certificate. Consult our corporate team to fast-track your enrollment.
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Consult Our Legal Team on WhatsApp
              </a>
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Chambers We Process Memberships For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-brand-navy/80 mb-8 md:mb-12">
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Lahore Chamber of Commerce & Industry (LCCI)</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Karachi Chamber of Commerce & Industry (KCCI)</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Islamabad Chamber of Commerce & Industry (ICCI)</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span>Rawalpindi, Faisalabad, Sialkot, and other regional Chambers across Pakistan.</span></li>
            </ul>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Membership Classes Available</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Corporate Class Membership</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed mb-3 md:mb-4">
                  <strong>Target Audience:</strong> SECP-registered Private Limited companies, Public Limited entities, Multi-nationals, and large Partnership firms (AOPs) meeting prescribed turnover or capital thresholds.
                </p>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  <strong>Key Privileges:</strong> Full voting rights in Chamber elections, priority executive delegation seats, and top-tier visa recommendation credentials.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-5 md:p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy mt-0.5 shrink-0" />
                  <span>Associate Class Membership</span>
                </h4>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed mb-3 md:mb-4">
                  <strong>Target Audience:</strong> Sole Proprietorships, small Partnership firms, and emerging small-and-medium enterprises (SMEs).
                </p>
                <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed">
                  <strong>Key Privileges:</strong> Access to trade directories, official Chamber verification, networking forums, and standard visa recommendation support.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-4 md:mb-6">Key Benefits of Chamber Membership</h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-brand-navy/80 mb-8 md:mb-12">
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span><strong>Official Business Credibility:</strong> Instantly raises your profile with banks, foreign buyers, and domestic corporate clients.</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span><strong>Visa Recommendation Letters:</strong> Essential for securing business visas to Europe, USA, UK, China, Turkey, UAE, and Asian trade hubs.</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span><strong>Import / Export Operations:</strong> Prerequisite for registering with WeBOC (Web Based One Customs) and obtaining international trade authorizations.</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span><strong>Government Tenders & Bidding:</strong> Mandatory requirement for participating in government, defense, and multinational procurement contracts.</span></li>
              <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <span><strong>Policy Representation & Dispute Resolution:</strong> Access to official arbitration channels and policy advocacy regarding tax and trade issues.</span></li>
            </ul>

            <div className="bg-brand-cream/40 border border-brand-burgundy/30 p-8 rounded-md text-center">
              <h4 className="font-serif text-xl mb-4 text-brand-navy">Need Proposers & Seconders for Your Membership Application?</h4>
              <p className="text-sm text-brand-navy/80 mb-6 max-w-2xl mx-auto">
                Chamber applications strictly require endorsements from two existing active Chamber members. The Lawyers assists in verifying and structuring your nomination file properly. Documents vary based on your desired registration type.
              </p>
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-burgundy text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Contact Us for Requirements
              </a>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
