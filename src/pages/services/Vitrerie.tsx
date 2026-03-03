import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassWater, CheckCircle2, ArrowRight, Phone, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgVitrerie from "@/assets/service-vitrerie.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import ServiceRegionsSection from "@/components/ServiceRegionsSection";
import FAQSection from "@/components/FAQSection";
import glazierTechnicianImg from "@/assets/glazier-technician-section.jpg";
import { fadeUp, staggerItem, hoverLift, heroEntry } from "@/lib/animations";

const typesVitrage = [
  { title: "Double vitrage thermique", desc: "La solution standard pour une isolation thermique et phonique efficace. Réduit les pertes de chaleur de 40%.", features: ["Isolation thermique 40%+", "Isolation phonique", "Standard construction neuve"], color: "border-service-emerald/20", badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20", image: "/images/vitrage/double-vitrage.webp", data: ["U-Value : 1.1 W/m²K", "Épaisseur : 4/16/4", "Gaz Argon inclus"] },
  { title: "Vitrage anti-effraction", desc: "Vitrage feuilleté de sécurité avec film PVB. Résiste aux tentatives d'intrusion et protège contre les blessures.", features: ["Retarde les intrusions", "Sécurité anti-blessure", "Norme EN 356"], color: "border-service-rose/20", badgeColor: "bg-service-rose/10 text-service-rose border-service-rose/20", image: "/images/vitrage/feuillete.jpg", data: ["Classe : P2A à P5A", "Film PVB renforcé", "Anti-éclats"] },
  { title: "Vitrage dépoli & Intimité", desc: "Vitrage traité à l'acide pour un aspect translucide. Laisse passer la lumière tout en préservant votre intimité.", features: ["Intimité totale", "Lumière naturelle", "Design moderne"], color: "border-service-violet/20", badgeColor: "bg-service-violet/10 text-service-violet border-service-violet/20", image: "/images/vitrage/depoli.jpg", data: ["Finition : Dépoli acide", "Usage : SDB / Bureau", "Facile d'entretien"] },
  { title: "Vitrage acoustique", desc: "Composition asymétrique spécifique pour réduire drastiquement les nuisances sonores. Idéal pour les zones urbaines.", features: ["Réduction -35 dB", "Zones urbaines", "Composition asymétrique"], color: "border-service-cyan/20", badgeColor: "bg-service-cyan/10 text-service-cyan border-service-cyan/20", image: "/images/vitrage/phonique.jpg", data: ["Atténuation : 35-40 dB", "Verre asymétrique", "Confort phonique"] },
];

const urgences = [
  "Bris de glace suite à un cambriolage", "Vitre cassée par intempéries (grêle, tempête)",
  "Vitrage fissuré posant un risque de sécurité", "Porte vitrée brisée",
  "Baie vitrée endommagée", "Vitrine de commerce cassée",
];

const VitreriePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useSEO({
    title: "Vitrerie & Remplacement Vitrage | Urgence Bris de Glace 7j/7 | Répar'Action Volets",
    description: "Remplacement de vitrage en urgence 7j/7. Double vitrage, vitrage anti-effraction, acoustique. Devis gratuit.",
    keywords: "vitrerie, remplacement vitrage, bris de glace, double vitrage, vitrage anti-effraction, urgence vitrerie, Paris",
    canonicalUrl: "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage",
  });

  return (
    <main className="relative">
      <Navbar />
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgVitrerie} alt="Vitrerie et remplacement de vitrage" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Vitrerie & Remplacement de Vitrage</span>
          </div>
          <motion.div {...heroEntry(0)} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <GlassWater className="h-3.5 w-3.5" /> Urgence 7j/7
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Vitrerie & Remplacement de Vitrage — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Bris de glace, vitrage cassé ou remplacement programmé ? Nos vitriers professionnels interviennent en urgence 7 jours sur 7.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> Urgence : 06 03 20 59 67</a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="serviceRose"><AlertTriangle className="h-4 w-4" /> Urgence 7j/7</Badge>
              <Badge variant="serviceBlue"><ShieldCheck className="h-4 w-4" /> Vitrage certifié</Badge>
              <Badge variant="serviceEmerald"><CheckCircle2 className="h-4 w-4" /> Prise en charge assurance</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceRose" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <AlertTriangle className="h-3.5 w-3.5" /> Urgence 7j/7
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Service d'Urgence Vitrerie — Intervention Rapide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un vitrage cassé est une urgence de sécurité. Nos vitriers interviennent 7j/7 pour une mise en sécurité immédiate.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="bg-card rounded-xl p-6 border border-service-rose/20 card-shadow max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-service-rose/10 flex items-center justify-center shadow-lg border border-white/10">
                <AlertTriangle className="h-5 w-5 text-service-rose" />
              </div>
              <h3 className="font-display font-bold text-foreground">Nous intervenons en urgence pour :</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {urgences.map((u) => (
                <div key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {u}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-service-blue/20 mb-4">Catalogue</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tous les Types de Vitrage Disponibles</h2>
            <p className="text-muted-foreground">Nous posons et remplaçons tous types de vitrage.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {typesVitrage.map((v, i) => (
              <motion.div key={v.title} {...staggerItem(i)} {...hoverLift}
                className={`group bg-card rounded-2xl border ${v.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className={`absolute top-4 right-4 ${v.badgeColor} border-none`}>{v.title.split(" ").pop()}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-1">{v.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {v.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[10px] font-bold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <ShieldCheck className="h-3 w-3 text-service-emerald" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-accent shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl" asChild>
                    <Link to="/#devis">Choisir ce vitrage</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <QuoteFormSection />
      <RepairShowcaseSection image={glazierTechnicianImg} title="Expertise en Vitrerie & Sécurité"
        description="Le remplacement d'un vitrage demande une précision millimétrée et une connaissance approfondie des matériaux."
        highlights={["Remplacement de tous types de vitrages (simple, double, triple)", "Mise en sécurité immédiate après bris de glace", "Vitrages certifiés conformés aux normes", "Accompagnement pour la prise en charge assurance"]}
      />
      <FAQSection />
      <TestimonialsSection />
      <ServiceRegionsSection />
      <Footer />
    </main>
  );
};

export default VitreriePage;
