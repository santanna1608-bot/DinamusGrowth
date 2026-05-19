'use client';

import React, { useState } from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageSquare } from "lucide-react";
import PolicyModal from "./PolicyModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const quickLinks = [
    { label: "Soluções", href: "#solucao-section" },
    { label: "Como Funciona", href: "#como-funciona-section" },
    { label: "Benefícios", href: "#beneficios-section" },
    { label: "Demonstração", href: "#demonstracao-section" },
    { label: "FAQ / Dúvidas", href: "#faq-section" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/dinamusgrowth/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61574506030794", label: "Facebook" }
  ];

  return (
    <footer className="relative bg-[#020202] border-t border-zinc-900 pt-16 pb-8" id="footer-section">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative" id="footer-container">
        
        {/* Main Grid Columns (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-900" id="footer-links-grid">
          
          {/* Column 1: Brand details (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-xs mt-3">
              Estruturas inteligentes de Tráfego Pago e Automação de WhatsApp para empresas que querem crescer com total previsibilidade, escala de faturamento e eliminação de gargalos repetitivos.
            </p>
          </div>

          {/* Column 2: Quick Navigation Anchor Links (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#22C55E] uppercase">LINKS RÁPIDOS</h4>
            <ul className="space-y-2.5 text-xs font-sans text-gray-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-emerald-400 hover:underline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Coordinates (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#22C55E] uppercase">CONTATO & SUPORTE</h4>
            <ul className="space-y-3 text-xs font-sans text-gray-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:dinamusgrowth@gmail.com" className="hover:text-white transition-colors">
                  dinamusgrowth@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/5521990465095" className="hover:text-white transition-colors">
                  (21) 99046-5095
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  São João de Meriti, RJ
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social media & updates (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#22C55E] uppercase">MÍDIAS SOCIAIS</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-zinc-805 text-gray-400 hover:text-[#22C55E] hover:scale-105 transition-all flex items-center justify-center shadow-inner"
                    aria-label={social.label}
                    id={`footer-social-link-${idx+1}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-[10px] text-gray-500 font-sans leading-relaxed">
              Siga nosso canal do Instagram para insights semanais sobre tráfego Ads e automação.
            </p>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-sans" id="footer-bottom">
          <p>© {currentYear} Dinamus Growth. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => setModalType("terms")} 
              className="hover:text-gray-300 cursor-pointer transition-colors"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => setModalType("privacy")} 
              className="hover:text-gray-300 cursor-pointer transition-colors"
            >
              Políticas de Privacidade
            </button>
          </div>
        </div>

      </div>

      <PolicyModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType || "terms"} 
      />
    </footer>
  );
}
