'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Building2, Scale, ShieldCheck, FileText,
  CheckCircle2, ArrowRight, Star, MessageSquare, Sparkles, ChevronRight,
  Clock, Shield, Award, Users, HelpCircle, ChevronLeft
} from 'lucide-react';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import LeadCaptureBar from '@/components/LeadCaptureBar';
import Footer from '@/components/Footer';

export default function Home() {
  // Modal State for Consultation / Inquiry
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Background Slideshow State for Hero Section
  const heroBackgrounds = [
    {
      url: '/hero_bg_1.png',
      caption: 'Supreme Court & High Court Advocacy',
      sub: 'Decades of combined trial court legal excellence'
    },
    {
      url: '/hero_bg_2.png',
      caption: 'Corporate, Tax & Regulatory Advisory',
      sub: 'SECP, FBR, PSEB, and international trade compliance'
    },
    {
      url: '/hero_bg_3.png',
      caption: 'Intellectual Property & Legal Protection',
      sub: 'IPO Pakistan trademark registration & dispute defense'
    },
    {
      url: '/hero-arch-modern.png',
      caption: 'Full-Spectrum Defense & Litigation',
      sub: 'Property, civil, family, and criminal trial advocacy'
    }
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // Auto-rotate Hero background every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'SECP Company Formation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Auto trigger WhatsApp consultation with formatted details
      const waMessage = encodeURIComponent(
        `Hello The Lawyers!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService Needed: ${formData.service}\nDetails: ${formData.message}`
      );
      window.open(`https://wa.me/923366050615?text=${waMessage}`, '_blank');
    }, 1000);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-paper font-sans text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper">
        
        {/* Navigation & Announcement Bar */}
        <Navbar onOpenConsultation={() => setIsModalOpen(true)} />

        {/* SECTION 2: HERO SECTION (Above the Fold) with Dynamic Background Slideshow */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden min-h-[85vh] flex items-center justify-center">
          
          {/* Dynamic Cross-Fading Premium Background Carousel */}
          <div className="absolute inset-0 z-0 bg-brand-navy overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={bgIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={heroBackgrounds[bgIndex].url}
                  alt={heroBackgrounds[bgIndex].caption}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dark Luxury Gradient Overlays for perfect typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/75 to-brand-navy/95 backdrop-brightness-[0.85]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-navy/40 to-brand-navy/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-paper/10 border border-brand-paper/20 backdrop-blur-md text-xs font-semibold text-amber-300 mb-6 shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Premier Legal & Regulatory Practice in Pakistan</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-brand-paper leading-tight tracking-tight mb-6 drop-shadow-md"
              >
                Comprehensive Legal & Corporate Solutions Under One Roof
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-brand-paper/90 max-w-3xl leading-relaxed mb-8 drop-shadow-sm font-light"
              >
                From company registration and tax filing to complex litigation—we protect your business, family, and assets with proven legal expertise.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-brand-burgundy hover:bg-red-700 text-brand-paper px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group cursor-pointer border border-red-500/30"
                >
                  <span>Get Free Tax & Business Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/923366050615?text=Hello%2C%20I%20need%20to%20speak%20to%20a%20litigation%20lawyer%20regarding%20a%20court%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-paper/15 hover:bg-brand-paper/25 text-brand-paper border border-brand-paper/30 backdrop-blur-md px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-amber-400" />
                  <span>Speak to a Litigation Lawyer</span>
                </a>
              </motion.div>

              {/* Quick-Trust Badges (Glassmorphism Dark Theme) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-paper/15 w-full"
              >
                <div className="flex items-center justify-center gap-2.5 p-3.5 bg-brand-paper/10 backdrop-blur-md border border-brand-paper/15 rounded-sm shadow-sm text-brand-paper">
                  <span className="text-xl">⚖️</span>
                  <span className="text-xs font-medium text-brand-paper">FBR & SECP Registered Specialists</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 p-3.5 bg-brand-paper/10 backdrop-blur-md border border-brand-paper/15 rounded-sm shadow-sm text-brand-paper">
                  <span className="text-xl">🏛️</span>
                  <span className="text-xs font-medium text-brand-paper">Superior & Subordinate Court Practice</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 p-3.5 bg-brand-paper/10 backdrop-blur-md border border-brand-paper/15 rounded-sm shadow-sm text-brand-paper">
                  <span className="text-xl">⚡</span>
                  <span className="text-xs font-medium text-brand-paper">100% Digital & Hassle-Free Filing</span>
                </div>
              </motion.div>

              {/* Slideshow Controls & Indicators */}
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  {heroBackgrounds.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setBgIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        bgIndex === idx
                          ? 'w-8 bg-amber-400'
                          : 'w-2 bg-brand-paper/40 hover:bg-brand-paper/70'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-amber-200/80 font-medium tracking-wide">
                  {heroBackgrounds[bgIndex].caption} — <span className="text-brand-paper/60">{heroBackgrounds[bgIndex].sub}</span>
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: QUICK ACTION / LEAD CAPTURE BAR */}
        <LeadCaptureBar />

        {/* SECTION 4: PRACTICE AREAS (Two-Column Interactive Grid) */}
        <section id="practice-areas" className="py-20 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Our Legal Practice
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2">
                Structured Practice Wings Tailored to Your Needs
              </h2>
              <p className="text-sm text-brand-navy/70 mt-3">
                To keep corporate services and traditional legal cases organized, present them in two visual cards:
              </p>
            </div>

            {/* Two-Column Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card 1: Corporate & Business */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-brand-paper to-brand-cream/40 border border-brand-light-gray rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Service 1 Featured Image Header */}
                  <div className="relative w-full h-56 md:h-64 overflow-hidden bg-brand-navy/5">
                    <Image
                      src="/service1.png"
                      alt="Corporate, Tax & Business Registration Services"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-navy text-brand-paper rounded-full shadow-md">
                        Corporate Wing
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-brand-paper">
                      <span className="text-2xl">🏢</span>
                      <h3 className="font-serif text-2xl font-semibold text-brand-paper drop-shadow-sm mt-1">
                        Corporate, Tax & Business Registration
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-xs text-brand-navy/75 mb-6 leading-relaxed">
                      Fast, procedural, and end-to-end legal compliance for startups and businesses.
                    </p>

                    <ul className="flex flex-col gap-3.5 text-xs text-brand-navy/90 mb-8">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>SECP Company Formation:</strong> Private Limited, SMC, Single Member, Partnerships, & LLPs.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>Tax & Compliance Services:</strong> Annual Income Tax Returns (FBR), NTN, & Sales Tax (STRN) Registration.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>PSEB Registration:</strong> Call center & IT company registration for tax exemptions and export benefits.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>Chamber of Commerce:</strong> Membership & filing for international trade and legal status.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>NGO & Association Registration:</strong> Legal structuring under Societies Act and Trust Act.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-burgundy text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors w-full"
                  >
                    <span>Explore All Business Services →</span>
                  </a>
                </div>
              </motion.div>

              {/* Card 2: Litigation & Dispute */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-brand-paper to-brand-cream/40 border border-brand-light-gray rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Service 2 Featured Image Header */}
                  <div className="relative w-full h-56 md:h-64 overflow-hidden bg-brand-navy/5">
                    <Image
                      src="/service2.png"
                      alt="Litigation & Dispute Resolution Legal Practice"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-burgundy text-brand-paper rounded-full shadow-md">
                        Court Practice Wing
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-brand-paper">
                      <span className="text-2xl">🏛️</span>
                      <h3 className="font-serif text-2xl font-semibold text-brand-paper drop-shadow-sm mt-1">
                        Litigation & Dispute Resolution
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-xs text-brand-navy/75 mb-6 leading-relaxed">
                      High-trust court representation by experienced attorneys.
                    </p>

                    <ul className="flex flex-col gap-3.5 text-xs text-brand-navy/90 mb-8">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>Corporate & Commercial Law:</strong> Contract drafting, shareholder disputes, and corporate compliance.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>Property & Real Estate Law:</strong> Land disputes, title verification, stay orders, and property transfer.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>Family & Civil Litigation:</strong> Khula/Divorce, child custody, inheritance disputes, and succession certificates.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                        <span><strong>Criminal Law:</strong> Bail matters, FIR quashment, white-collar crimes, and NAB/Anti-Terrorism defense.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors w-full"
                  >
                    <span>Book a Legal Counsel Consultation →</span>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 5: "WHY CHOOSE THE LAWYERS?" (Trust & Process Section) */}
        <section id="why-choose-us" className="py-20 px-4 md:px-12 bg-brand-cream/40 border-y border-brand-light-gray/60">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Our Advantage
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2">
                "Why Choose The Lawyers?"
              </h2>
              <p className="text-sm text-brand-navy/70 mt-2">
                A Simple Choice for Complex Legal Issues
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pillar 1 */}
              <div className="bg-brand-paper p-8 border border-brand-light-gray rounded-sm shadow-xs relative">
                <div className="text-4xl font-serif text-brand-burgundy/30 font-bold mb-4">01</div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy mb-3">
                  1. Streamlined Digital Execution
                </h3>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  Send your documents via email or WhatsApp—we handle SECP, FBR, and regulatory filings without requiring unnecessary office visits.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-brand-paper p-8 border border-brand-light-gray rounded-sm shadow-xs relative">
                <div className="text-4xl font-serif text-brand-burgundy/30 font-bold mb-4">02</div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy mb-3">
                  2. Experienced Legal Minds
                </h3>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  Our team includes seasoned advocates and corporate legal experts with years of practical experience across Pakistan's regulatory bodies and court systems.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-brand-paper p-8 border border-brand-light-gray rounded-sm shadow-xs relative">
                <div className="text-4xl font-serif text-brand-burgundy/30 font-bold mb-4">03</div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy mb-3">
                  3. Transparent Pricing & Speed
                </h3>
                <p className="text-xs text-brand-navy/75 leading-relaxed">
                  No hidden charges. Clear timeline commitments for corporate registrations, tax filings, and court appearances.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: HOW WE WORK (3-Step Process Graphic) */}
        <section id="how-we-work" className="py-20 px-4 md:px-12 bg-brand-navy text-brand-paper">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Seamless Legal Workflow
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-paper mt-2">
                How We Work (3-Step Process)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              
              {/* Step 1 */}
              <div className="bg-brand-paper/5 border border-brand-paper/10 p-8 rounded-sm text-center flex flex-col items-center relative">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy text-brand-paper font-bold flex items-center justify-center text-lg mb-4 shadow-md">
                  1
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-paper mb-2">
                  Step 1: Initial Assessment
                </h3>
                <p className="text-xs text-brand-paper/70 leading-relaxed">
                  Share your issue or documents via WhatsApp, email or consultation call.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-brand-paper/5 border border-brand-paper/10 p-8 rounded-sm text-center flex flex-col items-center relative">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy text-brand-paper font-bold flex items-center justify-center text-lg mb-4 shadow-md">
                  2
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-paper mb-2">
                  Step 2: Document Processing
                </h3>
                <p className="text-xs text-brand-paper/70 leading-relaxed">
                  Our corporate & litigation team prepares and files your case with exact regulatory compliance.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-brand-paper/5 border border-brand-paper/10 p-8 rounded-sm text-center flex flex-col items-center relative">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-brand-paper font-bold flex items-center justify-center text-lg mb-4 shadow-md">
                  3
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-paper mb-2">
                  Step 3: Complete Execution
                </h3>
                <p className="text-xs text-brand-paper/70 leading-relaxed">
                  Get your registration certificate or court order delivered directly to your doorstep.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 7: CLIENT REVIEWS / SUCCESS STORIES SECTION */}
        <section id="reviews" className="py-20 px-4 md:px-12 bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Client Testimonials
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Testimonial 1 */}
              <div className="bg-brand-cream/30 border border-brand-light-gray p-8 rounded-md shadow-xs">
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-sm font-serif italic text-brand-navy/85 mb-6 leading-relaxed">
                  "The Lawyers made our company registration and PSEB setup completely seamless. Handled everything professionally within days!"
                </p>
                <div className="border-t border-brand-light-gray/60 pt-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-navy">— CEO, Tech Solutions Firm</span>
                  <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">Verified Business Client</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-brand-cream/30 border border-brand-light-gray p-8 rounded-md shadow-xs">
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-sm font-serif italic text-brand-navy/85 mb-6 leading-relaxed">
                  "Highly professional team for handling property legal matters. Their advice saved us from a costly land dispute."
                </p>
                <div className="border-t border-brand-light-gray/60 pt-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-navy">— Real Estate Investor</span>
                  <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">Verified Litigation Client</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 8: CONSULTATION / CONTACT FORM */}
        <section id="contact" className="py-20 px-4 md:px-12 bg-gradient-to-b from-brand-cream/40 to-brand-paper border-t border-brand-light-gray/60">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                Direct Inquiry
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-navy mt-2">
                Schedule Your Legal Consultation
              </h2>
              <p className="text-xs sm:text-sm text-brand-navy/70 mt-2">
                Fill out the form below or message us directly on WhatsApp for immediate guidance.
              </p>
            </div>

            <div className="bg-brand-paper border border-brand-light-gray rounded-md p-8 md:p-10 shadow-lg">
              
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-navy mb-2">Request Submitted Successfully!</h3>
                  <p className="text-xs text-brand-navy/70 max-w-md mx-auto mb-6">
                    Our senior legal counsel has received your details. We have also launched WhatsApp for immediate real-time chat.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-brand-burgundy underline hover:text-brand-navy"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full bg-brand-cream/20 border border-brand-light-gray rounded-sm px-4 py-3 text-xs text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full bg-brand-cream/20 border border-brand-light-gray rounded-sm px-4 py-3 text-xs text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-brand-cream/20 border border-brand-light-gray rounded-sm px-4 py-3 text-xs text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors cursor-pointer"
                    >
                      <option value="SECP Company Formation">SECP Company Formation (Private Limited, SMC, LLP)</option>
                      <option value="Tax & Compliance (FBR / STRN)">Annual Income Tax Returns & Sales Tax STRN</option>
                      <option value="PSEB IT / Call Center Setup">PSEB IT & Call Center Registration</option>
                      <option value="Chamber of Commerce Membership">Chamber of Commerce Membership</option>
                      <option value="NGO / Association Registration">NGO & Association Registration</option>
                      <option value="Corporate & Commercial Litigation">Corporate & Commercial Law</option>
                      <option value="Property & Real Estate Dispute">Property & Real Estate Litigation</option>
                      <option value="Family & Child Custody Law">Family & Civil Litigation</option>
                      <option value="Criminal Defense & Bail">Criminal Defense & Bail Matters</option>
                    </select>
                  </div>

                  {/* Brief Message */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                      Brief Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your legal or regulatory matter..."
                      className="w-full bg-brand-cream/20 border border-brand-light-gray rounded-sm px-4 py-3 text-xs text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-brand-burgundy hover:bg-red-800 text-brand-paper px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>

                    <a
                      href="https://wa.me/923366050615?text=Hello%20The%20Lawyers%2C%20I%20need%20immediate%20legal%20guidance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Immediately</span>
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

        {/* SECTION 9: FOOTER */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}
