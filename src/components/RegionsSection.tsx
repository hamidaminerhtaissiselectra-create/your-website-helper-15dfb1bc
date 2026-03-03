import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const regions = [
  { 
    name: "Île-de-France", 
    depts: "75, 77, 78, 91, 92, 93, 94, 95", 
    highlight: true, 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/ile-de-france.jpg",
    link: "/zones-intervention/ile-de-france"
  },
  { 
    name: "Hauts-de-France", 
    depts: "02, 59, 60, 62, 80", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/hauts-de-france.jpg",
    link: "/zones-intervention/hauts-de-france"
  },
  { 
    name: "Grand Est", 
    depts: "08, 10, 51, 52, 54, 55, 57, 67, 68, 88", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/grand-est.jpg",
    link: "/zones-intervention/grand-est"
  },
  { 
    name: "Normandie", 
    depts: "14, 27, 50, 61, 76", 
    color: "bg-service-violet/5 border-service-violet/20",
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
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/pays-de-la-loire.jpg",
    link: "/zones-intervention/pays-de-la-loire"
  },
  { 
    name: "Centre-Val de Loire", 
    depts: "18, 28, 36, 37, 41, 45", 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/centre-val-de-loire.jpg",
    link: "/zones-intervention/centre-val-de-loire"
  },
  { 
    name: "Bourgogne-Franche-Comté", 
    depts: "21, 25, 39, 58, 70, 71, 89, 90", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/bourgogne-franche-comte.jpg",
    link: "/zones-intervention/bourgogne-franche-comte"
  },
  { 
    name: "Nouvelle-Aquitaine", 
    depts: "16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/nouvelle-aquitaine.jpg",
    link: "/zones-intervention/nouvelle-aquitaine"
  },
  { 
    name: "Occitanie", 
    depts: "09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82", 
    color: "bg-service-violet/5 border-service-violet/20",
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

const RegionsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // On mobile/tablet/desktop, we show 1 row. 
  // Grid is 1 col (sm), 2 cols (sm/md), 3 cols (lg), 4 cols (xl)
  // To show exactly one line, we need to know the current breakpoint or just use a reasonable default.
  // Let's show 4 items by default (1 row on xl, 2 rows on sm/md, etc.)
  const visibleRegions = isExpanded ? regions : regions.slice(0, 4);

  return (
    <section id="regions" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nos Zones d'Intervention : Réparation de Volets Roulants à Paris, Île-de-France et Partout en France - Intervention Rapide 48h
          </h2>
          <p className="text-muted-foreground">
            Répar'Action Volets couvre l'ensemble du territoire français, avec une présence renforcée à Paris et en Île-de-France. Nos techniciens certifiés RGE et Qualibat interviennent rapidement dans toutes les régions pour la réparation, l'installation et la motorisation de vos volets roulants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleRegions.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col"
              >
                <Link to={r.link} className="flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-2xl shadow-md">
                    <img 
                      src={r.image} 
                      alt={`Réparation volets roulants ${r.name}`} 
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    {r.highlight && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge variant="serviceBlue" className="text-[10px] font-bold text-white shadow-lg">
                          PRIORITAIRE
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className={`flex-1 p-6 rounded-b-2xl border border-t-0 transition-all duration-500 card-shadow group-hover:card-shadow-hover ${r.color}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-white/20 ${r.highlight ? "bg-service-blue text-white" : "bg-white/80 text-muted-foreground"}`}>
                         <MapPin className="h-5 w-5" />
                      </div>
                      <h3 className={`text-lg font-bold ${r.highlight ? "text-service-blue" : "text-foreground"}`}>
                        {r.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-6">
                      <span className="px-2 py-1 rounded-md bg-black/5">Départements : {r.depts}</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3">
                      Voir les détails <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="rounded-full px-8 py-6 border-accent text-accent hover:bg-accent hover:text-white font-bold transition-all duration-300 shadow-md"
          >
            {isExpanded ? (
              <>Voir moins <ChevronUp className="ml-2 h-5 w-5" /></>
            ) : (
              <>Voir toutes les régions <ChevronDown className="ml-2 h-5 w-5" /></>
            )}
          </Button>
          
          <Link to="/zones-intervention" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Toutes nos zones <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
