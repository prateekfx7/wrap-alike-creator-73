import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import herobg from "@/assets/hero-landscape.jpg";
import HoverShadowButton from "@/components/nurui/shadow-button";

const WrapUp = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={herobg}
          alt="Clean and sustainable city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          WRAP UP
        </h1>

        {/* Full Form */}
        <div className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          <p><strong>W </strong>aste</p>
          <p><strong>R </strong>eduction</p>
          <p><strong>A </strong>wareness &</p>
          <p><strong>P </strong>articipation</p>
          <p> ~ <strong>U </strong>plifting our <strong>P </strong>lanet</p>
        </div>

        {/* Quote */}
        <blockquote className="italic text-xl md:text-2xl text-bright-green mb-10">
          "For workers, it’s dignity in action. For citizens, it’s responsibility in practice. Together, we build a cleaner tomorrow."
        </blockquote>

        <div className="flex justify-center gap-6 mb-8">
          <HoverShadowButton text="Citizen Dashboard" link="https://wrap-up-by-nullpointer.vercel.app/" />
          <HoverShadowButton text="Worker Dashboard" link="/worker-dashboard" />
        </div>

        <ChevronDown className="w-10 h-10 text-white mx-auto animate-bounce" />

      </div>
    </section>
  );
};
export default WrapUp;