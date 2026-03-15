import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookHeart, Briefcase, ShoppingBag, Users, Wallet } from "lucide-react";
import { motion } from "motion/react";

const programs = [
  {
    icon: Users,
    titleHi: "स्वयं सहायता समूह (SHG)",
    descHi:
      "महिलाओं को आर्थिक स्वतंत्रता। 10-20 महिलाओं का समूह जो बचत और ऋण कार्यक्रम चलाता है। DAY-NRLM के तहत माइक्रोफाइनेंस और कौशल प्रशिक्षण।",
    link: "https://aajeevika.gov.in",
    tag: "SDG 5",
  },
  {
    icon: Briefcase,
    titleHi: "दीनदयाल अंत्योदय योजना",
    descHi:
      "महिला उद्यमिता को बढ़ावा। कौशल प्रशिक्षण और स्वरोजगार के अवसर। ग्रामीण महिलाओं को व्यापार शुरू करने के लिए प्रशिक्षण और सहायता।",
    link: "https://www.pmkvyofficial.org",
    tag: "SDG 1",
  },
  {
    icon: BookHeart,
    titleHi: "बेटी बचाओ बेटी पढ़ाओ",
    descHi:
      "लड़कियों की शिक्षा और सुरक्षा सुनिश्चित करना। बालिकाओं के अस्तित्व, संरक्षण और शिक्षा को प्रोत्साहित करना।",
    link: "https://wcd.nic.in/bbbp-schemes",
    tag: "SDG 5",
  },
  {
    icon: Wallet,
    titleHi: "प्रधानमंत्री मातृ वंदना योजना",
    descHi:
      "गर्भवती और स्तनपान कराने वाली महिलाओं को ₹5,000 सहायता। पहले जीवित बच्चे के जन्म पर नकद लाभ।",
    link: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
    tag: "SDG 5",
  },
  {
    icon: ShoppingBag,
    titleHi: "महिला ई-हाट",
    descHi:
      "महिला उद्यमियों के लिए ऑनलाइन बाजार। घर से उत्पाद बेचने की सुविधा। हस्तशिल्प, कपड़े और खाद्य उत्पाद देशभर में बेचें।",
    link: "https://www.mahilaehaat-rmk.gov.in",
    tag: "SDG 10",
  },
];

const tagColors: Record<string, string> = {
  "SDG 5": "#ff3a21",
  "SDG 1": "#e5243b",
  "SDG 10": "#dd1367",
};

export default function WomenEmpowermentSection() {
  return (
    <section id="women" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
              SDG 5 — लैंगिक समानता
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              नारी शक्ति
              <span className="block text-2xl text-muted-foreground font-normal italic">
                महिला सशक्तिकरण
              </span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              महिलाएं ग्रामीण भारत की रीढ़ हैं। ग्रामसेतु महिलाओं को सरकारी योजनाओं, कौशल
              प्रशिक्षण, कानूनी अधिकारों और सामुदायिक समूहों से जोड़ता है — ताकि वे आर्थिक
              रूप से स्वतंत्र और सामाजिक रूप से सशक्त बन सकें।
            </p>
            <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl border border-pink-100 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "#ff3a21" }}
              >
                5
              </div>
              <p className="text-sm text-foreground/80">
                <strong>SDG 5: लैंगिक समानता</strong> — सभी महिलाओं और लड़कियों को
                सशक्त बनाएं, लैंगिक समानता प्राप्त करें
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-saffron-50 rounded-xl border border-saffron-100 text-center">
                <p className="text-2xl font-display font-bold text-primary">
                  ₹5,000
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  मातृत्व सहायता
                </p>
              </div>
              <div className="p-4 bg-forest-50 rounded-xl border border-forest-100 text-center">
                <p className="text-2xl font-display font-bold text-forest-700">
                  83 लाख+
                </p>
                <p className="text-xs text-muted-foreground mt-1">SHG सदस्य</p>
              </div>
            </div>

            {/* Nari Shakti image */}
            <motion.img
              src="/assets/generated/nari-shakti-women.dim_800x500.jpg"
              alt="नारी शक्ति — ग्रामीण महिला सशक्तिकरण"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: 260 }}
            />
          </motion.div>

          {/* Right: Programs */}
          <div className="flex flex-col gap-4">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.titleHi}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`nari.item.${i + 1}`}
              >
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <prog.icon className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-foreground">
                          {prog.titleHi}
                        </h3>
                        <span
                          className="px-1.5 py-0.5 text-[10px] font-bold text-white rounded flex-shrink-0"
                          style={{
                            backgroundColor: tagColors[prog.tag] || "#888",
                          }}
                        >
                          {prog.tag}
                        </span>
                      </div>
                      <p className="text-xs text-foreground/80 leading-relaxed line-clamp-2">
                        {prog.descHi}
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      data-ocid={`nari.apply.button.${i + 1}`}
                      className="flex-shrink-0 text-primary hover:text-primary/80"
                    >
                      <a
                        href={prog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs"
                      >
                        आवेदन →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
