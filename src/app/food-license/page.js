'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FoodLicense() {
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
                Food Authority Licensing Services across Pakistan
              </h1>
              <p className="text-brand-paper/80 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Complete legal assistance for obtaining food safety licenses for restaurants, cafes, food processing units, and catering businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923366050615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Apply for Food License Now</span>
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
                  src="/sevices images/Food License.jpeg"
                  alt="Food License"
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
              Operating any food-related business in Pakistan without a valid license from the relevant provincial or federal Food Authority is a severe legal violation. Unlicensed operations face immediate venue sealing, heavy administrative fines, product confiscation, and criminal prosecution.
              <br/><br/>
              At The Lawyers, we guide food entrepreneurs, restaurant owners, manufacturers, and importers through the end-to-end licensing process—ensuring kitchen layout compliance, staff medical clearances, hassle-free inspections, and prompt license issuance.
            </p>

            <div className="bg-brand-navy text-brand-paper p-8 rounded-md mb-12 text-center">
              <h4 className="font-serif text-xl mb-4">Opening a Restaurant, Cloud Kitchen, or Food Factory?</h4>
              <p className="text-sm text-brand-paper/80 mb-6 max-w-2xl mx-auto">
                Food authorities strictly inspect food preparation zones, water filtration systems, waste management, and staff hygiene before issuing licenses. Speak with our legal consultants to ensure your premises pass inspection on the first visit.
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Authorities We Work With</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Punjab Food Authority (PFA)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Sindh Food Authority (SFA)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> KP Food Safety & Halal Food Authority (KP-FS&HFA)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> ICT Food Safety Authority (Islamabad)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-navy mb-6">Our Service Scope</h3>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <strong>Authority Portal Registration:</strong> Drafting applications and filing digital submissions.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <strong>Pre-Inspection Audit:</strong> Conducting preliminary compliance audits for kitchen layouts, etc.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <strong>Staff Medical Clearances:</strong> Guiding management on obtaining mandatory medical fitness certificates.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <strong>Inspection Support:</strong> Coordinating with official food safety officers during inspections.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-burgundy mt-0.5 shrink-0" /> <strong>License Delivery & Renewals:</strong> Final license handover, display compliance guidance, and renewals.</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-brand-navy mb-6">Target Business Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Hospitality & Retail
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Restaurants, Cafes, Fast Food Outlets, Bakeries, Cloud Kitchens, Ice Cream Parlors, and Dhabas.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Manufacturing & Industrial
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Food Processing Plants, Beverage Factories, Flour/Rice Mills, Packaging Units, and Edible Oil Refineries.
                </p>
              </div>
              <div className="bg-brand-cream/40 p-6 rounded-md border border-brand-light-gray">
                <h4 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-burgundy" /> Supply Chain & Services
                </h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed">
                  Food Importers, Exporters, Cold Storage Warehouses, Wholesale Distributors, Catering Services, and Educational Institution Canteens.
                </p>
              </div>
            </div>

            <div className="bg-brand-cream/40 border border-brand-burgundy/30 p-8 rounded-md text-center">
              <h4 className="font-serif text-xl mb-4 text-brand-navy">Planning to Partner with Foodpanda or Supply Supermarkets?</h4>
              <p className="text-sm text-brand-navy/80 mb-6 max-w-2xl mx-auto">
                Aggregators and major retail chains mandate a valid Food Authority License and food-grade packaging compliance before onboarding. Let The Lawyers fast-track your approval.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
