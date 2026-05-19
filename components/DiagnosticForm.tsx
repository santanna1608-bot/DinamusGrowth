'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Loader2, FileText, CheckCircle, BrainCircuit, Landmark, Calendar, MessageSquareShare } from "lucide-react";

export default function DiagnosticForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    segment: "",
    currentBudget: "",
    bottleneck: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const segmentsOptions = [
    "Clínicas Estéticas",
    "Lojas / E-commerce",
    "Delivery / Entregas",
    "Imobiliárias",
    "Escritórios de Advocacia / Contabilidade",
    "Academias / Studios",
    "Restaurantes",
    "Prestadores de Serviço"
  ];

  const budgetOptions = [
    "Menor que R$ 2.000 / mês",
    "Entre R$ 2.000 e R$ 5.000 / mês",
    "Acima de R$ 5.000 / mês"
  ];

  const bottleneckOptions = [
    "Perda de leads por demora no WhatsApp",
    "Muitos curiosos (Falta de triagem/qualificação)",
    "Anúncios muito caros / Custo por Lead (CPL) alto",
    "Equipe sobrecarregada com tarefas repetitivas manuais"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.segment || !formData.currentBudget || !formData.bottleneck) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setDiagnosticResult(null);

    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro de servidor ao gerar análise estatística.");
      }

      const data = await response.json();
      setDiagnosticResult(data);
    } catch (err: any) {
      console.error(err);
      setError("Não foi possível gerar seu diagnóstico inteligente. Por favor, tente falar diretamente no WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  const shareOnWhatsApp = () => {
    if (!diagnosticResult) return;
    
    const textMessage = `Olá Dinamus! Acabei de gerar meu Diagnóstico de IA Comercial para a minha empresa *${formData.companyName || "Minha Empresa"}* (Setor: *${formData.segment}*).\n\n*Meu maior gargalo:* ${formData.bottleneck}\n*Resumo da Análise:* ${diagnosticResult.analisePotencial.slice(0, 200)}...\n\nGostaria de agendar uma reunião de diagnóstico com um especialista técnico para estruturar meu plano prático.`;
    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`https://wa.me/5521990465095?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="relative py-24 bg-black border-t border-zinc-900 overflow-hidden" id="diagnostico-final-section">
      {/* Dynamic graphic radial glow in backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl relative" id="cta-final-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Pitch texts (5 Columns) */}
          <div className="lg:col-span-5 text-left space-y-6" id="cta-pitch">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-[0_0_12px_rgba(16,185,129,0.06)]">
              <BrainCircuit className="w-3.5 h-3.5" />
              Diagnóstico Estratégico com IA
            </div>
            
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-white">
              Sua empresa está pronta para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#22C55E] to-blue-500">automatizar o crescimento</span>?
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
              Receba uma análise estratégica personalizada para o seu modelo de negócio gerada instantaneamente pelo nosso núcleo de inteligência de conversão.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-gray-300">Estruturação de funis específicos para anúncios de alta performance.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-gray-300">Integração blindada com a API do WhatsApp Business Cloud.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-gray-300">Aceleração de taxa de fechamento comercial em segundos.</p>
              </div>
            </div>
          </div>

          {/* Right panel: Active AI Interactive Form Engine (7 Columns) */}
          <div className="lg:col-span-7 glass-premium p-6 md:p-8 shadow-2xl relative" id="diagnostico-engine-card">
            
            <AnimatePresence mode="wait">
              {!diagnosticResult ? (
                // Step 1: Request Lead detailed Profile
                <motion.form 
                  key="form-entry"
                  onSubmit={handleGenerateDiagnostic}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 text-left"
                >
                  <div className="border-b border-zinc-900 pb-4 mb-4">
                    <h3 className="text-lg font-bold text-gray-100 font-display">Monte Seu Diagnóstico Estratégico</h3>
                    <p className="text-xs text-gray-500 mt-1">Preencha e nosso motor comercial fará uma triagem personalizada em tempo real.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Input Contact Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-semibold text-gray-400 block">Seu Nome</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Roberto Sant'Anna"
                        className="w-full bg-[#050505] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-zinc-700 outline-none focus:border-[#22C55E] transition-all"
                      />
                    </div>

                    {/* Input Company Name */}
                    <div className="space-y-2">
                      <label htmlFor="company-input" className="text-xs font-semibold text-gray-400 block">Nome da Empresa</label>
                      <input
                        id="company-input"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Ex: Clínica Odonto VIP"
                        className="w-full bg-[#050505] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-zinc-700 outline-none focus:border-[#22C55E] transition-all"
                      />
                    </div>
                  </div>

                  {/* Dropdown Segment */}
                  <div className="space-y-2">
                    <label htmlFor="segment-select" className="text-xs font-semibold text-gray-400 block">
                      Segmento da Empresa <span className="text-[#22C55E]">*</span>
                    </label>
                    <select
                      id="segment-select"
                      name="segment"
                      value={formData.segment}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#050505] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-[#22C55E] cursor-pointer transition-all"
                    >
                      <option value="" disabled className="text-zinc-700">Selecione seu segmento...</option>
                      {segmentsOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-zinc-950 text-gray-300">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dropdown Budget */}
                  <div className="space-y-2">
                    <label htmlFor="budget-select" className="text-xs font-semibold text-gray-400 block">
                      Orçamento Estimado p/ Tráfego <span className="text-[#22C55E]">*</span>
                    </label>
                    <select
                      id="budget-select"
                      name="currentBudget"
                      value={formData.currentBudget}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#050505] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-[#22C55E] cursor-pointer transition-all"
                    >
                      <option value="" disabled className="text-zinc-700">Qual verba mensal disponível?</option>
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-zinc-955 text-gray-300">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dropdown Bottleneck */}
                  <div className="space-y-2">
                    <label htmlFor="bottleneck-select" className="text-xs font-semibold text-gray-400 block">
                      Qual o maior gargalo atual comercial? <span className="text-[#22C55E]">*</span>
                    </label>
                    <select
                      id="bottleneck-select"
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#050505] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-[#22C55E] cursor-pointer transition-all"
                    >
                      <option value="" disabled className="text-zinc-700">Escolha o principal gargalo...</option>
                      {bottleneckOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-zinc-955 text-gray-300">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-950/20 border border-red-500/20 text-red-400 text-xs rounded-lg font-medium">
                      {error}
                    </div>
                  )}

                  {/* Submit Trigger Action button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 via-[#22C55E] to-emerald-600 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.01] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer text-sm"
                    id="cta-submit-btn"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Aguarde, processando diagnóstico exclusivo...
                      </>
                    ) : (
                      <>
                        <BrainCircuit className="w-5 h-5 animate-pulse" />
                        Gerar Diagnóstico Estratégico Grátis
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Step 2: Show Diagnostic Generated result cards
                <motion.div
                  key="diagnostic-output"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">DINAMUS AI AGENT OUTPUT</span>
                      <h3 className="text-lg font-bold text-white font-display mt-0.5">Seu Diagnóstico Comercial Premium</h3>
                    </div>
                    <button 
                      onClick={() => setDiagnosticResult(null)}
                      className="text-xs text-gray-500 hover:text-white transition-colors cursor-pointer"
                    >
                      Refazer análise
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 custom-scroll space-y-4 text-xs md:text-sm font-sans">
                    
                    {/* Potential analysis card */}
                    <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-900 space-y-1.5">
                      <h4 className="font-bold text-gray-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                        Análise de Oportunidades:
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-sans">{diagnosticResult.analisePotencial}</p>
                    </div>

                    {/* Traffic ads strategist blueprint */}
                    <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-900 space-y-1.5">
                      <h4 className="font-bold text-gray-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        Sugestões de Tráfego Ads:
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-sans">{diagnosticResult.planoMetaGoogle}</p>
                    </div>

                    {/* WhatsApp flow blueprint */}
                    <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-900 space-y-1.5">
                      <h4 className="font-bold text-gray-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        Esboço de Funil de WhatsApp:
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-sans">{diagnosticResult.sequenciaWhats}</p>
                    </div>

                    {/* Estimated ROI conversion card */}
                    <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-900 space-y-1.5">
                      <h4 className="font-bold text-gray-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Ganhos Operacionais Projetados:
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-sans">{diagnosticResult.estimativaConversao}</p>
                    </div>

                  </div>

                  {/* High conversion CTA elements */}
                  <div className="border-t border-zinc-900 pt-5 space-y-4">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {diagnosticResult.callToAction || "Mantenha o faturamento em escala previsível."}
                    </p>

                    <button
                      onClick={shareOnWhatsApp}
                      className="w-full py-4 text-sm font-bold bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl shadow-[0_4px_25px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      id="share-whatsapp-cta-btn"
                    >
                      <MessageSquareShare className="w-5 h-5 fill-current" />
                      Falar com Especialista & Salvar Diagnóstico
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
