'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Scale, Zap, Shield, MessageSquare, Phone, ChevronDown,
  CheckCircle2, Compass, Award, Target, HelpCircle, ArrowRight
} from 'lucide-react';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Where are your legal services available?",
      a: "Our corporate, tax, and licensing services (SECP, FBR, PSEB, Chamber, etc.) are conducted digitally and served across all of Pakistan. Our litigation team represents clients in Subordinate and Superior Courts."
    },
    {
      q: "Do I need to meet in person to start corporate or tax work?",
      a: "No. You can send your required documents electronically via WhatsApp or email, and our team will handle the filings remotely while keeping you updated at every step."
    },
    {
      q: "How do you handle initial legal consultations?",
      a: "We offer quick preliminary guidance via call or WhatsApp to understand your matter. For complex litigation or corporate structuring, we schedule detailed legal strategy sessions."
    }
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        
        {/* Navigation */}
        <Navbar />

        {/* Page Header / Banner Section */}
        <section className="relative pt-32 pb-12 bg-gradient-to-b from-brand-paper via-brand-cream/40 to-brand-paper border-b border-brand-light-gray/60">
          <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-brand-burgundy uppercase tracking-widest"
            >
              About Us — Firm Identity & Wings
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-brand-navy mt-4 mb-6 leading-tight max-w-4xl mx-auto"
            >
              Blending Corporate Efficiency with High-Stakes Legal Defense
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-brand-navy/80 max-w-3xl mx-auto leading-relaxed"
            >
              Welcome to The Lawyers—a full-service legal practice dedicated to empowering businesses with seamless regulatory compliance and protecting individuals with steadfast court representation across Pakistan.
            </motion.p>

          </div>
        </section>

        {/* 1. Firm Overview & Core Identity */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-cream/30 border border-brand-light-gray rounded-md p-8 md:p-12 shadow-xs">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Firm Identity
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-brand-navy mt-2 mb-6">
                Modern Legal Counsel Built for Complex Challenges
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-brand-navy/85 leading-relaxed">
                <p>
                  At <strong>The Lawyers</strong>, we recognize that modern clients require a dynamic approach to legal representation—one that combines rapid regulatory execution with seasoned courtroom strategy.
                </p>
                <p>
                  Operating across Pakistan's regulatory landscape and court systems, our firm bridges the gap between fast-paced corporate execution and high-trust legal advocacy. Whether you are an entrepreneur launching a tech startup needing SECP company incorporation, PSEB compliance, and FBR tax setup, or an individual facing a high-stakes property dispute, family matter, or trial litigation, The Lawyers provides dedicated, single-window legal support.
                </p>
                <p>
                  By integrating digital-first workflows into our corporate advisory services, we eliminate unnecessary bureaucratic delays while maintaining the highest standard of legal thoroughness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Two Practice Wings */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-brand-cream/40 border-y border-brand-light-gray/60">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Our Legal Services
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2 mb-8">
                Explore Our Comprehensive Legal Services
              </h2>
              <Link
                href="/company-registration-compliance"
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-burgundy text-brand-paper py-4 px-8 rounded-sm text-sm font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Why Choose "The Lawyers"? (4 Operational Pillars) */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Our Operational Pillars
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2">
                Why Choose "The Lawyers"?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-brand-cream/30 p-6 border border-brand-light-gray rounded-sm">
                <Zap className="w-6 h-6 text-brand-burgundy mb-3" />
                <h4 className="font-serif text-base font-semibold text-brand-navy mb-2">
                  Digital-First & Paperless
                </h4>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  We respect your time. Corporate filings, tax registrations, and compliance updates are processed digitally, meaning you can handle your business legalities from anywhere without unnecessary office visits.
                </p>
              </div>

              <div className="bg-brand-cream/30 p-6 border border-brand-light-gray rounded-sm">
                <Shield className="w-6 h-6 text-brand-burgundy mb-3" />
                <h4 className="font-serif text-base font-semibold text-brand-navy mb-2">
                  Full-Spectrum Protection
                </h4>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  From drafting your business’s initial founding agreements and securing government licenses to defending your interests in court, we protect you at every stage of growth.
                </p>
              </div>

              <div className="bg-brand-cream/30 p-6 border border-brand-light-gray rounded-sm">
                <Scale className="w-6 h-6 text-brand-burgundy mb-3" />
                <h4 className="font-serif text-base font-semibold text-brand-navy mb-2">
                  Direct & Transparent
                </h4>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  No dense legal jargon or hidden cost structures. We give you clear legal pathways, realistic timelines, and actionable assessments from day one.
                </p>
              </div>

              <div className="bg-brand-cream/30 p-6 border border-brand-light-gray rounded-sm">
                <Target className="w-6 h-6 text-brand-burgundy mb-3" />
                <h4 className="font-serif text-base font-semibold text-brand-navy mb-2">
                  Tailored Strategy
                </h4>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  Every business model and court case is unique. We build tailored strategies designed around your exact commercial or legal objectives.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Our Vision & Mission */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-brand-navy text-brand-paper">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-brand-paper/5 p-8 border border-brand-paper/10 rounded-md">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                OUR MISSION
              </span>
              <h3 className="font-serif text-2xl font-normal text-brand-paper mt-2 mb-4">
                Empowering Growth & Eliminating Friction
              </h3>
              <p className="text-xs sm:text-sm text-brand-paper/80 leading-relaxed">
                At The Lawyers, our mission is to eliminate legal friction for businesses and deliver steadfast advocacy for individuals across Pakistan. We are dedicated to transforming traditional legal practices by delivering swift, transparent, and digital-first corporate, tax, and regulatory solutions. Whether helping an entrepreneur navigate SECP incorporations and FBR compliance or representing a client in high-stakes court litigation, we combine meticulous legal precision with practical strategy—ensuring our clients remain protected, compliant, and positioned for long-term success.
              </p>
            </div>

            <div className="bg-brand-paper/5 p-8 border border-brand-paper/10 rounded-md">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                OUR VISION
              </span>
              <h3 className="font-serif text-2xl font-normal text-brand-paper mt-2 mb-4">
                Setting the Benchmark for Modern Advocacy
              </h3>
              <p className="text-xs sm:text-sm text-brand-paper/80 leading-relaxed">
                Our vision is to set the benchmark for the modern Pakistani law firm—where corporate compliance is effortless, tax governance is transparent, and legal representation is executed with uncompromised integrity. We aim to build a unified legal hub that bridges the gap between regulatory state bodies and the court system. By integrating tech-driven efficiency with decades of legal expertise, we strive to be the most trusted, accessible, and results-driven legal partner for startups, established enterprises, and individuals nationwide.
              </p>
            </div>

          </div>
        </section>

        {/* 5. Frequently Asked Questions (FAQs) */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Practice Insights
              </span>
              <h2 className="font-serif text-3xl font-normal text-brand-navy mt-2">
                Frequently Asked Questions About Our Practice
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-brand-light-gray rounded-sm overflow-hidden bg-brand-cream/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-serif text-base font-semibold text-brand-navy flex items-center justify-between gap-4 cursor-pointer hover:text-brand-burgundy transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-brand-burgundy' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-brand-navy/80 leading-relaxed border-t border-brand-light-gray/40 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Bottom Call to Action (CTA) */}
        <section className="py-16 px-4 md:px-12 bg-brand-burgundy text-brand-paper">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-3">
              Ready to Discuss Your Corporate or Legal Needs?
            </h2>
            <p className="text-xs sm:text-sm text-brand-paper/85 max-w-xl mx-auto mb-8">
              Whether you need to register a business, resolve a tax issue, or require representation in a court matter, our legal team is ready to guide you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923366050615?text=Hello%2C%20I%20want%20to%20discuss%20my%20legal%20needs."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <a
                href="tel:+923366050615"
                className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy/90 text-brand-paper px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Our Legal Team</span>
              </a>
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}
