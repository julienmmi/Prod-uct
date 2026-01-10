# 04_FEATURES.md - Liste Complète des Fonctionnalités

## 🎯 Vue d'ensemble

Ce document détaille **toutes les fonctionnalités** de Prod'uct MVP V1, avec user stories, acceptance criteria et priorités.

**Organisation** :
- Features par module
- Priorités : P0 (Must-Have), P1 (Should-Have), P2 (Nice-to-Have)
- User stories format : "En tant que [persona], je veux [action] pour [bénéfice]"

---

## 🔐 Module 1 : Authentification

### Feature 1.1 : Connexion Google OAuth

**Priorité** : 🔴 P0 (Bloquant)

**User Story** :
> En tant qu'utilisateur, je veux me connecter avec mon compte Google en 1 clic pour éviter de créer un mot de passe.

**Acceptance Criteria** :
- [ ] Bouton "Sign up with Google" sur landing page
- [ ] Bouton "Log in with Google" sur page login
- [ ] Redirection vers Google OAuth popup
- [ ] Autorisation email, nom, photo de profil
- [ ] Création automatique User en DB si premier signup
- [ ] Session JWT créée (NextAuth)
- [ ] Redirection vers /getting-started (nouveau) ou /dashboard (récurrent)
- [ ] Message erreur si autorisation refusée
- [ ] Fonctionne sur desktop + mobile

**Spécifications Techniques** :
- NextAuth.js v5
- Google Provider configuré
- Callback URL : `/api/auth/callback/google`
- Session strategy : JWT (stateless)
- Token stocké : httpOnly cookie

**Edge Cases** :
- User refuse autorisation → Message "Autorisation nécessaire pour continuer"
- Email déjà existant → Login automatique (pas de duplication)
- Compte Google supprimé → Session invalide, forcer re-login

---

### Feature 1.2 : Onboarding Guidé

**Priorité** : 🔴 P0

**User Story** :
> En tant que nouvel utilisateur, je veux être guidé étape par étape pour configurer mon compte en moins de 5 minutes.

**Acceptance Criteria** :
- [ ] Page /getting-started accessible uniquement après signup
- [ ] Étape 1 : Sélection avatar (initiale, presets IA, photo custom)
- [ ] Étape 2 : Création team optionnelle (skip possible)
- [ ] Étape 3 : Ajout premier produit (modal auto-ouvert)
- [ ] Étape 4 : Input premières stats
- [ ] Étape 5 : Génération première analyse IA
- [ ] Progression visible (1/5, 2/5, etc.)
- [ ] Bouton "Retour" pour revenir étape précédente
- [ ] Sauvegarde automatique à chaque étape
- [ ] Redirection finale vers /dashboard avec confetti

**Spécifications Techniques** :
- State management : useState (étape actuelle)
- LocalStorage backup (éviter perte progression si refresh)
- Server Actions pour sauvegardes (pas besoin API routes)

---

### Feature 1.3 : Logout

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur, je veux me déconnecter pour sécuriser mon compte sur ordinateur partagé.

**Acceptance Criteria** :
- [ ] Bouton "Se déconnecter" dans menu utilisateur
- [ ] Confirmation modal "Êtes-vous sûr ?"
- [ ] Suppression session (NextAuth signOut)
- [ ] Redirection vers landing page
- [ ] Message confirmation "Vous êtes déconnecté"

---

## 👥 Module 2 : Gestion Teams

### Feature 2.1 : Créer une Team

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur solo, je veux créer une équipe pour inviter mes collègues à collaborer.

**Acceptance Criteria** :
- [ ] Accessible depuis : Onboarding OU Settings > Équipe
- [ ] Modal "Créer une team"
- [ ] Champ : Nom de la team (3-50 caractères)
- [ ] Validation : Nom unique par user (peut avoir "Marketing" si autre user a déjà)
- [ ] Création en DB : Team + lien User.teamId
- [ ] User devient automatiquement Owner
- [ ] Redirection vers page /teams/[id]
- [ ] Message succès "Équipe créée !"

**Spécifications Techniques** :
- Prisma : `Team { id, name, createdAt, users User[] }`
- User ne peut avoir qu'1 team à la fois (MVP)
- Validation côté serveur (Zod schema)

