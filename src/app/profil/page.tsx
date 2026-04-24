export default function ProfilPage() {
  const equipe = [
    { nom: "Aissatou Gueye", role: "L'Architecte" },
    { nom: "Cheikh Djibril Sow", role: "Le Gardien" },
    { nom: "Seydina Mouhamed Sylla", role: "Le Bouclier" },
    { nom: "Ndeye Coumba Ba", role: "Le Médecin" },
    { nom: "Ndeye Maguette Niang", role: "L'Oracle" },
    { nom: "Mohamed Mourtada KAMARA", role: "Le Pilote" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Notre équipe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipe.map((membre, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500">
            <p className="font-bold text-gray-800 text-lg">{membre.nom}</p>
            <p className="text-teal-600 mt-1">{membre.role}</p>
            <p className="text-gray-400 text-sm mt-1">L3 GLSI — ESP/UCAD</p>
          </div>
        ))}
      </div>
    </div>
  );
}