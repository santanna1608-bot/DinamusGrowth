import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini on the server with recommended options
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, companyName, segment, currentBudget, bottleneck } = body;

    // Validate request
    if (!segment) {
      return NextResponse.json(
        { error: "O segmento da empresa é obrigatório." },
        { status: 400 }
      );
    }

    // Construct a specific B2B marketing & automation prompt
    const prompt = `Você é um Web Designer Sênior e Especialista em Tráfego Pago, Criação de Sites Profissionais/LPs de Alta Conversão e Automação de WhatsApp da Dinamus Growth.
Gerar uma análise estratégica e plano de ação ultrarrealista, altamente acionável e persuasivo para o seguinte perfil de empresa:
- Nome do contato: ${name || "Empreendedor"}
- Nome da Empresa: ${companyName || "não informado"}
- Segmento de Negócio: ${segment}
- Orçamento Mensal estimado em Tráfego Pago: ${currentBudget || "A definir"}
- Principal Gargalo Operacional: ${bottleneck || "Perda de leads / Atendimento lento"}

Instruções importantes:
- Responda em Português do Brasil (pt-BR).
- Adote um tom corporativo, premium, confiável e focado em escala previsível de vendas.
- O formato deve ser estruturado em seções fáceis de ler no frontend.
- Na análise de tráfego (planoMetaGoogle), recomende também como uma Landing Page rápida e profissional de alta conversão é crucial para receber esses anúncios.
- Retorne obrigatoriamente um formato JSON estruturado com os seguintes campos:
  1. analisePotencial (Uma análise rápida sobre o segmento e por que tráfego + landing page corporativa de alto padrão + automação é a solução definitiva).
  2. planoMetaGoogle (Recomendações técnicas precisas de campanhas no Meta Ads e Google Ads, acompanhado da importância de uma estrutura de site profissional).
  3. sequenciaWhats (Desenho textual de um fluxo automático de atendimento no WhatsApp de 3 etapas para qualificar esse lead 24/7).
  4. estimativaConversao (Uma estimativa otimista mas realista de ganhos em eficiência e volume do funil automatizado de ponta a ponta com site + anúncios + WhatsApp).
  5. callToAction (Mensagem curta e persuasiva para agendar a reunião estratégica com o especialista da Dinamus Growth).

Garanta que o conteúdo seja específico para o segmento selecionado ("${segment}") e resolva diretamente o gargalo informado ("${bottleneck}").`;

    // Generate content using gemini-3.5-flash as recommended for text generation
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analisePotencial: {
              type: Type.STRING,
              description: "Análise estratégica premium sobre o setor e oportunidades."
            },
            planoMetaGoogle: {
              type: Type.STRING,
              description: "Estratégia prática de anúncios pagos no Meta Ads ou Google Ads direcionada ao setor."
            },
            sequenciaWhats: {
              type: Type.STRING,
              description: "Criação do fluxo de atendimento e triagem automática para WhatsApp."
            },
            estimativaConversao: {
              type: Type.STRING,
              description: "Os benefícios de conversão esperados com a engrenagem ativa."
            },
            callToAction: {
              type: Type.STRING,
              description: "Frase marcante com link para prosseguir e agendar diagnóstico formal."
            }
          },
          required: ["analisePotencial", "planoMetaGoogle", "sequenciaWhats", "estimativaConversao", "callToAction"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Resposta em branco do modelo Gemini.");
    }

    // Parse safety check and return
    const parsedData = JSON.parse(resultText.trim());
    return NextResponse.json(parsedData);

  } catch (error: any) {
    console.error("Erro na rota de diagnóstico:", error);
    return NextResponse.json(
      { 
        error: "Não foi possível gerar seu diagnóstico automático neste momento.",
        details: error?.message || "" 
      },
      { status: 500 }
    );
  }
}
