import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CommunityVoiceSection from "./components/CommunityVoiceSection";
import DigitalLiteracySection from "./components/DigitalLiteracySection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImpactStats from "./components/ImpactStats";
import Navbar from "./components/Navbar";
import SDGAlignmentSection from "./components/SDGAlignmentSection";
import SchemesSection from "./components/SchemesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import WomenEmpowermentSection from "./components/WomenEmpowermentSection";
import { InternetIdentityProvider } from "./hooks/useInternetIdentity";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <div className="min-h-screen bg-background font-body">
          <Navbar />
          <main>
            <HeroSection />
            <ImpactStats />
            <SchemesSection />
            <DigitalLiteracySection />
            <WomenEmpowermentSection />
            <CommunityVoiceSection />
            <SuccessStoriesSection />
            <SDGAlignmentSection />
          </main>
          <Footer />
          <Toaster richColors position="top-right" />
        </div>
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}
