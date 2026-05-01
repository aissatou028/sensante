import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { analyserSymptomes } from "@/lib/groq";

export async function POST(request: Request) {
  try {
    // 1. On récupère les données envoyées par le formulaire
    const body = await request.json();
    const { patientId, symptomes, notes } = body;

    // 2. APPEL À L'IA (Votre travail de Médecin)
    // On envoie les symptômes au "cerveau" groq.ts
    const analyseIA = await analyserSymptomes(symptomes);

    // 3. ENREGISTREMENT DANS LA BASE DE DONNÉES
    const consultation = await prisma.consultation.create({
      data: {
        patientId,
        symptomes,
        notes,
        // On stocke ce que l'IA a trouvé
        diagnosticIa: analyseIA.diagnostic,
        confiance: analyseIA.confiance,
        statut: "termine", // On marque comme terminé car l'IA a répondu
      },
    });

    // 4. On renvoie la consultation créée au front-end
    return NextResponse.json(consultation);
  } catch (error) {
    console.error("Erreur API Consultation:", error);
    return NextResponse.json(
      { error: "Impossible de créer la consultation" },
      { status: 500 }
    );
  }
}

// Optionnel : Ajouter une méthode GET pour voir la liste des consultations
export async function GET() {
  try {
    const consultations = await prisma.consultation.findMany({
      include: {
        patient: true, // Pour avoir le nom du patient avec la consultation
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(consultations);
  } catch (error) {
    return NextResponse.json({ error: "Erreur de récupération" }, { status: 500 });
  }
}