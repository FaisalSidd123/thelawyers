'use client';

import { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function LeadCaptureBar() {
  const [service, setService] = useState('Company Registration');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 8) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open WhatsApp as instant fallback action
      const waText = encodeURIComponent(
        `Hello! I need immediate legal assistance for ${service}. My contact phone number is ${phone}. Please call me back.`
      );
      window.open(`https://wa.me/923366050615?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <div className="w-full bg-brand-navy text-brand-paper py-8 px-4 md:px-12 relative overflow-hidden border-y border-brand-burgundy/30 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Title / Callout */}
        <div className="flex items-center gap-3 text-center lg:text-left">
          <div className="p-3 bg-brand-burgundy/20 border border-brand-burgundy/40 rounded-full text-brand-burgundy shrink-0 hidden sm:flex">
            <Phone className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          <div>
            <h3 className="font-serif text-lg md:text-xl font-medium text-brand-paper">
              Need Immediate Legal Assistance?
            </h3>
            <p className="text-xs text-brand-paper/70 mt-0.5">
              Select your service to request an instant expert call back within minutes.
            </p>
          </div>
        </div>

        {/* Lead Capture Form Controls */}
        <div className="w-full lg:w-auto">
          {submitted ? (
            <div className="flex items-center gap-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-6 py-3 rounded-sm text-xs font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Request received! Opening WhatsApp chat for immediate response...
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full"
            >
              {/* Select Service Dropdown */}
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-brand-paper/10 border border-brand-paper/20 rounded-sm text-brand-paper px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="Company Registration" className="bg-brand-navy text-brand-paper">Company Registration</option>
                <option value="Tax Filing & Compliance" className="bg-brand-navy text-brand-paper">Tax Filing & Compliance</option>
                <option value="Family Law & Khula" className="bg-brand-navy text-brand-paper">Family Law</option>
                <option value="Property & Real Estate" className="bg-brand-navy text-brand-paper">Property & Land</option>
                <option value="Criminal Defense & Bail" className="bg-brand-navy text-brand-paper">Criminal Defense</option>
              </select>

              {/* Phone Input */}
              <input
                type="tel"
                required
                placeholder="Enter Phone / WhatsApp #"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-brand-paper/10 border border-brand-paper/20 rounded-sm text-brand-paper placeholder:text-brand-paper/50 px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-amber-400 transition-colors min-w-[200px]"
              />

              {/* Request Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-6 py-2.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>{isSubmitting ? 'Sending...' : 'Request Call Back'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
