# 05_BUSINESS_METRICS.md - KPIs et Métriques Business

## 🎯 Vue d'ensemble

Ce document définit **tous les indicateurs de performance** pour mesurer le succès de Prod'uct durant la phase beta et au-delà.

**Objectif** : Valider Product-Market Fit avant de monétiser.

---

## 📊 Phase Beta (6 mois) - Métriques Clés

### 1. Acquisition

**Objectif** : Valider l'intérêt pour le produit

| Métrique | Définition | Objectif 6 mois | Mesure |
|----------|------------|-----------------|--------|
| **Signups** | Nombre d'inscriptions totales | 100-500 users | Google OAuth callbacks |
| **Sources trafic** | D'où viennent les users | - LinkedIn: 30%<br>- Product Hunt: 20%<br>- Direct: 20%<br>- Organic: 15%<br>- Autres: 15% | UTM tracking |
| **Taux conversion landing** | Visiteurs → Signups | 5-10% | Landing visits / Signups |
| **CAC (Cost per Acquisition)** | Coût acquisition user | 0€ (organique) | Dépenses marketing / Signups |

**Dashboard** :
```
┌─────────────────────────────────────┐
│ Acquisition (30 derniers jours)     │
├─────────────────────────────────────┤
│ 📈 Nouveaux users    : 42           │
│ 👥 Total users       : 287          │
│ 🎯 Conversion landing : 7.3%        │
│                                     │
│ Sources :                           │
│ • LinkedIn     : 15 (36%)           │
│ • Product Hunt : 8 (19%)            │
│ • Direct       : 10 (24%)           │
│ • Organic      : 9 (21%)            │
└─────────────────────────────────────┘
```

---

### 2. Activation

**Objectif** : Users complètent l'onboarding et trouvent de la valeur

| Métrique | Définition | Objectif | Mesure |
|----------|------------|----------|--------|
| **Activation Rate** | % users qui complètent onboarding | 60% | Users avec ≥1 produit + stats |
| **Time to Value** | Temps signup → première reco IA | < 10 min | Timestamp signup → première IA |
| **Onboarding completion** | % terminent les 5 étapes | 70% | Users arrivant au dashboard |
| **Drop-off par étape** | Où les users abandonnent | < 20%/étape | Analytics onboarding |

**Étapes Onboarding** :
1. Google OAuth → 95% completion (5% refusent autorisation)
2. Avatar selection → 92% (8% skip)
3. Team setup → 75% (25% skip, normal)
4. Premier produit → 80% (20% abandonnent ici ⚠️)
5. Premières stats → 70% (30% abandonnent)
6. Dashboard final → 60% ✅ Objectif atteint

**Actions si < 60%** :
- Simplifier formulaire produit (moins de champs)
- Ajouter plus d'exemples/tooltips
- Vidéo explicative 1min

---

### 3. Engagement

**Objectif** : Users utilisent activement le produit

| Métrique | Définition | Objectif | Mesure |
|----------|------------|----------|--------|
| **DAU (Daily Active Users)** | Users connectés/jour | 15-20% total | Logins quotidiens |
| **WAU (Weekly Active Users)** | Users connectés/semaine | 40-50% total | Logins hebdo |
| **MAU (Monthly Active Users)** | Users connectés/mois | 70-80% total | Logins mensuels |
| **Session duration** | Temps moyen par session | 5-10 min | Analytics |
| **Sessions/week** | Fréquence utilisation | 2-3× | User sessions |
| **Features usage** | % users utilisant chaque feature | - Ajout produit: 80%<br>- Stats manuelles: 60%<br>- Upload CSV: 15%<br>- IA reco: 90%<br>- Team collab: 25%<br>- Notes: 40% | Feature flags |

**Définition "Actif"** :
- Login + consultation ≥1 produit
- OU ajout stats
- OU génération reco IA

