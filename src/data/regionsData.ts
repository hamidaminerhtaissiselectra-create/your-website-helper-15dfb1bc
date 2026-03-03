// Données des régions métropolitaines françaises pour l'architecture SEO

export interface RegionData {
  name: string;
  slug: string;
  description: string;
  seoDescription: string;
  departments: DepartmentData[];
  mainCities: string[];
  economicHighlights: string[];
  clientTypes: string[];
  gpsCenter?: { lat: number; lng: number };
}

export interface DepartmentData {
  name: string;
  code: string;
}

export const regionsData: RegionData[] = [
  {
    name: "Paris",
    slug: "paris",
    description: "Répar'Action Volets est votre expert en réparation, installation et motorisation de volets roulants à Paris. Intervention rapide dans tous les arrondissements pour un service de qualité.",
    seoDescription: "Réparation volets roulants Paris, installation volets Paris, motorisation volets Paris. Intervention rapide dans tous les arrondissements de Paris. Devis gratuit.",
    departments: [{ name: "Paris", code: "75" }],
    mainCities: ["Paris 1er", "Paris 2e", "Paris 3e", "Paris 4e", "Paris 5e", "Paris 6e", "Paris 7e", "Paris 8e", "Paris 9e", "Paris 10e", "Paris 11e", "Paris 12e", "Paris 13e", "Paris 14e", "Paris 15e", "Paris 16e", "Paris 17e", "Paris 18e", "Paris 19e", "Paris 20e"],
    economicHighlights: ["Centre économique et touristique mondial", "Sièges sociaux d'entreprises", "Commerces de luxe", "Patrimoine historique"],
    clientTypes: ["Particuliers", "Entreprises", "Commerces", "Syndics de copropriété", "Hôtels"],
    gpsCenter: { lat: 48.8566, lng: 2.3522 }
  },
  {
    name: "Île-de-France",
    slug: "ile-de-france",
    description: "Répar'Action Volets intervient dans toute l'Île-de-France pour la réparation, l'installation et la motorisation de vos volets roulants. Service rapide et efficace dans les départements 77, 78, 91, 92, 93, 94, 95.",
    seoDescription: "Réparation volets roulants Île-de-France, installation volets IdF, motorisation volets 77, 78, 91, 92, 93, 94, 95. Intervention rapide et devis gratuit.",
    departments: [
      { name: "Seine-et-Marne", code: "77" }, { name: "Yvelines", code: "78" }, { name: "Essonne", code: "91" },
      { name: "Hauts-de-Seine", code: "92" }, { name: "Seine-Saint-Denis", code: "93" }, { name: "Val-de-Marne", code: "94" }, { name: "Val-d'Oise", code: "95" }
    ],
    mainCities: ["Créteil", "Vitry-sur-Seine", "Saint-Maur-des-Fossés", "Boulogne-Billancourt", "Versailles", "Saint-Denis", "Nanterre", "Argenteuil", "Montreuil", "Aubervilliers", "Cergy", "Évry", "Melun", "Mantes-la-Jolie", "Rambouillet"],
    economicHighlights: ["Pôles d'activités économiques majeurs", "Zones résidentielles denses", "Infrastructures de transport développées"],
    clientTypes: ["Particuliers", "Entreprises", "Commerces", "Administrations", "Syndics de copropriété"],
    gpsCenter: { lat: 48.8499, lng: 2.6370 }
  },
  {
    name: "Auvergne-Rhône-Alpes",
    slug: "auvergne-rhone-alpes",
    description: "Répar'Action Volets intervient en Auvergne-Rhône-Alpes pour la réparation, l'installation et la motorisation de volets roulants. Couverture complète de Lyon à Grenoble et Saint-Étienne.",
    seoDescription: "Réparation volets roulants Auvergne-Rhône-Alpes. Installation et motorisation volets Lyon, Grenoble, Saint-Étienne. Devis gratuit, intervention rapide, garantie 3 ans.",
    departments: [
      { name: "Ain", code: "01" }, { name: "Allier", code: "03" }, { name: "Ardèche", code: "07" }, { name: "Cantal", code: "15" },
      { name: "Drôme", code: "26" }, { name: "Isère", code: "38" }, { name: "Loire", code: "42" }, { name: "Haute-Loire", code: "43" },
      { name: "Puy-de-Dôme", code: "63" }, { name: "Rhône", code: "69" }, { name: "Savoie", code: "73" }, { name: "Haute-Savoie", code: "74" }
    ],
    mainCities: ["Lyon", "Grenoble", "Saint-Étienne", "Villeurbanne", "Clermont-Ferrand", "Annecy", "Chambéry", "Valence"],
    economicHighlights: ["Pôle chimie-pharmaceutique Lyon", "Tourisme alpin", "Technopôles Grenoble-Isère", "Industries mécaniques"],
    clientTypes: ["Particuliers", "Copropriétés", "Commerces", "Résidences de montagne", "Entrepôts logistiques"],
    gpsCenter: { lat: 45.7640, lng: 4.8357 }
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    slug: "provence-alpes-cote-d-azur",
    description: "Répar'Action Volets couvre toute la région PACA pour vos volets roulants. Réparation, installation et motorisation à Marseille, Nice, Toulon et dans toute la région.",
    seoDescription: "Réparation volets roulants PACA. Installation volets Marseille, Nice, Toulon, Aix-en-Provence. Motorisation et dépannage rapide. Devis gratuit.",
    departments: [
      { name: "Alpes-de-Haute-Provence", code: "04" }, { name: "Hautes-Alpes", code: "05" }, { name: "Alpes-Maritimes", code: "06" },
      { name: "Bouches-du-Rhône", code: "13" }, { name: "Var", code: "83" }, { name: "Vaucluse", code: "84" }
    ],
    mainCities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Cannes", "Antibes", "Avignon", "Fréjus"],
    economicHighlights: ["Port de Marseille-Fos", "Tourisme Côte d'Azur", "Technopole Sophia Antipolis", "Industrie aéronautique"],
    clientTypes: ["Particuliers", "Hôtels", "Villas", "Commerces touristiques", "Copropriétés"],
    gpsCenter: { lat: 43.2965, lng: 5.3698 }
  },
  {
    name: "Nouvelle-Aquitaine",
    slug: "nouvelle-aquitaine",
    description: "Répar'Action Volets intervient dans toute la Nouvelle-Aquitaine. Réparation, installation et motorisation de volets roulants à Bordeaux, Limoges, Poitiers et dans toute la région.",
    seoDescription: "Réparation volets roulants Nouvelle-Aquitaine. Installation volets Bordeaux, Limoges, Poitiers. Dépannage rapide, devis gratuit, garantie 3 ans.",
    departments: [
      { name: "Charente", code: "16" }, { name: "Charente-Maritime", code: "17" }, { name: "Corrèze", code: "19" }, { name: "Creuse", code: "23" },
      { name: "Dordogne", code: "24" }, { name: "Gironde", code: "33" }, { name: "Landes", code: "40" }, { name: "Lot-et-Garonne", code: "47" },
      { name: "Pyrénées-Atlantiques", code: "64" }, { name: "Deux-Sèvres", code: "79" }, { name: "Vienne", code: "86" }, { name: "Haute-Vienne", code: "87" }
    ],
    mainCities: ["Bordeaux", "Limoges", "Poitiers", "La Rochelle", "Pau", "Bayonne", "Angoulême", "Périgueux"],
    economicHighlights: ["Vignobles bordelais", "Aéronautique Bordeaux", "Tourisme atlantique", "Industries céramiques Limoges"],
    clientTypes: ["Particuliers", "Domaines viticoles", "Commerces", "Résidences de vacances", "Copropriétés"],
    gpsCenter: { lat: 44.8378, lng: -0.5792 }
  },
  {
    name: "Occitanie",
    slug: "occitanie",
    description: "Répar'Action Volets est présent en Occitanie pour la réparation, l'installation et la motorisation de volets roulants. Intervention à Toulouse, Montpellier, Nîmes et dans toute la région.",
    seoDescription: "Réparation volets roulants Occitanie. Installation volets Toulouse, Montpellier, Nîmes, Perpignan. Devis gratuit, intervention rapide.",
    departments: [
      { name: "Ariège", code: "09" }, { name: "Aude", code: "11" }, { name: "Aveyron", code: "12" }, { name: "Gard", code: "30" },
      { name: "Haute-Garonne", code: "31" }, { name: "Gers", code: "32" }, { name: "Hérault", code: "34" }, { name: "Lot", code: "46" },
      { name: "Lozère", code: "48" }, { name: "Hautes-Pyrénées", code: "65" }, { name: "Pyrénées-Orientales", code: "66" }, { name: "Tarn", code: "81" }, { name: "Tarn-et-Garonne", code: "82" }
    ],
    mainCities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Narbonne", "Albi", "Tarbes"],
    economicHighlights: ["Aéronautique Toulouse (Airbus)", "Viticulture Languedoc", "Tourisme Pyrénées", "Pôle spatial"],
    clientTypes: ["Particuliers", "Copropriétés", "Commerces", "Stations thermales", "Domaines viticoles"],
    gpsCenter: { lat: 43.6047, lng: 1.4442 }
  },
  {
    name: "Hauts-de-France",
    slug: "hauts-de-france",
    description: "Répar'Action Volets intervient dans les Hauts-de-France pour tous vos besoins en volets roulants. Réparation, installation et motorisation à Lille, Amiens et dans toute la région.",
    seoDescription: "Réparation volets roulants Hauts-de-France. Installation volets Lille, Amiens, Roubaix. Dépannage express, devis gratuit, garantie 3 ans.",
    departments: [
      { name: "Aisne", code: "02" }, { name: "Nord", code: "59" }, { name: "Oise", code: "60" }, { name: "Pas-de-Calais", code: "62" }, { name: "Somme", code: "80" }
    ],
    mainCities: ["Lille", "Amiens", "Roubaix", "Tourcoing", "Dunkerque", "Calais", "Valenciennes", "Douai"],
    economicHighlights: ["Logistique et transport", "Grande distribution", "Industrie automobile", "Zones portuaires Dunkerque-Calais"],
    clientTypes: ["Particuliers", "Entrepôts logistiques", "Grandes surfaces", "Sites industriels", "Copropriétés"],
    gpsCenter: { lat: 50.6292, lng: 3.0573 }
  },
  {
    name: "Grand Est",
    slug: "grand-est",
    description: "Répar'Action Volets est votre expert volets roulants dans le Grand Est. Réparation, installation et motorisation à Strasbourg, Nancy, Metz, Reims et dans toute la région.",
    seoDescription: "Réparation volets roulants Grand Est. Installation volets Strasbourg, Nancy, Metz, Reims. Devis gratuit, intervention rapide.",
    departments: [
      { name: "Ardennes", code: "08" }, { name: "Aube", code: "10" }, { name: "Marne", code: "51" }, { name: "Haute-Marne", code: "52" },
      { name: "Meurthe-et-Moselle", code: "54" }, { name: "Meuse", code: "55" }, { name: "Moselle", code: "57" },
      { name: "Bas-Rhin", code: "67" }, { name: "Haut-Rhin", code: "68" }, { name: "Vosges", code: "88" }
    ],
    mainCities: ["Strasbourg", "Nancy", "Metz", "Reims", "Mulhouse", "Colmar", "Troyes", "Thionville"],
    economicHighlights: ["Institutions européennes Strasbourg", "Industrie automobile", "Viticulture Alsace", "Sidérurgie"],
    clientTypes: ["Particuliers", "Copropriétés", "Industries", "Commerces", "Domaines viticoles"],
    gpsCenter: { lat: 48.5734, lng: 7.7521 }
  },
  {
    name: "Pays de la Loire",
    slug: "pays-de-la-loire",
    description: "Répar'Action Volets intervient en Pays de la Loire pour vos volets roulants. Réparation, installation et motorisation à Nantes, Angers, Le Mans et dans toute la région.",
    seoDescription: "Réparation volets roulants Pays de la Loire. Installation volets Nantes, Angers, Le Mans. Intervention rapide, devis gratuit.",
    departments: [
      { name: "Loire-Atlantique", code: "44" }, { name: "Maine-et-Loire", code: "49" }, { name: "Mayenne", code: "53" },
      { name: "Sarthe", code: "72" }, { name: "Vendée", code: "85" }
    ],
    mainCities: ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "La Roche-sur-Yon", "Cholet", "Laval", "Saumur"],
    economicHighlights: ["Construction navale Saint-Nazaire", "Industrie automobile", "Agroalimentaire", "Tourisme vendéen"],
    clientTypes: ["Particuliers", "Copropriétés", "Commerces", "Industries", "Résidences côtières"],
    gpsCenter: { lat: 47.2184, lng: -1.5536 }
  },
  {
    name: "Bretagne",
    slug: "bretagne",
    description: "Répar'Action Volets couvre toute la Bretagne pour vos volets roulants. Réparation, installation et motorisation à Rennes, Brest, Lorient et dans toute la région.",
    seoDescription: "Réparation volets roulants Bretagne. Installation volets Rennes, Brest, Lorient, Vannes. Devis gratuit, garantie 3 ans.",
    departments: [
      { name: "Côtes-d'Armor", code: "22" }, { name: "Finistère", code: "29" }, { name: "Ille-et-Vilaine", code: "35" }, { name: "Morbihan", code: "56" }
    ],
    mainCities: ["Rennes", "Brest", "Lorient", "Vannes", "Saint-Malo", "Saint-Brieuc", "Quimper", "Fougères"],
    economicHighlights: ["Pôle cybersécurité Rennes", "Industrie agroalimentaire", "Construction navale", "Tourisme côtier"],
    clientTypes: ["Particuliers", "Copropriétés", "Commerces", "Résidences côtières", "Industries agroalimentaires"],
    gpsCenter: { lat: 48.1173, lng: -1.6778 }
  },
  {
    name: "Normandie",
    slug: "normandie",
    description: "Répar'Action Volets intervient en Normandie pour la réparation, l'installation et la motorisation de vos volets roulants. Couverture de Rouen au Havre et Caen.",
    seoDescription: "Réparation volets roulants Normandie. Installation volets Rouen, Le Havre, Caen. Dépannage express, devis gratuit.",
    departments: [
      { name: "Calvados", code: "14" }, { name: "Eure", code: "27" }, { name: "Manche", code: "50" }, { name: "Orne", code: "61" }, { name: "Seine-Maritime", code: "76" }
    ],
    mainCities: ["Rouen", "Le Havre", "Caen", "Cherbourg-en-Cotentin", "Évreux", "Dieppe", "Lisieux", "Alençon"],
    economicHighlights: ["Port du Havre", "Industrie automobile", "Tourisme mémoriel", "Agroalimentaire laitier"],
    clientTypes: ["Particuliers", "Copropriétés", "Industries", "Sites touristiques", "Résidences normandiennes"],
    gpsCenter: { lat: 49.4432, lng: 1.0999 }
  },
  {
    name: "Bourgogne-Franche-Comté",
    slug: "bourgogne-franche-comte",
    description: "Répar'Action Volets couvre la Bourgogne-Franche-Comté pour la réparation et l'installation de volets roulants. Intervention à Dijon, Besançon et dans toute la région.",
    seoDescription: "Réparation volets roulants Bourgogne-Franche-Comté. Installation volets Dijon, Besançon. Devis gratuit, intervention rapide, garantie 3 ans.",
    departments: [
      { name: "Côte-d'Or", code: "21" }, { name: "Doubs", code: "25" }, { name: "Jura", code: "39" }, { name: "Nièvre", code: "58" },
      { name: "Haute-Saône", code: "70" }, { name: "Saône-et-Loire", code: "71" }, { name: "Yonne", code: "89" }, { name: "Territoire de Belfort", code: "90" }
    ],
    mainCities: ["Dijon", "Besançon", "Belfort", "Chalon-sur-Saône", "Auxerre", "Mâcon", "Nevers", "Montbéliard"],
    economicHighlights: ["Viticulture bourguignonne", "Industrie horlogère", "Automobile Peugeot-Sochaux", "Agroalimentaire"],
    clientTypes: ["Particuliers", "Copropriétés", "Domaines viticoles", "Industries", "Commerces"],
    gpsCenter: { lat: 47.3220, lng: 5.0415 }
  },
  {
    name: "Centre-Val de Loire",
    slug: "centre-val-de-loire",
    description: "Répar'Action Volets est présent en Centre-Val de Loire pour vos volets roulants. Réparation, installation et motorisation à Orléans, Tours, Chartres et dans toute la région.",
    seoDescription: "Réparation volets roulants Centre-Val de Loire. Installation volets Orléans, Tours, Chartres. Devis gratuit, intervention rapide.",
    departments: [
      { name: "Cher", code: "18" }, { name: "Eure-et-Loir", code: "28" }, { name: "Indre", code: "36" },
      { name: "Indre-et-Loire", code: "37" }, { name: "Loir-et-Cher", code: "41" }, { name: "Loiret", code: "45" }
    ],
    mainCities: ["Orléans", "Tours", "Chartres", "Bourges", "Blois", "Châteauroux", "Vendôme", "Dreux"],
    economicHighlights: ["Logistique nationale", "Cosmétique Valley", "Tourisme châteaux", "Agriculture céréalière"],
    clientTypes: ["Particuliers", "Copropriétés", "Châteaux historiques", "Commerces", "Industries cosmétiques"],
    gpsCenter: { lat: 47.9029, lng: 1.9093 }
  },
  {
    name: "Corse",
    slug: "corse",
    description: "Répar'Action Volets intervient en Corse pour la réparation et l'installation de volets roulants. Service adapté aux contraintes insulaires, à Ajaccio et Bastia.",
    seoDescription: "Réparation volets roulants Corse. Installation volets Ajaccio, Bastia, Porto-Vecchio. Intervention adaptée, devis gratuit.",
    departments: [
      { name: "Corse-du-Sud", code: "2A" }, { name: "Haute-Corse", code: "2B" }
    ],
    mainCities: ["Ajaccio", "Bastia", "Porto-Vecchio", "Corte", "Calvi", "Bonifacio", "Propriano", "Île-Rousse"],
    economicHighlights: ["Tourisme balnéaire et montagnard", "Agroalimentaire local", "Immobilier de prestige", "Nautisme"],
    clientTypes: ["Particuliers", "Hôtels", "Villas de vacances", "Commerces saisonniers", "Résidences secondaires"],
    gpsCenter: { lat: 42.0396, lng: 9.0129 }
  }
];

export const getRegionBySlug = (slug: string): RegionData | undefined => {
  return regionsData.find(region => region.slug === slug);
};

export const getAllRegionSlugs = (): string[] => {
  return regionsData.map(region => region.slug);
};

export const getRegionCities = (regionSlug: string): string[] => {
  const region = getRegionBySlug(regionSlug);
  return region ? region.mainCities : [];
};
