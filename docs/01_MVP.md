# 01_MVP.md - Minimum Viable Product

## 🎯 Définition du MVP

### Concept

Le **MVP (Minimum Viable Product)** de Prod'uct permet à un utilisateur de :

1. ✅ Se connecter avec Google en 1 clic
2. ✅ Ajouter ses 3 produits clés
3. ✅ Rentrer les stats manuellement
4. ✅ Voir 4 graphiques de performance
5. ✅ Recevoir des recommandations IA actionnables
6. ✅ Collaborer avec 5 membres max (optionnel)

**Objectif MVP** : Valider que les entrepreneurs e-commerce **trouvent de la valeur** dans une analyse produit centralisée + recommandations IA.

---

## ✅ Features Incluses (Must-Have)

### 1. Authentification

| Feature | Description | Priorité |
|---------|-------------|----------|
| **Google OAuth** | Signup/Login en 1 clic | 🔴 P0 |
| **Avatar selection** | Initiale, IA presets, photo | 🟡 P1 |
| **Onboarding guidé** | 5 étapes < 5 min | 🔴 P0 |

**User Story** :
> En tant qu'entrepreneur e-commerce, je veux me connecter rapidement avec mon compte Google pour commencer sans friction.

**Acceptance Criteria** :
- [ ] Bouton "Sign up with Google" sur landing page
- [ ] Redirection OAuth Google
- [ ] Création user automatique en DB
- [ ] Avatar sélectionné ou initiale par défaut
- [ ] Redirection vers dashboard

---

### 2. Gestion Produits

| Feature | Description | Priorité |
|---------|-------------|----------|
| **Ajouter produit** | Formulaire nom, prix, image, lien | 🔴 P0 |
| **Liste produits** | Cards avec preview stats | 🔴 P0 |
| **Vue détail** | Page produit avec graphiques + IA | 🔴 P0 |
| **Éditer/Supprimer** | CRUD complet | 🟡 P1 |
| **Limite 3 produits** | Max 3 produits par team | 🔴 P0 |

**User Story** :
> En tant qu'utilisateur, je veux ajouter mes produits en moins de 2 minutes pour commencer l'analyse rapidement.

**Acceptance Criteria** :
- [ ] Modal "Ajouter produit" accessible depuis dashboard
- [ ] Champs : nom*, prix, image, lien, catégorie
- [ ] Upload image (max 5 MB, jpg/png)
- [ ] Validation côté client + serveur
- [ ] Message erreur si limite 3 produits atteinte
- [ ] Confirmation "Produit ajouté !"

---

### 3. Statistiques Produit

| Feature | Description | Priorité |
|---------|-------------|----------|
| **Input manuel stats** | Formulaire date, ventes, visiteurs | 🔴 P0 |
| **Upload fichier** | CSV, Excel, PDF parsing | 🟡 P1 |
| **4 graphiques** | Ventes, Conversions, Trafic, Performance | 🔴 P0 |
| **Fréquence flexible** | Quotidien, hebdo, mensuel | 🟡 P1 |

**User Story** :
> En tant qu'utilisateur, je veux rentrer mes stats en 1 minute pour voir immédiatement mes graphiques et recommandations IA.

**Acceptance Criteria** :
- [ ] Modal "Ajouter stats" depuis page produit
- [ ] Formulaire : date, ventes, visiteurs, (conversion auto-calculé)
- [ ] Option upload fichier CSV/Excel
- [ ] Parsing automatique et insertion DB
- [ ] Graphiques mis à jour en temps réel
- [ ] Message succès "Stats ajoutées !"

---

### 4. Graphiques de Performance

| Graphique | Type | Librairie | Priorité |
|-----------|------|-----------|----------|
| **Ventes** | Area chart (gradient) | Recharts | 🔴 P0 |
| **Conversions** | Donut gauge semi-circulaire | Recharts | 🔴 P0 |
| **Trafic** | Bar chart | Recharts | 🔴 P0 |
| **Performance** | Score + Radar chart | Recharts | 🟡 P1 |

