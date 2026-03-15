import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type SchemeCategory =
  | "कृषि"
  | "महिला"
  | "स्वास्थ्य"
  | "शिक्षा"
  | "वित्त"
  | "रोजगार"
  | "आवास";

const categories: { label: string; value: SchemeCategory | null }[] = [
  { label: "सभी", value: null },
  { label: "कृषि", value: "कृषि" },
  { label: "महिला", value: "महिला" },
  { label: "स्वास्थ्य", value: "स्वास्थ्य" },
  { label: "शिक्षा", value: "शिक्षा" },
  { label: "वित्त", value: "वित्त" },
  { label: "रोजगार", value: "रोजगार" },
  { label: "आवास", value: "आवास" },
];

const categoryColors: Record<string, string> = {
  कृषि: "bg-forest-100 text-forest-800 border-forest-200",
  महिला: "bg-pink-100 text-pink-800 border-pink-200",
  स्वास्थ्य: "bg-red-100 text-red-800 border-red-200",
  शिक्षा: "bg-blue-100 text-blue-800 border-blue-200",
  वित्त: "bg-golden-100 text-golden-800 border-golden-200",
  रोजगार: "bg-saffron-100 text-saffron-800 border-saffron-200",
  आवास: "bg-purple-100 text-purple-800 border-purple-200",
};

const schemes = [
  {
    id: 1,
    name: "पीएम-किसान सम्मान निधि",
    category: "कृषि" as SchemeCategory,
    eligibility: "सभी छोटे और सीमांत किसान जिनके पास खेती योग्य भूमि है।",
    benefits:
      "किसानों को ₹6,000 वार्षिक सहायता। तीन किश्तों में ₹2,000 सीधे बैंक खाते में।",
    applyLink: "https://pmkisan.gov.in",
  },
  {
    id: 2,
    name: "मनरेगा (MGNREGA)",
    category: "रोजगार" as SchemeCategory,
    eligibility: "ग्रामीण क्षेत्र के वयस्क नागरिक जो अकुशल काम करने के इच्छुक हों।",
    benefits:
      "ग्रामीण परिवारों को 100 दिन का रोजगार गारंटी। न्यूनतम मजदूरी के साथ काम का अधिकार।",
    applyLink: "https://nrega.nic.in",
  },
  {
    id: 3,
    name: "प्रधानमंत्री जन धन योजना",
    category: "वित्त" as SchemeCategory,
    eligibility: "बिना बैंक खाते वाले सभी भारतीय नागरिक।",
    benefits: "जीरो बैलेंस खाता, ₹1 लाख दुर्घटना बीमा, RuPay डेबिट कार्ड मुफ्त।",
    applyLink: "https://pmjdy.gov.in",
  },
  {
    id: 4,
    name: "बेटी बचाओ बेटी पढ़ाओ",
    category: "महिला" as SchemeCategory,
    eligibility: "0-10 वर्ष की बालिकाएं, विशेषकर कम लिंगानुपात वाले जिलों में।",
    benefits: "बालिका शिक्षा और सुरक्षा। शिक्षा अनुदान और जागरूकता कार्यक्रम।",
    applyLink: "https://wcd.nic.in/bbbp-schemes",
  },
  {
    id: 5,
    name: "प्रधानमंत्री आवास योजना",
    category: "आवास" as SchemeCategory,
    eligibility: "कच्चे घर में रहने वाले परिवार जिनके पास पक्का मकान नहीं है।",
    benefits: "सभी को पक्का घर। घर निर्माण के लिए ₹1.20 लाख सहायता सीधे खाते में।",
    applyLink: "https://pmayg.nic.in",
  },
  {
    id: 6,
    name: "आयुष्मान भारत (PM-JAY)",
    category: "स्वास्थ्य" as SchemeCategory,
    eligibility: "आर्थिक रूप से कमजोर परिवार, BPL सूची में दर्ज परिवार।",
    benefits: "5 लाख तक मुफ्त इलाज। सरकारी और निजी अस्पतालों में मुफ्त उपचार।",
    applyLink: "https://pmjay.gov.in",
  },
  {
    id: 7,
    name: "पीएम छात्रवृत्ति योजना",
    category: "शिक्षा" as SchemeCategory,
    eligibility: "आर्थिक रूप से कमजोर वर्ग के छात्र, SC/ST/OBC।",
    benefits: "उच्च शिक्षा के लिए ₹10,000–₹20,000 वार्षिक छात्रवृत्ति।",
    applyLink: "https://scholarships.gov.in",
  },
  {
    id: 8,
    name: "प्रधानमंत्री मातृ वंदना योजना",
    category: "महिला" as SchemeCategory,
    eligibility: "गर्भवती और स्तनपान कराने वाली महिलाएं।",
    benefits: "गर्भवती और स्तनपान कराने वाली महिलाओं को ₹5,000 नकद सहायता।",
    applyLink: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
  },
];

export default function SchemesSection() {
  const [activeCategory, setActiveCategory] = useState<SchemeCategory | null>(
    null,
  );

  const displaySchemes = activeCategory
    ? schemes.filter((s) => s.category === activeCategory)
    : schemes;

  return (
    <section id="schemes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge className="bg-saffron-100 text-saffron-700 border-saffron-200 mb-4">
            सरकारी योजनाएं
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            आपके लिए सरकारी योजनाएं
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            केंद्र और राज्य सरकार की 50+ योजनाओं तक पहुंचें। आपकी जरूरत के अनुसार योजना खोजें
            और सीधे आवेदन करें।
          </p>
        </motion.div>

        {/* Section banner image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <img
            src="/assets/generated/government-schemes-rural.dim_800x500.jpg"
            alt="सरकारी योजनाएं — ग्रामीण भारत"
            className="w-full max-w-2xl rounded-2xl object-cover shadow-lg"
            style={{ maxHeight: 280 }}
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              type="button"
              key={String(cat.value)}
              data-ocid="schemes.category.tab"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground border-primary shadow-warm"
                  : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySchemes.map((scheme, i) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              data-ocid={`schemes.item.${i + 1}`}
            >
              <Card className="h-full hover:shadow-warm transition-shadow duration-300 border-border bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    {/* Serial number badge */}
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-saffron-500 text-white text-xs font-bold flex items-center justify-center shadow-sm mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex items-start justify-between gap-2 flex-1 min-w-0">
                      <CardTitle className="font-display text-base font-bold text-foreground leading-snug">
                        {scheme.name}
                      </CardTitle>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border flex-shrink-0 ${
                          categoryColors[scheme.category] ||
                          "bg-muted text-muted-foreground border-border"
                        }`}
                      >
                        {scheme.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col gap-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      पात्रता
                    </p>
                    <p className="text-sm text-foreground/80 line-clamp-2">
                      {scheme.eligibility}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      मुख्य लाभ
                    </p>
                    <p className="text-sm text-foreground/80 line-clamp-2">
                      {scheme.benefits}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    data-ocid={`schemes.apply.button.${i + 1}`}
                    className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5"
                  >
                    <a
                      href={scheme.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      आवेदन करें <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
