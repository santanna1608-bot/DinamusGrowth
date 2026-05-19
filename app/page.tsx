'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Demonstration from "@/components/Demonstration";
import Segments from "@/components/Segments";
import Results from "@/components/Results";
import About from "@/components/About";
import DiagnosticForm from "@/components/DiagnosticForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const handleScrollToDiagnostic = () => {
    const diagnosticSection = document.querySelector("#diagnostico-final-section");
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-black text-gray-100 selection:bg-emerald-500/20 selection:text-emerald-400 font-sans" id="landing-page-root">
      {/* Floating Header Navigation */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <Hero onOpenDiagnostic={handleScrollToDiagnostic} />

      {/* 2. SECTION 02 — O PROBLEMA */}
      <Problem />

      {/* 3. SECTION 03 — A SOLUÇÃO */}
      <Solution />

      {/* 4. SECTION 04 — COMO FUNCIONA */}
      <HowItWorks />

      {/* 5. SECTION 05 — BENEFÍCIOS */}
      <Benefits />

      {/* 6. SECTION 06 — DEMONSTRAÇÃO */}
      <Demonstration />

      {/* 7. SECTION 07 — SEGMENTOS */}
      <Segments />

      {/* 8. SECTION 08 — RESULTADOS */}
      <Results />

      {/* 9. SECTION 09 — SOBRE A AGÊNCIA */}
      <About />

      {/* 10. SECTION 10 — CTA FINAL (Interactive AI Diagnostic) */}
      <DiagnosticForm />

      {/* 11. SECTION 11 — FAQ Accordion */}
      <FAQ />

      {/* 12. FOOTER */}
      <Footer />

      {/* WhatsApp Flutuante com Animação de Pulso */}
      <WhatsAppButton />
    </div>
  );
}
