# 00_PRD.md - Product Requirements Document

## 📋 Vue d'ensemble

**Nom du produit** : Prod'uct  
**Version** : MVP V1  
**Date** : Janvier 2026  
**Objectif** : Portfolio alternance/stage + Validation concept  
**Auteur** : [Ton nom]

---

## 🎯 Vision Produit

### Problème identifié

Les entrepreneurs e-commerce (PME, freelances) font face à plusieurs défis :

1. **Données dispersées** : Shopify, Google Analytics, Notion, Slack, Excel...
2. **Manque de clarté** : Difficile de comprendre **pourquoi un produit ne convertit pas**
3. **Pas d'analyse centralisée** : Chaque outil montre une partie du problème
4. **Absence de recommandations actionnables** : Beaucoup de data, peu d'insights
5. **Collaboration difficile** : Équipes déconnectées sur l'analyse produit

### Solution proposée

**Prod'uct** est une plateforme SaaS tout-en-un pour :

- ✅ **Centraliser** les données produits (ventes, trafic, conversions)
- ✅ **Visualiser** avec 4 graphiques clés (ventes, conversions, trafic, performance)
- ✅ **Analyser** automatiquement avec l'IA (recommandations personnalisées)
- ✅ **Collaborer** en équipe (notes, commentaires, actions)
- ✅ **Optimiser** les conversions grâce aux insights IA

### Proposition de valeur unique

> "Comprenez en 5 minutes pourquoi votre produit ne convertit pas, avec des recommandations IA actionnables."

**Différenciation** :
- 🎯 Focus produit (pas site entier comme GA)
- 🤖 IA intégrée (recommandations automatiques)
- 👥 Collaboration native (pas besoin de Notion/Slack)
- 💰 Gratuit (phase beta test)
- ⚡ Setup rapide (< 5 min vs 2h pour GA)

---

## 👥 Marché Cible

### Segments

1. **Freelances/Solopreneurs** (60% cible)
   - Marques perso (vêtements, accessoires, digital)
   - 5-20 produits
   - CA 1k-10k€/mois
   - Budget outils : 0-50€/mois

2. **PME (2-20 employés)** (30% cible)
   - E-commerce établi
   - 20-100 produits
   - CA 50k-200k€/mois
   - Équipe produit + marketing

3. **Side Projects** (10% cible)
   - Complément de revenus
   - 5-15 produits
   - CA < 2k€/mois
   - Temps limité

### Taille du marché (France)

- **TAM** : 200 000 e-commerces actifs en France
- **SAM** : 50 000 (petites structures < 50 employés)
- **SOM** : 500 utilisateurs beta (objectif 6 mois)

---

## 🎯 Objectifs Produit

### Objectifs Business

**Phase Beta (6 mois)** :
- 100-500 utilisateurs actifs
- Validation concept (NPS > 40)
- Portfolio alternance/stage
- Feedback utilisateurs

**Post-MVP (12 mois)** :
- 2 000 utilisateurs
- Monétisation (freemium 19€/mois)
- API Shopify intégrée
- Fonctionnalités avancées

### Objectifs Utilisateurs

Pour les utilisateurs, Prod'uct permet de :

1. **Gagner du temps** : 10min/jour vs 2h actuellement
2. **Prendre de meilleures décisions** : Insights IA clairs
3. **Augmenter les conversions** : +15% en moyenne (objectif)
4. **Collaborer efficacement** : 1 outil vs 5 actuellement
5. **Comprendre rapidement** : Dashboard visuel simple

---

## ⚙️ Fonctionnalités MVP V1

### 1. Authentification & Onboarding

**Features** :
- ✅ Connexion Google OAuth (signup/login)
- ✅ Avatar selection (initiale, IA presets, photo custom)
- ✅ Onboarding guidé (< 5 min)
- ✅ Team optionnelle (créer/rejoindre plus tard)

**Limites** :
- Pas d'email/password (OAuth uniquement)
- Pas de SSO entreprise
- Pas de 2FA

---

### 2. Gestion Teams

**Features** :
- ✅ Créer une équipe (nom personnalisé)
- ✅ Inviter membres par email (max 5)
- ✅ Voir liste membres
- ✅ User peut travailler solo (pas obligé de créer team)

**Limites** :
- Pas de rôles (Owner/Admin/Member) → V2
- Pas de permissions granulaires
- 1 team par utilisateur (2-3 en V2)
- 5 membres max par team

---

### 3. Gestion Produits

**Features** :
- ✅ Ajouter produit manuellement
  - Nom, description, prix
  - Image (upload)
  - Lien site web
  - Catégorie
