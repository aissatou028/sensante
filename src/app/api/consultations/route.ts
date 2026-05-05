import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

// GET /api/consultations : Récupère la liste des consultations
export async function GET() {
  const session = await getServerSession(authOptions);
  
  // Vérification de la sécurité
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const consultations = await prisma.consultation.findMany({
    include: {
      patient: true, // Récupère automatiquement les infos du patient lié
      user: {
        select: { nom: true, prenom: true, role: true }, // Infos de l'agent
      },
    },
    orderBy: { date: "desc" },
  });

  return NextResponse.json(consultations);
}

// POST /api/consultations : Crée une nouvelle consultation
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    // On identifie l'agent (user) qui crée la consultation via sa session
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email! },
    });

    const consultation = await prisma.consultation.create({
      data: {
        patientId: Number(body.patientId), // Conversion en nombre pour la BDD
        userId: user!.id,
        symptomes: body.symptomes, // Reçoit le tableau JSON ["Fièvre", "Toux"]
        notes: body.notes || null,
        statut: "en_attente",
      },
      include: { patient: true },
    });

    return NextResponse.json(consultation, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la création de la consultation" },
      { status: 500 }
    );
  }
}