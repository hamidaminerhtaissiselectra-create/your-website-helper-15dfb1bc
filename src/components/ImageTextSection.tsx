import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ImageTextSection = () => {
  const features = [
    "Intervention rapide et efficace",
    "Techniciens qualifiés et expérimentés",
    "Travail soigné et professionnel",
    "Garantie sur tous les travaux",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src="/repair-service.jpg"
                alt="Technicien réparant un volet roulant"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-4 -right-4 bg-service-orange text-white rounded-xl p-4 card-shadow-hover"
            >
              <div className="text-2xl font-bold">24h</div>
              <div className="text-xs font-medium">Intervention</div>
            </motion.div>
          </motion.div>

          {/* Text content - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-orange/10 text-service-orange text-sm font-semibold border border-service-orange/20 mb-4">
                  Notre Expertise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3">
                  Réparation et Maintenance de Volets Roulants
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Depuis plus de 15 ans, nous intervenons à Paris et en Île-de-France pour réparer, installer et entretenir vos volets roulants. Notre équipe de techniciens qualifiés garantit une intervention rapide et un travail de qualité.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-service-orange flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="pt-4"
              >
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-service-orange text-white font-semibold hover:bg-service-orange/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Demander un devis gratuit
                  <span className="text-lg">→</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
