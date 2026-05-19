'use client';

import React from "react";
import { motion } from "motion/react";
import { Target, MessageSquareCode, BarChart3, ChevronRight, Globe } from "lucide-react";

export default function Solution() {
  const cards = [
    {
      id: "card-1",
      title: "Tráfego Pago",
      subtitle: "Qualificação Primária",
      description: "Campanhas estratégicas e otimizadas no Meta Ads (Instagram/Facebook) e Google Ads sob medida para atrair apenas leads altamente qualificados para o seu comercial, reduzindo curiosos e focando no público de maior poder de compra.",
      icon: Target,
      color: "from-blue-500 to-indigo-600",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      badge: "META & GOOGLE ADS",
    },
    {
      id: "card-2",
      title: "Automação Inteligente",
      subtitle: "Triagem Eficiente 24/7",
      description: "Construção de fluxos inteligentes e personalizados no WhatsApp que interagem com o lead instantaneamente, recolhem dados demográficos, qualificam seus interesses e agendam reuniões, sem demandar nenhum minuto da sua equipe.",
      icon: MessageSquareCode,
      color: "from-emerald-400 to-[#10B981]",
      glow: "shadow-[0_0_30px_rgba(34,197,94,0.15)]",
      badge: "WHATSAPP FUNNELS",
    },
    {
      id: "card-3",
      title: "Criação de Sites",
      subtitle: "Conversão & Autoridade",
      description: "Desenvolvimento de Landing Pages de altíssima velocidade, sites corporativos e portfólios totalmente otimizados para conversão e SEO, perfeitamente integrados com as suas campanhas de tráfego pago e automações de WhatsApp.",
      icon: Globe,
      color: "from-[#25D366] to-teal-500",
      glow: "shadow-[0_0_30px_rgba(37,211,102,0.15)]",
      badge: "HIGH-CONVERTING SITES",
    },
    {
      id: "card-4",
      title: "Otimização Contínua",
      subtitle: "Escala & Redução de Custo",
      description: "Monitoramento analítico obsessivo e contínuo da operação de ponta a ponta. Analisamos métricas de anúncios e do funil de mensagens para reduzir seu custo por lead (CPL), aprimorar os fluxos de mensagens e expandir suas vendas de forma previsível.",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600",
      glow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      badge: "DATA & PERFORMANCE",
    },
  ];

  return (
    <section className="relative py-24 bg-zinc-950/60 border-t border-zinc-900" id="solucao-section">
      {/* Background soft ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-radial-[circle_at_center] from-indigo-950/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="solution-container">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/10 text-[#22C55E] text-xs font-semibold tracking-wide uppercase mb-4">
            A Solução Dinamus
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Uma estrutura completa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">atrair, atender e converter</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Unimos o melhor do marketing digital e tecnologia para criar um sistema de vendas automatizado que trabalha para você dia e noite, maximizando o ROI.
          </p>
        </div>

        {/* 4 Premium Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4" id="solution-grid">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col glass-premium p-6 md:p-8 hover:border-[#25D366]/40 transition-all duration-300 hover:scale-[1.02] ${card.glow} relative group`}
                id={`solucao-card-${index + 1}`}
              >
                {/* Visual glow element on background hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                
                {/* Top Subtle border light line */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Section icon with animated gradient background container */}
                <div className="mb-6 self-start">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-0.5 flex items-center justify-center font-bold text-white shadow-lg`}>
                    <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Badge Category */}
                <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase py-1">
                  {card.badge}
                </span>

                {/* Card Titles */}
                <h3 className="text-xl font-display font-extrabold text-white mt-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                  {card.subtitle}
                </p>

                {/* Card Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-sans mt-4 flex-1">
                  {card.description}
                </p>

                {/* Action indicator at bottom */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#22C55E] opacity-70 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300">
                  <span>Conhecer Estrutura</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
