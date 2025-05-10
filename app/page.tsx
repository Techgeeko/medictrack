import { Header } from "@/components/home/_components/header";
import { HeroSection } from "@/components/home/_components/hero-section";
import { AnnouncementBar } from "@/components/home/_components/announcement-bar";
import { FeaturesSection } from "@/components/home/_components/features-section";
import { IntegrationSection } from "@/components/home/_components/integration-section";
import { PartnersSection } from "@/components/home/_components/partners-section";
import { ShowcaseSection } from "@/components/home/_components/showcase-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AnnouncementBar/>
      <FeaturesSection />
      <IntegrationSection />
      <PartnersSection />
      <ShowcaseSection />
    </main>
  )
}
