'use client';

import React, { useState } from "react";
import { motion } from "motion/react";
import { Compass, Cpu, LineChart, MessageSquarePlus, Megaphone, Check } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Planejamento Estratégico",
      description: "Mapeamos profundamente o seu público-alvo, desenhamos a persona ideal do comprador B2B, analisamos seus principais concorrentes e definimos as metas claras de CPL (Custo Por Lead) e ROAS (Retorno Sobre Gasto em Anúncios).",
      icon: Compass,
      detail: "Mapeamento comercial + Definição de Públicos",
    },
    {
      number: "02",
      title: "Estruturação das Campanhas",
      description: "Criação de artigos publicitários de alta conversão, redação persuasiva (copywriting), design de criativos disruptivos e configuração das campanhas avançadas no Meta Ads e Google Ads com segmentação cirúrgica.",
      icon: Megaphone,
      detail: "Criativos Premium + Copywriting Focado em Vendas",
    },
    {
      number: "03",
      title: "Integração & Automação",
      description: "Montamos os fluxos de mensagens direcionadas, filtros inteligentes, tags de interesse, mensagens de qualificação rápida e vinculação com plataforma de automação oficial integrada ao seu WhatsApp.",
      icon: Cpu,
      detail: "WhastApp API + Triagem Integrada 24/7",
    },
    {
      number: "04",
      title: "Captação Ativa de Leads",
      description: "Ativação oficial da engrenagem. Suas campanhas começam a veicular, filtrando os leads mais promissores que entram diretamente no funil automatizado de qualificação e são direcionados para o seu time comercial.",
      icon: MessageSquarePlus,
      detail: "Disparo do Funil de Atração Inteligente",
    },
    {
      number: "05",
      title: "Otimização & Escala",
      description: "Análise contínua das conversas gravadas, taxas de cliques de anúncios e custos de qualificação. Ajustamos as variáveis para reduzir custos operacionais e expandir o volume de vendas de forma previsível.",
      icon: LineChart,
      detail: "Ampliação de ROI + Redução de Gargalos",
    },
  ];

  return (
    <section className="relative py-24 bg-black border-t border-zinc-900 overflow-hidden" id="como-funciona-section">
      {/* Background neon light flare in top corner */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="how-it-works-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-805 bg-zinc-900 text-gray-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Como Operamos
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Processo simples. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-600">Crescimento previsível</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Da concepção estratégica à escala de faturamento: estruturamos todo o ecossistema tecnológico e de tráfego que o seu negócio necessita para prosperar.
          </p>
        </div>

        {/* Timeline Desktop & Interactive View */}
        <div className="hidden lg:flex flex-col space-y-12" id="desktop-timeline">
          {/* Timeline Nodes Navigation */}
          <div className="grid grid-cols-5 gap-4 relative">
            {/* Connector Horizontal line across elements */}
            <div className="absolute top-8 left-[10%] right-[10%] h-[3px] bg-zinc-900 -z-10">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500" 
                style={{ width: `${(activeStep / 4) * 100}%` }}
              />
            </div>

            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isPassed = idx <= activeStep;
              const isActive = idx === activeStep;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step bubble / indicator */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    isActive 
                      ? "bg-emerald-500 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-110" 
                      : isPassed
                      ? "bg-zinc-900 border-emerald-500/80 text-emerald-400" 
                      : "bg-zinc-950 border-zinc-800 text-gray-500 group-hover:border-zinc-700"
                  }`}>
                    {isPassed && idx !== activeStep ? (
                      <Check className="w-6 h-6 stroke-[3]" />
                    ) : (
                      <IconComp className="w-6 h-6" />
                    )}
                  </div>

                  {/* Step Labels */}
                  <span className={`text-xs font-mono font-black tracking-widest uppercase mt-4 transition-colors ${
                    isActive ? "text-emerald-400" : "text-gray-500"
                  }`}>
                    ETAPA {step.number}
                  </span>
                  <span className={`text-sm font-bold mt-1 max-w-[150px] leading-tight transition-colors ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Panel for Selected Step */}
          <div className="glass-premium p-8 shadow-2xl relative" id="timeline-detail-box">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-transparent rounded-l-2xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-mono text-[#22C55E] font-bold uppercase tracking-wider bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-500/20">
                  {steps[activeStep].detail}
                </span>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white">
                  Etapa {steps[activeStep].number} — {steps[activeStep].title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed font-sans max-w-4xl">
                  {steps[activeStep].description}
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                {/* Visual Graphic Representation inside How is Works */}
                <div className="relative w-40 h-40 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-emerald-400 shadow-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-radial-[circle_at_center] from-emerald-500/10 to-transparent blur-md opacity-50" />
                  {React.createElement(steps[activeStep].icon, { className: "w-16 h-16 stroke-[1.5] filter drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] animate-pulse" })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Mobile / Vertical View (Fully responsive fallback) */}
        <div className="flex lg:hidden flex-col space-y-8" id="mobile-timeline">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="flex gap-4 relative" id={`mobile-timeline-step-${idx}`}>
                {/* Connector line for vertical timeline */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-zinc-900" style={{ top: '48px', bottom: '-32px' }} />
                )}

                {/* Step indicator */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg font-display font-black text-sm">
                  {step.number}
                </div>

                {/* Content */}
                <div className="glass p-5 flex-1 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-bold">
                    {step.detail}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
