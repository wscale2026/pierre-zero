# Document de Conception Produit (PRD)
# Pierre Zero Cameroun — Site E-Commerce de Vin Sans Alcool

---

## 1. VISION ET OBJECTIFS STRATEGIQUES

### 1.1 Positionnement
Pierre Zero Cameroun est la destination en ligne de reference pour l'achat de vin effervescent sans alcool premium (Pierre Zero Chardonnay) au Cameroun et en Afrique francophone. Le site vise a democratiser le vin sans alcool en Afrique centrale en capitalisant sur la tendance mondiale No/Low et les specificites du marche local.

### 1.2 Objectifs Business
- **Objectif primaire** : Generer des ventes (B2C et B2B) avec conversion via panier → WhatsApp → paiement Mobile Money
- **Cible B2C** : Particuliers camerounais et africains francophones (25-45 ans, classes moyennes et superieures, urbains, sensibles au bien-etre et au lifestyle)
- **Cible B2B** : Restaurants, hotels, lounges, traiteurs, entreprises (evenements, corporate gifting)
- **Objectif secondaire** : Eduquer le marche sur le vin sans alcool et construire une communaute autour du "lifestyle sans alcool"

### 1.3 Metriques de succes
- Taux de conversion visiteur → clic WhatsApp : > 15%
- Temps moyen sur site : > 3 minutes
- Taux de rebond : < 45%
- Panier moyen : 2+ bouteilles ou 1 carton

---

## 2. ANALYSE CONCURRENTIELLE — SITES DE REFERENCE US

### 2.1 The Zero Proof (thezeroproof.com)
**Structure** :
- Hero banner split : texte (gauche, fond bleu) + image produit lifestyle (droite)
- Navigation horizontale claire : New | Shop All | Wine ▼ | Spirits & Cocktails | Beer | Functional | Brands | Sale | Blog
- Section "Now Pouring !" (nouveautes en carousel)
- Grid produits avec prix "From $X/bottle", badges "Subscribe & Save"
- Page produit : image grande taille (gauche), details (droite) — selection taille (Single/6-Pack/12-Pack), options abonnement, FAQ accordion
- Fond beige/crème chaleureux, typographie moderne
- Panier dropdown, compte client, recherche

**Forces** :
- Design premium et epuré
- Selection taille tres claire (Single/6-Pack/12-Pack)
- Badges produit (Low Sugar, Gluten-Free, Vegan-Friendly)
- Section FAQ par produit
- Abonnement avec economie visible

**Faiblesses** :
- Trop oriente US (prix en $, livraison US uniquement)
- Pas de canal WhatsApp
- Pas de section B2B dédiée

### 2.2 ProofNoMore (proofnomore.com)
**Structure** :
- Top bar "Free Shipping Over $125"
- Hero avec 4 categories circulaires (NA Beer, Zero Proof Spirit, Non-Alc Wine, Sale) + photo lifestyle
- Sections par categorie avec grilles produits
- Bundle Builder (fonctionnalite cle)
- Compteur de compte a rebours promotionnel
- Popup newsletter (10% off)
- Chat widget (Tidio)
- Reviews/etoiles sur chaque produit
- Trust badges (500+ produits, livraison gratuite, support 24h)

**Forces** :
- Social proof tres present (reviews, ratings)
- Trust badges nombreux et visibles
- Bundle Builder innovant
- Chat en direct
- Urgence avec compteur

**Faiblesses** :
- Popup agressive
- Design moins premium que TZP
- Pas de personnalisation par region

### 2.3 BeClink (beclink.com)
**Structure** :
- Design dark/sombre premium
- Hero avec overlay et CTA "Browse Fine-Dining Collection"
- Navigation par type (Wines, Bubbly, Spirits & Mixers...)
- Filtres par categorie : Organic, Vegan, Halal
- Page produit avec onglets (Description, Reviews, Shipping)
- Collection "As Seen On" (media coverage)
- Programme de fidelite points

