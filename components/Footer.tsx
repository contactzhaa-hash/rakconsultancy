"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06131F] text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 grid gap-12 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <h3 className="font-serif text-xl font-bold text-white">RAK Consultancy</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Trusted ethical recruitment and secured job placements connecting talent with verified employers across the GCC since 2012.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-sand mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/about" className="hover:text-sand transition">About Us</Link></li>
            <li><Link href="/openings" className="hover:text-sand transition">Current Openings</Link></li>
            <li><Link href="/how-we-work" className="hover:text-sand transition">How We Work</Link></li>
            <li><Link href="/safety-guide" className="hover:text-sand transition">Safety & Anti-Scam</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-sand mb-4">Support & Legal</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/testimonials" className="hover:text-sand transition">Candidate Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-sand transition">Contact Us</Link></li>
            <li><Link href="/safety-guide" className="hover:text-sand transition">Verification Guarantee</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-sand mb-4">Contact Information</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2.5">
              <MapPin size={15} className="text-sand shrink-0" />
              <span>Riyadh, Saudi Arabia</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-sand shrink-0" />
              <a href="tel:+966568048793" className="hover:text-sand transition">+966 56 804 8793</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-sand shrink-0" />
              <a href="mailto:rakcareerconsultancy@gmail.com" className="hover:text-sand transition">rakcareerconsultancy@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} RAK Consultancy. All rights reserved. Ethical & Verified GCC Recruitment.</p>
      </div>
    </footer>
  );
}