---

### Feature 2.2 : Inviter Membres

**Priorité** : 🟡 P1

**User Story** :
> En tant que team owner, je veux inviter des collègues par email pour collaborer sur l'analyse produits.

**Acceptance Criteria** :
- [ ] Page /teams/[id] avec bouton "Inviter membre"
- [ ] Modal avec input email
- [ ] Validation : Email valide
- [ ] Vérification : Limite 5 membres max (affichée)
- [ ] Génération token invitation unique
- [ ] Email envoyé avec lien `/invite/[token]`
- [ ] Stockage Invitation en DB (status: pending)
- [ ] Liste invitations pending visible sur page team
- [ ] Possibilité révoquer invitation

**Email Template** :
```
Sujet : Thomas t'invite à rejoindre TechCo sur Prod'uct

Salut !

Thomas t'invite à rejoindre l'équipe "TechCo" sur Prod'uct 
pour collaborer sur l'analyse de vos produits.

[Accepter l'invitation]

Ce lien expire dans 7 jours.
```

**Spécifications Techniques** :
- Email : Resend API (gratuit 100 emails/jour)
- Token : UUID v4 unique
- Expiration : 7 jours
- Lien : `/invite/[token]?email=invitee@email.com`

---

### Feature 2.3 : Rejoindre Team via Invitation

**Priorité** : 🟡 P1

**User Story** :
> En tant que membre invité, je veux rejoindre l'équipe en 1 clic depuis l'email d'invitation.

**Acceptance Criteria** :
- [ ] Clic lien email → Redirection `/invite/[token]`
- [ ] Si pas connecté : Google OAuth
- [ ] Validation token (existe, pas expiré, pas déjà utilisé)
- [ ] Création User si nouveau + lien teamId
- [ ] Update Invitation (status: accepted)
- [ ] Redirection /dashboard avec message "Bienvenue dans l'équipe [TeamName] !"
- [ ] Accès immédiat aux produits de la team

**Edge Cases** :
- Token expiré → Message "Invitation expirée, demandez une nouvelle"
- Token déjà utilisé → Message "Invitation déjà acceptée"
- User déjà dans une team → Message "Vous devez quitter votre équipe actuelle d'abord"

---

### Feature 2.4 : Voir Membres de la Team

**Priorité** : 🟡 P1

**User Story** :
> En tant que membre d'équipe, je veux voir qui fait partie de mon équipe.

**Acceptance Criteria** :
- [ ] Page /teams avec liste membres
- [ ] Affichage : Avatar, Nom, Email, Rôle (Owner/Member)
- [ ] Badge "Toi" sur son propre profil
- [ ] Bouton "Retirer" (seulement Owner, pas sur lui-même)
- [ ] Confirmation avant retrait "Êtes-vous sûr ?"

---

## 📦 Module 3 : Gestion Produits

### Feature 3.1 : Ajouter un Produit

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux ajouter un produit en 2 minutes pour commencer l'analyse.

**Acceptance Criteria** :
- [ ] Bouton "+ Ajouter un produit" sur dashboard
- [ ] Modal avec formulaire :
  - Nom * (3-100 caractères)
  - Image (upload, max 5 MB, jpg/png/webp)
  - Prix (optionnel, nombre décimal)
  - Lien site (optionnel, URL valide)
  - Catégorie (dropdown, optionnel)
- [ ] Validation temps réel (nom requis, format image, URL)
- [ ] Upload image → Supabase Storage → URL stockée en DB
- [ ] Vérification limite : Max 3 produits par team
- [ ] Message erreur si limite atteinte : "Vous avez atteint la limite de 3 produits pour le MVP"
- [ ] Sauvegarde en DB : Product lié au User/Team
- [ ] Redirection vers page produit /products/[id]
- [ ] Message succès "Produit ajouté ! Ajoutez des stats pour voir l'analyse IA"