- ✅ Liste produits (cards avec preview stats)
- ✅ Vue détail produit (graphiques + IA)
- ✅ Éditer/Supprimer produit

**Limites** :
- 3 produits max par team
- Pas d'import CSV → V2
- Pas d'API Shopify → V2
- Pas de variants produit

---

### 4. Statistiques Produit ⭐ (Core Feature)

**Features** :
- ✅ **4 graphiques** :
  1. Ventes (area chart, évolution temporelle)
  2. Conversions (donut gauge, taux %)
  3. Trafic (bar chart, visiteurs)
  4. Performance (score + radar chart)
  
- ✅ **Input manuel** des stats
  - Formulaire : date, ventes, visiteurs, conversions
  - Fréquence flexible (quotidien/hebdo/mensuel)
  
- ✅ **Upload fichiers**
  - CSV, Excel, PDF
  - Parsing automatique
  - Stockage Supabase

**Limites** :
- Pas de connexion auto Shopify/GA → V2
- Historique limité (12 mois)
- Pas d'export données

---

### 5. IA - Recommandations ⭐ (Core Feature)

**Features** :
- ✅ Analyse automatique des 4 graphiques
- ✅ Génération recommandations contextuelles :
  - Diagnostic (ex: "Conversion faible")
  - Explication (ex: "Beaucoup de trafic mais peu de ventes")
  - Action (ex: "→ Revoir pricing ou photos produit")
- ✅ Affichage sous les graphiques
- ✅ Actualisation manuelle

**IA Provider** :
- MVP V1 : **Open-source** (Llama 3 / Mistral)
- Budget : 0€ (self-hosted ou quota gratuit)
- V2 : GPT-4 / Claude (forfait premium 9€/mois)

**Limites** :
- Pas d'analyse prédictive → V2
- Pas de comparaison concurrents → V2
- 10 analyses IA/mois gratuit (éviter abus)

---

### 6. Notes & Collaboration

**Features** :
- ✅ Ajouter notes sur un produit
- ✅ Commentaires entre membres team
- ✅ To-do list actions d'amélioration
- ✅ Historique activité

**Limites** :
- Pas de mentions (@user)
- Pas de notifications push
- Pas d'assignation tâches

---

## 🚫 Hors Scope MVP V1

Features **explicitement exclues** de la V1 :

- ❌ Connexion API Shopify/WooCommerce
- ❌ Import automatique Google Analytics
- ❌ Système de paiement (freemium)
- ❌ Rôles & permissions avancés
- ❌ Notifications email/push
- ❌ Mobile app native
- ❌ Multi-langues (FR/EN uniquement)
- ❌ Comparaison concurrents
- ❌ A/B testing intégré
- ❌ Export PDF reports

---

## 📊 Métriques de Succès

### KPIs Produit (Phase Beta)

| Métrique | Objectif | Mesure |
|----------|----------|--------|
| **Inscriptions** | 100-500 users | Signup conversions |
| **Activation** | 60% complètent onboarding | Users avec ≥1 produit ajouté |
| **Engagement** | 40% weekly active | Users ajoutant stats chaque semaine |
| **Rétention D7** | 50% reviennent J+7 | Users login 7 jours après signup |
| **NPS** | > 40 | Survey in-app |
| **Time to Value** | < 10 min | Temps signup → première reco IA |

### KPIs Business (V2)

| Métrique | Objectif | Mesure |
|----------|----------|--------|
| **Conversion payant** | 5% users gratuit → premium | Après 3 mois usage |
| **MRR** | 2 000€ | 100 users × 20€/mois |
| **Churn** | < 10%/mois | Désabonnements |
| **LTV** | 240€ | 12 mois × 20€ |
| **CAC** | < 50€ | Coût acquisition user |

---

## 🎨 Principes de Design

### UX Principles

1. **Simplicité** : Interface claire, sans jargon technique
2. **Rapidité** : Dashboard en < 3 sec, analyses IA en < 10 sec
3. **Guidage** : Onboarding guidé, tooltips, empty states
4. **Feedback** : Confirmations actions, loading states
5. **Mobile-friendly** : Responsive design (desktop first)

### Visual Design

- **Style** : Moderne, épuré, SaaS professionnel
- **Couleurs** : Violet primary, bleu secondary (à définir)
- **Typo** : Inter ou similaire (à définir)
- **Charts** : Recharts avec gradients
- **Illustrations** : Avatars IA custom

---

## 🔒 Sécurité & Conformité

### Authentification

- OAuth 2.0 Google (NextAuth.js)
- Session JWT (stateless)
- Pas de stockage passwords

### Données

- RGPD compliant (consentement, suppression)
- Hébergement EU (Supabase EU)
- Chiffrement transit (HTTPS) + repos (PostgreSQL)
- Backup quotidien

