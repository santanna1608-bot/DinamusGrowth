'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ShieldAlert, Heart, ShoppingBag, Truck, Building2, Briefcase, GraduationCap, Utensils, Construction } from "lucide-react";

export default function Segments() {
  const [activeSegmentIdx, setActiveSegmentIdx] = useState(0);

  const segments = [
    {
      name: "Clínicas Estéticas",
      icon: Heart,
      accent: "text-rose-400 border-rose-500/30 bg-rose-950/10",
      playbookTitle: "Funil de Agendamento Premium para Procedimentos Autônomos",
      adsStrategy: "Meta Ads focado em Criativos de 'Antes/Depois' (comerciais), Vídeos Explicativos da doutora(o) e campanhas de conversão otimizadas para WhatsApp Geoprocessado (raio de 10km).",
      whatsStrategy: "A triagem automática pergunta que procedimento tem interesse, se já fez no passado, explica o ticket médio em áudio gerado por voz premium e abre o scheduler para consulta.",
      metricExpectation: "CPL regular: R$ 8 - R$ 15 • Agenda cheia e redução de 90% em faltas com lembretes automáticos."
    },
    {
      name: "Lojas / E-commerce",
      icon: ShoppingBag,
      accent: "text-blue-400 border-blue-500/30 bg-blue-950/10",
      playbookTitle: "Atendimento Consultivo & Carrinho Recuperado no Zap",
      adsStrategy: "Vitrines no Meta Catalog e campanhas de mensagens para as coleções mais compradas, integrado com criativos UGC reais de provadores.",
      whatsStrategy: "Duvidas frequentes de tamanho e trocas resolvidas por bot em 10s. Envio automático de cupons para finalizar pedidos incompletos de clientes que abandonaram carrinhos.",
      metricExpectation: "Aumento de até 35% no faturamento direto e recuperação média de 4 a cada 10 carrinhos abandonados."
    },
    {
      name: "Delivery / Entregas",
      icon: Truck,
      accent: "text-amber-400 border-amber-500/30 bg-amber-950/10",
      playbookTitle: "Cardápio Dinâmico e Captação Geolocalizada",
      adsStrategy: "Anúncios Meta Ads de alta retenção visual focados em fotos gastronômicas, segmentados exatamente nos horários das refeições (11h-14h e 18h-22h).",
      whatsStrategy: "Envio instantâneo do catálogo digital, processamento de pedidos integrado, controle de status do entregador e captura ativa do contato do cliente para futuras campanhas de cashback.",
      metricExpectation: "Aumento de 40% nas vendas diretas sem pagamento de taxas abusivas de aplicativos de entrega."
    },
    {
      name: "Imobiliárias",
      icon: Building2,
      accent: "text-[#22C55E] border-emerald-500/30 bg-emerald-950/10",
      playbookTitle: "Filtros de Qualificação para Compra e Locação",
      adsStrategy: "Google Ads focado em palavras de fundo de funil (ex: 'Apartamento 3 quartos no Centro') + Carimbos dinâmicos no Meta de lançamentos em destaque.",
      whatsStrategy: "O chatbot descobre a renda mensal estimada do cliente, o valor de entrada disponível, a região desejada e transfere o lead filtrado e pronto para visitar para o corretor com o histórico pronto.",
      metricExpectation: "Custo por Lead qualificado reduzido em até 50% e corretores focando apenas em negócios reais."
    },
    {
      name: "Escritórios de Advocacia / Contabilidade",
      icon: Briefcase,
      accent: "text-purple-400 border-purple-500/30 bg-purple-950/10",
      playbookTitle: "Filtro de Casos Jurídicos e Agendamento Automático",
      adsStrategy: "Google Search focado em palavras-chave específicas do nicho corporativo ou pessoal (ex: 'Advogado trabalhista premium RJ' ou 'Planejamento tributário').",
      whatsStrategy: "O fluxo faz perguntas chaves sobre o problema, valida se o caso é cabível de atendimento, solicita assinatura de documentos primários em imagem e agenda reunião diretamente no Google Calendar.",
      metricExpectation: "Economia de mais de 30 horas mensais de triagem manual e agendamento rápido de consultas jurídicas."
    },
    {
      name: "Academias / Studios",
      icon: GraduationCap,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-950/10",
      playbookTitle: "Atração de Alunos com Experiências Gratuitas",
      adsStrategy: "Anúncios em Meta Ads focados no público do bairro e entorno com depoimentos dos alunos atuais e criativos demonstrando a estrutura interna premium do local.",
      whatsStrategy: "Triagem distribui passaporte de 1 dia de graça, encaminha o cupom QR Code ao WhatsApp e agenda o dia da primeira aula experimental.",
      metricExpectation: "Taxa de conversão de 60% dos novos leads convidados em matrículas ativas."
    },
    {
      name: "Restaurantes",
      icon: Utensils,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/10",
      playbookTitle: "Reservas de Mesas e Atendimento Comercial VIP",
      adsStrategy: "Anúncios de carrossel apresentando os pratos mais vendidos, links de convite direto para aniversariantes do mês e reservas em datas comemorativas.",
      whatsStrategy: "Gestão automática de fila de espera digital, confirmação rápida de mesa, envio do menu premium e pesquisas de satisfação NPS automatizadas após a visita.",
      metricExpectation: "Aumento médio de 25% na fidelização de clientes e redução total em gargalos telefônicos manuais."
    },
    {
      name: "Prestadores de Serviço",
      icon: Construction,
      accent: "text-pink-400 border-pink-500/30 bg-pink-950/10",
      playbookTitle: "Triagem de Orçamentos e Solicitação de Projetos",
      adsStrategy: "Meta Ads + Google Ads combinados demonstrando obras realizadas, serviços de montagem, reformas residenciais ou corporativas com alta estética.",
      whatsStrategy: "O bot solicita fotos do local a ser trabalhado, envia estimativas aproximadas de insumos baseadas nas respostas, qualifica o perfil do solicitante e aciona o especialista técnico.",
      metricExpectation: "Processamento de demandas 10x mais veloz e exclusão total de leads desqualificados."
    }
  ];

  return (
    <section className="relative py-24 bg-zinc-950/60 border-t border-zinc-900" id="segmentos-section">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="segments-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Estratégias Sob Medida
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
            Estratégias adaptadas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#22C55E] to-blue-500">diferentes negócios</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            Clique na sua categoria correspondente abaixo para analisar a estratégia específica de Tráfego Pago + Automação que desenhamos para o seu pilar de crescimento.
          </p>
        </div>

        {/* Carousel / Navigation Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="segments-tags-nav">
          {segments.map((segment, idx) => {
            const IconComponent = segment.icon;
            const isActive = idx === activeSegmentIdx;
            return (
              <button
                key={idx}
                onClick={() => setActiveSegmentIdx(idx)}
                className={`px-4 py-3 rounded-full border text-xs md:text-sm font-bold flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "bg-gradient-to-r from-[#25D366] to-[#059669] border-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.45)] scale-[1.03] transition-all glow-green" 
                    : "glass text-gray-400 hover:border-zinc-800 hover:text-white"
                }`}
                id={`segment-btn-${idx}`}
              >
                <IconComponent className="w-4.5 h-4.5" />
                {segment.name}
              </button>
            );
          })}
        </div>

        {/* Playbook Display Output Panel */}
        <div className="max-w-4xl mx-auto" id="segments-playbook-viewer">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegmentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-premium p-6 md:p-8 shadow-2xl relative overflow-hidden"
              id="segments-playbook-content"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-5 mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${segments[activeSegmentIdx].accent}`}>
                    {React.createElement(segments[activeSegmentIdx].icon, { className: "w-5 h-5 font-bold" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#22C55E] uppercase">PLAYBOOK EXCLUSIVO</span>
                    <h3 className="text-xl md:text-2xl font-display font-black text-white mt-0.5">
                      {segments[activeSegmentIdx].name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs bg-zinc-900 border border-zinc-800 text-gray-400 px-3 py-1.5 rounded-lg font-mono">
                  Gatilhos Otimizados
                </span>
              </div>

              {/* Dynamic Strategies Subcategories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-900 space-y-2">
                  <h4 className="text-xs font-bold text-blue-400 font-mono tracking-wider uppercase">1. ESTRATÉGIA DE ANÚNCIOS (TRAFFIC)</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">{segments[activeSegmentIdx].adsStrategy}</p>
                </div>

                <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-900 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 font-mono tracking-wider uppercase">2. FUNIL DE ATENDIMENTO (WHATSAPP)</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">{segments[activeSegmentIdx].whatsStrategy}</p>
                </div>
              </div>

              {/* Expectations bottom line */}
              <div className="p-4 bg-zinc-950 border border-emerald-950/50 rounded-xl flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 animate-bounce" />
                <p className="text-xs md:text-sm text-gray-400 font-medium">
                  <strong className="text-[#22C55E]">Expectativa estimada do Funil:</strong> {segments[activeSegmentIdx].metricExpectation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
