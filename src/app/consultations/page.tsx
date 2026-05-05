import ConsultationCard from "@/components/ConsultationCard";

export default function ConsultationsPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Espace Médecin</h1>
        <p className="text-gray-600 italic">Session de : Coumba BA</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Gestion des Consultations du jour
        </h2>
        
        <div className="grid gap-4">
          <ConsultationCard
            patient="Aminata Sow"
            date="18 mars 2025"
            symptomes="Fièvre, toux, fatigue"
            statut="termine" 
            diagnosticIa="Grippe Saisonnière" // AJOUT IA
            confiance={85}                   // AJOUT IA
          />
          <ConsultationCard
            patient="Ibrahima Ba"
            date="19 mars 2025"
            symptomes="Maux de tête, vertiges"
            statut="termine" 
            diagnosticIa="Migraine"           // AJOUT IA
            confiance={92}                   // AJOUT IA
          />
        </div>
      </section>
    </div>
  );
}