**Dashboard Engagement** :
```
┌─────────────────────────────────────┐
│ Engagement (Cette semaine)          │
├─────────────────────────────────────┤
│ 👥 WAU         : 125 / 287 (44%)    │
│ 📊 DAU moyen   : 18 / 287 (6%)      │
│ ⏱️ Session moy : 7min 32s            │
│ 🔄 Sessions/sem : 2.4                │
│                                     │
│ Top actions :                       │
│ • Vue graphiques    : 450×          │
│ • Reco IA générées  : 89×           │
│ • Stats ajoutées    : 67×           │
│ • Produits ajoutés  : 23×           │
└─────────────────────────────────────┘
```

---

### 4. Rétention

**Objectif** : Users reviennent dans le temps

| Métrique | Définition | Objectif | Mesure |
|----------|------------|----------|--------|
| **D1 Retention** | % reviennent J+1 | 40% | Logins J+1 / Signups |
| **D7 Retention** | % reviennent J+7 | 50% | Logins J+7 / Signups |
| **D30 Retention** | % reviennent J+30 | 30% | Logins J+30 / Signups |
| **Churn mensuel** | % users inactifs >30j | < 40% | Users sans login 30j |
| **Cohort analysis** | Rétention par cohorte signup | Tracking | Tableau cohortes |

**Courbe Rétention Idéale** :
```
100% │█
     │ █
 80% │  █
     │   █
 60% │    █
     │     ██
 40% │       ███
     │          ████
 20% │              ████████████
     │
  0% └─────────────────────────────
     D0  D1  D7  D14  D30  D60  D90
```

**Objectif** : Courbe se stabilise à 30% après D30

**Actions si rétention < 30% D30** :
- Email reminders "Vos produits vous attendent !"
- Notifications nouvelles reco IA
- Identifier pourquoi users partent (exit surveys)

---

### 5. Satisfaction

**Objectif** : Users aiment le produit

| Métrique | Définition | Objectif | Mesure |
|----------|------------|----------|--------|
| **NPS (Net Promoter Score)** | "Recommanderiez-vous Prod'uct ?" | > 40 | Survey in-app (après 2 sem) |
| **CSAT (Customer Satisfaction)** | "Êtes-vous satisfait ?" | > 4/5 | Survey après usage feature |
| **Feedback positif** | Commentaires qualitatifs | > 70% positifs | In-app feedback form |
| **Feature requests** | Suggestions amélioration | Tracking | Feedback categorization |

**NPS Calculation** :
```
Score 0-6  : Detractors (détracteurs)
Score 7-8  : Passives (neutres)
Score 9-10 : Promoters (promoteurs)

NPS = (% Promoters) - (% Detractors)

Exemple:
- 50% Promoters
- 30% Passives
- 20% Detractors
→ NPS = 50 - 20 = 30
```

**Objectif NPS > 40** = Excellent pour MVP

**Survey Questions** :
1. "Sur une échelle de 0 à 10, recommanderiez-vous Prod'uct à un collègue ?" (NPS)
2. "Quelle feature vous a le plus aidé ?" (Qualitative)
3. "Que devrions-nous améliorer en priorité ?" (Roadmap)

---

### 6. Référence (Product-Market Fit)

**Objectif** : Mesurer l'adéquation produit-marché

| Métrique | Définition | Objectif | Mesure |
|----------|------------|----------|--------|
| **PMF Score** | "Seriez-vous très déçu si Prod'uct n'existait plus ?" | > 40% "Très déçu" | Survey Superhuman |
| **Organic growth** | % signups sans marketing payant | > 60% | Source tracking |
| **Word-of-mouth** | Invitations team envoyées | 0.5/user | Team invites |
| **Return rate** | % users revenant après 1 mois | > 30% | D30+ logins |

**Sean Ellis PMF Test** :
> "Comment vous sentiriez-vous si vous ne pouviez plus utiliser Prod'uct ?"
> - Très déçu(e) ← 40%+ = PMF atteint ✅
> - Plutôt déçu(e)
> - Pas déçu(e)
> - N/A (plus utilisateur)

---

## 📈 Dashboards Analytics

