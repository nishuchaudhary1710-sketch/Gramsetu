import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Quote } from "lucide-react";
import communityVoiceImg from "/images/image-1.jpg";
import { motion } from "motion/react";

const stories = [
  {
    id: 1,
    name: "सुनीता देवी",
    location: "राजस्थान",
    title: "डिजिटल उद्यमी बनी सुनीता",
    quote:
      "DigiLocker और UPI ने मेरा जीवन बदल दिया। अब मैं घर से अपना व्यवसाय चलाती हूं।",
    story:
      "राजस्थान के एक छोटे गांव की सुनीता देवी ने 2022 में डिजिटल साक्षरता कार्यक्रम से जुड़ीं। पहले उन्हें बैंक जाने के लिए 20 किलोमीटर चलना पड़ता था। आज वे UPI से पेमेंट लेती हैं और DigiLocker में अपने दस्तावेज रखती हैं।",
    sdgTags: ["SDG 5", "SDG 1"],
  },
  {
    id: 2,
    name: "रमेश कुमार",
    location: "बिहार",
    title: "किसान से डिजिटल किसान",
    quote: "PM-KISAN पोर्टल से मैंने खुद आवेदन किया और 6000 रुपए मिले।",
    story:
      "बिहार के रमेश कुमार पहले बिचौलियों पर निर्भर थे। ग्रामसेतु के माध्यम से उन्होंने PM-KISAN और मनरेगा में ऑनलाइन पंजीकरण किया। अब वे हर साल सीधे सरकारी लाभ प्राप्त करते हैं।",
    sdgTags: ["SDG 1", "SDG 17"],
  },
  {
    id: 3,
    name: "प्रिया यादव",
    location: "उत्तर प्रदेश",
    title: "SHG से मिली आर्थिक आज़ादी",
    quote: "स्वयं सहायता समूह से जुड़कर मेरी जिंदगी बदल गई।",
    story:
      "उत्तर प्रदेश की प्रिया यादव SHG की सदस्य बनीं और माइक्रोफाइनेंस से अपना दुकान खोली। अब वे 10 अन्य महिलाओं को प्रशिक्षित करती हैं और उनकी मासिक आय तीन गुना बढ़ गई है।",
    sdgTags: ["SDG 5", "SDG 10"],
  },
  {
    id: 4,
    name: "अमित सिंह",
    location: "मध्य प्रदेश",
    title: "MGNREGA से बनाया पक्का मकान",
    quote: "100 दिन के काम से मैंने अपने परिवार के लिए घर बनाया।",
    story:
      "मध्य प्रदेश के अमित सिंह ने MGNREGA में 100 दिन काम किया और PM आवास योजना से पक्का मकान बनाया। पहले उनका परिवार कच्चे घर में रहता था, अब वे सुरक्षित और खुश हैं।",
    sdgTags: ["SDG 1", "SDG 10"],
  },
  {
    id: 5,
    name: "कमला बाई",
    location: "छत्तीसगढ़",
    title: "आयुष्मान से मिला मुफ्त इलाज",
    quote: "आयुष्मान कार्ड ने मेरे बेटे का ऑपरेशन मुफ्त में करवाया। यह योजना वरदान है।",
    story:
      "छत्तीसगढ़ की कमला बाई को बेटे के इलाज के लिए पैसे नहीं थे। ग्रामसेतु की मदद से आयुष्मान भारत कार्ड बनवाया और ₹2.5 लाख का मुफ्त इलाज मिला। अब वे गांव में दूसरों की भी मदद करती हैं।",
    sdgTags: ["SDG 1", "SDG 17"],
  },
  {
    id: 6,
    name: "विजय लक्ष्मी",
    location: "झारखंड",
    title: "महिला ई-हाट से बिकते हैं उत्पाद",
    quote: "अब मेरे हाथ से बने उत्पाद पूरे देश में बिकते हैं। महिला ई-हाट ने सपना पूरा किया।",
    story:
      "झारखंड की विजय लक्ष्मी हस्तशिल्प बनाती थीं लेकिन बाजार नहीं मिलता था। ग्रामसेतु के जरिए महिला ई-हाट से जुड़ीं और अब उनके उत्पाद ऑनलाइन बिकते हैं। मासिक आय ₹8,000 हो गई है।",
    sdgTags: ["SDG 5", "SDG 10"],
  },
];

const sdgTagColors: Record<string, string> = {
  "SDG 1": "bg-red-100 text-red-700",
  "SDG 5": "bg-orange-100 text-orange-700",
  "SDG 10": "bg-pink-100 text-pink-700",
  "SDG 17": "bg-blue-100 text-blue-700",
};

export default function SuccessStoriesSection() {
  return (
    <section
      id="stories"
      className="py-20 bg-gradient-to-br from-golden-50 via-background to-saffron-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge className="bg-golden-100 text-golden-700 border-golden-200 mb-4">
            बदलाव की कहानियां
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            सफलता की कहानियां
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            असली लोग, असली बदलाव। भारत के गांवों से ये कहानियां दिखाती हैं कि जब तकनीक
            और समुदाय मिलते हैं तो क्या संभव हो जाता है।
          </p>
        </motion.div>

        {/* Decorative banner image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <img
            src={communityVoiceImg}
            alt="सफलता की कहानियां — ग्रामीण भारत"
            className="w-full rounded-2xl object-cover shadow-lg"
            style={{ maxHeight: 300 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              data-ocid={`stories.item.${i + 1}`}
            >
              <Card className="h-full border-border bg-white hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <Quote className="w-8 h-8 text-golden-400 flex-shrink-0" />
                    {/* Serial number badge */}
                    <span className="w-7 h-7 rounded-full bg-saffron-500 text-white text-xs font-bold flex items-center justify-center shadow-sm flex-shrink-0">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground leading-snug mb-1">
                      {story.title}
                    </h3>
                    <p className="text-sm italic text-primary/80 leading-relaxed border-l-2 border-primary/30 pl-3 mb-3">
                      "{story.quote}"
                    </p>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                      <MapPin className="w-3 h-3" />
                      {story.name} — {story.location}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {story.sdgTags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            sdgTagColors[tag] ||
                            "bg-muted text-muted-foreground"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