**Forces** :
- Positionnement "luxe" tres marque
- Certifications visibles (Halal, Vegan, Organic)
- Programme fidelite
- Dark theme elegant

**Faiblesses** :
- Moins intuitif pour le grand public
- Pas de canal conversationnel
- Complexite inutile pour un marche emergent

### 2.4 Synthese — Ce qu'on garde pour le marche camerounais
| Element | Source | Priorite |
|---------|--------|----------|
| Selection taille (1 / 6 / 12) | The Zero Proof | Haute |
| Badges certif. (0% alcool, Vegan, Halal) | BeClink | Haute |
| Reviews etoiles | ProofNoMore | Haute |
| Trust badges | ProofNoMore | Haute |
| Hero split texte/image | The Zero Proof | Haute |
| Design chaleureux (fond clair) | The Zero Proof | Moyenne |
| FAQ produit | The Zero Proof | Moyenne |
| B2B section dédiée | — | Haute (innovation) |
| WhatsApp CTA partout | — | Haute (innovation) |

---

## 3. ARCHITECTURE DU SITE

### 3.1 Structure des pages

```
/
├── Accueil (Landing)
├── Produit/
│   └── Pierre Zero Chardonnay (Page produit détaillée)
├── Commander/
│   └── Panier avec redirection WhatsApp
├── Professionnels/
│   └── Page B2B (restaurants, hotels, evenements)
├── A-propos/
│   └── Notre histoire, la marque Pierre Zero, le vin sans alcool
└── Contact/
    └── Coordonnées, WhatsApp direct, formulaire
```

### 3.2 Page d'accueil — Sections

1. **Announcement Bar** — Message fixe (ex: "Livraison gratuite à Douala et Yaoundé pour 2 cartons+")
2. **Navigation** — Logo | Accueil | Notre Vin | Professionnels | A Propos | Contact | Panier
3. **Hero Section** — Split layout : texte (gauche) + image produit/bouteille (droite)
   - Titre : "Le Luxe du Vin Sans Alcool, Maintenant au Cameroun"
   - Sous-titre : "Pierre Zero Chardonnay — 0% Alcool, 100% Plaisir"
   - CTA primaire : "Commander sur WhatsApp" (bouton vert)
   - CTA secondaire : "Voir les tarifs"
4. **Trust Bar** — 4 icones avec texte (0% Alcool, Importé de France, Halal & Vegan, Payez avec Mobile Money)
5. **Section Produit** — Card produit avec image, prix (1 bouteille / carton de 6), CTA "Ajouter au panier"
6. **Section B2B Teaser** — "Vous etes restaurateur, hotelier, traiteur ?" avec CTA vers page pro
7. **Section "Pourquoi Choisir Pierre Zero ?"** — Grille 4 colonnes (Sante, Elegance, Accessibilite, Communaute)
8. **Section Temoignages** — 3 avis clients (photos + texte + etoiles)
9. **Section Processus de Commande** — 4 etapes (Ajoutez au panier → Validez sur WhatsApp → Payez par Mobile Money → Recevez à domicile)
10. **Footer** — Logo, liens, coordonnees WhatsApp, reseaux sociaux, mentions legales

### 3.3 Page Produit — Sections

1. **Galerie** — Image principale grande taille + miniatures (bouteille seule, carton, photo lifestyle)
2. **Infos produit** — Nom, prix, badges (0% Alcool, Halal, Vegan, Importé de France)
3. **Selection format** — Toggle : 1 Bouteille | Carton de 6 (avec prix et economie affichee)
4. **Description** — Notes de degustation, accords mets, profil aromatique
5. **Benefices** — Grille icones (Sante, Convivialite, Elegance, Inclusivite)
6. **Tableau nutritionnel** — Calories, sucres, etc.
7. **FAQ** — Accordion (Pour qui ? / Comment servir ? / Duree de conservation ? / Livraison ?)
8. **CTA fixe mobile** — Barre flottante en bas avec prix et bouton "Commander sur WhatsApp"

### 3.4 Page Professionnels (B2B)

