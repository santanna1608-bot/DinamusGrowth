'use client';

import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import Logo from "./Logo";

export default function About() {
  const pillars = [
    {
      title: "Estratégia Proprietária",
      description: "Não replicamos receitas prontas. Desenvolvemos estratégias autorais que casam exatamente com a jornada de compras do seu cliente final.",
      icon: Award
    },
    {
      title: "Engenharia de Automação",
      description: "Integramos APIs oficiais do WhatsApp e as principais plataformas de CRM de forma segura, garantindo estabilidade absoluta e sem riscos de bloqueios.",
      icon: ShieldCheck
    },
    {
      title: "Obsessão por Métricas",
      description: "Monitoramos métricas reais de negócios (LTV, CAC, Margem de Lucro e ROAS), e não métricas de vaidade como curtidas ou impressões.",
      icon: Zap
    }
  ];

  return (
    <section className="relative py-24 bg-zinc-950/60 border-t border-zinc-900" id="sobre-agencia-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-radial-[circle_at_center] from-green-950/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="about-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Logo graphic and brand representation */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6" id="about-identity">
            <Logo className="mb-2" />
            
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white leading-tight">
              Estratégia, performance e automação comercial em uma única operação.
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
              Unimos tráfego pago de alto desempenho e inteligência de automação de fluxo para criar estruturas integradas de captação e conversão automatizada 24/7. 
            </p>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
              Cada projeto desenvolvido pela <strong className="text-white">Dinamus Growth</strong> (consolidada sob a infraestrutura operacional da LF7 Marketing Digital e Automações) é desenhado sob os pilares do crescimento acelerado, previsibilidade de novos leads e alta escalabilidade.
            </p>

            <div className="flex items-center gap-3.5 pt-2 bg-gradient-to-r from-emerald-500/10 to-transparent p-4 rounded-xl border border-emerald-500/10 self-stretch sm:self-start text-left">
              <HeartHandshake className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-100 leading-none">Comprometimento Premium</h4>
                <p className="text-xs text-gray-400 mt-1">Sua infraestrutura de vendas blindada por especialistas em alta conversão.</p>
              </div>
            </div>
          </div>

          {/* Right panel: DNA Pillars */}
          <div className="lg:col-span-7 flex flex-col space-y-5" id="about-pillars">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#22C55E] uppercase mb-1">NOSSO DNA OPERACIONAL</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="p-5 md:p-6 glass flex flex-col sm:flex-row gap-4 hover:border-[#25D366]/30 transition-colors duration-300 group"
                    id={`about-pillar-card-${idx+1}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 text-[#22C55E] group-hover:bg-[#22C55E]/10 group-hover:text-[#22C55E] transition-all duration-300 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-150 group-hover:text-white transition-colors font-display">
                        {pillar.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
