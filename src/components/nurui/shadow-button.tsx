import React from "react";

interface HoverShadowButtonProps {
  text: string;
  link: string;
}

const HoverShadowButton = ({ text, link }: HoverShadowButtonProps) => {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="relative px-8 py-3 bg-transparent text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.5)] active:scale-95 active:shadow-[0_0_10px_3px_rgba(34,197,94,0.4)] group"
    >
      <span>{text}</span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-600/10" />
    </button>
  );
};

export default HoverShadowButton;
