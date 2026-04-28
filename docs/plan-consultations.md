# Planification du Module Consultation - Médecin

## 1. Champs du formulaire de consultation
Pour établir un diagnostic complet, le formulaire devra collecter :
- **Constantes vitales :** Poids (kg), Taille (cm), Température (°C), Tension artérielle.
- **Anamnèse :** Description textuelle des symptômes actuels.
- **Antécédents :** Maladies chroniques, allergies ou interventions passées.
- **Durée des symptômes :** Date de début des troubles.

## 2. Format des données pour l'IA (L'Oracle)
Pour que l'IA puisse traiter les informations, les données seront structurées au format **JSON** comme suit :
{
  "patientId": "ID_UNIQUE",
  "vitals": { "temp": 38.5, "tension": "12/8" },
  "symptoms": ["toux", "fièvre", "maux de tête"],
  "description": "Le patient présente une toux sèche depuis 3 jours."
}# Plan Consultation Médicale
