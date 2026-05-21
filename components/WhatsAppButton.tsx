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
      
      {/* Official WhatsApp Icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.581-.01-1.139-.01-1.711.01-.197 0-.518.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.2-.57-.349L17.472 14.382zM12.012 0c-6.627 0-12 5.373-12 12 0 2.159.569 4.187 1.564 5.94l-1.664 6.06 6.204-1.628c1.848 1.103 4.004 1.728 6.304 1.728 6.627 0 12-5.373 12-12s-5.373-12-12-12zm.012 21.82c-1.933 0-3.841-.518-5.501-1.49l-.395-.235-3.691.968 1.025-3.597-.259-.413c-1.063-1.69-1.624-3.66-1.624-5.693 0-5.88 4.781-10.66 10.66-10.66 2.85 0 5.52 1.11 7.53 3.12 2.01 2.01 3.12 4.69 3.12 7.54-.002 5.88-4.783 10.66-10.662 10.66z" />
      </svg>
    </a>
  );
}
