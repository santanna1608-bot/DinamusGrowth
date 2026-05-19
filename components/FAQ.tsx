'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Em quanto tempo começo a receber leads?",
      answer: "O prazo varia conforme o seu nicho de mercado e a complexidade estrutural das campanhas, mas a maioria dos nossos clientes de tráfego pago + automação começa a receber os primeiros leads qualificados em até 48 horas após a ativação dos anúncios no Meta Ads ou Google Ads."
    },
    {
      question: "A automação funciona 24h?",
      answer: "Sim! Toda a nossa engenharia de mensagens e o atendimento automatizado funcionam continuamente no WhatsApp, sem interrupções. Independentemente de feriados ou fins de semana, o lead é atendido comercialmente de forma instantânea em menos de 5 segundos."
    },
    {
      question: "Vocês criam toda a estrutura do zero?",
      answer: "Sim, entregamos a operação totalmente estruturada de ponta a ponta. Isso inclui a criação das campanhas de anúncios, copywriting persuasivo, design de artes/vídeos, programação de todas as automações e conexões das APIs no WhatsApp."
    },
    {
      question: "Vocês criam websites e landing pages profissionais?",
      answer: "Sim! Desenvolvemos Landing Pages de alta conversão, sites institucionais, portfólios e páginas de vendas focadas na conversão de leads. Nossos projetos são extremamente rápidos (essencial para campanhas de tráfego não perderem cliques), responsivos e construídos com técnicas modernas de SEO. Além disso, já entregamos todo o site pré-configurado com os pixels do Meta Ads, Google Analytics e integrado à engrenagem do WhatsApp."
    },
    {
      question: "Funciona para pequenas e médias empresas?",
      answer: "Absolutamente! Adaptamos e dimensionamos a estrutura para caber exatamente com o porte operacional e orçamento atual do seu negócio. O funil da Dinamus Growth é altamente modular, crescendo conforme o faturamento do seu empreendimento decola."
    },
    {
      question: "Preciso já ter uma equipe comercial estruturada para contratar?",
      answer: "De forma alguma! Nossas automações inteligentes eliminam justamente as tarefas manuais mais operacionais de triagem, de forma que até uma estrutura pequena (com um único vendedor) consegue absorver centenas de leads por dia sem estresses."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-black border-t border-zinc-900" id="faq-section">
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-4xl relative" id="faq-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-805 bg-zinc-900 text-gray-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Dúvidas Frequentes
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white mb-4">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600">Frequentes</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
            Tudo o que você precisa entender sobre a engrenagem premium que acelera as vendas corporativa da sua empresa.
          </p>
        </div>

        {/* Accordion List wrapper */}
        <div className="space-y-4" id="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div 
                key={idx} 
                className="glass hover:border-[#25D366]/30 transition-colors duration-300 overflow-hidden"
                id={`faq-item-${idx}`}
              >
                {/* Trigger button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left px-5 py-4 md:py-5 flex items-center justify-between gap-4 font-display font-bold text-gray-200 hover:text-white transition-colors cursor-pointer outline-none"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${idx}`}
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-400" : ""}`} />
                </button>

                {/* Dropdown panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                      id={`faq-content-wrapper-${idx}`}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-400 leading-relaxed font-sans border-t border-zinc-900/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