### Rate Limiting

- API : 100 req/min par user
- IA : 10 analyses/mois gratuit
- Upload : 10 MB max par fichier

---

## 🛠️ Stack Technique

| Rôle | Technologie | Justification |
|------|-------------|---------------|
| **Frontend** | Next.js 15 + React | App Router, SSR, RSC |
| **Backend** | Next.js API Routes | Intégré, scalable |
| **Database** | Supabase PostgreSQL | Gratuit, dashboard, backups |
| **ORM** | Prisma | Type-safe, migrations |
| **Auth** | NextAuth.js + Google | OAuth simple, sécurisé |
| **Storage** | Supabase Storage | Fichiers CSV, images |
| **Charts** | Recharts | React-native, SVG, léger |
| **IA** | Llama 3 / Mistral | Open-source, gratuit |
| **Styling** | Tailwind CSS | Rapide, maintenable |
| **Deploy** | Vercel | Gratuit, 1-clic, Next.js optimisé |
| **CI/CD** | Git + Vercel auto-deploy | Push = deploy prod |

---

## 📅 Roadmap

### Phase 1 : Fondations (Semaine 1-2)

- [x] Architecture définie
- [ ] MD complets (00-11, A-I, U-Z)
- [ ] Maquettes Figma V1
- [ ] Setup Next.js + Prisma + Supabase

### Phase 2 : MVP Core (Semaine 3-6)

- [ ] Auth Google OAuth
- [ ] CRUD Produits
- [ ] Input stats manuel
- [ ] 4 graphiques (Recharts)
- [ ] IA recommandations (Llama 3)

### Phase 3 : Polish & Test (Semaine 7-8)

- [ ] Design final (couleurs, typo)
- [ ] Responsive mobile
- [ ] Tests utilisateurs (5-10 personnes)
- [ ] Corrections bugs

### Phase 4 : Beta Launch (Semaine 9-10)

- [ ] Déploiement Vercel production
- [ ] Landing page marketing
- [ ] 100 premiers utilisateurs beta
- [ ] Feedback loop

---

## 🎓 Objectif Académique

**Contexte** : Projet portfolio pour alternance/stage

**Démonstration** :
- ✅ Maîtrise stack moderne (Next.js, TypeScript, Prisma)
- ✅ Intégration IA (tendance 2025)
- ✅ UX/UI design (Figma → Code)
- ✅ Full-stack development
- ✅ Déploiement production (Vercel)
- ✅ Thinking produit (PRD, personas, MVP)

**Pas de pression commerciale** : Focus qualité code + UX

---

## 📝 Décisions Produit

### Pourquoi OAuth Google uniquement ?

- ✅ 0 gestion passwords (sécurité)
- ✅ Signup en 1 clic (friction minimale)
- ✅ Email vérifié automatiquement
- ❌ Exclu users sans compte Google → acceptable pour beta

### Pourquoi 3 produits max ?

- ✅ Évite over-engineering MVP
- ✅ Force focus sur produits clés
- ✅ Suffisant pour validation concept
- ✅ Limite serveur costs (gratuit)
- ❌ Frustration potentielle → gérable, expliqué clairement

### Pourquoi IA open-source ?

- ✅ Budget 0€ (important pour beta)
- ✅ Contrôle total (pas de dépendance API externe)
- ✅ Apprentissage technique (hosting IA)
- ❌ Qualité reco inférieure à GPT-4 → acceptable pour MVP

### Pourquoi pas Shopify API MVP ?

- ❌ Complexité technique (OAuth, webhooks)
- ❌ Chaque plateforme = intégration différente (Shopify, Woo, etc.)
- ✅ Input manuel = universel (tous e-commerces)
- ✅ Validera le besoin avant d'investir temps intégration

---

## 🔄 Boucle de Feedback

### Collecte Feedback

- In-app survey (NPS après 2 semaines)
- Formulaire feedback (toujours accessible)
- Interviews utilisateurs (5-10 personnes/mois)
- Analytics usage (Vercel Analytics)

### Priorisation Features V2

Critères de décision :
1. Impact utilisateur (high/medium/low)
2. Effort développement (1-5 jours)
3. Alignment stratégie (core/nice-to-have)

Formule : **Score = Impact × 10 / Effort**

---

## ✅ Validation du PRD

**Approuvé par** : [Ton nom]  
**Date** : Janvier 2026  
**Version** : 1.0

**Prochaines étapes** :
1. Compléter 01_MVP.md
2. Créer 02_PERSONAS.md
3. Designer 03_USERFLOW.md
4. Commencer développement

---

*Ce document est vivant et sera mis à jour au fil du développement.*