'use client';

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5521990465095?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20o%20meu%20Diagn%C3%B3stico%20Pr%C3%A9mium%20com%20um%20especialista%20da%20Dinamus%20Growth.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba56] text-white w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 group cursor-pointer"
      aria-label="Fale Conosco no WhatsApp"
      id="whatsapp-floating-btn"
    >
      {/* Outer Pulse Circles */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-zinc-900 border border-zinc-800 text-xs text-white font-medium py-1.5 px-3 rounded-lg opacity-0 translate-x-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-xl">
        Falar com Especialista
      </span>
      
      {/* Beautiful WhatsApp Icon Custom or Lucide */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 filter drop-shadow-sm"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.6 1.45 5.58 0 10.12-4.51 10.12-10.05 0-2.69-1.05-5.21-2.95-7.1C16.5 1.6 13.98.54 11.3 1.15 6.04 1.15 1.5 5.66 1.5 11.2c0 1.68.44 3.32 1.28 4.76L1.81 20.3l4.837-1.146zm12.022-7.147c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.011c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </a>
  );
}
