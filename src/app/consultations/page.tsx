"use client";
import { useState, useEffect } from "react";
import DiagnosticIA from "@/components/DiagnosticIA";

interface Patient { id: number; nom: string; prenom: string; }
interface Consultation {
  id: number;
  patient: { nom: string; prenom: string; };
  symptomes: string[];
  notes: string | null;
  statut: string;
  diagnosticIa: string | null;
  confiance: number | null;
  createdAt: string;
}

const SYMPTOMES_LISTE = [
  "Fièvre","Toux","Maux de tête","Fatigue","Douleurs abdominales",
  "Nausées","Frissons","Sueurs nocturnes","Difficultés respiratoires","Maux de gorge"
];

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [patientId, setPatientId] = useState("");
  const [symptomes, setSymptomes] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  async function charger() {
    const res = await fetch("/api/consultations");
    if (res.ok) setConsultations(await res.json());
  }
  async function chargerPatients() {
    const res = await fetch("/api/patients");
    if (res.ok) setPatients(await res.json());
  }
  useEffect(() => { charger(); chargerPatients(); }, []);

  function toggleSymptome(s: string) {
    setSymptomes(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  }

  async function soumettre() {
    if (!patientId || symptomes.length === 0) {
      setMessage("Selectionne un patient et au moins un symptome.");
      return;
    }
    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientId: parseInt(patientId), symptomes, notes }),
    });
    if (res.ok) {
      setMessage("Consultation enregistree !");
      setPatientId(""); setSymptomes([]); setNotes("");
      charger();
    } else {
      setMessage("Erreur lors de l enregistrement.");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Espace Medecin</h1>
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nouvelle Consultation</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
          <select value={patientId} onChange={e => setPatientId(e.target.value)}
            className="w-full border rounded p-2 text-gray-800">
            <option value="">-- Selectionner un patient --</option>
            {patients.map(p => (
              <option key={p.id} value={p.id}>{p.prenom} {p.nom}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Symptomes</label>
          <div className="grid grid-cols-2 gap-2">
            {SYMPTOMES_LISTE.map(s => (
              <label key={s} className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={symptomes.includes(s)}
                  onChange={() => toggleSymptome(s)} />
                {s}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)}
            className="w-full border rounded p-2 text-gray-800" rows={3} />
        </div>
        {message && <p className="mb-3 text-sm font-medium text-blue-700">{message}</p>}
        <button onClick={soumettre}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
          Enregistrer la consultation
        </button>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Gestion des Consultations</h2>
        <div className="grid gap-4">
          {consultations.map((c) => (
            <div key={c.id} className="p-4 bg-white rounded-lg shadow">
              <p className="font-bold text-gray-800">{c.patient.prenom} {c.patient.nom}</p>
              <div className="flex flex-wrap gap-1 my-1">
                {c.symptomes.map(s => (
                  <span key={s} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <p className="text-xs text-gray-400">Statut : {c.statut}</p>
              <DiagnosticIA consultationId={c.id} diagnosticExistant={c.diagnosticIa}
                confianceExistante={c.confiance} onDiagnostic={charger} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
