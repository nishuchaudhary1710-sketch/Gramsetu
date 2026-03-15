import { Badge } from "@/components/ui/badge";
import { Handshake, Landmark, TrendingDown, Users } from "lucide-react";
import { motion } from "motion/react";

const sdgs = [
  {
    num: "1",
    title: "No Poverty",
    titleHi: "गरीबी उन्मूलन",
    color: "#e5243b",
    icon: Landmark,
    description:
      "50+ सरकारी कल्याण योजनाओं तक सीधी पहुंच। पीएम-किसान, मनरेगा, जन धन, मुद्रा लोन — ग्रामीण परिवारों के लिए एक ही जगह।",
    points: [
      "पीएम-किसान प्रत्यक्ष आय सहायता",
      "मनरेगा रोजगार गारंटी",
      "प्रधानमंत्री आवास योजना",
      "पीएम मुद्रा योजना माइक्रोफाइनेंस",
    ],
  },
  {
    num: "5",
    title: "Gender Equality",
    titleHi: "लैंगिक समानता",
    color: "#ff3a21",
    icon: Users,
    description:
      "स्वयं सहायता समूह समर्थन, कौशल विकास, बेटी बचाओ, कानूनी अधिकार जागरूकता और माइक्रोफाइनेंस के साथ समर्पित महिला सशक्तीकरण अनुभाग।",
    points: [
      "स्वयं सहायता समूह (एसएचजी) गठन",
      "बेटी बचाओ बेटी पढ़ाओ कार्यक्रम",
      "कानूनी अधिकार शिक्षा",
      "महिला उद्यमिता समर्थन",
    ],
  },
  {
    num: "10",
    title: "Reduced Inequalities",
    titleHi: "असमानता में कमी",
    color: "#dd1367",
    icon: TrendingDown,
    description:
      "डिजिटल साक्षरता हब शहरी-ग्रामीण तकनीकी विभाजन को पाटता है। द्विभाषी सामग्री और मोबाइल-फर्स्ट डिज़ाइन सभी साक्षरता स्तरों के लिए पहुंच सुनिश्चित करता है।",
    points: [
      "सभी के लिए डिजिटल साक्षरता",
      "द्विभाषी हिंदी-अंग्रेजी सामग्री",
      "अनुसूचित जाति/जनजाति/ओबीसी केंद्रित योजनाएं",
      "विकलांगता-समावेशी डिज़ाइन",
    ],
  },
  {
    num: "17",
    title: "Partnerships for Goals",
    titleHi: "लक्ष्यों के लिए साझेदारी",
    color: "#19486a",
    icon: Handshake,
    description:
      "सामुदायिक आवाज़ बोर्ड सीधे नागरिक-सरकार संवाद बनाता है। सहयोगात्मक कार्रवाई के लिए एनजीओ, सीएससी, पंचायतों और केंद्रीय मंत्रालयों को जोड़ता है।",
    points: [
      "समुदाय-सरकार सेतु",
      "एनजीओ और सीएससी साझेदारी",
      "पंचायत डिजिटल सक्षमता",
      "माईगव और डिजिटल इंडिया एकीकरण",
    ],
  },
];

export default function SDGAlignmentSection() {
  return (
    <section id="sdg" className="py-20 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Badge className="bg-golden-400/20 text-golden-300 border-golden-400/30 mb-4">
            संयुक्त राष्ट्र सतत विकास लक्ष्य
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            हमारी एसडीजी प्रतिबद्धता
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            ग्रामसेतु को विशेष रूप से 2030 सतत विकास एजेंडे में भारत के योगदान को आगे बढ़ाने के
            लिए बनाया गया है। हर फीचर सीधे मापने योग्य एसडीजी परिणामों से जुड़ता है।
          </p>
        </motion.div>

        {/* Section photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <img
            src="/images/sdg-dashboard-rural.dim_800x500.jpg"
            alt="टिकाऊ ग्रामीण विकास - एसडीजी लक्ष्यों की ओर प्रगति"
            className="w-full max-h-72 object-cover rounded-2xl shadow-lg mx-auto opacity-90"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display flex-shrink-0"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.num}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {sdg.titleHi}
                  </h3>
                  <p className="text-white/50 text-sm">{sdg.title}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {sdg.description}
              </p>
              <ul className="flex flex-col gap-1.5">
                {sdg.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: sdg.color }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center p-8 bg-white/5 rounded-2xl border border-golden-400/20"
        >
          <p className="font-display text-xl font-bold text-golden-300 mb-2">
            🇮🇳 स्मार्ट इंडिया और विकसित भारत 2026 का समर्थन
          </p>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            2026 तक एक विकसित राष्ट्र बनने के भारत के राष्ट्रीय विजन के साथ संरेखित।
            ग्रामसेतु डिजिटल इंडिया, मेक इन इंडिया और आत्मनिर्भर भारत मिशन का समर्थन करता
            है।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
