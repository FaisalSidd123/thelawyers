'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Company Registration',
    slug: 'company-registration',
    image: '/sevices images/Company Registration.jpeg',
    description: 'Establish a recognized legal identity for your business. We handle full corporate structuring, SECP incorporations, FBR NTN setup, and post-incorporation compliance.',
  },
  {
    title: 'Income Tax Filing',
    slug: 'income-tax-filing',
    image: '/sevices images/Income tax filing.jpeg',
    description: 'Whether you are looking for a trusted tax consultant or searching online for a reliable tax advisor, we make the entire process of income tax return filing simple, fast, and 100% remote.',
  },
  {
    title: 'NGO, NPO & Trust Registration',
    slug: 'ngo-npo-trust-registration',
    image: '/sevices images/NGO, NPO AND TRUST.png',
    description: 'Secure legal status, donor credibility, tax exemptions, and government approvals for non-profit organizations and social foundations.',
  },
  {
    title: 'NTN Registration',
    slug: 'ntn-registration',
    image: '/sevices images/NTN Registration.png',
    description: 'Fast, error-free National Tax Number (NTN) registration on FBR IRIS to ensure compliance and Active Taxpayer status.',
  },
  {
    title: 'Sales Tax Registration (STRN)',
    slug: 'sales-tax-registration',
    image: '/sevices images/Sales Tax Registration (STRN).png',
    description: 'Obtain your Sales Tax Registration Number (STRN) for goods and services to issue tax invoices, claim input adjustments, and secure government contracts.',
  },
  {
    title: 'Sales Tax Filing',
    slug: 'sales-tax-filing',
    image: '/sevices images/Sales tax filing.png',
    description: 'Precise monthly sales tax returns, Annexure reconciliations, input tax claiming, and audit protection for FBR and Provincial Revenue Authorities.',
  },
  {
    title: 'Chamber of Commerce Registration',
    slug: 'chamber-of-commerce-registration',
    image: '/sevices images/Chamber of Commerce Registration.jpeg',
    description: 'Elevate your corporate standing, unlock international trade privileges, obtain commercial visa recommendation letters, and join elite business networks.',
  },
  {
    title: 'Food License',
    slug: 'food-license',
    image: '/sevices images/Food License.jpeg',
    description: 'Complete legal assistance for obtaining food safety licenses for restaurants, cafes, food processing units, and catering businesses.',
  },
  {
    title: 'PSEB Registration',
    slug: 'pseb-registration',
    image: '/sevices images/PSEB Registration.png',
    description: 'Unlock 100% income tax credits, foreign remittance facilitation, whitelisted IP call center setups, and international export credibility with Pakistan Software Export Board.',
  },
  {
    title: 'Call Centre Registration',
    slug: 'call-centre-registration',
    image: '/sevices images/Call Centre Registration.png',
    description: 'Secure mandatory legal approvals, call center registrations, and IP whitelisting from PSEB and PTA for international and domestic call center operations.',
  },
  {
    title: 'Pakistan Single Window (PSW) Registration',
    slug: 'psw-registration',
    image: '/sevices images/Chamber of Commerce Registration.jpeg', // Using fallback since not provided
    description: 'Mandatory digital platform registration for importers, exporters, customs clearing agents, and international traders in Pakistan.',
  },
  {
    title: 'P@SHA Registration',
    slug: 'pasha-registration',
    image: '/sevices images/P@SHA Registration.jpeg',
    description: 'Join the Pakistan Software Houses Association (P@SHA) to amplify your voice, gain technology network access, and secure industry recognition.',
  }
];

export default function CompanyRegistrationCompliance() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        <Navbar />

        {/* Header Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-12 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-burgundy/20 z-0" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Company Registration & Compliance</span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-paper font-normal leading-tight mb-6 max-w-4xl mx-auto">
              End-to-End Business Registration, Tax & Corporate Compliance Services
            </h1>
            <p className="text-brand-paper/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
              Empowering startups, established enterprises, and foreign entities with seamless SECP incorporations, FBR tax compliance, specialized licensing, and financial advisory across Pakistan.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-brand-paper border border-brand-light-gray rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
                >
                  <div className="relative w-full h-36 md:h-52 bg-brand-navy/90 p-1 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 md:p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-[13px] sm:text-base md:text-xl font-semibold text-brand-navy mb-2 md:mb-3 line-clamp-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-brand-navy/70 leading-relaxed mb-4 md:mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/${service.slug}`}
                        className="inline-flex items-center gap-1.5 md:gap-2 text-brand-burgundy font-semibold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider hover:text-brand-navy transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-12 bg-brand-navy text-brand-paper text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Need expert guidance for your business?</h2>
            <p className="text-sm text-brand-paper/70 mb-8">
              Our corporate legal team is ready to help you navigate the complexities of registration and compliance in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all shadow-lg"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+923366050615"
                className="bg-brand-paper/10 hover:bg-brand-paper/20 border border-brand-paper/20 text-brand-paper px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all"
              >
                Call Our Legal Team
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
