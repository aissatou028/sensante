# Plan Authentification — Lab Auth (v0.3)

**Responsable : Le Bouclier**
**Date de préparation : avril 2026**

---

## Objectif

Ajouter l'authentification à SénSanté : inscription, connexion, sessions et rôles.
Sans authentification, n'importe qui peut accéder aux données des patients.

---

## Bibliothèque choisie : NextAuth.js

- Site : https://next-auth.js.org
- Compatible avec Next.js App Router
- Gère les sessions, les providers (email/password, Google, etc.)
- Supporte les rôles utilisateurs

---

## Étapes prévues

### 1. Installation
```bash
npm install next-auth
```

### 2. Configuration de NextAuth
- Créer `src/app/api/auth/[...nextauth]/route.ts`
- Définir le provider CredentialsProvider (email + mot de passe)
- Connecter NextAuth à la base de données via Prisma

### 3. Modèle Prisma — Utilisateur
Ajouter un modèle `User` dans `schema.prisma` :
- id, nom, email, motDePasse (hashé), role (MEDECIN, ADMIN)

### 4. Hash du mot de passe
- Utiliser `bcrypt` pour hasher les mots de passe
- Ne jamais stocker un mot de passe en clair

### 5. Pages à créer
- `/auth/login` — formulaire de connexion
- `/auth/register` — formulaire d'inscription

### 6. Protection des routes
- Utiliser le middleware Next.js (`middleware.ts`)
- Rediriger vers `/auth/login` si non connecté

### 7. Rôles
- MEDECIN : accès aux patients et consultations
- ADMIN : accès complet

---

## Questions à clarifier avec l'équipe

- Quels rôles exactement ? (MEDECIN, ADMIN, autres ?)
- Connexion Google ou email/password uniquement ?
- Session JWT ou session base de données ?

---

## Ressources

- Doc NextAuth : https://next-auth.js.org/getting-started/introduction
- Adapter Prisma : https://authjs.dev/reference/adapter/prisma
- bcrypt : https://www.npmjs.com/package/bcrypt