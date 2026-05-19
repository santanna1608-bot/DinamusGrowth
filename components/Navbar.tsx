'use client';

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Soluções", href: "#solucao-section" },
    { label: "Como Funciona", href: "#como-funciona-section" },
    { label: "Benefícios", href: "#beneficios-section" },
    { label: "Demonstração", href: "#demonstracao-section" },
    { label: "FAQ", href: "#faq-section" }
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-zinc-900/80 py-4 shadow-lg" 
          : "bg-transparent py-6"
      }`}
      id="main-header"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between" id="navbar-container">
        
        {/* Left Side Brand Logo */}
        <a href="" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="cursor-pointer">
          <Logo iconOnly={false} />
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400 font-sans" id="desktop-nav">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="hover:text-emerald-400 hover:scale-[1.02] transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side CTA trigger */}
        <div className="hidden md:flex items-center" id="navbar-cta">
          <a
            href="#diagnostico-final-section"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#diagnostico-final-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-[#22C55E] hover:text-white hover:border-[#22C55E] hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 flex items-center gap-1.5"
            id="navbar-cta-btn"
          >
            Diagnóstico Grátis
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Handheld Hamburger toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-burger"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Handheld Mobile Navigation Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505] border-b border-zinc-900 absolute top-full left-0 w-full p-6 space-y-5 shadow-2xl animate-in fade-in slide-in-from-top duration-300" id="mobile-drawer">
          <nav className="flex flex-col space-y-4 text-sm font-semibold text-gray-400 font-sans" id="mobile-nav">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="hover:text-emerald-400 py-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-zinc-900" id="mobile-cta-section">
            <a
              href="#diagnostico-final-section"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.querySelector("#diagnostico-final-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full text-center py-3 rounded-lg bg-[#22C55E] text-white text-xs font-bold uppercase tracking-wider block"
            >
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
