import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="dinamus-logo-container">
      {/* High-quality styled inline SVG representation of the Dinamus Growth logo */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11" id="dinamus-logo-svg">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]"
        >
          {/* Background Glow Ring */}
          <circle cx="50" cy="50" r="48" stroke="url(#logoGlowGrad)" strokeWidth="0.5" strokeOpacity="0.3" fill="rgba(3,3,3,0.6)" />
          
          {/* Logo Mark: Stylized Abstract "D" and "G" */}
          <path
            d="M25 25 C35 20, 65 20, 70 30 C75 38, 70 52, 60 55 C52 58, 40 55, 35 55 L35 70 C35 75, 25 75, 25 70 Z"
            fill="url(#mainDGrad)"
          />
          <path
            d="M45 52 C55 52, 70 55, 75 62 C80 72, 65 82, 50 82 C35 82, 33 70, 33 70 L43 70 C43 70, 44 74, 50 74 C58 74, 65 70, 64 64 C63 60, 52 59, 45 59 Z"
            fill="url(#mainGGrad)"
          />
          
          {/* High-conversion Upward Arrow - sweeping through the logo */}
          <path
            d="M18 78 L78 26 M78 26 L60 25 M78 26 L79 44"
            stroke="url(#arrowGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="78,26 62,22 66,38"
            fill="url(#arrowTipGrad)"
          />

          {/* Gradients */}
          <defs>
            {/* Multi-spectral dynamic gradient replicating the attached logo */}
            <linearGradient id="mainDGrad" x1="25" y1="25" x2="70" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" /> {/* Blue */}
              <stop offset="50%" stopColor="#8B5CF6" /> {/* Indigo / Violet */}
              <stop offset="100%" stopColor="#D946EF" /> {/* Pink / Purple */}
            </linearGradient>
            
            <linearGradient id="mainGGrad" x1="33" y1="52" x2="75" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D946EF" /> {/* Purple */}
              <stop offset="60%" stopColor="#22C55E" /> {/* Green */}
              <stop offset="100%" stopColor="#10B981" /> {/* Neon Emerald */}
            </linearGradient>

            <linearGradient id="arrowGrad" x1="18" y1="78" x2="78" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EC4899" /> {/* Pink */}
              <stop offset="40%" stopColor="#F59E0B" /> {/* Amber */}
              <stop offset="100%" stopColor="#FBBF24" /> {/* Bright Yellow */}
            </linearGradient>

            <linearGradient id="arrowTipGrad" x1="62" y1="22" x2="78" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <linearGradient id="logoGlowGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col select-none leading-none" id="dinamus-logo-text">
          <span className="font-display font-black text-xl md:text-2xl tracking-wider text-white">
            DINAMUS
          </span>
          <span className="font-display font-extrabold text-[10px] md:text-sm tracking-[0.25em] text-[#22C55E] -mt-0.5">
            GROWTH
          </span>
        </div>
      )}
    </div>
  );
}