1. **Hero** — "Offrez Pierre Zero à Vos Clients"
2. **Tarifs degressifs** — Tableau : 1 carton / 5 cartons / 10+ cartons avec prix et remise
3. **Avantages B2B** — Grille (Marge attractive, Livraison express, Support dedie, Marketing de proximite)
4. **Types de clients** — Cards (Restaurants, Hotels, Lounges & Bars, Traiteurs, Entreprises)
5. **Formulaire/WhatsApp** — "Demandez un devis personnalise" → bouton WhatsApp avec message pre-rempli
6. **FAQ B2B** — (Delais, Conditions, Exclusivite, etc.)

### 3.5 Page Panier / Commande

1. **Recapitulatif** — Liste produits avec quantite modifiable, prix unitaire, sous-total
2. **Frais de livraison** — Estimation selon ville (Douala, Yaoundé, autres)
3. **Total** — Prix TTC
4. **CTA principal** — "Finaliser sur WhatsApp" (bouton vert avec icone WhatsApp)
   - Genere un message WhatsApp pre-rempli avec le detail de la commande
5. **Instructions** — "Cliquez ci-dessus pour nous envoyer votre commande sur WhatsApp. Nous vous confirmerons la disponibilite et les modalites de paiement Mobile Money."

---

## 4. DESIGN SYSTEM

### 4.1 Palette de couleurs

| Role | Couleur | Hex | Usage |
|------|---------|-----|-------|
| **Primaire** | Bleu marine profond | #1A2744 | Header, titres, accents premium |
| **Secondaire** | Or champagne | #C9A96E | Badges premium, highlights, icones |
| **CTA Primaire** | Vert WhatsApp | #25D366 | Boutons "Commander sur WhatsApp", actions principales |
| **CTA Secondaire** | Or fonce | #A68B4B | Boutons "Ajouter au panier", actions secondaires |
| **Fond** | Blanc casse | #FAF7F2 | Fond de page (chaleureux, premium) |
| **Fond alternatif** | Gris tres clair | #F0EDE8 | Sections alternées |
| **Texte** | Noir profond | #1A1A2E | Titres, texte principal |
| **Texte secondaire** | Gris | #6B6B6B | Descriptions, labels |
| **Succes** | Vert | #2E7D32 | En stock, disponible |
| **Urgence** | Rouge doux | #C62828 | Promotions, stock limite |

### 4.2 Typographie

| Element | Police | Taille | Poids |
|---------|--------|--------|-------|
| Titre Hero | Playfair Display | 48px (desktop) / 32px (mobile) | 700 |
| Titres section | Playfair Display | 36px / 28px | 600 |
| Sous-titres | Inter | 20px / 18px | 600 |
| Corps | Inter | 16px / 15px | 400 |
| Boutons | Inter | 16px | 600 |
| Prix | Inter | 24px | 700 |
| Labels | Inter | 12px | 500 (uppercase) |

### 4.3 Composants UI

**Boutons** :
- Primaire (WhatsApp) : Fond #25D366, texte blanc, border-radius 8px, padding 14px 32px, ombre portee subtile
- Secondaire : Fond transparent, border 2px #C9A96E, texte #1A2744, border-radius 8px
- Hover : legerement plus fonce, transition 200ms ease

**Cards Produit** :
- Fond blanc, border-radius 12px, ombre subtile (0 4px 20px rgba(0,0,0,0.08))
- Image produit en haut (ratio 3:4), contenu en bas
- Badge prix et format visibles
- Hover : levee de 4px + ombre accentuee

**Badges** :
- Format : pill arrondi, fond colore semi-transparent, texte en majuscules
- "0% ALCOOL" : fond #E8F5E9, texte #2E7D32
- "HALAL" : fond #FFF3E0, texte #E65100
- "PREMIUM" : fond #1A2744, texte #C9A96E
- "ECONOMIE -15%" : fond #FFEBEE, texte #C62828

**Trust Bar** :
- 4 colonnes sur desktop, 2x2 sur mobile
- Icones + titre + description courte
- Fond #F0EDE8, padding genereux

