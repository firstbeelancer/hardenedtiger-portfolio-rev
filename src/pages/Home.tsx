import HeroSection from '../components/HeroSection';
import MarqueeBand from '../components/MarqueeBand';
import ServicesSection from '../components/ServicesSection';
import ConsoleLogBreak from '../components/ConsoleLogBreak';
import AboutSection from '../components/AboutSection';
import ManifestoSection from '../components/ManifestoSection';
import { AppsSection, SitesSection } from '../components/ProjectsSection';
import BrandingSection from '../components/BrandingSection';
import MarketingSection from '../components/MarketingSection';
import ContactsSection from '../components/ContactsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <ServicesSection />
      <ConsoleLogBreak />
      <AboutSection />
      <ManifestoSection />
      <AppsSection />
      <SitesSection />
      <BrandingSection />
      <MarketingSection />
      <ContactsSection />
    </>
  );
}
