import { Separator } from "@/components/ui/separator";
import { ExternalLink, Phone, Wifi } from "lucide-react";

const quickLinks = [
  { label: "होम", href: "#home" },
  { label: "योजनाएं", href: "#schemes" },
  { label: "डिजिटल साक्षरता", href: "#digital" },
  { label: "नारी शक्ति", href: "#women" },
  { label: "आवाज़ उठाओ", href: "#community" },
  { label: "कहानियां", href: "#stories" },
];

const officialPortals = [
  { label: "MyGov India", href: "https://mygov.in" },
  { label: "Digital India", href: "https://digitalindia.gov.in" },
  { label: "PM India", href: "https://pmindia.gov.in" },
  { label: "UMANG App", href: "https://umang.gov.in" },
  { label: "DigiLocker", href: "https://digilocker.gov.in" },
  { label: "Scholarships India", href: "https://scholarships.gov.in" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "gramsetu")}`;

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  GramSetu
                </span>
                <span className="block text-[10px] text-white/50 leading-none">
                  ग्राम सेतु
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              भारत के गांवों को डिजिटल भविष्य से जोड़ना। तकनीक, योजनाओं और सामूहिक आवाज़
              के माध्यम से 6 लाख+ समुदायों को सशक्त बनाना।
            </p>
            <p className="text-golden-400 font-display font-bold italic text-lg">
              जय हिंद 🇮🇳
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              त्वरित लिंक
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              सरकारी पोर्टल
            </h4>
            <ul className="flex flex-col gap-2">
              {officialPortals.map((portal) => (
                <li key={portal.href}>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1"
                  >
                    {portal.label}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpline */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              हेल्पलाइन
            </h4>
            <div className="flex items-center gap-3 mb-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <Phone className="w-5 h-5 text-golden-400 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-lg">1800-11-0001</p>
                <p className="text-white/50 text-xs">कॉमन सर्विस सेंटर (निःशुल्क)</p>
                <p className="text-white/40 text-xs">सोम–शनि, सुबह 9–शाम 6</p>
              </div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-white/50 mb-1">डिजिटल इंडिया हेल्पलाइन</p>
              <p className="text-white font-semibold">1800-300-1947</p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year}. ❤️ से बनाया गया{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden-400 hover:text-golden-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">
              स्मार्ट इंडिया · विकसित भारत 2026 का समर्थन
            </span>
            <div className="flex gap-1">
              {["1", "5", "10", "17"].map((n) => (
                <div
                  key={n}
                  className="w-6 h-6 rounded text-white text-[9px] font-bold flex items-center justify-center"
                  style={{
                    backgroundColor:
                      n === "1"
                        ? "#e5243b"
                        : n === "5"
                          ? "#ff3a21"
                          : n === "10"
                            ? "#dd1367"
                            : "#19486a",
                  }}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