### 4.4 Responsive — Mobile-First

**Breakpoint** :
- Mobile : < 768px (priorite)
- Tablet : 768px - 1024px
- Desktop : > 1024px

**Principes mobile** :
- Navigation hamburger avec menu slide-in
- Hero : empile vertical (texte au-dessus, image en-dessous)
- Cards produit : 1 colonne
- CTA flottant fixe en bas de l'ecran sur la page produit
- Touch targets minimum 48px
- Polices legerement reduites mais lisibles

---

## 5. PARCOURS UTILISATEUR ET FONCTIONNALITES

### 5.1 Parcours B2C — Particulier

```
1. DECOUVERTE
   → Arrivee sur le site (reseaux sociaux, bouche-a-oreille, SEO)
   → Hero captivant avec CTA clair
   → Scroll → decouverte produit, trust badges, temoignages

2. INTERET
   → Clic "Voir le vin" ou "Ajouter au panier"
   → Page produit : images, description, selection format
   → FAQ pour lever les objections
   → Clic "Ajouter au panier"

3. PANIER
   → Page panier : recapitulatif modifiable
   → Verification prix et quantite
   → Clic "Commander sur WhatsApp"

4. CONVERSION
   → Ouverture WhatsApp avec message pre-rempli :
     "Bonjour Pierre Zero Cameroun ! Je souhaite commander :
     - X bouteilles de Pierre Zero Chardonnay
     - Total : X FCFA
     - Livraison à : [Ville]
     Mon nom : [Nom]"
   → Discussion avec vendeur pour confirmation
   → Paiement via Mobile Money (Orange Money / MTN MoMo)
   → Livraison organisee
```

### 5.2 Parcours B2B — Professionnel

```
1. DECOUVERTE
   → Arrivee via page "Professionnels" ou teaser homepage
   → Hero B2B avec message cible
   → Visualisation tarifs degressifs

2. INTERET
   → Consultation avantages B2B
   → Clic "Demander un devis" (WhatsApp)
   → Message pre-rempli B2B avec type d'etablissement

3. NEGOCIATION
   → Echange WhatsApp pour personnalisation
   → Proposition commerciale adaptee
   → Validation commande

4. CONVERSION
   → Paiement Mobile Money ou virement
   → Livraison programmee
   → Suivi et support continu
```

### 5.3 Fonctionnalites Cles

**A. Panier (LocalStorage)**
- Stockage cote client (pas de base de donnees necessaire)
- Ajout/Suppression/Modification quantite
- Calcul auto du total
- Persistance entre les pages
- Badge compteur sur l'icone panier

**B. Redirection WhatsApp**
- Bouton "Commander sur WhatsApp" sur chaque page produit + panier + footer
- Message WhatsApp auto-genere avec le detail de la commande
- Numero WhatsApp du vendeur (+237)
- Parametres pre-remplis : produits, quantites, total

**C. Selection de format**
- Toggle bouteille unitaire / carton de 6
- Prix mis a jour dynamiquement
- Economie affichee en pourcentage et FCFA
- Exemple : "1 bouteille : 15 000 FCFA" | "Carton de 6 : 75 000 FCFA (economisez 15 000 FCFA)"

**D. Estimateur de livraison**
- Dropdown : selection de la ville
- Affichage des frais : Douala/Yaounde (gratuit si 2+ cartons), autres villes (sur devis)

**E. FAQ Interactif**
- Composant accordion (ouverture/fermeture)
- Questions pre-remplies par categorie (Produit, Commande, Livraison, Paiement)

**F. Section B2B**
- Page dédiée avec formulaire de contact WhatsApp
- Grille tarifaire avec remises degressives
- Cards par type d'etablissement

