export default function IAPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Assistant IA SénSanté
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-600 mb-4">
          Analyse des symptômes en cours...
        </p>
        
        {/* Voici un remplacement manuel du composant manquant */}
        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
          <p className="text-red-700 font-bold">⚠️ Diagnostic suggéré : Paludisme</p>
          <p className="text-red-600 text-sm">Indice de confiance : 78%</p>
          <p className="text-red-800 text-xs mt-2 font-semibold">NIVEAU : URGENT</p>
        </div>
      </div>

      <div className="bg-teal-50 p-4 rounded-md text-sm text-teal-800">
        💡 <strong>Note :</strong> L'interface finale utilisera le composant AlerteIA une fois fusionné.
      </div>
    </div>
  );
}