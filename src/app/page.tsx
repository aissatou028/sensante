import PatientCard from "@/components/PatientCard";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        SénSanté
      </h1>
      <p className="text-gray-600 mb-8">
        Assistant de santé communautaire avec IA
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard titre="Patients" valeur={127} unite="enregistrés" couleur="border-teal-500" />
        <StatCard titre="Consultations" valeur={43} unite="ce mois" couleur="border-orange-500" />
        <StatCard titre="Alertes IA" valeur={8} unite="urgentes" couleur="border-red-500" />
      </div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Derniers patients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PatientCard nom="Aminata Sow" region="Dakar" age={34} sexe="F" />
        <PatientCard nom="Ibrahima Ba" region="Thiès" age={45} sexe="M" />
        <PatientCard nom="Awa Diallo" region="Saint-Louis" age={28} sexe="F" />
      </div>
    </main>
  );
}