**Spécifications Techniques** :
```typescript
// Prisma Schema
model Product {
  id          String   @id @default(cuid())
  name        String
  imageUrl    String?
  price       Decimal? @db.Decimal(10, 2)
  siteUrl     String?
  category    String?
  
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  
  teamId      String?
  team        Team?    @relation(fields: [teamId], references: [id])
  
  stats       ProductStats[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

### Feature 3.2 : Liste Produits (Dashboard)

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux voir tous mes produits en un coup d'œil pour identifier rapidement ceux à optimiser.

**Acceptance Criteria** :
- [ ] Page /dashboard affiche grid de ProductCards
- [ ] Chaque card contient :
  - Image produit (ou placeholder si pas d'image)
  - Nom produit
  - Prix
  - Stats clés : Ventes totales, Taux conversion, Score performance
  - Badge couleur : 🟢 Excellent / 🟡 Moyen / 🔴 Faible
  - Bouton "Voir détails →"
- [ ] Tri par : Performance (défaut), Nom, Date ajout
- [ ] Empty state si 0 produits : "Ajoutez votre premier produit pour commencer !"
- [ ] Compteur : "2/3 produits" affiché en haut
- [ ] Responsive : Grid 3 cols desktop, 2 cols tablet, 1 col mobile

**Design Card** :
```
┌─────────────────────────────┐
│ [Image]                      │
│                              │
│ T-shirt Tropical             │
│ 29€                          │
│                              │
│ 📈 75 ventes                 │
│ 🎯 3.2% conversion 🟢        │
│ ⭐ 7.5/10 performance        │
│                              │
│ [Voir détails →]            │
└─────────────────────────────┘
```

---

### Feature 3.3 : Vue Détail Produit

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux voir l'analyse complète de mon produit avec graphiques et recommandations IA.

**Acceptance Criteria** :
- [ ] Page /products/[id]
- [ ] Header produit : Image, Nom, Prix, Lien site (cliquable)
- [ ] Bouton "Éditer" et "Supprimer" (menu ⋮)
- [ ] Section "Statistiques" avec 4 graphiques
- [ ] Section "Recommandations IA" sous les graphiques
- [ ] Section "Notes & Actions" en bas
- [ ] Bouton "+ Ajouter des stats" visible
- [ ] Empty state si pas de stats : "Ajoutez des statistiques pour voir l'analyse"
- [ ] Loading skeleton pendant chargement data

---

### Feature 3.4 : Éditer un Produit

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur, je veux modifier les infos de mon produit si elles changent.

**Acceptance Criteria** :
- [ ] Bouton "Éditer" sur page produit (menu ⋮)
- [ ] Modal pré-rempli avec données actuelles
- [ ] Modification tous champs (nom, image, prix, lien, catégorie)
- [ ] Upload nouvelle image (remplace ancienne)
- [ ] Validation identique à création
- [ ] Sauvegarde → Update DB
- [ ] Message succès "Produit mis à jour !"

---

### Feature 3.5 : Supprimer un Produit

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur, je veux supprimer un produit qui n'existe plus pour garder une liste à jour.

**Acceptance Criteria** :
- [ ] Bouton "Supprimer" sur page produit (menu ⋮)
- [ ] Modal confirmation : "Êtes-vous sûr ? Cette action est irréversible. Toutes les stats seront supprimées."
- [ ] Input confirmation : Taper nom du produit pour confirmer
- [ ] Suppression en DB : Product + ProductStats (cascade)
- [ ] Suppression image Supabase Storage
- [ ] Redirection /dashboard
- [ ] Message succès "Produit supprimé"

---

## 📊 Module 4 : Statistiques Produit

### Feature 4.1 : Ajouter Stats Manuellement

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux rentrer mes stats en 1 minute pour voir l'analyse IA.

**Acceptance Criteria** :
- [ ] Bouton "+ Ajouter stats" sur page produit
- [ ] Modal formulaire :
  - Période (dropdown : Aujourd'hui, Cette semaine, Ce mois, Personnalisé)
  - Date début (si personnalisé)
  - Date fin (si personnalisé)
  - Nombre de ventes * (entier positif)
  - Nombre de visiteurs * (entier positif)
  - Taux conversion (auto-calculé : ventes/visiteurs × 100)
- [ ] Validation temps réel
- [ ] Aide contextuelle : "Ex: 50 ventes, 2000 visiteurs = 2.5% conversion"
- [ ] Sauvegarde DB : ProductStats
- [ ] Graphiques mis à jour immédiatement
- [ ] Trigger génération IA si pas de reco récente
- [ ] Message succès "Stats ajoutées ! L'IA analyse..."

**Spécifications Techniques** :
```typescript
model ProductStats {
  id            String   @id @default(cuid())
  productId     String
  product       Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  date          DateTime
  sales         Int
  visitors      Int
  conversionRate Decimal @db.Decimal(5, 2) // Auto-calculé
  
  createdAt     DateTime @default(now())
  
  @@index([productId, date])
}
```

---

### Feature 4.2 : Upload Fichier (CSV/Excel)

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur avancé, je veux importer mes stats depuis un fichier pour gagner du temps.

**Acceptance Criteria** :
- [ ] Bouton "Importer stats" sur page produit
- [ ] Modal upload :
  - Drag & drop zone
  - Formats acceptés : .csv, .xlsx, .pdf (extraction texte)
  - Exemple CSV affiché
  - Max 10 MB
- [ ] Parsing fichier :
  - Détection colonnes : date, ventes, visiteurs
  - Mapping intelligent (détecte "sales", "ventes", "orders")
  - Preview 5 premières lignes avant import
- [ ] Validation données (dates valides, nombres positifs)
- [ ] Bulk insert DB (optimisé)
- [ ] Progress bar "Importation... 45/150 lignes"
- [ ] Message succès "150 stats importées !"
- [ ] Graphiques mis à jour

**Exemple CSV** :
```csv
date,ventes,visiteurs
2026-01-01,5,200
2026-01-02,8,350
2026-01-03,12,420
```

**Libraries** :
- CSV parsing : papaparse
- Excel parsing : xlsx
- PDF parsing : pdf-parse

---

### Feature 4.3 : Affichage 4 Graphiques

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux voir mes stats sous forme de graphiques clairs pour comprendre rapidement la performance.

**Acceptance Criteria** :
- [ ] Section "Statistiques" sur page produit
- [ ] 4 graphiques affichés (2×2 grid desktop, stack mobile) :
  
  **1. Ventes (Area Chart)** :
  - Courbe avec gradient violet
  - Axe X : Timeline (jours/semaines/mois)
  - Axe Y : Nombre ventes
  - Header : Total ventes + % variation vs période précédente
  - Tooltip hover : Date + valeur exacte
  
  **2. Conversions (Donut Gauge)** :
  - Semi-cercle (jauge)
  - % au centre (grand)
  - Couleur dynamique : 🟢 >5%, 🟡 2-5%, 🔴 <2%
  - Label : "Taux de conversion"
  
  **3. Trafic (Bar Chart)** :
  - Barres verticales bleues
  - Axe X : Timeline
  - Axe Y : Nombre visiteurs
  - Tooltip hover
  
  **4. Performance (Radar Chart + Score)** :
  - Score /10 (grand, coloré)
  - Radar 5 axes : Ventes, Conversion, Trafic, Tendance, Potentiel
  - Badge : "Excellent 🟢" / "Moyen 🟡" / "Faible 🔴"

- [ ] Responsive design
- [ ] Loading skeleton pendant fetch data
- [ ] Empty state si pas de stats
- [ ] Export PNG de chaque graphique (optionnel P2)

**Libraries** :
- Recharts (React + SVG)
- Alternative : Chart.js

---

### Feature 4.4 : Sélecteur Période

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur, je veux changer la période affichée (7 jours, 30 jours, 12 mois) pour voir différentes tendances.

**Acceptance Criteria** :
- [ ] Dropdown au-dessus des graphiques
- [ ] Options : 7 jours, 30 jours, 3 mois, 12 mois, Tout
- [ ] Graphiques mis à jour dynamiquement
- [ ] URL query param : `?period=30d` (shareable)
- [ ] Mémorisation préférence (localStorage)

---

## 🤖 Module 5 : IA - Recommandations

### Feature 5.1 : Génération Recommandations IA

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux des recommandations IA actionnables pour savoir exactement quoi améliorer.

**Acceptance Criteria** :
- [ ] Section "Recommandations IA 🤖" sous graphiques
- [ ] Génération automatique après ajout stats
- [ ] Bouton "Actualiser recommandations" (limite 10/mois)
- [ ] Loading animation pendant génération (5-10 sec)
- [ ] Affichage 3-5 recommandations avec icônes :
  - ✅ Points forts
  - ⚠️ Alertes
  - 💡 Suggestions d'actions
- [ ] Format : Titre + Explication + Action concrète
- [ ] Timestamp "Analysé il y a 2 jours"
- [ ] Possibilité copier recommandation (bouton copy)

**Prompt IA (Llama 3)** :
```
Tu es un expert en e-commerce. Analyse ces données produit et donne 3-5 recommandations actionnables.

