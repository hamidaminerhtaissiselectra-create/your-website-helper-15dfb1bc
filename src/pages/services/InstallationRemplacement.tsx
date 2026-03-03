import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { RefreshCcw, CheckCircle2, ArrowRight, Phone, Shield, ChevronRight, Thermometer, Volume2, Sun } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgInstallation from "@/assets/service-installation.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import ServiceRegionsSection from "@/components/ServiceRegionsSection";
import FAQSection from "@/components/FAQSection";

import installationTechnicianImg from "@/assets/installation-technician-section.jpg";

const avantages = [
  { icon: Thermometer, title: "Isolation thermique renforcée", desc: "Les volets roulants modernes en aluminium offrent une isolation thermique jusqu'à 25% supérieure aux anciens modèles, réduisant significativement vos factures de chauffage et de climatisation.", color: "border-service-blue/20", iconColor: "bg-service-blue/10 text-service-blue" },
  { icon: Volume2, title: "Isolation phonique optimale", desc: "Le double paroi en aluminium avec mousse polyuréthane injectée absorbe les bruits extérieurs. Idéal pour les habitations situées en zone urbaine ou à proximité d'axes routiers.", color: "border-service-violet/20", iconColor: "bg-service-violet/10 text-service-violet" },
  { icon: Shield, title: "Sécurité anti-effraction", desc: "Les volets roulants neufs intègrent des systèmes anti-relevage et des verrous automatiques qui renforcent considérablement la sécurité de votre domicile contre les tentatives d'intrusion.", color: "border-service-rose/20", iconColor: "bg-service-rose/10 text-service-rose" },
  { icon: Sun, title: "Gestion de la luminosité", desc: "Contrôlez précisément la lumière dans chaque pièce grâce à des lames orientables ou un réglage fin de la position du volet. Créez l'ambiance idéale à tout moment.", color: "border-service-orange/20", iconColor: "bg-service-orange/10 text-service-orange" },
];

const types = [
  { 
    title: "Volets roulants en aluminium", 
    desc: "Le choix le plus populaire. L'aluminium offre le meilleur rapport poids/résistance, une excellente isolation thermique grâce à la mousse polyuréthane injectée, et une durabilité exceptionnelle.", 
    points: ["Léger et résistant", "Isolation thermique et phonique", "200+ coloris disponibles", "Durée de vie 20+ ans"], 
    color: "border-service-blue/20", 
    badge: "Populaire", 
    badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20",
    image: "/images/materiaux/alu.jpg",
    data: ["Isolation : R=0.25", "Résistance : Haute", "Entretien : Nul"]
  },
  { 
    title: "Volets roulants en PVC", 
    desc: "Solution économique et performante, les volets en PVC offrent un bon niveau d'isolation et une grande facilité d'entretien. Ils sont particulièrement adaptés aux fenêtres de taille standard.", 
    points: ["Prix accessible", "Entretien minimal", "Bonne isolation", "Résistance aux UV"], 
    color: "border-service-emerald/20", 
    badge: "Économique", 
    badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20",
    image: "/images/materiaux/pvc.jpg",
    data: ["Isolation : R=0.22", "Résistance : Moyenne", "Entretien : Eau savonneuse"]
  },
  { 
    title: "Volets roulants solaires", 
    desc: "Installation de volets solaires autonomes avec panneau photovoltaïque intégré. Idéaux en rénovation car ils ne nécessitent aucun raccordement électrique. Écologiques et performants.", 
    points: ["Zéro câblage", "Énergie gratuite", "Autonomie 45 jours", "Marques Somfy/Bubendorff"], 
    color: "border-service-orange/20", 
    badge: "Éco-Responsable", 
    badgeColor: "bg-service-orange/10 text-service-orange border-service-orange/20",
    image: "/images/materiaux/solaire.jpg",
    data: ["Installation : 1h", "Batterie : 10 ans", "Économie : 100% élec"]
  },
];

const InstallationRemplacementPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useSEO({
    title: "Installation & Remplacement Volets Roulants | Sur-Mesure Paris & France | Répar'Action Volets",
    description: "Installation et remplacement de volets roulants sur-mesure en aluminium, PVC ou solaire. Fabrication personnalisée, pose professionnelle, garantie 3 ans. Devis gratuit.",
    keywords: "installation volet roulant, remplacement volet, volet aluminium, volet PVC, volet solaire, pose volet, Paris",
    canonicalUrl: "https://reparaction-volets.fr/services/installation-remplacement-volets",
  });

  return (
    <main className="relative">
      <Navbar />
      
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgInstallation} alt="Installation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Installation & Remplacement de Volets</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <RefreshCcw className="h-3.5 w-3.5" /> Fabrication sur-mesure
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Installation & Remplacement de Volets Roulants — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Transformez votre habitat avec des volets roulants neufs fabriqués sur-mesure. Aluminium ou PVC — nous vous accompagnons du choix du matériau à la pose professionnelle, avec garantie 3 ans pièces et main d'œuvre.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit Personnalisé <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="serviceBlue"><Shield className="h-4 w-4" /> Garantie 3 ans</Badge>
              <Badge variant="serviceEmerald"><CheckCircle2 className="h-4 w-4" /> Fabrication sur-mesure</Badge>
              <Badge variant="serviceOrange"><Sun className="h-4 w-4" /> Options solaires</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi remplacer */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceCyan" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <RefreshCcw className="h-3.5 w-3.5" /> Avantages
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi Installer ou Remplacer Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un investissement rentable pour le confort, la sécurité et la performance énergétique de votre habitat. Éligible <strong className="text-foreground">MaPrimeRénov'</strong> grâce à notre certification RGE.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {avantages.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${a.color} card-shadow hover:card-shadow-hover transition-all`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${a.iconColor} shadow-lg border border-white/10`}>
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de volets */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceEmerald" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-service-emerald/20 mb-4">Matériaux</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Quel Matériau Choisir ?</h2>
            <p className="text-muted-foreground">Nous vous conseillons sur le meilleur choix selon vos besoins et votre budget.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {types.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group bg-card rounded-2xl border ${t.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className={`absolute top-4 right-4 ${t.badgeColor} border-none font-bold`}>{t.badge}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{t.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-1">{t.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {t.points.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-[10px] font-bold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <CheckCircle2 className="h-3 w-3 text-service-emerald" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="accent" size="sm" className="w-full rounded-xl gap-2" asChild>
                    <Link to="/#devis">Demander un devis</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <QuoteFormSection />
      <RepairShowcaseSection
        image={installationTechnicianImg}
        title="Installation Professionnelle & Finitions Soignées"
        description="L'installation d'un volet roulant est une opération technique qui nécessite précision et savoir-faire. Nos techniciens certifiés assurent une pose parfaite, garantissant une isolation optimale et un fonctionnement silencieux sur le long terme. Nous accordons une importance particulière aux finitions et à la propreté du chantier. Après chaque installation, nous effectuons une démonstration complète du fonctionnement et des conseils d'entretien."
        highlights={[
          "Prise de mesures laser pour un sur-mesure parfait",
          "Installation propre sans dégradation de vos façades",
          "Réglage précis des fins de course et des moteurs",
          "Nettoyage complet du chantier après intervention"
        ]}
      />
      <FAQSection />
      <TestimonialsSection />
      <ServiceRegionsSection />
      <Footer />
    </main>
  );
};

export default InstallationRemplacementPage;