**User Story** :
> En tant qu'utilisateur, je veux voir en un coup d'œil si mon produit performe bien grâce à des graphiques clairs et visuels.

**Acceptance Criteria** :
- [ ] 4 graphiques affichés sur page produit
- [ ] Responsive (desktop + mobile)
- [ ] Tooltips au hover (date + valeur exacte)
- [ ] Couleurs dynamiques (vert = bon, rouge = mauvais)
- [ ] Loading state pendant chargement data
- [ ] Empty state si pas de stats

---

### 5. IA - Recommandations ⭐

| Feature | Description | Priorité |
|---------|-------------|----------|
| **Analyse auto** | IA analyse les 4 graphiques | 🔴 P0 |
| **Recommandations** | 3-5 suggestions actionnables | 🔴 P0 |
| **Actualisation** | Bouton "Générer nouvelles reco" | 🟡 P1 |
| **IA Provider** | Llama 3 / Mistral (open-source) | 🔴 P0 |

**User Story** :
> En tant qu'utilisateur, je veux des recommandations IA claires pour savoir exactement quoi améliorer sur mon produit.

**Acceptance Criteria** :
- [ ] Section "Recommandations IA" sous les graphiques
- [ ] Génération automatique après ajout stats
- [ ] 3-5 recommandations affichées avec icônes (✅ ⚠️ 💡)
- [ ] Format : Diagnostic + Explication + Action
- [ ] Bouton "Actualiser" (limite 10/mois)
- [ ] Loading animation pendant génération (5-10 sec)

**Exemples de recommandations** :
```
✅ Excellente performance globale !
Votre produit se vend bien avec un taux de conversion de 4.2%.

⚠️ Attention : Baisse de trafic (-15% cette semaine)
Vos visiteurs diminuent. Relancez vos campagnes marketing.

💡 Suggestion : Testez une promo -20% ce week-end
Vos ventes explosent le samedi/dimanche. Profitez-en !
```

---

### 6. Collaboration Team

| Feature | Description | Priorité |
|---------|-------------|----------|
| **Créer team** | Nom personnalisé | 🟡 P1 |
| **Inviter membres** | Par email (max 5) | 🟡 P1 |
| **Notes produit** | Commentaires entre membres | 🟡 P1 |
| **To-do list** | Actions d'amélioration | 🟢 P2 |

**User Story** :
> En tant que product manager, je veux inviter mon équipe marketing pour collaborer sur l'analyse produit.

**Acceptance Criteria** :
- [ ] Bouton "Créer une team" dans settings
- [ ] Modal avec champ "Nom de la team"
- [ ] Page team avec liste membres
- [ ] Input email + bouton "Inviter"
- [ ] Email d'invitation envoyé avec lien
- [ ] Limite 5 membres max affichée
- [ ] Notes affichées chronologiquement sur page produit

---

## ❌ Features Exclues (Nice-to-Have → V2)

### Intégrations

| Feature | Raison exclusion | Version cible |
|---------|------------------|---------------|
| **API Shopify** | Complexe, pas essentiel MVP | V2 |
| **Google Analytics API** | Complexe, input manuel suffit | V2 |
| **WooCommerce** | Trop de variantes e-commerce | V3 |
| **Zapier/Make** | Pas prioritaire | V3 |

### Fonctionnalités avancées

| Feature | Raison exclusion | Version cible |
|---------|------------------|---------------|
| **Rôles & permissions** | Over-engineering pour 5 users | V2 |
| **Notifications push** | Pas critique | V2 |
| **Export PDF** | Nice-to-have | V2 |
| **A/B testing intégré** | Trop complexe MVP | V3 |
| **Analyse prédictive IA** | Nécessite + de data | V3 |
| **Comparaison concurrents** | Scope trop large | V3 |
| **Mobile app native** | Web responsive suffit | V4 |

