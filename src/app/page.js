'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, useReducedMotion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Briefcase, Building, HeartHandshake, 
  Shield, FileText, Compass, ClipboardList, CheckCircle2, 
  ChevronRight, ArrowRight, BookOpen, Users, Bookmark, Award, X
} from 'lucide-react';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Counter from '@/components/Counter';
import Logo from '@/components/Logo';
import Loader from '@/components/Loader';

// Helper component for Redaction bars in Hero
const RedactedLine = ({ text, delay, prefersReducedMotion }) => {
  if (prefersReducedMotion) {
    return (
      <span className="relative inline-block py-1">
        <span className="text-brand-navy font-serif">{text}</span>
      </span>
    );
  }

  return (
    <span className="relative inline-block overflow-hidden py-1">
      {/* Hidden layout placeholder */}
      <span className="opacity-0 select-none font-serif">{text}</span>
      {/* Real text revealed */}
      <motion.span
        className="absolute left-0 top-0 bottom-0 text-brand-navy font-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {text}
      </motion.span>
      {/* Redaction bar mask */}
      <motion.span
        className="absolute inset-0 bg-brand-navy z-10 origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ delay: delay, duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
      />
    </span>
  );
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Form States & Handlers
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    matter: 'Corporate & Business',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', matter: 'Corporate & Business', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Practice Areas Accordion State
  const [activeArea, setActiveArea] = useState(0);

  // Testimonials Auto-Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Team 3D Card Keyboard Focus State
  const [flippedCard, setFlippedCard] = useState(null);

  // Insights Curtain Wipe Article Detail State
  const [wipingArticle, setWipingArticle] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [articleWipingState, setArticleWipingState] = useState('idle'); // 'idle' | 'closing' | 'opening'

  // Scroll Refs for timeline & stats scale
  const timelineRef = useRef(null);
  const statsScaleRef = useRef(null);

  // Scroll scroll progression for timeline draw-on connector line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });

  // Scroll Y hooks for Hero parallax floating cards
  const { scrollY } = useScroll();
  const yStamp1 = useTransform(scrollY, [0, 800], [0, -45]);
  const yStamp2 = useTransform(scrollY, [0, 800], [0, 60]);
  const yStamp3 = useTransform(scrollY, [0, 800], [0, -25]);

  // Settle animation checks for Stats Section SVG Scale
  const isStatsScaleInView = useInView(statsScaleRef, { once: true, margin: "-80px" });

  const statsScaleRotation = isStatsScaleInView && !prefersReducedMotion
    ? { rotate: [0, -10, 8, -4, 1.5, 0] }
    : { rotate: 0 };
  const statsLeftPanY = isStatsScaleInView && !prefersReducedMotion
    ? { y: [0, 5.5, -4.2, 2.1, -0.7, 0] }
    : { y: 0 };
  const statsRightPanY = isStatsScaleInView && !prefersReducedMotion
    ? { y: [0, -5.5, 4.2, -2.1, 0.7, 0] }
    : { y: 0 };

  // Set client mount state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check sessionStorage on client mount to bypass loader if already seen
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('hasSeenLoader');
      if (hasSeen === 'true') {
        setShowLoader(false);
      }
    }
  }, []);

  // Manage Loader Sequence & Body Scroll Lock
  useEffect(() => {
    if (showLoader && mounted) {
      document.body.classList.add('no-scroll');

      const timerExit = setTimeout(() => {
        setIsExiting(true);
      }, 2000); // 2s scale draw + settle duration

      const timerComplete = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
        document.body.classList.remove('no-scroll');
      }, 2600); // 2s + 0.6s exit animation duration

      return () => {
        clearTimeout(timerExit);
        clearTimeout(timerComplete);
        document.body.classList.remove('no-scroll');
      };
    }
  }, [showLoader, mounted]);

  // Testimonial auto-advancer with timeline progress
  useEffect(() => {
    if (showLoader) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [showLoader]);

  // Article Curtain Wipe logic
  const handleArticleClick = (article) => {
    if (prefersReducedMotion) {
      setActiveArticle(article);
      return;
    }
    setArticleWipingState('closing');
    setWipingArticle(article);
    
    // Switch active view when curtains are fully closed (400ms)
    setTimeout(() => {
      setActiveArticle(article);
      setArticleWipingState('opening');
    }, 450);

    // Done opening (900ms)
    setTimeout(() => {
      setArticleWipingState('idle');
      setWipingArticle(null);
    }, 950);
  };

  const handleArticleClose = () => {
    if (prefersReducedMotion) {
      setActiveArticle(null);
      return;
    }
    setArticleWipingState('closing');
    
    setTimeout(() => {
      setActiveArticle(null);
      setArticleWipingState('opening');
    }, 450);

    setTimeout(() => {
      setArticleWipingState('idle');
    }, 950);
  };

  const practiceAreas = [
    {
      icon: Briefcase,
      title: 'Corporate & Business Law',
      index: '01',
      description: 'Consultative guidance for enterprises through incorporation, shareholder covenants, local SECP reporting compliance, asset restructuring, and complex joint-venture formations.'
    },
    {
      icon: Building,
      title: 'Property & Real Estate',
      index: '02',
      description: 'Physical verification registries, land allotment investigations, secure power-of-attorney layouts, commercial leases, and structural representation in property tribunals.'
    },
    {
      icon: HeartHandshake,
      title: 'Family Law & Estates',
      index: '03',
      description: 'Protecting private personal portfolios in probate cases, inheritance structures, partition of assets, and drafting legally robust estate administration directives.'
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      index: '04',
      description: 'Aggressive trial advocacy, bail coordination, and legal defense strategies addressing administrative, compliance, and white-collar regulatory investigations.'
    },
    {
      icon: FileText,
      title: 'Civil Litigation',
      index: '05',
      description: 'Representing commercial and private clients in litigation addressing breach of contract, corporate debt recovery, indemnity claims, and commercial dispute mediation.'
    },
    {
      icon: Compass,
      title: 'Immigration Advisory',
      index: '06',
      description: 'Regulatory visa clearance processing, international relocation compliance, corporate employee residency, and foreign investment pathways.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Operational Consultation',
      description: 'Direct factual intake mapping your specific legal or regulatory environment.'
    },
    {
      number: '02',
      title: 'Evidentiary Assessment',
      description: 'Thorough documentation and statutory review to build clean legal routes.'
    },
    {
      number: '03',
      title: 'Trial & Representation',
      description: 'Definitive execution of casework in negotiations or High Court proceedings.'
    },
    {
      number: '04',
      title: 'Optimal Settle',
      description: 'Reaching predictable, compliant, and structured outcomes for your files.'
    }
  ];

  const testimonials = [
    {
      quote: "The Lawyers provided clear, direct pathways when resolving our commercial title dispute in Clifton. They spoke in direct operational facts rather than confusing legal jargon.",
      author: "Haris K. Lodhi",
      company: "Lodhi Logistics Group",
      caseType: "Commercial Real Estate Dispute"
    },
    {
      quote: "Their SECP regulatory advisory has been indispensable. Partner-led representation meant we could draft bylaws and execute our corporate merger with total compliance.",
      author: "Adnan Ghafoor",
      company: "Nexus Tech Ventures",
      caseType: "Corporate Restructuring"
    },
    {
      quote: "Rigorous attention to detail on estate division. The Lawyers managed our family inheritance litigation with dignity, structural precision, and a successful verdict.",
      author: "Dr. Farhana J. Shah",
      company: "Estate Representative",
      caseType: "Estate Distribution Trial"
    }
  ];

  const articles = [
    {
      category: 'Corporate Registry',
      date: 'July 15, 2026',
      title: 'Corporate Compliance: Key Regulatory Updates Under SECP (2026)',
      description: 'An analysis of new filings and disclosure rules required for privately held corporations operating in Pakistan.',
      content: `Operating a private limited entity in Pakistan requires strict adherence to the Securities and Exchange Commission of Pakistan (SECP). In 2026, regulatory amendments have introduced tighter timelines for submitting annual returns (Form A) and audited financial accounts. 
      
      Furthermore, beneficial ownership disclosures are now mandated on incorporation to combat money laundering. Failure to lodge updates within 15 days of structural board alterations triggers direct penalties. 
      
      Our advisory notes suggest establishing quarterly compliance audits to evaluate board minutes, shareholder changes, and regulatory filing checklists before deadline margins close.`
    },
    {
      category: 'Property Verification',
      date: 'June 28, 2026',
      title: 'Preventing Title Fraud: A Due Diligence Guide for Land Acquisitions',
      description: 'Essential steps to verify registry records, layout approvals, and power of attorney authenticity before purchase.',
      content: `Real estate transactions in Karachi call for robust physical verification protocols. Relying solely on a registered Sale Deed or a Power of Attorney (PoA) is a high-risk approach. 

      Due diligence must start with a direct physical check of the registry books at the Sub-Registrar's office. This must be accompanied by verifying layout maps and allotment letters at authorities such as KDA, MDA, or CBC. 

      Additionally, any PoA executed outside Pakistan must be attested by the Pakistani Consulate and registered locally in the Board of Revenue records. We recommend withholding token deposits until title clearance is formally signed off by legal counsel.`
    },
    {
      category: 'Alternative Dispute',
      date: 'May 10, 2026',
      title: 'Choosing Commercial Arbitration: Speed and Confidentiality in Disputes',
      description: 'How pre-drafted alternative dispute resolution clauses save resources compared to traditional courtroom trials.',
      content: `With civil court dockets facing extensive backlogs, commercial entities are increasingly relying on Alternative Dispute Resolution (ADR) clauses to safeguard their operations. 

      Well-drafted arbitration clauses dictate the venue, language, and governing rules (such as the Arbitration Act 1940) long before any dispute arises. 

      This ensures commercial breaches are resolved behind closed doors within months, rather than litigated publicly over years. Legal counsel must ensure these clauses define the qualifications of the chosen arbitrator and limit grounds for appeal, securing finality in the awards.`
    }
  ];

  // LocalBusiness Schema Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "The Lawyers",
    "image": "https://thelawyers.pk/Logo.jpeg",
    "@id": "https://thelawyers.pk/#legal-service",
    "url": "https://thelawyers.pk",
    "telephone": ["+92 336 6050615", "+92 307 3685421"],
    "email": "info.thelawyers@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Premium Business Hub, Block 4, Clifton",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75600",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // SSR guard: render solid navy placeholder until client-side hydration mounts the DOM
  if (!mounted) {
    return <div className="min-h-screen bg-[#0A1128]" />;
  }

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ENTRANCE LOADER */}
      {showLoader && (
        <Loader exiting={isExiting} />
      )}

      {/* ARTICLE WIPE TRANSITION CURTAINS */}
      {articleWipingState !== 'idle' && (
        <div className="fixed inset-0 z-[120] flex pointer-events-none">
          <motion.div
            className="w-1/2 h-full bg-brand-navy pointer-events-auto"
            initial={{ x: '-100%' }}
            animate={articleWipingState === 'closing' ? { x: 0 } : { x: '-100%' }}
            transition={{ duration: 0.45, ease: [0.85, 0, 0.15, 1] }}
          />
          <motion.div
            className="w-1/2 h-full bg-brand-navy pointer-events-auto"
            initial={{ x: '100%' }}
            animate={articleWipingState === 'closing' ? { x: 0 } : { x: '100%' }}
            transition={{ duration: 0.45, ease: [0.85, 0, 0.15, 1] }}
          />
        </div>
      )}

      {/* ACTIVE ARTICLE OVERLAY MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            className="fixed inset-0 z-[110] bg-brand-paper overflow-y-auto px-6 py-24 md:py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between border-b border-brand-light-gray pb-6 mb-12">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold text-brand-burgundy">
                  <BookOpen className="w-4 h-4" />
                  <span>{activeArticle.category}</span>
                  <span className="text-brand-light-gray">•</span>
                  <span className="text-brand-muted-gray">{activeArticle.date}</span>
                </div>
                <button
                  onClick={handleArticleClose}
                  className="p-2 border border-brand-navy/10 rounded-full text-brand-navy hover:text-brand-burgundy hover:border-brand-burgundy transition-colors focus:outline-none focus:ring-1 focus:ring-brand-burgundy"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl text-brand-navy leading-tight mb-8">
                {activeArticle.title}
              </h1>

              <div className="font-serif text-lg text-brand-charcoal leading-relaxed space-y-6 whitespace-pre-line">
                {activeArticle.content}
              </div>

              <div className="border-t border-brand-light-gray mt-16 pt-8 flex items-center justify-between text-xs text-brand-muted-gray">
                <span>The Lawyers · Legal Briefs</span>
                <button 
                  onClick={handleArticleClose}
                  className="font-bold uppercase tracking-wider text-brand-navy hover:text-brand-burgundy transition-colors flex items-center gap-1.5"
                >
                  Return to Insights
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN WEBSITE CONTENT */}
      <ScrollRevealHandler>
        <Navbar />

        <main className="flex-grow">

          {/* HERO SECTION - "THE BRIEF" DOCUMENT HERO */}
          <section id="home" className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-b from-[#F7F4EE] via-[#F4F0E6] to-[#EAE4D5] px-6 md:px-12 pt-28 pb-16 overflow-hidden border-b border-brand-light-gray">
            
            {/* Background architectural dim texture */}
            <div className="absolute inset-0 z-0 opacity-[0.06] select-none pointer-events-none">
              <Image 
                src="/hero-arch.png"
                alt="dim facade"
                fill
                priority
                sizes="100vw"
                className="object-cover grayscale"
              />
            </div>

            {/* Radial Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,17,40,0.04)_100%)] pointer-events-none z-0" />

            {/* Programmatic Noise texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-multiply z-0 pointer-events-none" />

            {/* Parallax Floating Case Stamp Elements */}
            {!prefersReducedMotion && (
              <>
                {/* Stamp 1: Top-Left */}
                <motion.div 
                  className="absolute left-6 md:left-24 top-24 md:top-36 z-10 hidden sm:block rotate-[-6deg] opacity-75 bg-brand-paper border border-brand-burgundy/25 p-3 rounded-sm shadow-md"
                  style={{ y: yStamp1 }}
                >
                  <span className="font-serif text-[10px] font-bold tracking-widest text-brand-burgundy uppercase block">
                    CASE RECORD
                  </span>
                  <span className="font-sans text-[8px] text-brand-navy block mt-0.5">
                    No. PK-SECP-2026
                  </span>
                </motion.div>

                {/* Stamp 2: Bottom-Right */}
                <motion.div 
                  className="absolute right-6 md:right-20 bottom-24 md:bottom-36 z-10 hidden sm:block rotate-[4deg] opacity-75 bg-brand-paper border border-brand-navy/15 p-3.5 rounded-sm shadow-md"
                  style={{ y: yStamp2 }}
                >
                  <span className="font-serif text-[9px] font-bold tracking-widest text-brand-navy uppercase block">
                    STATUS: SETTLED
                  </span>
                  <span className="font-sans text-[8px] text-brand-burgundy block mt-0.5">
                    CLIFTON LAND BRIEF
                  </span>
                </motion.div>

                {/* Stamp 3: Middle-Right */}
                <motion.div 
                  className="absolute right-[10%] top-28 z-10 hidden lg:block rotate-[-3deg] opacity-65 bg-brand-paper border border-brand-navy/15 p-2 rounded-sm shadow-md"
                  style={{ y: yStamp3 }}
                >
                  <span className="font-sans text-[9px] tracking-wider text-brand-muted-gray block">
                    Verified Brief: #402
                  </span>
                </motion.div>
              </>
            )}

            {/* Main Central Container */}
            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-burgundy mb-6 block">
                The Lawyers · Legal Brief
              </span>

              {/* Redacted Line-by-Line Headline */}
              <h1 className="font-serif text-[42px] md:text-[62px] lg:text-[76px] leading-[1.05] tracking-tight text-brand-navy mb-8 flex flex-col items-center select-text">
                <RedactedLine 
                  text="Legal Counsel," 
                  delay={0.7} 
                  prefersReducedMotion={prefersReducedMotion} 
                />
                <RedactedLine 
                  text="Clearly Delivered." 
                  delay={1.1} 
                  prefersReducedMotion={prefersReducedMotion} 
                />
              </h1>

              {/* Subheadline: Arrives after redaction animations */}
              <motion.p 
                className="text-[16px] md:text-[19px] text-brand-muted-gray leading-relaxed max-w-2xl mb-12"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.7, ease: 'easeOut' }}
              >
                A modern advocacy firm engineered for complex regulatory landscapes. We communicate in direct truths and execute precise casework to resolve your property, corporate, and civil matters.
              </motion.p>

              {/* CTA Row */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-brand-burgundy hover:bg-brand-navy text-brand-paper px-9 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors text-center shadow-sm"
                >
                  Book Consultation
                </a>
                <a
                  href="#practice-areas"
                  className="w-full sm:w-auto border border-brand-navy/35 hover:border-brand-navy text-brand-navy px-9 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors text-center flex items-center justify-center gap-2 group"
                >
                  Practice Areas
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              {/* Center Understated Trust Line */}
              <motion.div 
                className="text-[11px] tracking-wider text-brand-muted-gray flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border-t border-brand-light-gray/60 pt-6 w-full max-w-md justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                <span className="font-semibold text-brand-navy">DIRECT INTENSIVE ADVISORY:</span>
                <div className="flex gap-3">
                  <a href="tel:+923366050615" className="hover:text-brand-burgundy transition-colors font-medium">
                    +92 336 6050615
                  </a>
                  <span className="text-brand-light-gray">|</span>
                  <a href="tel:+923073685421" className="hover:text-brand-burgundy transition-colors font-medium">
                    +92 307 3685421
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* PRACTICE AREAS - EXPANDING ACCORDION DOCKET */}
          <section id="practice-areas" className="bg-brand-paper py-24 px-6 md:px-12 border-b border-brand-light-gray">
            <div className="max-w-5xl mx-auto">
              
              <div className="max-w-xl mb-16">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-3 block">
                  Practice Docket
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight">
                  Rigorous Advocacy Across Six Pillars
                </h2>
              </div>

              {/* Docket Accordion Wrapper */}
              <div className="border-t border-brand-light-gray divide-y divide-brand-light-gray">
                {practiceAreas.map((area, idx) => {
                  const AreaIcon = area.icon;
                  const isOpen = activeArea === idx;

                  return (
                    <div 
                      key={area.title}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      aria-haspopup="false"
                      className="group block outline-none cursor-pointer focus-visible:bg-brand-light-gray/20"
                      onClick={() => setActiveArea(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveArea(idx);
                        }
                      }}
                    >
                      <div className="py-6 flex items-center justify-between transition-colors group-hover:text-brand-burgundy">
                        <div className="flex items-center gap-6 md:gap-10">
                          <span className="font-serif text-sm md:text-base text-brand-burgundy/60 font-semibold">
                            {area.index}
                          </span>
                          <h3 className="font-serif text-lg md:text-2xl font-semibold text-brand-navy group-hover:text-brand-burgundy transition-colors">
                            {area.title}
                          </h3>
                        </div>
                        
                        {/* Dynamic Expand Indicators */}
                        <div className="flex items-center gap-4">
                          <div className={`hidden md:flex w-8 h-8 rounded-full items-center justify-center border transition-all ${
                            isOpen ? 'border-brand-burgundy bg-brand-burgundy text-brand-paper rotate-[45deg]' : 'border-brand-navy/10 text-brand-navy'
                          }`}>
                            <X className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>

                      {/* Expandable Docket Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pb-8 pl-12 md:pl-16 pr-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                              <div className="max-w-2xl flex gap-4 items-start">
                                <div className="p-2.5 bg-brand-light-gray/40 rounded-sm text-brand-burgundy shrink-0">
                                  <AreaIcon className="w-5 h-5" />
                                </div>
                                <p className="text-sm md:text-base text-brand-muted-gray leading-relaxed">
                                  {area.description}
                                </p>
                              </div>
                              <a
                                href="#contact"
                                className="text-xs font-semibold tracking-wider text-brand-navy hover:text-brand-burgundy transition-colors flex items-center gap-1.5 shrink-0"
                              >
                                REQUEST CASE BRIEFING
                                <ChevronRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* STATS / TRACK RECORD - THE SCALE REBALANCES */}
          <section className="bg-brand-navy text-brand-paper py-10 md:py-12 px-6 md:px-12 overflow-hidden border-b border-brand-navy">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Rebalancing SVG Scale */}
              <div ref={statsScaleRef} className="lg:col-span-5 flex flex-col items-center justify-center border border-brand-paper/5 bg-brand-charcoal/30 py-6 px-6 rounded-sm">
                
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  className="text-brand-burgundy mb-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Shaft */}
                  <path d="M50 15V80 M32 80H68" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="50" cy="25" r="2.5" className="fill-brand-burgundy" />

                  {/* Rotatable crossbeam */}
                  <motion.g animate={statsScaleRotation} style={{ originX: '50px', originY: '25px' }}>
                    <path d="M20 25H80" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="20" cy="25" r="1.5" className="fill-brand-burgundy" />
                    <circle cx="80" cy="25" r="1.5" className="fill-brand-burgundy" />
                  </motion.g>

                  {/* Left Pan */}
                  <motion.g animate={statsLeftPanY}>
                    <path d="M20 25L10 50 M20 25L30 50" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5 50 H35 C5 50 9 61 20 61 C31 61 35 50 35 50" stroke="currentColor" strokeWidth="2.2" />
                  </motion.g>

                  {/* Right Pan */}
                  <motion.g animate={statsRightPanY}>
                    <path d="M80 25L70 50 M80 25L90 50" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M65 50 H95 C65 50 69 61 80 61 C91 61 95 50 95 50" stroke="currentColor" strokeWidth="2.2" />
                  </motion.g>
                </svg>

                <p className="text-[9px] uppercase tracking-[0.25em] text-brand-light-gray/60 font-semibold text-center">
                  Balance Settle Protocol
                </p>
              </div>

              {/* Right Column: Statistics */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 justify-items-stretch">
                
                <div className="border-l border-brand-burgundy/40 pl-6 py-2">
                  <div className="font-serif text-4xl md:text-5xl font-semibold mb-2">
                    <Counter value={500} />+
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-light-gray/70">
                    Cases Settle Resolved
                  </p>
                </div>

                <div className="border-l border-brand-burgundy/40 pl-6 py-2">
                  <div className="font-serif text-4xl md:text-5xl font-semibold mb-2">
                    <Counter value={15} />+
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-light-gray/70">
                    Combined Years Advised
                  </p>
                </div>

                <div className="border-l border-brand-burgundy/40 pl-6 py-2">
                  <div className="font-serif text-4xl md:text-5xl font-semibold mb-2">
                    <Counter value={98} />%
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-light-gray/70">
                    Client Success Ratio
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* ABOUT / APPROACH - ANNOTATED DOCUMENT MARGINALIA */}
          <section id="about" className="bg-brand-paper py-24 px-6 md:px-12 border-b border-brand-light-gray">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Primary Copy (Wider) */}
              <div className="lg:col-span-8">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-3 block">
                  Operating Protocol
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-navy leading-[1.1] mb-8">
                  Client Advisory Formulated on Document Precision
                </h2>
                
                <div className="space-y-6 text-brand-muted-gray text-base leading-relaxed max-w-3xl">
                  <p>
                    Modern business requires counsels that act on facts rather than templates. Whether setting up complex cross-border joint ventures or completing physical title sweeps in Karachi real estate, our partners coordinate records directly.
                  </p>
                  <p>
                    By keeping client files within a partner-led structure, we avoid administrative layers. The advocate representing your brief in High Court proceedings is the exact same counselor conducting the due diligence investigations.
                  </p>
                  <p>
                    We operate on transparency. All contract drafts, statutory SECP filings, and litigation briefs are logged directly against flat fees, guaranteeing predictable budgeting without hourly margins.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-8 border-t border-brand-light-gray/70">
                  <div>
                    <h4 className="font-serif font-bold text-brand-navy text-lg flex items-center gap-2">
                      <Award className="w-5 h-5 text-brand-burgundy" />
                      High Court Registration
                    </h4>
                    <p className="text-xs text-brand-muted-gray mt-2 leading-relaxed">
                      Advocates licensed to represent portfolios before High Court divisions across commercial and civil disputes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-brand-navy text-lg flex items-center gap-2">
                      <ClipboardList className="w-5 h-5 text-brand-burgundy" />
                      Flat Transaction rates
                    </h4>
                    <p className="text-xs text-brand-muted-gray mt-2 leading-relaxed">
                      Clear contract clearances, property titles due diligence, and SECP formations mapped to static quotes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Marginal Callout Notes (Narrower) */}
              <div className="lg:col-span-4 bg-brand-light-gray/25 border-l-2 border-brand-burgundy p-6 space-y-8 select-none">
                <div className="relative">
                  <span className="font-serif text-[10px] font-bold text-brand-burgundy uppercase block tracking-wider mb-2">
                    INTAKE NOTE: TITLE DILEMMA
                  </span>
                  <p className="font-serif italic text-xs text-brand-charcoal/90 leading-relaxed">
                    "Registry Warning: Direct physical check of Clifton land registers is required. Do not approve transactions solely on power of attorney clearances."
                  </p>
                </div>

                <div className="border-t border-brand-light-gray/70 pt-6">
                  <span className="font-serif text-[10px] font-bold text-brand-burgundy uppercase block tracking-wider mb-2">
                    CORPORATE PROTOCOL
                  </span>
                  <p className="font-serif italic text-xs text-brand-charcoal/90 leading-relaxed">
                    "SECP compliance requires beneficial ownership declarations to be submitted on incorporation. Preempt this checklist during memorandum drafting."
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* PROCESS - VERTICAL CONNECTOR SCROLL LINE */}
          <section id="how-we-work" className="bg-brand-paper py-24 px-6 md:px-12 border-b border-brand-light-gray">
            <div className="max-w-4xl mx-auto">
              
              <div className="max-w-xl mb-20">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-3 block">
                   Casework Execution
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight">
                  A Step-by-Step Document Flow
                </h2>
              </div>

              {/* Vertical Timeline container */}
              <div ref={timelineRef} className="relative pl-12 md:pl-20 space-y-16">
                
                {/* Scroll-drawn connector line background */}
                <div className="absolute left-[21px] top-4 bottom-4 w-[2px] bg-brand-light-gray/70" />
                
                {/* Scroll progress drawing connector line */}
                <motion.div 
                  className="absolute left-[21px] top-4 bottom-4 w-[2px] bg-brand-burgundy origin-top"
                  style={{ scaleY: lineScaleY }}
                />

                {processSteps.map((step) => (
                  <div key={step.number} className="relative group">
                    
                    {/* Circle Dot Marker */}
                    <div className="absolute left-[-52px] md:left-[-60px] top-1.5 w-10 h-10 rounded-full border-2 border-brand-burgundy bg-brand-paper flex items-center justify-center z-10 transition-colors group-hover:bg-brand-burgundy group-hover:text-brand-paper">
                      <span className="font-serif text-[13px] font-bold text-brand-navy group-hover:text-brand-paper">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-burgundy transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-brand-muted-gray leading-relaxed max-w-xl">
                      {step.description}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* TEAM - CASE-FILE PERSPECTIVE FLIP CARDS */}
          <section className="bg-brand-paper py-24 px-6 md:px-12 border-b border-brand-light-gray">
            <div className="max-w-5xl mx-auto">
              
              <div className="max-w-xl mb-16">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-3 block">
                  Counselors
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight">
                  Partner-Led Brief Accountability
                </h2>
              </div>

              {/* 3D Cards Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                
                {/* Advocate 1 */}
                <div 
                  className="group perspective-1000 w-full h-[400px] cursor-pointer relative"
                  onMouseEnter={() => setFlippedCard(0)}
                  onMouseLeave={() => setFlippedCard(null)}
                  onFocus={() => setFlippedCard(0)}
                  onBlur={() => setFlippedCard(null)}
                  tabIndex={0}
                  role="button"
                  aria-label="Salman Ahmed profile, press Space or Enter to flip cover"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setFlippedCard(flippedCard === 0 ? null : 0);
                    }
                  }}
                >
                  <div className={`w-full h-full duration-700 preserve-3d relative transition-transform ${
                    flippedCard === 0 ? '[transform:rotateY(180deg)]' : ''
                  }`}>
                    {/* Front Cover */}
                    <div className="absolute inset-0 backface-hidden w-full h-full bg-brand-light-gray/40 border border-brand-light-gray/80 overflow-hidden flex flex-col justify-between p-6">
                      <div className="relative w-full h-[250px] bg-brand-light-gray/60 overflow-hidden rounded-sm">
                        <Image
                          src="/atty-1.png"
                          alt="Salman Ahmed"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-end mt-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-brand-navy">Salman Ahmed</h3>
                          <p className="text-xs text-brand-burgundy font-medium mt-0.5">Senior Partner & Advocate</p>
                        </div>
                        <span className="text-[10px] tracking-wider uppercase font-bold text-brand-navy border border-brand-navy/10 px-2.5 py-1.5 rounded-sm">
                          FLIP DOSSIER
                        </span>
                      </div>
                    </div>

                    {/* Back Cover (Flipped) */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden w-full h-full bg-brand-navy text-brand-paper p-8 flex flex-col justify-between border border-brand-burgundy/40 shadow-md">
                      <div>
                        <span className="text-[10px] tracking-widest font-bold uppercase text-brand-burgundy mb-2 block">
                          CASE FILE: P-01
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-brand-paper mb-1">Salman Ahmed</h3>
                        <p className="text-xs text-brand-light-gray/80 mb-6">Senior Court Advocate</p>
                        
                        <div className="space-y-3.5 text-xs text-brand-light-gray/70">
                          <p className="leading-relaxed">
                            <span className="font-semibold text-brand-paper">Practice Core:</span> Clifton land claims, physical title audits, corporate insolvency, and arbitration briefs.
                          </p>
                          <p className="leading-relaxed">
                            <span className="font-semibold text-brand-paper">Credentials:</span> High Court Division Advocate, enrolled under Sindh Bar Council. Former Legal Advisor to national logistics entities.
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-brand-light-gray/10 pt-4 flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] text-brand-muted-gray">SBC RECORD #8874</span>
                        <a href="#contact" className="text-brand-burgundy font-semibold hover:text-brand-paper transition-colors">
                          INITIATE BRIEF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advocate 2 */}
                <div 
                  className="group perspective-1000 w-full h-[400px] cursor-pointer relative"
                  onMouseEnter={() => setFlippedCard(1)}
                  onMouseLeave={() => setFlippedCard(null)}
                  onFocus={() => setFlippedCard(1)}
                  onBlur={() => setFlippedCard(null)}
                  tabIndex={0}
                  role="button"
                  aria-label="Zainab Noor profile, press Space or Enter to flip cover"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setFlippedCard(flippedCard === 1 ? null : 1);
                    }
                  }}
                >
                  <div className={`w-full h-full duration-700 preserve-3d relative transition-transform ${
                    flippedCard === 1 ? '[transform:rotateY(180deg)]' : ''
                  }`}>
                    {/* Front Cover */}
                    <div className="absolute inset-0 backface-hidden w-full h-full bg-brand-light-gray/40 border border-brand-light-gray/80 overflow-hidden flex flex-col justify-between p-6">
                      <div className="relative w-full h-[250px] bg-brand-light-gray/60 overflow-hidden rounded-sm">
                        <Image
                          src="/atty-2.png"
                          alt="Zainab Noor"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-end mt-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-brand-navy">Zainab Noor</h3>
                          <p className="text-xs text-brand-burgundy font-medium mt-0.5">Partner & Corporate Advisor</p>
                        </div>
                        <span className="text-[10px] tracking-wider uppercase font-bold text-brand-navy border border-brand-navy/10 px-2.5 py-1.5 rounded-sm">
                          FLIP DOSSIER
                        </span>
                      </div>
                    </div>

                    {/* Back Cover (Flipped) */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden w-full h-full bg-brand-navy text-brand-paper p-8 flex flex-col justify-between border border-brand-burgundy/40 shadow-md">
                      <div>
                        <span className="text-[10px] tracking-widest font-bold uppercase text-brand-burgundy mb-2 block">
                          CASE FILE: P-02
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-brand-paper mb-1">Zainab Noor</h3>
                        <p className="text-xs text-brand-light-gray/80 mb-6">Corporate & Advisory Partner</p>
                        
                        <div className="space-y-3.5 text-xs text-brand-light-gray/70">
                          <p className="leading-relaxed">
                            <span className="font-semibold text-brand-paper">Practice Core:</span> SECP filings, beneficial ownership registries, joint ventures, and regulatory corporate clearances.
                          </p>
                          <p className="leading-relaxed">
                            <span className="font-semibold text-brand-paper">Credentials:</span> Corporate Advisor. Enrolled Advocate, specialized in alternative dispute mediation and compliance.
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-brand-light-gray/10 pt-4 flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] text-brand-muted-gray">SBC RECORD #9283</span>
                        <a href="#contact" className="text-brand-burgundy font-semibold hover:text-brand-paper transition-colors">
                          INITIATE BRIEF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* TESTIMONIALS - SINGLE OVERSIZED QUOTE */}
          <section className="bg-brand-paper py-24 px-6 md:px-12 border-b border-brand-light-gray overflow-hidden">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              
              <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-8 block">
                Brief Endorsements
              </span>

              {/* Large quote watermark in background */}
              <div className="relative w-full py-8 min-h-[220px] flex items-center justify-center">
                <span className="absolute text-[160px] md:text-[240px] text-brand-light-gray/20 font-serif leading-none select-none pointer-events-none top-[-40px] left-1/2 -translate-x-1/2 z-0">
                  “
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <p className="font-serif text-xl md:text-3xl text-brand-navy leading-relaxed italic max-w-3xl">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    
                    <div className="mt-8">
                      <span className="font-serif font-bold text-brand-navy text-sm md:text-base tracking-wider uppercase block">
                        {testimonials[activeTestimonial].author}
                      </span>
                      <span className="text-[10px] md:text-xs text-brand-burgundy uppercase font-semibold tracking-wider mt-1 block">
                        {testimonials[activeTestimonial].company} · {testimonials[activeTestimonial].caseType}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Understated Dash progress timer bar */}
              <div className="w-40 h-[2px] bg-brand-light-gray/80 mt-12 relative overflow-hidden rounded-full">
                <motion.div 
                  key={activeTestimonial} // resets timeline fill-width on testimonial change
                  className="absolute left-0 top-0 bottom-0 bg-brand-burgundy"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 7.5, ease: 'linear' }}
                />
              </div>

            </div>
          </section>

          {/* INSIGHTS / ARTICLES */}
          <section id="insights" className="bg-brand-paper py-24 px-6 md:px-12 border-b border-brand-light-gray">
            <div className="max-w-5xl mx-auto">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-xl">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-3 block">
                    Case Analysis
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight">
                    Regulatory Briefs & Due Diligence Files
                  </h2>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((item) => (
                  <article 
                    key={item.title} 
                    onClick={() => handleArticleClick(item)}
                    className="bg-brand-paper border border-brand-light-gray p-8 flex flex-col justify-between hover:border-brand-burgundy/45 transition-all duration-300 group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-brand-muted-gray mb-6">
                        <span className="text-brand-burgundy font-semibold uppercase tracking-wider">{item.category}</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-brand-navy mb-4 group-hover:text-brand-burgundy transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brand-muted-gray leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-brand-navy flex items-center gap-1 group-hover:text-brand-burgundy transition-colors">
                      Open File Brief
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </article>
                ))}
              </div>

            </div>
          </section>

          {/* CONTACT / INQUIRY */}
          <section id="contact" className="bg-brand-paper py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Side: Intake Brief Form */}
              <div className="lg:col-span-7 bg-brand-paper border border-brand-light-gray p-8 md:p-12 shadow-[0_4px_30px_rgba(10,17,40,0.01)]">
                <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-3">
                  Initiate Legal Inquiry
                </h2>
                <p className="text-xs text-brand-muted-gray mb-8 leading-relaxed">
                  Provide brief facts concerning the contracts, properties, or files under dispute. A managing partner will contact you directly within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Name / Organization *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Salman Ahmed"
                        className="w-full bg-brand-paper border border-brand-light-gray px-4 py-3 text-sm text-brand-navy placeholder-brand-muted-gray/50 rounded-sm focus:border-brand-burgundy focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                        Phone Call Coordinate *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., +92 300 1234567"
                        className="w-full bg-brand-paper border border-brand-light-gray px-4 py-3 text-sm text-brand-navy placeholder-brand-muted-gray/50 rounded-sm focus:border-brand-burgundy focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="matter" className="text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Case / Advisory Type *
                    </label>
                    <select
                      id="matter"
                      name="matter"
                      value={formData.matter}
                      onChange={handleInputChange}
                      className="w-full bg-brand-paper border border-brand-light-gray px-4 py-3 text-sm text-brand-navy rounded-sm focus:border-brand-burgundy focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Corporate & Business">Corporate & Business Law</option>
                      <option value="Property & Real Estate">Property & Real Estate</option>
                      <option value="Family Law & Estates">Family Law & Estates</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Civil Litigation">Civil Litigation</option>
                      <option value="Immigration">Immigration Advisory</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Brief Case Summary
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline any pending contracts, disputed plot numbers, or SECP compliance filings..."
                      className="w-full bg-brand-paper border border-brand-light-gray px-4 py-3 text-sm text-brand-navy placeholder-brand-muted-gray/50 rounded-sm focus:border-brand-burgundy focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-navy hover:bg-brand-burgundy text-brand-paper py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting Brief...' : 'Transmit Case Inquiry'}
                  </button>

                  {submitted && (
                    <motion.div 
                      className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-center gap-3 text-emerald-800 text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Your intake brief has been successfully logged. A counselor will call you directly.</span>
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Right Side: Coordinates */}
              <div className="lg:col-span-5 flex flex-col justify-between py-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-burgundy mb-3 block">
                    Intake Coordinates
                  </span>
                  <h2 className="font-serif text-3xl text-brand-navy leading-tight mb-8">
                    Contact Coordinates
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-light-gray/40 rounded-sm text-brand-burgundy">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-brand-navy">Advocate Hotlines</h4>
                        <p className="text-xs text-brand-muted-gray mt-1">Available Mon - Sat, 9am - 6pm PKT</p>
                        <div className="mt-2 space-y-1">
                          <a href="tel:+923366050615" className="block text-sm font-semibold hover:text-brand-burgundy transition-colors">
                            +92 336 6050615
                          </a>
                          <a href="tel:+923073685421" className="block text-sm font-semibold hover:text-brand-burgundy transition-colors">
                            +92 307 3685421
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-light-gray/40 rounded-sm text-brand-burgundy">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-brand-navy">Electronic intake</h4>
                        <p className="text-xs text-brand-muted-gray mt-1">For official client briefings and corporate filings</p>
                        <a href="mailto:info.thelawyers@gmail.com" className="block text-sm font-semibold mt-2 hover:text-brand-burgundy transition-colors">
                          info.thelawyers@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-light-gray/40 rounded-sm text-brand-burgundy">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-brand-navy">Clifton Office</h4>
                        <p className="text-xs text-brand-muted-gray mt-1 text-left leading-relaxed">
                          Office 402, 4th Floor, Premium Business Hub,<br />
                          Block 4, Clifton, Karachi, Pakistan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-brand-light-gray/30 border border-brand-light-gray p-6 rounded-sm flex items-center gap-4 select-none">
                  <div className="w-12 h-12 bg-brand-navy rounded-sm flex items-center justify-center text-brand-paper shrink-0">
                    <MapPin className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-brand-navy">Appointments Only</p>
                    <p className="text-brand-muted-gray mt-0.5">Please consult telephonically before booking an in-person session.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="bg-brand-navy text-brand-paper pt-16 pb-12 px-6 md:px-12 border-t border-brand-navy">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-light-gray/10">
            
            {/* Logo column */}
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <Logo variant="dark" size="normal" />
              <p className="text-xs text-brand-light-gray/60 leading-relaxed mt-4 max-w-sm">
                A modern professional services partner delivering precise corporate, real estate, inheritance, and civil litigation representation across Sindh bar jurisdictions.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-burgundy mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-brand-light-gray/70">
                <li><a href="#home" className="hover:text-brand-paper transition-colors">Home</a></li>
                <li><a href="#practice-areas" className="hover:text-brand-paper transition-colors">Practice areas</a></li>
                <li><a href="#about" className="hover:text-brand-paper transition-colors">Philosophy</a></li>
                <li><a href="#how-we-work" className="hover:text-brand-paper transition-colors">How We Work</a></li>
                <li><a href="#insights" className="hover:text-brand-paper transition-colors">Insights</a></li>
              </ul>
            </div>

            {/* Focus areas */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-burgundy mb-4">
                Casework
              </h4>
              <ul className="space-y-2.5 text-xs text-brand-light-gray/70">
                <li><a href="#practice-areas" className="hover:text-brand-paper transition-colors">Corporate SECP</a></li>
                <li><a href="#practice-areas" className="hover:text-brand-paper transition-colors">Property Title Sweeps</a></li>
                <li><a href="#practice-areas" className="hover:text-brand-paper transition-colors">Family Estate Probate</a></li>
                <li><a href="#practice-areas" className="hover:text-brand-paper transition-colors">Civil Court Claims</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-burgundy mb-4">
                Coordinates
              </h4>
              <ul className="space-y-3 text-xs text-brand-light-gray/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-burgundy" />
                  <a href="tel:+923366050615" className="hover:text-brand-paper transition-colors">+92 336 6050615</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-burgundy" />
                  <a href="tel:+923073685421" className="hover:text-brand-paper transition-colors">+92 307 3685421</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-burgundy" />
                  <a href="mailto:info.thelawyers@gmail.com" className="hover:text-brand-paper transition-colors">info.thelawyers@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-5xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-light-gray/40 gap-4">
            <p>© {new Date().getFullYear()} The Lawyers. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#contact" className="hover:text-brand-paper transition-colors">Privacy Protocol</a>
              <span>·</span>
              <a href="#contact" className="hover:text-brand-paper transition-colors">Intake Terms</a>
            </div>
          </div>
        </footer>
      </ScrollRevealHandler>
    </SmoothScroll>
  );
}

// Staggered reveal helper
function ScrollRevealHandler({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
      className="min-h-screen flex flex-col bg-brand-paper"
    >
      {children}
    </motion.div>
  );
}
