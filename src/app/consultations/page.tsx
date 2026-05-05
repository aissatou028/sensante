"use client";
import { useState, useEffect } from "react";
import DiagnosticIA from "@/components/DiagnosticIA";

interface Consultation {
  id: number;
  patient: {
    nom: string;
    prenom: string;
  };
  symptomes: string[];
  notes: string | null;
  statut: string;
  diagnosticIa: string | null;
  confiance: number | null;
  createdAt: string;
}

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  async function charger() {
    const res = await fetch("/api/consultations");
    if (res.ok) {
      const data = await res.json();
      setConsultations(data);
    }
  }

  useEffect(() => {
    charger();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Espace Médecin</h1>
      </div>
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Gestion des Consultations
        </h2>
        <div className="grid gap-4">
          {consultations.map((c) => (
            <div key={c.id} className="p-4 bg-white rounded-lg shadow">
              <p className="font-bold text-gray-800">
                {c.patient.prenom} {c.patient.nom}
              </p>
              <p className="text-sm text-gray-500">
                Symptômes : {c.symptomes.join(", ")}
              </p>
              <p className="text-xs text-gray-400">Statut : {c.statut}</p>
              <DiagnosticIA
                consultationId={c.id}
                diagnosticExistant={c.diagnosticIa}
                confianceExistante={c.confiance}
                onDiagnostic={charger}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}