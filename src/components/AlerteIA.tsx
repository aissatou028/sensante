interface AlerteIAProps {
  diagnostic: string;
  confiance: number;
  niveau: "faible" | "moyen" | "urgent";
}

export default function AlerteIA({
  diagnostic,
  confiance,
  niveau
}: AlerteIAProps) {
  
  const couleurs = {
    faible: "border-green-500 bg-green-50",
    moyen: "border-orange-500 bg-orange-50",
    urgent: "border-red-500 bg-red-50",
  };

  return (
    <div className={`rounded-lg p-6 border-l-4 ${couleurs[niveau]}`}>
      <h3 className="font-bold text-gray-800 italic">✨ Analyse de l'Oracle IA</h3>
      <p className="mt-2 text-gray-700">{diagnostic}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-500">Confiance : {confiance}%</span>
        <span className="text-xs font-mono uppercase px-2 py-1 rounded bg-white/50">
          Niveau : {niveau}
        </span>
      </div>
      <p className="text-[10px] text-gray-400 mt-4 border-t pt-2 uppercase tracking-widest">
        Document confidentiel - SénSanté v0.1
      </p>
    </div>
  );
}