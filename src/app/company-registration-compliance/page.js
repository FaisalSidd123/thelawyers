'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/services';

export default function CompanyRegistrationCompliance() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        <Navbar />

        {/* Header Section */}
        <section className="pt-20 pb-10 md:pt-40 md:pb-20 px-4 md:px-12 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-burgundy/20 z-0" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">Company Registration & Compliance</span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-paper font-normal leading-tight mb-6 max-w-4xl mx-auto">
              End-to-End Business Registration, Tax & Corporate Compliance Services
            </h1>
            <p className="text-brand-paper/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
              Empowering startups, established enterprises, and foreign entities with seamless SECP incorporations, FBR tax compliance, specialized licensing, and financial advisory across Pakistan.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-6 md:py-16 px-4 md:px-12 bg-brand-cream/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-brand-paper border border-brand-light-gray rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
                >
                  <div className="relative w-full aspect-[4/3] bg-brand-navy overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-brand-navy mb-2 md:mb-3 line-clamp-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed mb-5 md:mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/${service.slug}`}
                        className="inline-flex items-center gap-2 text-brand-burgundy font-semibold text-xs uppercase tracking-wider hover:text-brand-navy transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-20 px-4 md:px-12 bg-brand-navy text-brand-paper text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Need expert guidance for your business?</h2>
            <p className="text-sm text-brand-paper/70 mb-8">
              Our corporate legal team is ready to help you navigate the complexities of registration and compliance in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all shadow-lg"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+923073685421"
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
