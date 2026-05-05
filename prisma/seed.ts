import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log("🚀 Lancement du seed universel pour l'équipe SénSanté...");

  // 1. Utilisateur générique
  const user = await (prisma.user as any).upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      email: "equipe@sensante.sn",
      nom: "SénSanté",
      prenom: "Équipe",
      password: "password123", 
    },
  });

  // 2. Patient de test complet avec région
  const patient = await (prisma.patient as any).upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nom: "Patient",
      prenom: "Test",
      telephone: "770000000",
      dateNaissance: new Date("1990-01-01"),
      sexe: "M",
      region: "Dakar", // Ajout du champ région
    },
  });

  // 3. Consultation de test
  const consultation = await (prisma.consultation as any).create({
    data: {
      date: new Date(),
      symptomes: ["Fièvre", "Toux sèche", "Fatigue"],
      statut: "en_attente",
      patient: {
        connect: { id: patient.id }
      },
      user: {
        connect: { id: user.id }
      },
    },
  });

  console.log("✅ Succès ! Les données de test sont prêtes.");
  console.log("Rends-toi sur http://localhost:3000/consultations pour tester l'IA.");
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors du seed :", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })