import { BookOpen, Layers, MapPin, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useGetPlatformStats } from "../hooks/useQueries";

export default function ImpactStats() {
  const { data: stats } = useGetPlatformStats();

  const statCards = [
    {
      icon: Layers,
      value: stats ? Number(stats.totalSchemes).toLocaleString("en-IN") : "50+",
      label: "सरकारी योजनाएं",
      color: "bg-saffron-500",
      iconColor: "text-saffron-500",
      bg: "bg-saffron-50",
    },
    {
      icon: MessageSquare,
      value: stats
        ? Number(stats.totalPosts).toLocaleString("en-IN")
        : "2,400+",
      label: "सामुदायिक पोस्ट",
      color: "bg-forest-600",
      iconColor: "text-forest-600",
      bg: "bg-forest-50",
    },
    {
      icon: BookOpen,
      value: stats
        ? Number(stats.totalStories).toLocaleString("en-IN")
        : "180+",
      label: "सफलता की कहानियां",
      color: "bg-golden-500",
      iconColor: "text-golden-600",
      bg: "bg-golden-50",
    },
    {
      icon: MapPin,
      value: "6,00,000+",
      label: "गांव प्रभावित",
      color: "bg-purple-600",
      iconColor: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${stat.bg} rounded-2xl p-6 text-center border border-border`}
            >
              <div className={`inline-flex p-3 rounded-xl ${stat.bg} mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-body text-sm font-semibold text-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
