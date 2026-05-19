'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, MessageSquare, Play, Sparkles, TrendingUp, Users } from "lucide-react";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  // Autotype WhatsApp preview simulation
  const [chatSteps, setChatSteps] = useState([
    { id: 1, sender: 'user', text: 'Quero saber mais sobre os serviços!', time: '10:00', visible: true },
    { id: 2, sender: 'bot', text: 'Olá! Seja bem-vindo à Dinamus Growth. ⚡', time: '10:00', visible: false },
    { id: 3, sender: 'bot', text: 'Para direcionar você ao especialista certo, me diga: Qual o seu segmento de negócio?', time: '10:01', visible: false },
    { id: 4, sender: 'user', text: 'Clínica de Estética Médica 🏥', time: '10:01', visible: false },
    { id: 5, sender: 'bot', text: 'Perfeito! Atendemos mais de 43 clínicas de estética com funil de alta conversão.', time: '10:02', visible: false },
    { id: 6, sender: 'bot', text: 'Qual o seu orçamento mensal sugerido para anúncios?', time: '10:02', visible: false },
    { id: 7, sender: 'user', text: 'Entre R$ 2.000 e R$ 5.000 / mês', time: '10:03', visible: false },
    { id: 8, sender: 'bot', text: 'Excelente! Triagem concluída. 🚀 Aguarde 5 segundos, estou transferindo você...', time: '10:03', visible: false },
  ]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index < chatSteps.length) {
        setChatSteps(prev => 
          prev.map((step, sIdx) => sIdx === index ? { ...step, visible: true } : step)
        );
        index++;
      } else {
        // Reset simulation
        setTimeout(() => {
          setChatSteps(prev => 
            prev.map((step, sIdx) => sIdx === 0 ? step : { ...step, visible: false })
          );
          index = 1;
        }, 6000);
      }
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center justify-center bg-black" id="hero-section">
      {/* Background radial gradients for that cinematic Dark Mode depth */}
      <div className="absolute inset-0 z-0 bg-radial-[circle_at_50%_-20%] from-green-950/20 via-black/80 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Futuristic Background Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-7xl items-center" id="hero-container">
        {/* Left Side: Pitch and Action */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left" id="hero-pitch-container">
          {/* Badge Trigger */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            id="hero-premium-badge"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            Tráfego + Automação Comercial B2B Premium
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-tight text-white"
            id="hero-headline"
          >
            Transforme anúncios em clientes reais com{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-[#22C55E] to-blue-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(34,197,94,0.15)]">
              tráfego pago + automação inteligente
            </span>{" "}
            no WhatsApp.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-sans"
            id="hero-subheadline"
          >
            Estruturamos campanhas no Meta Ads e Google Ads integradas com automações inteligentes que atendem, qualificam e convertem seus novos leads automaticamente.
          </motion.p>

          {/* Conversions Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            id="hero-checks"
          >
            <div className="flex items-center gap-2.5 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Diagnóstico automatizado 24h</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Atração segmentada premium</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
              <span>Qualificação em segundos</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
              <span>Aumento de até 280% no ROI</span>
            </div>
          </motion.div>

          {/* Call to action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
            id="hero-cta-box"
          >
            <button
              onClick={onOpenDiagnostic}
              className="relative px-8 py-4 bg-gradient-to-r from-emerald-500 via-[#22C55E] to-emerald-600 font-bold text-white rounded-xl shadow-[0_4px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-[1.03] group flex items-center justify-center gap-2 overflow-hidden border border-emerald-400/20"
              id="hero-main-cta"
            >
              {/* Shimmer Light effect */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Solicitar Diagnóstico Estratégico
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="#demonstracao-section"
              className="px-8 py-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              id="hero-sec-cta"
            >
              <Play className="w-4.5 h-4.5 fill-current text-white" />
              Ver Como Funciona
            </a>
          </motion.div>
        </div>

        {/* Right Side: Composition Visual (Campaign Dashboard & Auto Chat) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-12 xl:col-span-5 relative flex flex-col space-y-6 lg:mt-0"
          id="hero-composition-visual"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-emerald-500/5 via-blue-500/5 to-emerald-500/5 blur-xl -z-10 rounded-3xl" />

          {/* Card 1: Campanha Ads Live Dashboard */}
          <div className="glass-premium p-5 shadow-2xl relative overflow-hidden group hover:border-[#25D366]/40 transition-colors duration-300 glow-blue">
            <div className="absolute top-0 left-0 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">META ADS ENGAGEMENT</span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md font-mono font-bold">LIVE STREAMING</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-zinc-950/60 p-3 rounded-lg border border-white/5">
                <p className="text-[10px] text-gray-500 font-medium">Investido</p>
                <p className="text-gray-100 font-display font-medium text-sm">R$ 4.821,50</p>
              </div>
              <div className="bg-zinc-950/60 p-3 rounded-lg border border-white/5">
                <p className="text-[10px] text-gray-500 font-medium">Conversas Iniciadas</p>
                <p className="text-[#25D366] font-display font-bold text-sm">342 leads</p>
              </div>
              <div className="bg-zinc-950/60 p-3 rounded-lg border border-white/5">
                <p className="text-[10px] text-gray-500 font-medium">Custo por Lead (CPL)</p>
                <p className="text-blue-400 font-display font-bold text-sm">R$14,09</p>
              </div>
            </div>

            {/* Campaign Progress / Chart Simulation */}
            <div className="h-10 w-full flex items-end gap-1.5 pt-2">
              <div className="w-full bg-zinc-900 rounded h-1 relative overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-[#25D366] h-full w-[80%] rounded" />
              </div>
              <span className="text-[10px] text-gray-400 font-mono">80%</span>
            </div>
          </div>

          {/* Card 2: Interactive Simulated WhatsApp Conversation Box */}
          <div className="glass p-1 rounded-2xl flex flex-col h-[320px] shadow-2xl relative overflow-hidden hover:border-[#25D366]/40 transition-all duration-300">
            <div className="bg-zinc-950/90 rounded-2xl flex-1 flex flex-col overflow-hidden">
              {/* Header / Zap Styled */}
              <div className="bg-zinc-900/80 px-4 py-3 border-b border-zinc-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8.5 h-8.5 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold font-display text-sm border border-[#25D366]/30">
                      DG
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-zinc-900" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100 leading-none">Dinamus Auto-Pilot</h4>
                    <p className="text-[10px] text-[#25D366] font-medium mt-0.5">Operando 24h • Qualificação em Tempo Real</p>
                  </div>
                </div>
                <MessageSquare className="w-5 h-5 text-gray-500" />
              </div>

              {/* Simulated Chat Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs flex flex-col justify-end">
                <AnimatePresence initial={false}>
                  {chatSteps.map(
                    (step) =>
                      step.visible && (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex flex-col max-w-[85%] ${
                            step.sender === "user" ? "self-end items-end" : "self-start items-start"
                          }`}
                        >
                          <div
                            className={`rounded-2xl px-3 py-2 text-white leading-relaxed ${
                              step.sender === "user"
                                ? "bg-gradient-to-br from-[#25D366] to-[#047857] rounded-tr-none"
                                : "bg-zinc-900 rounded-tl-none border border-zinc-800"
                            }`}
                          >
                            <p>{step.text}</p>
                          </div>
                          <span className="text-[9px] text-gray-500 mt-0.5 px-1">{step.time}</span>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partners/Social Proof bottom bar */}
      <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-zinc-950/80 to-transparent py-4 border-t border-zinc-900/60">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-500 uppercase">INTEGRAÇÕES NATIVAS:</span>
          {["Meta Ads", "Google Ads", "TikTok Ads", "WhatsApp Business Cloud", "ActiveCampaign", "CRM Hub"].map((item, idx) => (
            <span key={idx} className="text-xs font-semibold text-gray-400/80 tracking-wide font-sans">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
