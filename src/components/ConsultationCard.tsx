interface ConsultationCardProps {
  patient: string;
  date: string;
  symptomes: string;
  statut: "en_attente" | "termine";
  diagnosticIa?: string; // Optionnel pour ne pas casser les anciennes cartes
  confiance?: number;    // Optionnel
}

export default function ConsultationCard({
  patient, date, symptomes, statut, diagnosticIa, confiance
}: ConsultationCardProps) {
  const statutColor = statut === "termine"
    ? "bg-green-100 text-green-700"
    : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-400">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800">
          {patient}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full ${statutColor}`}>
          {statut === "termine" ? "Terminé" : "En attente"}
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-1">{date}</p>
      <p className="text-gray-600 mt-2">{symptomes}</p>

      {/* --- BLOC IA AJOUTÉ POUR LE LAB V0.5 --- */}
      {diagnosticIa && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Analyse SénSanté AI
            </p>
          </div>
          <p className="text-sm font-semibold text-gray-900">
            Diagnostic suggéré : <span className="text-blue-700">{diagnosticIa}</span>
          </p>
          {confiance && (
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                <span>Indice de confiance</span>
                <span>{confiance}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full" 
                  style={{ width: `${confiance}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
