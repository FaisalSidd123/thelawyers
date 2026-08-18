'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import TopBar from './TopBar';
import { Menu, X, Phone, ChevronDown, ChevronRight, Building2, Scale, ShieldCheck, FileText, Globe, Users, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const practiceAreasItems = [
    {
      title: 'Corporate, Tax & Business Registration',
      desc: 'SECP Company formation, Tax returns, PSEB, Chamber, NGO setup.',
      icon: Building2,
      href: pathname === '/' ? '#practice-areas' : '/#practice-areas'
    },
    {
      title: 'Litigation & Dispute Resolution',
      desc: 'Superior & Subordinate court representation for civil, criminal & property.',
      icon: Scale,
      href: pathname === '/' ? '#practice-areas' : '/#practice-areas'
    }
  ];

  const registrationServicesItems = [
    { title: 'SECP Company Formation', href: '/company-registration', badge: 'Popular' },
    { title: 'PSEB IT & Call Center Registration', href: '/pseb-registration', badge: 'Tax Exempt' },
    { title: 'Sales Tax (STRN) & FBR NTN Filing', href: '/sales-tax-registration' },
    { title: 'Chamber of Commerce Membership', href: '/chamber-of-commerce-registration' },
    { title: 'NGO, Trust & Association Registration', href: '/ngo-npo-trust-registration' },
    { title: 'View All Compliance Services →', href: '/company-registration-compliance' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <TopBar onOpenInquiry={onOpenConsultation} />

      <motion.header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-paper/95 backdrop-blur-md border-b border-brand-light-gray/60 py-3 shadow-sm'
            : 'bg-brand-paper/90 backdrop-blur-sm border-b border-brand-light-gray/40 py-4'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant="light" size="normal" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-[14px] font-medium transition-colors ${
                pathname === '/' ? 'text-brand-burgundy font-semibold' : 'text-brand-navy/90 hover:text-brand-burgundy'
              }`}
            >
              Home
            </Link>

            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('practice')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-[14px] font-medium text-brand-navy/90 hover:text-brand-burgundy transition-colors py-2"
                onClick={() => setActiveDropdown(activeDropdown === 'practice' ? null : 'practice')}
              >
                <span>Practice Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'practice' ? 'rotate-180 text-brand-burgundy' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'practice' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 bg-brand-paper border border-brand-light-gray rounded-sm shadow-xl p-3 z-50 mt-1"
                  >
                    <div className="text-[11px] font-bold tracking-wider uppercase text-brand-burgundy mb-2 px-2">
                      Legal Divisions
                    </div>
                    {practiceAreasItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-brand-cream/60 transition-colors group"
                      >
                        <div className="p-2 bg-brand-cream text-brand-navy rounded-sm group-hover:bg-brand-burgundy group-hover:text-brand-paper transition-colors mt-0.5">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-brand-navy group-hover:text-brand-burgundy transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-brand-muted-gray leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Registration Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('registration')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-[14px] font-medium text-brand-navy/90 hover:text-brand-burgundy transition-colors py-2"
                onClick={() => setActiveDropdown(activeDropdown === 'registration' ? null : 'registration')}
              >
                <span>Registration Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'registration' ? 'rotate-180 text-brand-burgundy' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'registration' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 bg-brand-paper border border-brand-light-gray rounded-sm shadow-xl p-3 z-50 mt-1"
                  >
                    <div className="text-[11px] font-bold tracking-wider uppercase text-brand-burgundy mb-2 px-2">
                      Corporate & Tax Registration
                    </div>
                    {registrationServicesItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between p-2 px-2.5 rounded-sm hover:bg-brand-cream/60 text-xs font-medium text-brand-navy hover:text-brand-burgundy transition-colors"
                      >
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-burgundy/10 text-brand-burgundy font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`text-[14px] font-medium transition-colors ${
                pathname === '/about' ? 'text-brand-burgundy font-semibold' : 'text-brand-navy/90 hover:text-brand-burgundy'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/insights"
              className={`text-[14px] font-medium transition-colors ${
                pathname.startsWith('/insights') ? 'text-brand-burgundy font-semibold' : 'text-brand-navy/90 hover:text-brand-burgundy'
              }`}
            >
              Legal Insights (Blog)
            </Link>

            <Link
              href={pathname === '/' ? '#contact' : '/#contact'}
              className="text-[14px] font-medium text-brand-navy/90 hover:text-brand-burgundy transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="bg-brand-navy hover:bg-brand-burgundy text-brand-paper px-5 py-2.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-navy hover:text-brand-burgundy transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-navy flex flex-col pt-32 px-6 pb-8 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col gap-6 flex-grow">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-brand-paper border-b border-brand-paper/10 pb-3 flex items-center justify-between group"
              >
                <span>Home</span>
                <ChevronRight className="w-5 h-5 text-brand-paper/30 group-hover:text-amber-400 transition-colors" />
              </Link>

              <div className="py-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-amber-400/50"></div>
                  Practice Areas
                </div>
                <div className="flex flex-col gap-4 pl-4 border-l border-brand-paper/10">
                  {practiceAreasItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-brand-paper/80 hover:text-brand-paper font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-amber-400/50"></div>
                  Registration Services
                </div>
                <div className="flex flex-col gap-4 pl-4 border-l border-brand-paper/10">
                  {registrationServicesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-brand-paper/80 hover:text-brand-paper transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-brand-paper border-b border-brand-paper/10 pb-3 mt-2 flex items-center justify-between group"
              >
                <span>About Us</span>
                <ChevronRight className="w-5 h-5 text-brand-paper/30 group-hover:text-amber-400 transition-colors" />
              </Link>

              <Link
                href="/insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-brand-paper border-b border-brand-paper/10 pb-3 flex items-center justify-between group"
              >
                <span>Legal Insights (Blog)</span>
                <ChevronRight className="w-5 h-5 text-brand-paper/30 group-hover:text-amber-400 transition-colors" />
              </Link>

              <Link
                href={pathname === '/' ? '#contact' : '/#contact'}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-brand-paper border-b border-brand-paper/10 pb-3 flex items-center justify-between group"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-5 h-5 text-brand-paper/30 group-hover:text-amber-400 transition-colors" />
              </Link>
            </div>

            <div className="mt-8 mb-4 flex flex-col gap-3">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-brand-burgundy hover:bg-red-800 text-brand-paper py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
              >
                WhatsApp Direct Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
