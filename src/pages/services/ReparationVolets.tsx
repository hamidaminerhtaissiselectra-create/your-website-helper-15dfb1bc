import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, ArrowRight, Phone, ChevronRight, AlertTriangle, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgReparation from "@/assets/service-reparation.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import ServiceRegionsSection from "@/components/ServiceRegionsSection";
import FAQSection from "@/components/FAQSection";
import repairTechnicianImg from "@/assets/repair-technician-section.jpg";
import { fadeUp, staggerItem, hoverLift, heroEntry } from "@/lib/animations";

const pannesCourantes = [
  { title: "Volet roulant bloqué", desc: "Votre volet ne monte plus ou ne descend plus ? Le problème peut venir d'une lame cassée, d'un axe d'enroulement tordu ou d'un verrou bloqué.", urgence: true, color: "border-service-rose/20", image: "/images/pannes/volet-bloque.jpg", data: ["Diagnostic en 15 min", "Pièces d'origine", "Réparation immédiate"] },
  { title: "Sangle ou manivelle cassée", desc: "La sangle est effilochée ou la manivelle ne tourne plus ? Remplacement rapide par un mécanisme neuf, identique ou amélioré.", urgence: false, color: "border-service-blue/20", image: "/images/pannes/sangle-cassee.jpg", data: ["Sangles haute résistance", "Manivelles renforcées", "Pose incluse"] },
  { title: "Moteur électrique HS", desc: "Le moteur ne répond plus, fait un bruit anormal ou surchauffe ? Diagnostic du condensateur, du câblage et du moteur.", urgence: false, color: "border-service-orange/20", image: "/images/pannes/moteur-hs.jpg", data: ["Moteurs Somfy/Bubendorff", "Garantie 5 ans moteur", "Réglage fins de course"] },
  { title: "Lames abîmées ou tordues", desc: "Lames fissurées, déformées ou arrachées par le vent ? Remplacement à l'identique sans démonter tout le volet.", urgence: false, color: "border-service-emerald/20", image: "/images/pannes/lames-abimees.jpg", data: ["Lames PVC ou Alu", "Coloris sur mesure", "Isolation renforcée"] },
  { title: "Tablier sorti des rails", desc: "Le tablier s'est décalé et ne glisse plus correctement dans les coulisses ? Remise en place et ajustement.", urgence: true, color: "border-service-violet/20", image: "/images/pannes/tablier-sorti.jpg", data: ["Remise en axe", "Nettoyage coulisses", "Graissage silicone"] },
  { title: "Télécommande ou récepteur HS", desc: "Votre volet électrique ne répond plus à la télécommande ? Reprogrammation, changement de pile ou remplacement du récepteur.", urgence: false, color: "border-service-cyan/20", image: "/images/pannes/telecommande-hs.jpg", data: ["Centralisation possible", "Émetteurs radio", "Domotique compatible"] },
];

const ReparationVoletsPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useSEO({
    title: "Réparation de Volets Roulants | Dépannage Express Paris & France | Répar'Action Volets",
    description: "Volet bloqué, moteur en panne, sangle cassée ? Nos techniciens experts interviennent rapidement pour diagnostiquer et réparer votre volet roulant. Diagnostic gratuit, garantie 3 ans.",
    keywords: "réparation volet roulant, dépannage volet, volet bloqué, moteur volet, sangle cassée, Paris, Île-de-France",
    canonicalUrl: "https://reparaction-volets.fr/services/reparation-volets-roulants",
  });

  return (
    <main className="relative">
      <Navbar />
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgReparation} alt="Réparation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Réparation de Volets Roulants</span>
          </div>
          <motion.div {...heroEntry(0)} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <Wrench className="h-3.5 w-3.5" /> Expertise technique
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Réparation de Volets Roulants — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Volet bloqué, moteur en panne, sangle cassée ? Nos techniciens experts interviennent rapidement pour diagnostiquer et réparer votre volet roulant. Diagnostic gratuit, pièces en stock, garantie 3 ans.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="serviceBlue"><Shield className="h-4 w-4" /> Garantie 3 ans</Badge>
              <Badge variant="serviceOrange"><Clock className="h-4 w-4" /> Intervention sous 48h</Badge>
              <Badge variant="serviceEmerald"><Award className="h-4 w-4" /> Artisan certifié RGE</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">Pannes Courantes</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Pannes que Nous Réparons</h2>
            <p className="text-muted-foreground">Quelle que soit votre panne, nous avons la solution. Diagnostic gratuit et rapide.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pannesCourantes.map((p, i) => (
              <motion.div key={p.title} {...staggerItem(i)} {...hoverLift}
                className={`group bg-card rounded-2xl border ${p.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {p.urgence && (
                    <Badge className="absolute top-4 right-4 bg-service-rose text-white border-none gap-1 text-xs font-bold">
                      <AlertTriangle className="h-3 w-3" /> Urgence
                    </Badge>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <div className="space-y-2 mb-6">
                    {p.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-semibold text-foreground/90">
                        <CheckCircle2 className="h-3.5 w-3.5 text-service-emerald flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl" asChild>
                    <Link to="/#devis">Réparer mon volet</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <QuoteFormSection />
      <RepairShowcaseSection image={repairTechnicianImg} title="Expertise Technique & Savoir-Faire"
        description="Nos techniciens certifiés disposent de plus de 10 ans d'expérience dans la réparation de volets roulants. Ils interviennent avec professionnalisme et efficacité, diagnostiquant rapidement le problème et le résolvant en une seule visite dans 95% des cas. Chaque intervention est réalisée avec des pièces de qualité et un respect des normes de sécurité."
        highlights={["Diagnostic gratuit et sans engagement", "Pièces de rechange en stock dans le véhicule", "Intervention rapide : sous 48 heures", "Garantie 3 ans pièces et main d'œuvre"]}
      />
      <FAQSection />
      <TestimonialsSection />
      <ServiceRegionsSection />
      <Footer />
    </main>
  );
};

export default ReparationVoletsPage;
