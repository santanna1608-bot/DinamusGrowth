'use client';

import React from "react";
import { X } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy";
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-premium p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-200 custom-scroll text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
          <h3 className="text-xl font-display font-black text-white">
            {type === "terms" ? "Termos de Uso" : "Políticas de Privacidade"}
          </h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans pb-4">
          {type === "terms" ? (
            <>
              <p> Bem-vindo à <strong>Dinamus Growth</strong>. Ao acessar e utilizar o nosso website e serviços de marketing digital, tráfego pago, criação de sites e automação comercial, você concorda com os seguintes termos e condições.</p>
              
              <div>
                <h4 className="font-bold text-white mb-2 font-display">1. Escopo de Serviços</h4>
                <p>Nossa operação desenvolve projetos adaptados personalizados, incluindo gestão de anúncios de performance (Meta Ads e Google Ads), concepção de Landing Pages profissionais e engenharia de sequências automatizadas para integração ao WhatsApp Business API.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">2. Responsabilidade do Usuário</h4>
                <p>O cliente concorda que o sucesso operacional das campanhas publicitárias e automações depende de múltiplos fatores mercadológicos, incluindo preços de produtos, qualidade do atendimento comercial receptivo e reputação institucional. É dever do cliente fornecer informações autênticas para as triagens de diagnósticos.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">3. Direitos de Propriedade Intelectual</h4>
                <p>Todo o material conceitual, marcas, logotipos, layouts e código desenvolvidos pela Dinamus Growth (LF7) continuam resguardados por direitos de propriedade intelectual aplicáveis, concedendo aos clientes a licença de uso para sua específica operação comercial.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">4. Limitação de Responsabilidade</h4>
                <p>A Dinamus Growth não se responsabiliza por eventuais instabilidades técnicas temporárias de provedores externos de terceiros (como Facebook Ads, Google Ads ou servidores da API do WhatsApp Cloud), envidando todos os esforços comerciais para rápida resolução.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">5. Modificações nos Termos</h4>
                <p>Reservamos o direito de atualizar estes termos a qualquer tempo para refletir melhorias técnicas e operacionais. O uso continuado do site constitui consentimento aos novos regramentos.</p>
              </div>
            </>
          ) : (
            <>
              <p>Na <strong>Dinamus Growth</strong>, privacidade e segurança são prioridades absolutas. Esta declaração descreve como coletamos, processamos e protegemos os seus dados de forma totalmente transparente.</p>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">1. Informações que Coletamos</h4>
                <p>Coletamos os dados fornecidos voluntariamente por você em nosso formulário estratégico interativo de diagnóstico, incluindo seu nome, nome da empresa, segmento empresarial, verba estimada para anúncios e o principal gargalo de faturamento comercial.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">2. Uso das Informações</h4>
                <p>Os dados são processados exclusivamente para fins de gerar o seu diagnóstico de eficiência comercial em tempo real por IA e personalizar propostas sob medida de tráfego pago, criação de websites e fluxos automatizados de WhatsApp para seu modelo corporativo.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">3. Compartilhamento e Segurança</h4>
                <p>Seus dados cadastrais jamais serão cedidos, comercializados ou compartilhados com terceiros não autorizados. Adotamos padrões técnicos modernos de segurança (criptografia de tráfego HTTPS) para blindar seu banco de informações contra incidentes ou acessos ilícitos.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">4. Direitos Relativos à LGPD</h4>
                <p>Em total alinhamento com a Lei Geral de Proteção de Dados (LGPD), asseguramos a você o direito de requerer o acesso, retificação, limitação ou exclusão definitiva das informações cadastradas a qualquer momento através do e-mail oficial (dinamusgrowth@gmail.com).</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-display">5. Cookies de Pixel e Rastreamento</h4>
                <p>Utilizamos cookies de terceiros comuns (como os pixels de monitoramento do Meta Ads e Google Analytics) para entender o comportamento de conversão em nossa landing page e oferecer anúncios institucionais segmentados e oportunos.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
