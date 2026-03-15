import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, Smartphone, Users } from "lucide-react";
import { motion } from "motion/react";
import communityVoiceImg from "/images/image-1.jpg";

const sdgBadges = [
  { num: "1", label: "गरीबी उन्मूलन", color: "#e5243b" },
  { num: "5", label: "लैंगिक समानता", color: "#ff3a21" },
  { num: "10", label: "असमानता में कमी", color: "#dd1367" },
  { num: "17", label: "साझेदारी", color: "#19486a" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer-title {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #fde68a 0%,
            #fbbf24 15%,
            #ffffff 30%,
            #fcd34d 45%,
            #f59e0b 60%,
            #ffffff 75%,
            #fde68a 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer-title 3s linear infinite;
          filter: drop-shadow(0 0 20px rgba(251,191,36,0.5));
        }
      `}</style>

      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${communityVoiceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

      {/* Decorative dots */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pattern-dots z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-golden-400" />
            <span className="text-golden-300 text-sm font-body font-semibold tracking-widest uppercase">
              Smart India · Viksit Bharat 2026
            </span>
          </motion.div>

          {/* Main heading with shimmer effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Empowering Rural India </span>
            <span className="shimmer-text block sm:inline">
              Through Digital Inclusion
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-white/85 mb-8 max-w-2xl leading-relaxed"
          >
            डिजिटल समावेश, सरकारी योजनाओं और सामुदायिक विकास के माध्यम से{" "}
            <strong className="text-golden-300">6,00,000+ गांवों</strong> को जोड़
            रहे हैं। हर आवाज़ मायने रखती है।
            <span className="block mt-1 text-sm text-white/60">
              हर गांव, हर हाथ, डिजिटल भारत
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              data-ocid="hero.schemes.primary_button"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm font-semibold gap-2"
            >
              <a href="#schemes">
                <Landmark className="w-4 h-4" />
                योजनाएं देखें
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="hero.community.secondary_button"
              className="border-white text-white hover:bg-white/15 font-semibold gap-2 backdrop-blur-sm"
            >
              <a href="#community">
                <Users className="w-4 h-4" />
                आवाज़ उठाओ
              </a>
            </Button>
          </motion.div>

          {/* SDG Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-white/60 text-xs font-body uppercase tracking-wider mb-3">
              संयुक्त राष्ट्र एसडीजी में योगदान
            </p>
            <div className="flex flex-wrap gap-3">
              {sdgBadges.map((sdg) => (
                <div
                  key={sdg.num}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.num}
                  </div>
                  <p className="text-white text-xs font-semibold leading-tight">
                    {sdg.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating stats cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4"
        >
          {[
            {
              icon: Landmark,
              value: "50+",
              label: "सरकारी योजनाएं",
            },
            {
              icon: Users,
              value: "6L+",
              label: "गांव शामिल",
            },
            {
              icon: Smartphone,
              value: "24/7",
              label: "डिजिटल पहुंच",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white min-w-[180px]"
            >
              <stat.icon className="w-5 h-5 text-golden-300 mb-2" />
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-sm font-medium text-white/90">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
