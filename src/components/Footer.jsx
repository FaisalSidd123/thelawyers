'use client';

import Link from 'next/link';
import Logo from './Logo';
import { MapPin, Phone, Mail, ChevronRight, Shield, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-paper/80 pt-16 pb-8 border-t border-brand-burgundy/40">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-paper/10">
          
          {/* Column 1: Firm Overview */}
          <div className="flex flex-col items-center text-center gap-4">
            <Logo variant="dark" size="normal" />
            <p className="text-xs text-brand-paper/70 leading-relaxed mt-2 max-w-sm">
              Modern legal practice offering end-to-end corporate registration, tax compliance, and legal defense services across Pakistan. Protecting businesses, families, and assets with proven legal expertise.
            </p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <a
                href="https://wa.me/923366050615"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-full transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+923366050615"
                className="p-2 bg-brand-burgundy/30 text-amber-300 hover:bg-brand-burgundy hover:text-white rounded-full transition-colors"
                title="Direct Helpline"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-serif text-sm font-semibold text-brand-paper uppercase tracking-wider mb-4 border-b border-brand-burgundy/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs items-center">
              <li>
                <Link href="/#practice-areas" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>SECP Company Registration</span>
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>FBR Income Tax Return Filing</span>
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>PSEB Registration (IT Exemptions)</span>
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>Sales Tax (STRN) Registration</span>
                </Link>
              </li>
              <li>
                <Link href="/#practice-areas" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>Family & Civil Law Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Disclaimer */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-serif text-sm font-semibold text-brand-paper uppercase tracking-wider mb-4 border-b border-brand-burgundy/40 pb-2 inline-flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-burgundy" />
              <span>Legal Disclaimer</span>
            </h4>
            <p className="text-xs text-brand-paper/65 leading-relaxed bg-brand-paper/5 p-3 rounded-sm border border-brand-paper/10 text-center">
              The information provided on this website is for general informational purposes only and does not constitute formal legal advice until a formal attorney-client agreement is executed between the firm and the client.
            </p>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-serif text-sm font-semibold text-brand-paper uppercase tracking-wider mb-4 border-b border-brand-burgundy/40 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <MapPin className="w-4 h-4 text-brand-paper" />
                <span className="text-brand-paper/80">Corporate & Litigation Offices in Islamabad & Lahore, Pakistan</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center mt-2">
                <Phone className="w-4 h-4 text-brand-paper" />
                <div className="flex flex-col items-center">
                  <a href="tel:+923366050615" className="hover:text-amber-300 transition-colors">+92 336 6050615</a>
                  <a href="tel:+923073685421" className="hover:text-amber-300 transition-colors">+92 307 3685421</a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center mt-2">
                <Mail className="w-4 h-4 text-brand-paper" />
                <a href="mailto:info@thelawyers.pk" className="hover:text-amber-300 transition-colors">info@thelawyers.pk</a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col items-center justify-center text-center text-xs text-brand-paper/50 gap-4">
          <div>
            © {new Date().getFullYear()} The Lawyers. All Rights Reserved. Modern Legal Solutions across Pakistan.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/about" className="hover:text-brand-paper transition-colors">About Firm</Link>
            <Link href="/insights" className="hover:text-brand-paper transition-colors">Legal Blog</Link>
            <Link href="/#contact" className="hover:text-brand-paper transition-colors">Book Consultation</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
