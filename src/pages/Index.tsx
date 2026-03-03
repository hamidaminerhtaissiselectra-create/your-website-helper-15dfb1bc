import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ImageTextSection from "@/components/ImageTextSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RegionsSection from "@/components/RegionsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Répar'Action Volets",
      "image": "https://reparaction-volets.fr/og-image.jpg",
      "url": "https://reparaction-volets.fr",
      "telephone": "+33603205967",
      "email": "contact@reparaction-volets.fr",
      "description": "Expert en réparation, installation et motorisation de volets roulants à Paris et en Île-de-France. Artisan certifié RGE, intervention sous 48h, garantie 3 ans.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "62 Rue Emile Zola",
        "addressLocality": "Fontenay-Trésigny",
        "postalCode": "77610",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.7053,
        "longitude": 2.8755
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "13:00" }
      ],
      "priceRange": "€€",
      "areaServed": [
        { "@type": "City", "name": "Paris" },
        { "@type": "State", "name": "Île-de-France" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500", "bestRating": "5" },
      "sameAs": [
        "https://www.facebook.com/reparactionvolets",
        "https://www.google.com/maps/place/Répar'Action+Volets"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Volets Roulants",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Réparation de volets roulants" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de volets roulants" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motorisation & Domotique" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dépannage Express" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vitrerie & Remplacement de vitrage" } }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <QuoteFormSection />
      <AboutSection />
      <ProcessSection />
      <ImageTextSection />
      <TestimonialsSection />
      <RegionsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
