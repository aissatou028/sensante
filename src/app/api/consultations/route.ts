import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }
  const consultations = await prisma.consultation.findMany({
    include: { patient: true },
    orderBy: { date: "desc" },
  });
  return NextResponse.json(consultations);
}
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const userId = parseInt((session.user as any).id);
    if (!userId || isNaN(userId)) {
      return NextResponse.json({ error: "Session invalide" }, { status: 401 });
    }
    const consultation = await prisma.consultation.create({
      data: {
        patientId: parseInt(body.patientId),
        symptomes: body.symptomes,
        notes: body.notes || null,
        statut: "en_attente",
        userId: userId,
      },
      include: { patient: true },
    });
    return NextResponse.json(consultation, { status: 201 });
  } catch (error) {
    console.error("ERREUR CREATION CONSULTATION:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
