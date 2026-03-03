import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Zones principales (toujours visibles)
const mainRegions = [
  { 
    name: "Paris (75)", 
    depts: "75001 à 75020", 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/paris.jpg",
    link: "/zones-intervention/paris",
    highlight: true
  },
  { 
    name: "Île-de-France", 
    depts: "77, 78, 91, 92, 93, 94, 95", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/ile-de-france.jpg",
    link: "/zones-intervention/ile-de-france",
    highlight: true
  },
  { 
    name: "Rive Gauche & Ouest", 
    depts: "75005-07, 75014-15, 92", 
    color: "bg-service-violet/5 border-service-violet/20",
    image: "/images/zones/rive-gauche.jpg",
    link: "/zones-intervention/rive-gauche",
    highlight: true
  },
  { 
    name: "Rive Droite — Centre & Nord", 
    depts: "75001-04, 75008-11, 75016-20", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/rive-droite.jpg",
    link: "/zones-intervention/rive-droite",
    highlight: true
  },
  { 
    name: "Petite Couronne", 
    depts: "92, 93, 94", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/petite-couronne.jpg",
    link: "/zones-intervention/petite-couronne",
    highlight: true
  },
];

// Zones supplémentaires (masquées par défaut)
const additionalRegions = [
  { 
    name: "Hauts-de-France", 
    depts: "02, 59, 60, 62, 80", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/hauts-de-france.jpg",
    link: "/zones-intervention/hauts-de-france"
  },
  { 
    name: "Grand Est", 
    depts: "08, 10, 51, 52, 54, 55, 57, 67, 68, 88", 
    color: "bg-service-violet/5 border-service-violet/20",
    image: "/images/zones/grand-est.jpg",
    link: "/zones-intervention/grand-est"
  },
  { 
    name: "Normandie", 
    depts: "14, 27, 50, 61, 76", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/normandie.jpg",
    link: "/zones-intervention/normandie"
  },
  { 
    name: "Bretagne", 
    depts: "22, 29, 35, 56", 
    color: "bg-service-cyan/5 border-service-cyan/20",
    image: "/images/zones/bretagne.jpg",
    link: "/zones-intervention/bretagne"
  },
  { 
    name: "Pays de la Loire", 
    depts: "44, 49, 53, 72, 85", 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/pays-de-la-loire.jpg",
    link: "/zones-intervention/pays-de-la-loire"
  },
  { 
    name: "Centre-Val de Loire", 
    depts: "18, 28, 36, 37, 41, 45", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/centre-val-de-loire.jpg",
    link: "/zones-intervention/centre-val-de-loire"
  },
  { 
    name: "Bourgogne-Franche-Comté", 
    depts: "21, 25, 39, 58, 70, 71, 89, 90", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/bourgogne-franche-comte.jpg",
    link: "/zones-intervention/bourgogne-franche-comte"
  },
  { 
    name: "Nouvelle-Aquitaine", 
    depts: "16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87", 
    color: "bg-service-violet/5 border-service-violet/20",
    image: "/images/zones/nouvelle-aquitaine.jpg",
    link: "/zones-intervention/nouvelle-aquitaine"
  },
  { 
    name: "Occitanie", 
    depts: "09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/occitanie.jpg",
    link: "/zones-intervention/occitanie"
  },
  { 
    name: "Auvergne-Rhône-Alpes", 
    depts: "01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74", 
    color: "bg-service-cyan/5 border-service-cyan/20",
    image: "/images/zones/auvergne-rhone-alpes.jpg",
    link: "/zones-intervention/auvergne-rhone-alpes"
  },
  { 
    name: "Provence-Alpes-Côte d'Azur", 
    depts: "04, 05, 06, 13, 83, 84", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/paca.jpg",
    link: "/zones-intervention/provence-alpes-cote-d-azur"
  },
];

const ServiceRegionsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Afficher les zones principales + les zones supplémentaires si déplié
  const visibleRegions = isExpanded ? [...mainRegions, ...additionalRegions] : mainRegions;

  return (
    <section className="py-16 bg-section-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
          </Badge>
          <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
            Où Intervenons-Nous ?
          </h2>
          <p className="text-muted-foreground">
            Nous couvrons prioritairement Paris et toute l'Île-de-France pour des interventions rapides sous 24h-48h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleRegions.map((r, i) => (
              <motion.div
                key={r.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col"
              >
                <Link to={r.link} className="flex flex-col h-full">
                  <div className="relative h-40 w-full overflow-hidden rounded-t-2xl shadow-md">
                    <img 
                      src={r.image} 
                      alt={`Réparation volets roulants ${r.name}`} 
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                  <div className={`flex-1 p-5 rounded-b-2xl border border-t-0 transition-all duration-500 card-shadow group-hover:card-shadow-hover ${r.color}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm border border-white/20 bg-white/80 text-muted-foreground">
                         <MapPin className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        {r.name}
                      </h3>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-medium mb-4">
                      <span className="px-2 py-1 rounded-md bg-black/5">Dépts : {r.depts}</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-accent transition-all duration-300 group-hover:gap-3">
                      Voir les détails <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="mt-10 text-center"
        >
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground font-bold hover:bg-muted/80 transition-all duration-300 shadow-sm"
          >
            {isExpanded ? (
              <>Voir moins <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>Voir toutes les régions <ChevronDown className="h-4 w-4" /></>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceRegionsSection;
