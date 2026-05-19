'use client';

import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, Clock, TrendingDown, Users, CheckCircle, XCircle } from "lucide-react";

export default function Problem() {
  return (
    <section className="relative py-24 bg-black border-t border-zinc-900" id="problem-section pb-24">
      {/* Dynamic Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef444405_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="problem-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-950/10 text-red-400 text-xs font-semibold tracking-wide uppercase mb-4 shadow-[0_0_12px_rgba(239,68,68,0.06)]">
            <AlertTriangle className="w-3.5 h-3.5" />
            O Diagnóstico Silencioso
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Sua empresa perde vendas todos os dias <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">sem perceber</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Quando um lead qualificado entra em contato e não recebe uma resposta imediata, o interesse evapora em poucos minutos. Você investe em tráfego, mas o gargalo na operação manual sabota seus lucros.
          </p>
        </div>

        {/* Pain points Grid or Side-by-Side Scenario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Left panel: Bullet points describing the friction */}
          <div className="lg:col-span-5 flex flex-col space-y-6" id="friction-panel">
            <h3 className="text-xl md:text-2xl font-bold text-gray-200 tracking-wide font-display">
              Enquanto sua equipe tenta responder manualmente...
            </h3>
            
            <div className="space-y-4">
              {/* Pain Point 1 */}
              <div className="flex gap-4 p-4 rounded-xl glass hover:border-red-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Atendimento lento</h4>
                  <p className="text-xs text-gray-400 mt-1">Leads esperam horas por respostas. Estatísticas comprovam: responder após 5 minutos reduz em 80% as chances de qualificação.</p>
                </div>
              </div>

              {/* Pain Point 2 */}
              <div className="flex gap-4 p-4 rounded-xl glass hover:border-red-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-505 shrink-0">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Orçamento de tráfego desperdiçado</h4>
                  <p className="text-xs text-gray-400 mt-1">Sua agência de tráfego até traz contatos novos no WhatsApp, mas a falta de triagem rápida faz o CPL real (Custo por Lead Efetivo) disparar.</p>
                </div>
              </div>

              {/* Pain Point 3 */}
              <div className="flex gap-4 p-4 rounded-xl glass hover:border-red-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Sobrecarga humana e leads frios</h4>
                  <p className="text-xs text-gray-400 mt-1">Comerciais perdem tempo respondendo &quot;curiosos&quot; ou leads sem orçamento, deixando os leads de alto ticket sem a atenção devida.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Modern visual diagram / Before and After representation */}
          <div className="lg:col-span-7" id="comparison-visual-panel">
            <div className="glass-premium p-6 shadow-2xl relative overflow-hidden" id="comparison-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Manual Scenario */}
                <div className="p-4 rounded-xl border border-red-900/40 bg-red-950/10 flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wide text-red-400 uppercase">PROCESSO MANUAL INEFICIENTE</span>
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  
                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800/40 text-gray-300">
                      <p className="font-semibold text-red-400 text-[10px] mb-1">Passo 1: Lead chega do anúncio</p>
                      <span className="text-zinc-500 italic">Lead aguarda 45 minutos...</span>
                    </div>
                    <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800/40 text-gray-300 opacity-60">
                      <p className="font-semibold text-gray-400 text-[10px] mb-1">Passo 2: Atendente manda &quot;Olá&quot;</p>
                      <span className="text-zinc-500 italic">Lead já comprou do concorrente</span>
                    </div>
                    <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800/40 text-gray-300 opacity-60">
                      <p className="font-semibold text-gray-400 text-[10px] mb-1 font-mono">Conversão Média: 1% - 2%</p>
                    </div>
                  </div>
                </div>

                {/* Automation Scenario with Dynamic/Neon styling */}
                <div className="p-4 rounded-xl border border-emerald-900/40 bg-emerald-950/10 flex flex-col space-y-4 shadow-[0_4px_25px_rgba(16,185,129,0.05)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wide text-emerald-400 uppercase">DINAMUS AUTOMATION FUNNEL</span>
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  
                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800/40 text-gray-300">
                      <p className="font-semibold text-emerald-400 text-[10px] mb-1">Passo 1: Lead chega do anúncio</p>
                      <span className="text-emerald-500 font-semibold">Resposta em 3 segundos</span>
                    </div>
                    <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800/40 text-gray-300">
                      <p className="font-semibold text-emerald-400 text-[10px] mb-1">Passo 2: Qualificação Integrada</p>
                      <span className="text-zinc-400">Triagem do perfil e agenda automática</span>
                    </div>
                    <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800/40 text-emerald-400 font-semibold bg-emerald-950/20">
                      <p className="text-[10px] mb-0.5">Conversão Média: 8% - 15%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistical Banner */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center font-sans">
                <p className="text-xs text-gray-400">
                  <strong className="text-white">Leads sem resposta imediata esfriam 10x mais rápido.</strong> A cada minuto de atraso, o custo de aquisição (CAC) da sua empresa aumenta de forma silenciosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