**G. Elements de confiance**
- Reviews etoiles (statiques pour l'instant)
- "En stock" badge
- Icones securite paiement
- "Livraison a Douala et Yaounde"

---

## 6. SPECIFICITES MARCHE CAMEROUNAIS

### 6.1 Mobile-First Absolu
- 80%+ du trafic web en Afrique provient du mobile
- Design mobile-first obligatoire
- Temps de chargement rapide (< 3s en 3G)
- Interface tactile optimisee (touch targets 48px+)
- Pas de hover states comme seul moyen d'interaction

### 6.2 Paiement — Mobile Money
- **Orange Money** : 3.2M utilisateurs actifs au Cameroun
- **MTN Mobile Money (MoMo)** : 8.5M utilisateurs actifs
- Volume total 2024 : +12 000 milliards FCFA
- Le site ne prend PAS les paiements directement — redirection WhatsApp pour paiement manuel
- Future evolution : integration API (Monetbil, Campay, ou CinetPay)

### 6.3 Livraison
- Zones prioritaires : Douala, Yaounde
- Modele : livraison par coursier/moto ou agence de transport
- Delai : 24-48h Douala/Yaounde, 3-5j autres villes
- Gratuit : a partir de 2 cartons

### 6.4 Canal WhatsApp comme Centre de Conversion
- WhatsApp est le canal de communication #1 en Afrique
- Le bouton WhatsApp est le CTA principal sur TOUTES les pages
- Icone WhatsApp verte tres visible
- Message pre-rempli pour reduire la friction
- Widget WhatsApp flottant (coin inferieur droit)

### 6.5 Communication
- **Langue** : Francais principal
- **Ton** : Premium mais accessible, chaleureux, confiant
- **Eviter** : jargon technique, anglicismes excessifs, ton trop corporate
- **Accent** : Elegance africaine, celebration, convivialite

### 6.6 Contexte Culturel
- Le vin sans alcool est une NOUVEAUTE au Cameroun → forte composante educationnelle
- Positionner comme "luxe accessible" et "choix intelligent"
- Mettre en avant les cas d'usage : mariages, entreprises, Ramadan, conduite, grossesse, sport
- Photo lifestyle avec des Africains (pas de photos occidentales uniquement)
- Temoignages de clients camerounais

---

## 7. CONTENU ET ASSETS

### 7.1 Textes principaux

**Hero** :
- Titre : "Le Luxe du Vin Sans Alcool, Enfin au Cameroun"
- Sous-titre : "Pierre Zero Chardonnay — Importe de France, 0% Alcool, 100% Plaisir. Pour vos celebrations, vos diners, vos moments privilegies."
- CTA : "Commander sur WhatsApp"

**Trust Bar** :
1. "0% Alcool" — "Le plaisir du vin sans les effets de l'alcool"
2. "Importe de France" — "Un Chardonnay authentique, desalcoolise avec soin"
3. "Halal & Vegan" — "Convient a tous, sans exception"
4. "Paiement Mobile Money" — "Payez facilement avec Orange Money ou MTN MoMo"

**Section Produit** :
- Titre : "Pierre Zero Chardonnay Effervescent"
- Prix : "15 000 FCFA / bouteille" | "75 000 FCFA / carton de 6"
- Description : "Notes d'agrumes, de pomme croquante et de fleurs blanches. Une bulle fine et delicate, une texture onctueuse. Rafraichissant et elegant."

**Section B2B** :
- Titre : "Vous etes Restaurateur, Hotelier ou Traiteur ?"
- Sous-titre : "Offrez a vos clients une alternative premium sans alcool. Tarifs degressifs et livraison express."
- CTA : "Demander un Devis Pro"

### 7.2 Assets visuels necessaires

| Asset | Description | Priorite |
|-------|-------------|----------|
| Photo bouteille (fond transparent) | Pierre Zero sur fond blanc | Critique |
| Photo bouteille lifestyle | Sur une table dressee, ambiance africaine elegante | Critique |
| Photo carton de 6 | Carton ferme, packaging | Critique |
| Photo degustation | Verre de Pierre Zero avec bulles, lumiere chaude | Haute |
| Photo contexte evenement | Mariage ou celebration africaine avec le vin | Haute |
| Photo B2B restaurant | Table de restaurant avec Pierre Zero | Moyenne |
| Icones set | 0% alcool, France, Halal, Vegan, Livraison, Mobile Money | Haute |
| Logo Pierre Zero Cameroun | Logo avec drapeau/texte Cameroun | Critique |

---

## 8. STACK TECHNIQUE

### 8.1 Technologies
- **Framework** : React + TypeScript + Vite
- **Styling** : Tailwind CSS
- **Etat** : React Hooks (useState, useContext) — pas besoin de state manager
- **Stockage** : LocalStorage (panier)
- **Deploiement** : Static hosting (Netlify ou Vercel)
- **Analytics** : Google Analytics 4 + Hotjar (heatmap)

### 8.2 Pourquoi pas de backend ?
- Pas de gestion de paiement en ligne (Mobile Money manuel via WhatsApp)
- Pas de compte client necessaire
- Pas de stock complexe (produit unique)
- Le panier est cote client (LocalStorage)
- WhatsApp sert de CRM/prise de commande

### 8.3 Structure des fichiers

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductSelector.tsx        (1 bouteille / carton de 6)
│   ├── CartDrawer.tsx
│   ├── CartPage.tsx
│   ├── TrustBar.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── WhatsAppButton.tsx        (bouton + widget flottant)
│   ├── B2BSection.tsx
│   ├── B2BPage.tsx
│   ├── ProcessSteps.tsx
│   └── PriceTag.tsx
├── context/
│   └── CartContext.tsx            (gestion du panier)
├── hooks/
│   └── useCart.ts
├── types/
│   └── index.ts
├── data/
│   └── content.ts                (textes, prix, FAQ)
├── pages/
│   ├── HomePage.tsx
│   ├── ProductPage.tsx
│   ├── CartPage.tsx
│   ├── B2BPage.tsx
│   └── AboutPage.tsx
├── App.tsx
└── main.tsx
```

### 8.4 Donnees du produit

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  origin: string;
  volume: string;
  abv: string;
  certifications: string[];
  tasteNotes: string[];
  formats: {
    single: { price: number; label: string };
    carton6: { price: number; label: string; savings: number };
  };
  badges: string[];
  inStock: boolean;
}
```

**Donnees** :
- Nom : "Pierre Zero Chardonnay Effervescent"
- Prix unitaire : 15 000 FCFA
- Prix carton de 6 : 75 000 FCFA (economie 15 000 FCFA)
- Certifications : ["0% Alcool", "Halal", "Vegan", "Importe de France"]
- Notes de gout : ["Agrumes", "Pomme", "Fleurs blanches", "Vanille"]
- Volume : "75cl"
- Origine : "France"

---

## 9. EXPERIENCE UTILISATEUR DETAILLEE

### 9.1 Animations & Micro-interactions

| Element | Animation | Timing |
|---------|-----------|--------|
| Hero texte | Fade-in + translateY(20px→0) au chargement | 600ms, ease-out |
| Hero image | Fade-in + scale(0.95→1) au chargement | 800ms, ease-out |
| Cards produit | Levee de 4px + ombre accentuee au hover | 200ms, ease |
| Boutons | Scale(1.02) + ombre au hover | 150ms, ease |
| Badge panier | Scale pulse quand ajout | 300ms, bounce |
| WhatsApp bouton | Pulse subtil toutes les 5s | 2s, ease-in-out |
| Sections | Fade-in au scroll (IntersectionObserver) | 500ms |
| FAQ accordion | Slide-down ouverture | 200ms, ease |
| Page transitions | Fade crossfade | 300ms |

### 9.2 Etats de chargement
- Skeleton screens pendant le chargement des images
- Pas de spinner de chargement pour les actions rapides
- Feedback immediat sur les boutons (ripple effect)

### 9.3 Gestion des erreurs
- Panier vide : message + CTA vers produit
- WhatsApp non disponible : afficher numero + proposition d'appel
- Image non chargee : placeholder avec icone

---

## 10. SEO & PERFORMANCES

### 10.1 SEO
- **Title** : "Pierre Zero Cameroun | Vin Sans Alcool Premium | Commande WhatsApp"
- **Meta description** : "Decouvrez Pierre Zero Chardonnay, le vin effervescent sans alcool importe de France. Disponible au Cameroun. Commandez par WhatsApp, payez par Mobile Money."
- **Mots-cles** : vin sans alcool cameroun, pierre zero, vin halal douala, vin 0% alcool yaounde, achat vin sans alcool
- **Schema.org** : Product, AggregateRating, FAQPage
- **Open Graph** : image produit, titre, description

### 10.2 Performances cibles
- **Lighthouse** : > 90 Performance, > 95 Accessibility, > 95 Best Practices, > 90 SEO
- **LCP** : < 2.5s
- **FID** : < 100ms
- **CLS** : < 0.1
- **Taille bundle** : < 200KB (gzip)

---

## 11. PLAN DE LANCEMENT

### Phase 1 — MVP (Semaine 1-2)
- [x] Landing page complete
- [x] Page produit avec galerie et FAQ
- [x] Panier fonctionnel (LocalStorage)
- [x] Redirection WhatsApp avec message pre-rempli
- [x] Page Professionnels (B2B)
- [x] Design responsive mobile-first

### Phase 2 — Optimisation (Semaine 3-4)
- [ ] Analytics (GA4 + Hotjar)
- [ ] A/B testing des CTA
- [ ] Collection vrais temoignages clients
- [ ] Optimisation SEO on-page
- [ ] Integration reseaux sociaux (Instagram feed)

### Phase 3 — Evolution (Mois 2-3)
- [ ] Multi-produits (autres vins sans alcool)
- [ ] Integration paiement Mobile Money API
- [ ] Programme de parrainage
- [ ] Newsletter / SMS marketing
- [ ] Application mobile (PWA)

---

## 12. RISQUES ET MITIGATION

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| Faible connaissance du vin sans alcool | Haute | Moyen | Section education + FAQ + contenu social media |
| Friction paiement Mobile Money manuel | Moyenne | Moyen | Process WhatsApp tres fluide + instructions claires |
| Concurrence des vins traditionnels | Moyenne | Moyen | Positionnement different (sante, inclusion, innovation) |
| Livraison difficile | Moyenne | Haut | Partenariat avec livreurs locaux + zones progressives |
| Resistance prix (premium) | Haute | Haut | Mise en valeur qualite, comparatif avec champagne, tarifs B2B attractifs |

---

## ANNEXE A : MESSAGE WHATSAPP PRE-REMPLI

### Commande B2C
```
Bonjour Pierre Zero Cameroun ! 👋

Je souhaite passer commande :

🍾 Pierre Zero Chardonnay
• {quantite} x {format} — {prix} FCFA

📦 Livraison : {ville}
💰 Total : {total} FCFA

Mon nom : {nom}
Mon telephone : {telephone}

Merci !
```

### Commande B2B
```
Bonjour Pierre Zero Cameroun ! 👋

Je suis interesse par vos tarifs professionnels.

🏢 Type d'etablissement : {restaurant/hotel/traiteur/autre}
📍 Ville : {ville}
📦 Volume souhaite : {nombre} cartons

Merci de me contacter pour un devis.

Mon nom : {nom}
Mon telephone : {telephone}
```

---

## ANNEXE B : TARIFICATION

| Format | Prix public | Prix B2B (5+) | Prix B2B (10+) |
|--------|-------------|---------------|----------------|
| 1 Bouteille | 15 000 FCFA | — | — |
| Carton de 6 | 75 000 FCFA (eco 15k) | 67 500 FCFA | 60 000 FCFA |
| Carton de 12 | 138 000 FCFA (eco 42k) | 124 200 FCFA | 110 400 FCFA |

Livraison :
- Douala & Yaounde : gratuite (2+ cartons), 2 000 FCFA (1 carton), 1 000 FCFA (bouteilles)
- Autres villes : sur devis

---

*Document PRD — Pierre Zero Cameroun*
*Version 1.0 — Mai 2026*
*Statut : Pret pour developpement*
