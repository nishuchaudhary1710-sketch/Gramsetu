import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  CreditCard,
  ExternalLink,
  FileText,
  Globe,
  Shield,
  Smartphone,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const resources = [
  {
    icon: CreditCard,
    titleHi: "UPI और डिजिटल पेमेंट",
    descHi:
      "UPI से मोबाइल से पैसे भेजें और प्राप्त करें। BHIM, PhonePe, Google Pay जैसे ऐप्स से सुरक्षित और आसान लेनदेन करें। बिना बैंक जाए घर बैठे पैसों का प्रबंधन करें।",
    videoId: "V0EhGHrXzMU",
    youtubeSearch:
      "https://www.youtube.com/results?search_query=UPI+payment+hindi+tutorial",
    videoTitle: "UPI डिजिटल पेमेंट - हिंदी ट्यूटोरियल",
    color: "text-saffron-600 bg-saffron-50",
  },
  {
    icon: FileText,
    titleHi: "DigiLocker",
    descHi:
      "सभी सरकारी दस्तावेज डिजिटल रूप में सुरक्षित रखें। आधार, पैन कार्ड, मार्कशीट, ड्राइविंग लाइसेंस — सब कुछ एक जगह। कहीं भी, कभी भी दस्तावेज़ दिखाएं।",
    videoId: "5YqBSmyGOFQ",
    youtubeSearch:
      "https://www.youtube.com/results?search_query=DigiLocker+kaise+use+kare+hindi",
    videoTitle: "DigiLocker उपयोग - हिंदी ट्यूटोरियल",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Smartphone,
    titleHi: "स्मार्टफोन का उपयोग",
    descHi:
      "बेसिक स्मार्टफोन उपयोग सीखें। ऐप्स डाउनलोड करना, कैमरा, इंटरनेट ब्राउज़िंग, व्हाट्सऐप और वीडियो कॉल — सब कुछ आसान भाषा में सीखें।",
    videoId: "w3HPSmz8Hq8",
    youtubeSearch:
      "https://www.youtube.com/results?search_query=smartphone+use+karna+sikhe+hindi",
    videoTitle: "स्मार्टफोन उपयोग - हिंदी गाइड",
    color: "text-forest-600 bg-forest-50",
  },
  {
    icon: Globe,
    titleHi: "ऑनलाइन बैंकिंग",
    descHi:
      "घर बैठे बैंकिंग सेवाएं। बैलेंस चेक करें, फंड ट्रांसफर करें, बिल भरें और बैंक स्टेटमेंट देखें। नेट बैंकिंग और मोबाइल बैंकिंग का सही उपयोग सीखें।",
    videoId: "7wjzRKKsZJs",
    youtubeSearch:
      "https://www.youtube.com/results?search_query=online+banking+hindi+tutorial",
    videoTitle: "ऑनलाइन बैंकिंग - हिंदी ट्यूटोरियल",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Shield,
    titleHi: "साइबर सुरक्षा",
    descHi:
      "ऑनलाइन धोखाधड़ी से बचें। OTP कभी किसी को न दें, फर्जी कॉल पहचानें, सुरक्षित पासवर्ड बनाएं। साइबर क्राइम की शिकायत कैसे करें — सब कुछ जानें।",
    videoId: "inWWhr5tnEA",
    youtubeSearch:
      "https://www.youtube.com/results?search_query=cyber+security+hindi+online+fraud",
    videoTitle: "साइबर सुरक्षा - हिंदी जानकारी",
    color: "text-red-600 bg-red-50",
  },
  {
    icon: Wifi,
    titleHi: "ई-सरकारी सेवाएं",
    descHi:
      "सरकारी सेवाएं ऑनलाइन प्राप्त करें। UMANG ऐप, e-Seva, MyGov पोर्टल से राशन कार्ड, जन्म प्रमाण पत्र, जाति प्रमाण पत्र जैसी सेवाएं घर बैठे पाएं।",
    videoId: "8kgp7oTOSeo",
    youtubeSearch:
      "https://www.youtube.com/results?search_query=UMANG+app+e-government+services+hindi",
    videoTitle: "ई-सरकारी सेवाएं - हिंदी गाइड",
    color: "text-golden-600 bg-golden-50",
  },
];

function LiteracyCard({
  res,
  index,
}: {
  res: (typeof resources)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
    >
      <Card className="h-full border-border bg-white hover:shadow-green transition-all duration-300">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div
              className={`w-12 h-12 rounded-xl ${res.color} flex items-center justify-center flex-shrink-0`}
            >
              <res.icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-foreground text-base">
                {res.titleHi}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mt-1 line-clamp-2">
                {res.descHi}
              </p>
            </div>
          </div>

          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                data-ocid={`digital.learn_more.button.${index + 1}`}
                className="w-full border-border hover:bg-muted gap-2 text-sm font-medium"
              >
                और जानें
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-4">
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {res.descHi}
                </p>
                {!videoError ? (
                  <div
                    className="w-full rounded-xl overflow-hidden border border-border shadow-sm"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube-nocookie.com/embed/${res.videoId}?rel=0`}
                      title={res.videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      onError={() => setVideoError(true)}
                    />
                  </div>
                ) : null}
                <a
                  href={res.youtubeSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 w-full rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 transition-colors py-2.5 px-4 text-sm font-medium text-red-700"
                  data-ocid={`digital.youtube_link.button.${index + 1}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  YouTube पर हिंदी वीडियो देखें
                </a>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function DigitalLiteracySection() {
  return (
    <section
      id="digital"
      className="py-20 bg-gradient-to-br from-forest-50 via-background to-golden-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Badge className="bg-forest-100 text-forest-700 border-forest-200 mb-4">
            डिजिटल साक्षरता
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            डिजिटल साक्षरता हब
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            हर ग्रामीण के लिए मुफ्त डिजिटल शिक्षा। हिंदी में वीडियो ट्यूटोरियल देखें और
            डिजिटल दुनिया से जुड़ें।{" "}
            <span className="text-forest-700 font-medium">
              "और जानें" पर क्लिक करके हिंदी वीडियो देखें।
            </span>
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
            src="/assets/generated/digital-literacy-rural.dim_800x500.jpg"
            alt="ग्रामीण भारत में डिजिटल साक्षरता - लोग स्मार्टफोन सीखते हुए"
            className="w-full max-h-72 object-cover rounded-2xl shadow-lg mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <LiteracyCard key={res.titleHi} res={res} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
