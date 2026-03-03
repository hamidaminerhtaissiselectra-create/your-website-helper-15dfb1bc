import { motion } from "framer-motion";
import { Phone, ClipboardList, Calendar, Wrench, CheckCircle2, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: Phone, title: "Prise de Contact", desc: "Contactez-nous par téléphone, email ou via notre formulaire. Un conseiller vous répond sous 2 heures pour comprendre vos besoins.", color: "bg-service-blue", shadow: "shadow-[0_4px_14px_hsl(213,72%,50%,0.35)]", borderColor: "border-service-blue/20" },
  { num: "02", icon: ClipboardList, title: "Diagnostic Gratuit", desc: "Nous analysons votre situation et réalisons un diagnostic précis. Vous recevez un devis détaillé et transparent sous 24h.", color: "bg-service-rose", shadow: "shadow-[0_4px_14px_hsl(350,80%,55%,0.35)]", borderColor: "border-service-rose/20" },
  { num: "03", icon: Calendar, title: "Planification", desc: "Une fois le devis validé, nous planifions l'intervention à votre convenance. Nous nous adaptons à vos contraintes horaires.", color: "bg-service-emerald", shadow: "shadow-[0_4px_14px_hsl(160,70%,40%,0.35)]", borderColor: "border-service-emerald/20" },
  { num: "04", icon: Wrench, title: "Intervention Experte", desc: "Nos artisans certifiés réalisent l'intervention avec soin. Travail propre, respect des lieux et finitions soignées.", color: "bg-service-orange", shadow: "shadow-[0_4px_14px_hsl(25,90%,55%,0.35)]", borderColor: "border-service-orange/20" },
  { num: "05", icon: CheckCircle2, title: "Vérification & Garantie", desc: "Nous vérifions le bon fonctionnement de l'installation. Toutes nos interventions sont garanties 3 ans pièces et main d'œuvre.", color: "bg-service-violet", shadow: "shadow-[0_4px_14px_hsl(260,65%,55%,0.35)]", borderColor: "border-service-violet/20" },
  { num: "06", icon: Headphones, title: "Suivi & SAV", desc: "Bénéficiez d'un service après-vente réactif. Nous restons disponibles pour toute question ou ajustement.", color: "bg-service-cyan", shadow: "shadow-[0_4px_14px_hsl(190,80%,45%,0.35)]", borderColor: "border-service-cyan/20" },
];

const ProcessSection = () => (
  <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
    {/* Subtle background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5" />
    
    <div className="container mx-auto px-4 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">Notre Méthode</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Notre Processus Complet de Réparation et Installation de Volets Roulants
        </h2>
        <p className="text-muted-foreground">De votre premier appel au suivi après-vente, découvrez notre processus professionnel pour une réparation ou installation réussie de vos volets roulants.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative bg-card rounded-2xl p-8 card-shadow border ${s.borderColor} hover:card-shadow-hover transition-all duration-500 group overflow-hidden`}
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.span 
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-display font-extrabold bg-gradient-to-r from-border/30 to-border/10 bg-clip-text text-transparent"
                >
                  {s.num}
                </motion.span>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.1 }}
                  className={`w-12 h-12 rounded-xl ${s.color} ${s.shadow} flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="h-6 w-6 text-white" strokeWidth={2} />
                </motion.div>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connection line visual (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-y-1/2 pointer-events-none"
      />
    </div>
  </section>
);

export default ProcessSection;
