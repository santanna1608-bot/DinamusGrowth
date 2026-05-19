'use client';

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, CheckCircle, Smartphone, ArrowDownRight, Award, Quote, Star } from "lucide-react";

export default function Results() {
  const stats = [
    { title: "Total de Leads Gerados", value: "324.819", change: "+148% em 2025", type: "leads" },
    { title: "Custo por Lead Médio (CPL)", value: "R$ 6,85", change: "-42% de redução", type: "cpl" },
    { title: "Média de Conversão no WhatsApp", value: "14.8%", change: "+280% vs Manual", type: "conversion" },
    { title: "Investimento Gerenciado", value: "R$ 4.7M+", change: "Escala com previsibilidade", type: "budget" }
  ];

  const testimonials = [
    {
      name: "Dra. Carolina Mendes",
      role: "Diretora da Mendes Odontologia Premium",
      text: "Antes da Dinamus Growth, nossas secretárias ficavam sobrecarregadas e perdiam leads que vinham do Instagram. Com a automação integrada, triamos cada perfil de interesse e agendamos 85% das consultas de implantes de alto ticket direto no piloto automático.",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Marcus Vinícius",
      role: "CEO da Horizon Empreendimentos",
      text: "Investíamos mais de R$ 15 mil mensais em tráfego e achávamos que as redes sociais não davam retorno por receber apenas curiosos. A Dinamus montou o filtro no WhatsApp e hoje o corretor só atende quem tem renda declarada acima de R$ 15k. Genial!",
      rating: 5,
      avatar: "MV"
    }
  ];

  return (
    <section className="relative py-24 bg-black border-t border-zinc-900" id="resultados-section">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="results-container">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Mural de Resultados
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Resultados construídos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400">com estratégia</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Dados e fatos incontestáveis sobre como estruturar anúncios integrados com automações impulsiona e consolida o faturamento B2B dos nossos parceiros.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4" id="results-bento-grid">
          
          {/* Main Dashboard Panel (8 Columns) */}
          <div className="lg:col-span-8 glass-premium p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#25D366]/40 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-5 mb-6 gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">DINAMUS ANALYTICS DECK</span>
                <h3 className="text-xl font-display font-black text-white mt-1">Ganhos Operacionais Consolidados</h3>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 text-[#22C55E] border border-emerald-500/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono">
                <TrendingUp className="w-4 h-4" />
                DADOS MÉDIOS 2025
              </div>
            </div>

            {/* Quick Metrics display inside Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-900/60 hover:bg-zinc-900/60 transition-colors">
                  <p className="text-xs text-gray-500 font-semibold">{stat.title}</p>
                  <div className="flex items-baseline gap-3 mt-1.5">
                    <span className="text-2xl md:text-3xl font-display font-extrabold text-white">{stat.value}</span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      stat.type === "cpl" ? "bg-emerald-500/10 text-[#22C55E]" : "bg-blue-500/10 text-blue-400"
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Graphic visual representing Reduced CPL Curve */}
            <div className="bg-zinc-900/30 p-5 rounded-xl border border-zinc-900/60">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold font-mono tracking-wider text-gray-400 uppercase">Evolução de CPL (Custo por Lead) vs Automação</h4>
                <span className="text-[10px] text-gray-500 font-semibold">Análise de 6 Meses</span>
              </div>
              
              {/* Responsive SVG Grid Chart simulating Recharts */}
              <div className="h-44 w-full relative pt-2">
                <svg viewBox="0 0 500 150" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="500" y2="25" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="0" y1="125" x2="500" y2="125" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="4 4" />
                  
                  {/* CPL Curve Line BEFORE (Red dash) */}
                  <path d="M 0 35 L 100 45 L 200 65 L 300 115 L 400 120 L 500 125" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                  
                  {/* CPL Curve Line AFTER (Green solid) */}
                  <path d="M 0 110 L 100 100 L 200 80 L 300 50 L 400 35 L 500 20" fill="url(#chartGrad)" />
                  <path d="M 0 110 L 100 100 L 200 80 L 300 50 L 400 35 L 500 20" fill="none" stroke="#22C55E" strokeWidth="3" />
                  
                  {/* Glowing Data circles */}
                  <circle cx="200" cy="80" r="5" fill="#22C55E" />
                  <circle cx="300" cy="50" r="5" fill="#22C55E" />
                  <circle cx="400" cy="35" r="5" fill="#22C55E" />
                  <circle cx="500" cy="20" r="6" fill="#10B981" />
                </svg>

                {/* X Axis labels */}
                <div className="flex justify-between text-[9px] font-mono text-gray-500 mt-2">
                  <span>Mês 1 (Diagnóstico)</span>
                  <span>Mês 3 (Campanhas Ativas)</span>
                  <span>Mês 6 (Escala Automatizada)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Column (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 justify-between" id="results-testimonials-column">
            {testimonials.map((test, index) => (
              <div 
                key={index}
                className="glass p-6 flex flex-col justify-between shadow-xl relative group hover:border-[#25D366]/40 transition-colors duration-300"
                id={`results-testimonial-card-${index + 1}`}
              >
                <div className="absolute top-5 right-6 text-zinc-900 group-hover:text-[#22C55E]/10 transition-colors pointer-events-none">
                  <Quote className="w-12 h-12 stroke-[4]" />
                </div>

                {/* Reviews Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Text feedback */}
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans italic mb-6 relative z-10">
                  &quot;{test.text}&quot;
                </p>

                {/* Sender Identity profile */}
                <div className="flex items-center gap-3 border-t border-zinc-900 pt-4">
                  <div className="w-9 h-9 rounded-full bg-emerald-950/50 text-[#22C55E] flex items-center justify-center font-bold text-xs font-display border border-emerald-500/20">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-100 leading-none">{test.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-1">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
