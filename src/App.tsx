import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FloatingCallButton from "./components/FloatingCallButton";
import CookieConsent from "./components/CookieConsent";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const NotFound = lazy(() => import("./pages/NotFound"));
const ParisPage = lazy(() => import("./pages/regions/ParisPage"));
const IdFPage = lazy(() => import("./pages/regions/IdFPage"));
const ReparationVolets = lazy(() => import("./pages/services/ReparationVolets"));
const InstallationRemplacement = lazy(() => import("./pages/services/InstallationRemplacement"));
const Vitrerie = lazy(() => import("./pages/services/Vitrerie"));
const MotorisationDomotique = lazy(() => import("./pages/services/MotorisationDomotique"));
const DepannageExpress = lazy(() => import("./pages/services/DepannageExpress"));
const ZonesIntervention = lazy(() => import("./pages/ZonesIntervention"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const CGV = lazy(() => import("./pages/CGV"));
const ZoneCityRoute = lazy(() => import("./pages/zones/ZoneCityRoute"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/reparation-volets-roulants" element={<ReparationVolets />} />
            <Route path="/services/installation-remplacement-volets" element={<InstallationRemplacement />} />
            <Route path="/services/vitrerie-remplacement-vitrage" element={<Vitrerie />} />
            <Route path="/services/motorisation-domotique" element={<MotorisationDomotique />} />
            <Route path="/services/depannage-express" element={<DepannageExpress />} />
            <Route path="/zones-intervention" element={<ZonesIntervention />} />
            <Route path="/zones-intervention/paris" element={<ParisPage />} />
            <Route path="/zones-intervention/ile-de-france" element={<IdFPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/qui-sommes-nous" element={<AboutUs />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cgv" element={<CGV />} />

            {/* Unified handler: IDF city pages or region redirects */}
            <Route path="/zones-intervention/:slug" element={<ZoneCityRoute />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
        <ScrollToHash />
        <FloatingCallButton />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