### Dashboard 1 : Vue d'ensemble (Hebdomadaire)

```
┌──────────────────────────────────────────────────────────┐
│ 📊 PROD-UCT ANALYTICS - Semaine 23 (3-9 Juin 2026)      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ ACQUISITION                    ACTIVATION                │
│ 📈 Signups       : 18 (+12%)   ✅ Activated : 12 (67%)   │
│ 👥 Total users   : 342         ⏱️ Time to Value: 8min    │
│ 🌐 Top source    : LinkedIn    📉 Drop-off : Étape 4     │
│                                                           │
│ ENGAGEMENT                     RÉTENTION                 │
│ 🔥 WAU         : 152 (44%)     📅 D7 Ret : 54%           │
│ ⏰ Session moy : 7min 18s       📅 D30 Ret: 32%          │
│ 🔄 Sessions/sem : 2.6×          🚪 Churn   : 38%         │
│                                                           │
│ SATISFACTION                                             │
│ ⭐ NPS         : 42 (Excellent) 😊 CSAT   : 4.2/5        │
│ 💬 Feedback    : 23 responses  ✅ PMF     : 45% "Très    │
│                                           déçu"          │
└──────────────────────────────────────────────────────────┘
```

---

### Dashboard 2 : Funnel Acquisition → Rétention

```
Landing Page Visits
      ↓ 7.3%
   Signups (342)
      ↓ 67%
   Activated (229)
      ↓ 54%
   D7 Active (124)
      ↓ 59%
   D30 Active (73)
      ↓ 42%
   D90 Active (31)
```

---

### Dashboard 3 : Feature Adoption

```
┌────────────────────────────────────────┐
│ Feature Usage (% users activés)        │
├────────────────────────────────────────┤
│ ████████████████████ 90% Reco IA       │
│ ████████████████ 80% Ajout produit     │
│ ████████████ 60% Stats manuelles       │
│ ████████ 40% Notes                     │
│ █████ 25% Team collab                  │
│ ███ 15% Upload CSV                     │
└────────────────────────────────────────┘
```

---

## 💰 Phase Post-MVP (12 mois) - Métriques Business

### 7. Monétisation

**Objectif** : Convertir users gratuits en payants

| Métrique | Définition | Objectif An 1 | Mesure |
|----------|------------|---------------|--------|
| **Conversion Free → Paid** | % users passant au plan payant | 5% | Subscriptions / Total users |
| **MRR (Monthly Recurring Revenue)** | Revenu mensuel récurrent | 2 000€ | Sum(subscriptions) |
| **ARPU (Average Revenue Per User)** | Revenu moyen/user | 20€/mois | MRR / Paying users |
| **Churn payant** | % users annulant abonnement | < 10%/mois | Cancellations / Subscribers |
| **LTV (Lifetime Value)** | Valeur vie client | 240€ | ARPU × Avg lifetime (12 mois) |
| **CAC (Cost Acquisition Customer)** | Coût acquisition | < 50€ | Marketing spend / New customers |
| **LTV/CAC Ratio** | Rentabilité acquisition | > 3:1 | LTV / CAC |

**Pricing Tiers (Futur V2)** :
```
FREE (Gratuit)
├─ 3 produits max
├─ 5 membres max
├─ 10 reco IA/mois
└─ Stats manuelles

PRO (19€/mois)
├─ Produits illimités
├─ 10 membres
├─ 50 reco IA/mois
├─ Upload CSV
└─ Export PDF

TEAM (49€/mois)
├─ Produits illimités
├─ Membres illimités
├─ Reco IA illimitées
├─ API Shopify
├─ Support prioritaire
└─ White-label (optionnel)
```

---

### 8. Croissance

**Objectif** : Scalabilité du produit

