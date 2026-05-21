import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  const logoUrl = "https://drive.usercontent.google.com/download?id=1JVzvtOmAsJsXNof3RDDmso5nALp5vjmA&export=view";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="dinamus-logo-container">
      {/* Dynamic Logo Image */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 overflow-hidden" id="dinamus-logo-img">
        <Image 
          src={logoUrl}
          alt="Dinamus Growth Logo"
          fill
          className="object-contain"
          referrerPolicy="no-referrer"
        />
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
