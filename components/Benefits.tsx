'use client';

import React from "react";
import { motion } from "motion/react";
import { Clock, UserCheck, Zap, TrendingUp, Coins, Expand, Layers, Users } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Atendimento automático 24h",
      description: "Seu canal oficial responde leads, filtra e agenda reuniões mesmo às 3 da manhã de um domingo. Nunca mais deixe um lead qualificado esperando.",
      icon: Clock,
    },
    {
      title: "Zero leads perdidos",
      description: "Todos os contatos gerados pelas campanhas são imediatamente acolhidos e gravados, eliminando falhas humanas na entrega do atendimento.",
      icon: UserCheck,
    },
    {
      title: "Respostas instantâneas",
      description: "O WhatsApp qualifica em menos de 5 segundos. Leve seus clientes de alto interesse pelo funil enquanto a intenção de compra está no topo.",
      icon: Zap,
    },
    {
      title: "Mais conversões",
      description: "Ao responder em tempo recorde e filtrar apenas os contatos qualificados, a taxa final de conversões do comercial aumenta exponencialmente.",
      icon: TrendingUp,
    },
    {
      title: "Redução de custo por lead",
      description: "A automação otimiza a triagem no início, gerando economia drástica em horas humanas desperdiçadas conversando com perfis frios.",
      icon: Coins,
    },
    {
      title: "Escalabilidade real",
      description: "Receba 100 ou 10.000 leads em um único dia. O sistema absorve, qualifica e categoriza o volume inteiro sem travar ou atrasar.",
      icon: Expand,
    },
    {
      title: "Organização do atendimento",
      description: "Mantenha o histórico centralizado, atribua tags inteligentes de interesse do lead e organize automaticamente sua captação B2B.",
      icon: Layers,
    },
    {
      title: "Produtividade de elite",
      description: "Seu time comercial foca 100% do tempo em fechar negócios com leads quentes, se livrando das respostas repetitivas manuais.",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-24 bg-zinc-950/60 border-t border-zinc-900" id="beneficios-section">
      {/* Soft color highlights from image gradients */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="benefits-container">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-805 bg-zinc-900 text-gray-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Vantagens Competitivas
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Mais velocidade. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#22C55E] to-blue-400">Mais organização. Mais vendas.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Sua operação comercial transformada em uma máquina de performance inteligente, que une o faturamento acelerado à eficiência organizacional.
          </p>
        </div>

        {/* 8 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-1" id="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass p-6 hover:border-[#25D366]/30 transition-all duration-300 hover:scale-[1.03] glow-blue group h-full flex flex-col"
                id={`beneficios-card-${index + 1}`}
              >
                {/* Icon wrapper inside background circular frame */}
                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E]/10 group-hover:text-[#22C55E] transition-all duration-300 mb-4 shadow-inner">
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content titles */}
                <h3 className="font-display font-bold text-gray-150 text-base group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans flex-1">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