| Métrique | Définition | Objectif An 1 | Mesure |
|----------|------------|---------------|--------|
| **Total users** | Base utilisateurs totale | 2 000 | Signups cumulés |
| **Paying users** | Abonnés payants | 100 (5%) | Active subscriptions |
| **MRR Growth** | Croissance MRR mensuelle | +15%/mois | MRR(t) / MRR(t-1) |
| **Virality (K-factor)** | Nb invitations/user | 0.5+ | Invites sent / Users |
| **Organic vs Paid** | % croissance organique | > 60% | Non-paid signups % |

---

## 🎯 OKRs (Objectives & Key Results)

### Q1 2026 (Beta Launch)

**Objective** : Valider Product-Market Fit

**Key Results** :
- [ ] 100 signups en 3 mois
- [ ] 60% activation rate
- [ ] 40% D7 retention
- [ ] NPS > 35

---

### Q2 2026 (Scaling Beta)

**Objective** : Prouver engagement et rétention

**Key Results** :
- [ ] 300 total users
- [ ] 40% WAU
- [ ] 30% D30 retention
- [ ] 40% PMF score ("Très déçu")

---

### Q3 2026 (Pre-Monetization)

**Objective** : Préparer monétisation

**Key Results** :
- [ ] 500 total users
- [ ] 50% WAU
- [ ] 35% D30 retention
- [ ] NPS > 45
- [ ] Feature requests analyzed → Roadmap V2

---

### Q4 2026 (Monetization)

**Objective** : Lancer plans payants

**Key Results** :
- [ ] 1 000 total users
- [ ] 5% conversion Free → Paid (50 paying users)
- [ ] 1 000€ MRR
- [ ] < 15% churn payant

---

## 📊 Tools & Stack Analytics

| Besoin | Outil | Justification |
|--------|-------|---------------|
| **Web Analytics** | Vercel Analytics (gratuit) | Intégré Next.js, RGPD-friendly |
| **Product Analytics** | PostHog (self-hosted gratuit) | Events tracking, funnels, retention |
| **Error Tracking** | Sentry (gratuit 5k events/mois) | Monitoring bugs production |
| **User Feedback** | Typeform (gratuit) | NPS surveys, feedback forms |
| **Dashboards** | Metabase (self-hosted) | Connect Supabase, custom dashboards |

**Alternative payante (si budget)** : Mixpanel (50€/mois)

---

## 🎨 Dashboard Visuel (Metabase)

### Setup
1. Install Metabase (Docker)
2. Connect Supabase PostgreSQL
3. Créer questions SQL
4. Assembler dashboards

### Queries Exemples

**Signups par semaine** :
```sql
SELECT 
  DATE_TRUNC('week', "createdAt") as week,
  COUNT(*) as signups
FROM "User"
GROUP BY week
ORDER BY week DESC
LIMIT 12;
```

**Activation Rate** :
```sql
SELECT 
  COUNT(CASE WHEN "Product"."userId" IS NOT NULL THEN 1 END)::float / 
  COUNT("User"."id") * 100 as activation_rate
FROM "User"
LEFT JOIN "Product" ON "User"."id" = "Product"."userId";
```

**D7 Retention** :
```sql
WITH cohort AS (
  SELECT 
    "id",
    "createdAt"::date as signup_date
  FROM "User"
)
SELECT 
  COUNT(DISTINCT CASE 
    WHEN "Session"."createdAt"::date BETWEEN 
      cohort.signup_date + 6 AND cohort.signup_date + 8 
    THEN cohort."id" 
  END)::float / COUNT(DISTINCT cohort."id") * 100 as d7_retention
FROM cohort
LEFT JOIN "Session" ON cohort."id" = "Session"."userId";
```

---

## ✅ Success Criteria MVP

Le MVP est considéré **réussi** si après 6 mois :

- ✅ **100-500 signups**
- ✅ **60% activation rate**
- ✅ **40% WAU**
- ✅ **30% D30 retention**
- ✅ **NPS > 40**
- ✅ **PMF > 40%** ("Très déçu")

Si ces critères sont atteints → **Go pour monétisation V2** 🚀

---

*Ce document sera mis à jour mensuellement avec les chiffres réels.*