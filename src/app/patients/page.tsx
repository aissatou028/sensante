"use client";

import { useEffect, useState } from "react";
import PatientForm from "@/components/PatientForm";

interface Patient {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  sexe: string;
  telephone: string | null;
  adresse: string | null;
  region: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  async function chargerPatients() {
    const res = await fetch("/api/patients");
    const data = await res.json();
    if (Array.isArray(data)) {
      setPatients(data);
    } else {
      setPatients([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    chargerPatients();
  }, []);

  function calculerAge(dateNaissance: string): number {
    const naissance = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - naissance.getFullYear();
    const m = today.getMonth() - naissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < naissance.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Patients
      </h1>
      <PatientForm onSuccess={chargerPatients} />
      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-4">
        Liste des patients ({patients.length})
      </h2>
      {loading ? (
        <p className="text-gray-500">Chargement...</p>
      ) : patients.length === 0 ? (
        <p className="text-gray-500">Aucun patient enregistre.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-gray-800">
                {p.prenom} {p.nom}
              </h3>
              <p className="text-gray-600">Region : {p.region}</p>
              <p className="text-gray-600">Age : {calculerAge(p.dateNaissance)} ans</p>
              <p className="text-gray-600">Sexe : {p.sexe}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