### Monétisation

| Feature | Raison exclusion | Version cible |
|---------|------------------|---------------|
| **Stripe payment** | Gratuit pendant beta | V2 |
| **Plans tarifaires** | Valider besoin d'abord | V2 |
| **Facturation auto** | Pas nécessaire gratuit | V2 |

---

## 📊 Priorisation Features

### Méthode : MoSCoW

- **Must-Have** (🔴 P0) : Bloquant, MVP impossible sans
- **Should-Have** (🟡 P1) : Important, mais workaround possible
- **Could-Have** (🟢 P2) : Nice-to-have, améliore UX
- **Won't-Have** (⚪ V2+) : Pas dans MVP

### Matrice Effort/Impact

```
High Impact │  [IA Reco]    [Stats Input]
            │  [4 Charts]    [Auth Google]
            │
            │  [Team Collab] [Avatar]
            │  [Notes]       [Upload CSV]
            │
Low Impact  │  [Export PDF]  [A/B Test]
            │  [Notifs Push] [Shopify API]
            │
            └──────────────────────────────
              Low Effort    High Effort
```

**Priorités P0** (Must-Have) :
1. Auth Google OAuth
2. CRUD Produits (limite 3)
3. Input stats manuel
4. 4 graphiques (Recharts)
5. IA recommandations (Llama 3)

**Priorités P1** (Should-Have) :
6. Upload fichier CSV/Excel
7. Team collaboration
8. Avatar customization
9. Radar chart performance

---

## 🎯 Critères de Succès MVP

### Définition du "Succès"

Le MVP est considéré comme **réussi** si :

1. ✅ **Technique** : App déployée, stable, sans bugs critiques
2. ✅ **Utilisateurs** : 100-500 signups beta en 3 mois
3. ✅ **Engagement** : 40% weekly active users (utilisent 1×/semaine)
4. ✅ **Valeur** : NPS > 40 (utilisateurs satisfaits)
5. ✅ **Académique** : Portfolio présentable pour alternance

### Métriques d'Activation

Un utilisateur est "activé" s'il a :
- [x] Créé un compte
- [x] Ajouté au moins 1 produit
- [x] Rentré au moins 1 série de stats
- [x] Consulté les recommandations IA

**Objectif** : 60% des signups atteignent l'activation

---

## 🚀 Plan de Lancement MVP

### Phase 1 : Pre-Launch (2 semaines)

**Objectif** : Produit techniquement prêt

- [ ] Développement features P0
- [ ] Tests manuels (5 personnes)
- [ ] Corrections bugs critiques
- [ ] Landing page marketing
- [ ] Préparation communication

### Phase 2 : Soft Launch (1 mois)

**Objectif** : 50 early adopters

- [ ] Lancement auprès de réseau personnel
- [ ] Posts LinkedIn/Twitter
- [ ] Groupes Facebook e-commerce
- [ ] Subreddit r/ecommerce
- [ ] Collecte feedback intensif

### Phase 3 : Public Beta (2 mois)

**Objectif** : 200-500 utilisateurs

- [ ] Optimisations basées feedback
- [ ] Ajout features P1 (team, upload CSV)
- [ ] SEO landing page
- [ ] Product Hunt launch
- [ ] Partenariats influenceurs e-commerce

---

## 🔄 Boucle d'Itération

### Feedback → Amélioration

**Rythme** : Sprints 2 semaines

**Cycle** :
1. **Collecte feedback** (surveys, interviews, analytics)
2. **Priorisation** (matrice effort/impact)
3. **Développement** (features prioritaires)
4. **Test** (5-10 utilisateurs beta)
5. **Déploiement** (Vercel auto-deploy)
6. **Mesure** (impact KPIs)

**Outils** :
- Feedback : Typeform in-app
- Analytics : Vercel Analytics
- Bugs : GitHub Issues
- Roadmap : Notion board

---

