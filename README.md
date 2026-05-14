# SénSanté

Assistant de santé communautaire avec IA — Licence 3 GLSI — ESP/UCAD — 2025-2026

## Fonctionnalités

- Gestion des patients (14 régions du Sénégal)
- Consultations avec symptômes
- Pré-diagnostic IA via Groq API (Llama 3) avec indice de confiance et disclaimer médical
- Dashboard avec KPI, graphiques et alertes
- Authentification sécurisée (NextAuth.js)
- Conteneurisé avec Docker

## Stack technique

- Next.js 14 (App Router)
- Tailwind CSS
- Prisma + PostgreSQL
- Groq API (Llama 3)
- NextAuth.js
- Recharts
- Docker Compose

## Équipe

| Nom de guerre | Membre | Rôle |
|---|---|---|
| L'Oracle | Ndeye Maguette Niang | Intégration IA Groq |
| Le Médecin | Ndeye Coumba Ba | Interface consultations |
| Le Gardien | Cheikh Djibril Sow | Gestion patients |
| Le Bouclier | Sylla Seydina Mouhamed | Sécurité & authentification |
| L'Architecte | Aissatou Gueye | Architecture & Docker |
| Le Pilote | Mohamed Mourtada Kamara | Dashboard & livraison |

## Lancer avec Docker

### Prérequis
- Docker Desktop installé ([télécharger](https://www.docker.com/products/docker-desktop/))

### Lancement

1. Cloner le repo :
```bash
git clone https://github.com/aissatou028/sensante.git
cd sensante
```

2. Créer le fichier `.env` à la racine :
NEXTAUTH_SECRET="un-secret-aleatoire"
GROQ_API_KEY="votre-cle-groq"

3. Lancer l'application :
```bash
docker compose up --build
```

4. Créer les tables (première fois uniquement) :
```bash
docker compose exec app npx prisma db push
```

5. Ouvrir [http://localhost:3000](http://localhost:3000)

### Arrêter
```bash
docker compose down
```

### Commandes utiles
- Voir les logs : `docker compose logs app`
- Entrer dans le conteneur : `docker compose exec app sh`
- Relancer sans rebuild : `docker compose up`
- Accéder à la BDD : `docker compose exec db psql -U postgres -d sensante`