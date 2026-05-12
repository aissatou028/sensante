# 1. Image de base
FROM node:20-alpine

# 2. Répertoire de travail
WORKDIR /app

# 3. Copier les fichiers de dépendances EN PREMIER
COPY package.json package-lock.json ./

# 4. Installer les dépendances
RUN npm ci

# 5. Copier le reste du code
COPY . .

# 6. Générer le client Prisma
RUN npx prisma generate

# 7. Variable temporaire pour le build
ENV GROQ_API_KEY=placeholder
ENV NEXTAUTH_SECRET=placeholder
ENV DATABASE_URL=postgresql://placeholder

# 8. Compiler Next.js
RUN npm run build

# 9. Déclarer le port
EXPOSE 3000

# 10. Démarrer
CMD ["npm", "start"]