## 📋 Checklist MVP Ready

### Fonctionnalités

- [ ] Auth Google OAuth fonctionne
- [ ] CRUD Produits complet (add, list, detail, edit, delete)
- [ ] Input stats manuel + upload CSV
- [ ] 4 graphiques s'affichent correctement
- [ ] IA génère recommandations pertinentes
- [ ] Team creation + invitation membres
- [ ] Notes/commentaires entre membres
- [ ] Limite 3 produits enforced
- [ ] Limite 5 membres enforced

### Qualité

- [ ] Aucun bug critique
- [ ] Responsive mobile/tablet/desktop
- [ ] Performance < 3 sec (Lighthouse > 80)
- [ ] Sécurité : OAuth, HTTPS, rate limiting
- [ ] RGPD : mentions légales, suppression compte
- [ ] Tests manuels sur 5+ scénarios utilisateurs

### Déploiement

- [ ] Vercel production setup
- [ ] Supabase production DB
- [ ] Variables d'env configurées
- [ ] Domaine custom (optionnel)
- [ ] Analytics configuré
- [ ] Monitoring erreurs (Sentry optionnel)

### Marketing

- [ ] Landing page live
- [ ] Pitch deck préparé (alternance)
- [ ] Screenshots produit
- [ ] Vidéo demo 2 min
- [ ] Post LinkedIn prêt

---

## 🎓 Valeur Académique

### Compétences Démontrées

**Technique** :
- ✅ Next.js 15 App Router (RSC, Server Actions)
- ✅ TypeScript strict mode
- ✅ Prisma ORM (schema, migrations, queries)
- ✅ Supabase (PostgreSQL, Storage, Auth)
- ✅ IA Integration (Llama 3 / Mistral)
- ✅ Data Visualization (Recharts)

**Produit** :
- ✅ Product thinking (PRD, MVP, roadmap)
- ✅ User research (personas, user flows)
- ✅ Priorisation (MoSCoW, effort/impact)
- ✅ Métriques (KPIs, analytics)

**Design** :
- ✅ UX design (onboarding, empty states, feedback)
- ✅ UI design (Figma → code, design system)
- ✅ Responsive design (mobile-first)

**DevOps** :
- ✅ Git workflow (branches, PR, merge)
- ✅ CI/CD (Vercel auto-deploy)
- ✅ Monitoring (analytics, erreurs)

---

## 📝 Décisions Clés MVP

### Pourquoi limite 3 produits ?

**Avantages** :
- ✅ Force utilisateurs à focus sur produits clés (80/20)
- ✅ Réduit complexité technique (pagination, perf)
- ✅ Limite coûts serveur (gratuit Supabase)
- ✅ Crée désir d'upgrade (V2 payant = illimité)

**Risques** :
- ❌ Frustration utilisateurs multi-produits
- **Mitigation** : Communication claire dès onboarding

### Pourquoi input manuel vs API auto ?

**Avantages** :
- ✅ Universel (tous e-commerces, pas que Shopify)
- ✅ Simplicité technique (pas OAuth multi-plateformes)
- ✅ Data contrôlée (qualité, format)
- ✅ Validation concept plus rapide

**Risques** :
- ❌ Friction utilisateur (saisie manuelle)
- **Mitigation** : Upload CSV + promesse API V2

### Pourquoi IA open-source ?

**Avantages** :
- ✅ Coût 0€ (critique pour beta gratuite)
- ✅ Pas de dépendance API externe
- ✅ Contrôle total (data privacy)
- ✅ Apprentissage technique (self-hosting)

**Risques** :
- ❌ Qualité reco inférieure à GPT-4
- **Mitigation** : Prompt engineering + fine-tuning

---

## ✅ Validation MVP

**Document approuvé** : Janvier 2026  
**Prochaine étape** : Compléter 02_PERSONAS.md

---

*Ce MVP sera itéré en fonction des retours utilisateurs durant la phase beta.*