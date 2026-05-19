'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Sparkles, MessageSquare, Send, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function Demonstration() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const demoSteps = [
    {
      title: "1. Integração com Anúncio",
      badge: "META / GOOGLE ADS",
      description: "O potencial cliente clica no anúncio no Instagram ou Google. Nosso script intercepta e envia os dados demográficos diretamente ao funil.",
      phoneTitle: "Campanha Ativa",
      messages: [
        { sender: "system", text: "Lead clicou no criativo: 'Quer automatizar o comercial?'", time: "Agora" }
      ],
      systemLog: "Rastreamento ativado. Aguardando gatilho no WhatsApp..."
    },
    {
      title: "2. Resposta Instantânea",
      badge: "WHATSAPP BOT GATEWAY",
      description: "Em menos de 3 segundos, o lead recebe uma mensagem receptiva personalizada com o nome dele e o produto desejado.",
      phoneTitle: "Dinamus Auto-Pilot",
      messages: [
        { sender: "system", text: "Lead clicou no criativo: 'Quer automatizar o comercial?'", time: "3s atrás" },
        { sender: "bot", text: "Olá Roberto! Vi que você tem interesse em estruturar tráfego pago com automação. Como posso ajudar seu negócio hoje? ⚡", time: "Agora" }
      ],
      systemLog: "Gatilho acionado. Resposta enviada em 2.4 segundos."
    },
    {
      title: "3. Qualificação Automatizada",
      badge: "IA DE TRIAGEM B2B",
      description: "A automação faz perguntas estratégicas para filtrar os curiosos. Segmento, orçamento atual e necessidades fundamentais.",
      phoneTitle: "Triagem Inteligente",
      messages: [
        { sender: "user", text: "Gostaria de crescer minha imobiliária.", time: "2m atrás" },
        { sender: "bot", text: "Excelente! Qual o investimento mensal em anúncios sugerido para o seu projeto?", time: "1m atrás" },
        { sender: "user", text: "Investimos de R$ 3.000 a R$ 6.000", time: "Agora" }
      ],
      systemLog: "Lead respondeu. Classificação de perfil: QUALIFICADO (Investimento B2B ideal)."
    },
    {
      title: "4. Encaminhamento Inteligente",
      badge: "CRM DE DIRECIONAMENTO",
      description: "O lead qualificado é direcionado automaticamente para o WhatsApp do vendedor correto com o histórico traduzido.",
      phoneTitle: "Transferência Comercial",
      messages: [
        { sender: "bot", text: "Perfeito, Roberto! Já classifiquei você no nosso perfil Gold. Transmitindo seu caso para nosso especialista comercial... ⏳", time: "30s atrás" },
        { sender: "system", text: "✅ Histórico enviado para o vendedor Rafael. Lead aberto no CRM.", time: "Agora" }
      ],
      systemLog: "Ficha técnica consolidada e anexada ao CRM. Notificação push disparada."
    }
  ];

  return (
    <section className="relative py-24 bg-black border-t border-zinc-900" id="demonstracao-section">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="demo-container">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4 shadow-[0_0_12px_rgba(59,130,246,0.06)]">
            <Smartphone className="w-3.5 h-3.5" />
            Vendas em Tempo Real
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Veja como funciona <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-green-500">na prática</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Clique nas etapas abaixo para interagir com o simulador e assistir à mágica do nosso ecossistema de alta conversão operando em tempo real.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          
          {/* Left panel: Process Controls */}
          <div className="lg:col-span-6 flex flex-col space-y-4" id="demo-controls">
            <h3 className="text-xl md:text-2xl font-bold font-display text-gray-200 tracking-wide mb-2">
              Fluxo Estruturado Automatizado:
            </h3>

            <div className="space-y-3">
              {demoSteps.map((step, idx) => {
                const isActive = idx === currentStepIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                      isActive 
                        ? "glass border-[#25D366]/60 text-white shadow-xl glow-green bg-zinc-900/60" 
                        : "glass text-gray-400 hover:border-zinc-800"
                    }`}
                    id={`demo-trigger-step-${idx}`}
                  >
                    {/* Active Marker vertical stripe */}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#22C55E]" />
                    )}

                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-black text-sm transition-colors ${
                      isActive ? "bg-[#22C55E] text-white" : "bg-zinc-900 text-gray-500"
                    }`}>
                      0{idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-bold transition-colors ${isActive ? "text-[#22C55E]" : "text-gray-300"}`}>
                          {step.title}
                        </h4>
                        <span className="text-[9px] font-mono tracking-wider text-gray-500 font-bold uppercase">{step.badge}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ${
                      isActive ? "text-[#22C55E] opacity-100" : "text-gray-500"
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Phone Container mockup and code logger simulating the chat */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center" id="demo-mockup-panel">
            <div className="w-full max-w-[340px] bg-zinc-950 border-4 border-zinc-800 rounded-[36px] shadow-[0_15px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col h-[520px]" id="smartphone-frame">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-b-xl z-20 flex justify-center items-center">
                <span className="w-6 h-1 bg-zinc-700 rounded-full" />
                <span className="w-2 h-2 bg-zinc-700 rounded-full ml-2" />
              </div>

              {/* WhatsApp Mock Top Header bar */}
              <div className="bg-zinc-900/90 pt-6 pb-3 px-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5 mt-1">
                  <div className="w-7 h-7 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center font-bold text-xs font-display">
                    DG
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-100">{demoSteps[currentStepIndex].phoneTitle}</h5>
                    <span className="text-[8px] text-[#22C55E] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                      online
                    </span>
                  </div>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-400 mt-1" />
              </div>

              {/* Chat Bubble Interface Feed */}
              <div className="flex-1 bg-[#050505] p-4 flex flex-col justify-end space-y-3 font-sans overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStepIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3 flex flex-col"
                  >
                    {demoSteps[currentStepIndex].messages.map((msg, mIdx) => {
                      if (msg.sender === "system") {
                        return (
                          <div key={mIdx} className="self-center bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-[9px] text-gray-400 font-medium">
                            {msg.text}
                          </div>
                        );
                      }

                      const isBot = msg.sender === "bot";
                      return (
                        <div
                          key={mIdx}
                          className={`flex flex-col max-w-[85%] ${
                            isBot ? "self-start items-start" : "self-end items-end"
                          }`}
                        >
                          <div
                            className={`px-3 py-2 text-xs leading-relaxed text-white rounded-2xl ${
                              isBot 
                                ? "bg-zinc-900 rounded-tl-none border border-zinc-800"
                                : "bg-[#22C55E] rounded-tr-none"
                            }`}
                          >
                            <p>{msg.text}</p>
                          </div>
                          <span className="text-[8px] text-gray-500 mt-1 px-1">{msg.time}</span>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Typing inputs simulation */}
              <div className="bg-zinc-900/60 p-3 border-t border-zinc-800/80 flex items-center justify-between gap-2.5">
                <div className="flex-1 bg-zinc-950 rounded-full py-1.5 px-3 border border-zinc-800 text-[10px] text-zinc-500 select-none">
                  Digitando resposta...
                </div>
                <div className="w-7 h-7 rounded-full bg-[#22C55E] flex items-center justify-center text-white shrink-0">
                  <Send className="w-3.5 h-3.5 shrink-0 ml-0.5" />
                </div>
              </div>
            </div>

            {/* AI Console Logger below Mockup */}
            <div className="mt-4 w-full max-w-[340px] bg-zinc-950/80 border border-zinc-900 rounded-lg p-3 font-mono text-[9px] text-[#22C55E] tracking-tight text-left">
              <span className="text-gray-500">[CONSOLE]:</span> {demoSteps[currentStepIndex].systemLog}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