Produit : {product.name} - {product.price}€
Stats (derniers 30 jours) :
- Ventes : {totalSales}
- Visiteurs : {totalVisitors}
- Taux conversion : {conversionRate}%
- Tendance ventes : {trend} ({trendPercent}%)

Format de réponse :
1. [✅/⚠️/💡] Titre court
   Explication (1-2 phrases)
   → Action concrète à faire

Sois direct, positif, et actionnable. Pas de jargon technique.
```

**Spécifications Techniques** :
- IA Provider MVP : Llama 3 (self-hosted) ou Mistral API (gratuit)
- Fallback : GPT-3.5 Turbo (quota gratuit OpenAI)
- Cache recommandations 7 jours (éviter re-génération)
- Rate limit : 10 générations/mois par user

---

### Feature 5.2 : Historique Recommandations

**Priorité** : 🟢 P2

**User Story** :
> En tant qu'utilisateur, je veux voir l'historique des recommandations passées pour suivre l'évolution.

**Acceptance Criteria** :
- [ ] Onglet "Historique" dans section IA
- [ ] Liste recommandations passées avec dates
- [ ] Possibilité comparer 2 analyses
- [ ] Archive automatique après 3 mois

---

## 📝 Module 6 : Notes & Collaboration

### Feature 6.1 : Ajouter une Note

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur, je veux noter mes idées d'amélioration pour ne pas les oublier.

**Acceptance Criteria** :
- [ ] Section "Notes & Actions" sur page produit
- [ ] Bouton "+ Ajouter une note"
- [ ] Modal avec textarea (500 caractères max)
- [ ] Markdown support (gras, listes)
- [ ] Sauvegarde DB : Note liée au Product
- [ ] Affichage chronologique (plus récent en haut)
- [ ] Format : "📝 [User] (il y a 2h) : [Contenu note]"

**Spécifications Techniques** :
```typescript
model Note {
  id          String   @id @default(cuid())
  content     String   @db.Text
  
  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  
  createdAt   DateTime @default(now())
  
  @@index([productId, createdAt])
}
```

---

### Feature 6.2 : Éditer/Supprimer Note

**Priorité** : 🟢 P2

**User Story** :
> En tant qu'auteur d'une note, je veux la modifier ou supprimer si besoin.

**Acceptance Criteria** :
- [ ] Menu ⋮ sur ses propres notes (pas celles des autres)
- [ ] Option "Éditer" → Modal pré-rempli
- [ ] Option "Supprimer" → Confirmation
- [ ] Badge "(édité)" si note modifiée

---

### Feature 6.3 : Commentaires entre Membres (Team)

**Priorité** : 🟡 P1

**User Story** :
> En tant que membre d'équipe, je veux commenter les notes de mes collègues pour collaborer.

**Acceptance Criteria** :
- [ ] Bouton "Répondre" sous chaque note (si team)
- [ ] Thread de commentaires (nested replies)
- [ ] Notifications in-app (badge rouge sur bell icon)
- [ ] Format : "💬 [User] a commenté sur [Product]"

---

### Feature 6.4 : To-do List Actions

**Priorité** : 🟢 P2

**User Story** :
> En tant qu'utilisateur, je veux transformer une recommandation IA en tâche actionnable.

**Acceptance Criteria** :
- [ ] Bouton "Créer une action" sous chaque recommandation
- [ ] Modal : Titre, Description, Deadline, Assigné à (si team)
- [ ] Liste actions sur dashboard
- [ ] Checkbox pour marquer "Fait"
- [ ] Stats : "3/5 actions complétées"

---

## 🎨 Module 7 : Interface & UX

### Feature 7.1 : Dashboard

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux un dashboard clair pour voir l'essentiel en un coup d'œil.

**Acceptance Criteria** :
- [ ] URL : /dashboard (page par défaut après login)
- [ ] Header : "Bienvenue [Prénom] !" + Avatar
- [ ] Section "Mes Produits" avec grid ProductCards
- [ ] Compteur "2/3 produits"
- [ ] Bouton "+ Ajouter un produit" bien visible
- [ ] Empty state si 0 produits
- [ ] Stats globales (optionnel P2) : Total ventes, Moyenne conversion
- [ ] Responsive design

---

### Feature 7.2 : Navigation (Header/Sidebar)

**Priorité** : 🔴 P0

**User Story** :
> En tant qu'utilisateur, je veux naviguer facilement entre les pages.

**Acceptance Criteria** :
- [ ] Header fixe en haut :
  - Logo Prod'uct (lien vers /dashboard)
  - Navigation : Dashboard, Produits, Équipe (si team)
  - Menu user (avatar + dropdown) :
    - Paramètres
    - Équipe
    - Se déconnecter
- [ ] Active state sur page actuelle
- [ ] Responsive : Burger menu mobile

---

### Feature 7.3 : Settings / Paramètres

**Priorité** : 🟡 P1

**User Story** :
> En tant qu'utilisateur, je veux modifier mes paramètres de compte.

**Acceptance Criteria** :
- [ ] Page /settings
- [ ] Sections :
  - **Profil** : Avatar, Nom (modification possible)
  - **Équipe** : Voir/créer/gérer team
  - **Compte** : Email (non modifiable), Supprimer compte
- [ ] Sauvegarde automatique (toast "Enregistré !")

---

### Feature 7.4 : Supprimer Compte (RGPD)

**Priorité** : 🟡 P1 (RGPD obligatoire)

**User Story** :
> En tant qu'utilisateur, je veux supprimer mon compte et toutes mes données.

**Acceptance Criteria** :
- [ ] Bouton "Supprimer mon compte" dans Settings
- [ ] Modal confirmation avec conséquences :
  - Suppression définitive
  - Produits, stats, notes supprimés
  - Si Owner team → Team supprimée
- [ ] Input confirmation : Taper "SUPPRIMER" pour valider
- [ ] Suppression cascade en DB
- [ ] Logout automatique
- [ ] Redirection landing avec message "Compte supprimé"

---

## 🔔 Module 8 : Notifications (V2)

### Feature 8.1 : Notifications In-App

**Priorité** : 🟢 P2 (Nice-to-Have)

**User Story** :
> En tant que membre d'équipe, je veux être notifié quand un collègue commente mon produit.

**Acceptance Criteria** :
- [ ] Bell icon dans header avec badge rouge si non-lu
- [ ] Dropdown liste notifications
- [ ] Types : Nouveau commentaire, Nouvelle reco IA, Membre rejoint
- [ ] Mark as read
- [ ] Lien direct vers produit concerné

---

## 📋 Résumé Priorisation

### Must-Have (P0) - 15 features
- Auth Google OAuth
- Onboarding guidé
- CRUD Produits (Add, List, Detail)
- Input stats manuel
- 4 Graphiques
- Recommandations IA
- Dashboard
- Navigation

### Should-Have (P1) - 12 features
- Team creation/invitation
- Upload CSV
- Éditer/Supprimer produit
- Sélecteur période
- Notes collaboration
- Settings
- Supprimer compte (RGPD)

### Nice-to-Have (P2) - 8 features
- Historique reco IA
- To-do list
- Notifications
- Export graphiques
- Stats globales

---

## ✅ Validation Features

**Total features MVP V1** : 35+  
**Développement estimé** : 6-8 semaines  
**Tests utilisateurs** : 2 semaines

---

*Ce document sera mis à jour au fil du développement.*