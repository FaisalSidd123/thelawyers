'use client';

import { MapPin, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-brand-paper/90 text-xs py-2 px-4 md:px-12 border-b border-brand-paper/10 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Top Left Details */}
        <div className="flex items-center gap-4 flex-wrap text-[11px] md:text-xs">
          <span className="flex items-center gap-1.5 opacity-90">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-brand-paper/90">Islamabad & Lahore, Pakistan</span>
          </span>
          <span className="hidden md:inline text-brand-paper/30">|</span>
          <a 
            href="tel:+923073685421" 
            className="flex items-center gap-1.5 text-brand-paper/90 hover:text-amber-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>+92 307 3685421</span>
          </a>
          <span className="hidden md:inline text-brand-paper/30">|</span>
          <a 
            href="mailto:info@thelawyers.pk" 
            className="flex items-center gap-1.5 text-brand-paper/90 hover:text-amber-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>info@thelawyers.pk</span>
          </a>
        </div>

        {/* Top Right Options */}
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <a
            href="https://wa.me/923073685421?text=Hello%2C%20I%20would%20like%20a%20legal%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-paper/90 hover:text-amber-300 font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>WhatsApp Consultation</span>
          </a>
          <span className="text-brand-paper/30">|</span>
          <a
            href="https://wa.me/923073685421?text=Hello%20The%20Lawyers%2C%20I%20would%20like%20to%20make%20a%20Free%20Quick%20Inquiry%20regarding%20your%20legal%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-paper/90 hover:text-amber-300 font-medium transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Free Quick Inquiry</span>
          </a>
        </div>

      </div>
    </div>
  );
}
