# 🧠 Plan d'Intégration de l'Intelligence Artificielle — SénSanté

Responsable : L'Oracle ( [TON NOM ICI] )
Version : v0.2 (Lab Patients)

## 1. Choix Technologique
* Fournisseur : Groq (LPU Inference Engine) pour garantir une réponse quasi instantanée.
* Modèle : `llama3-8b-8192` (Équilibre parfait entre rapidité et précision médicale).
* Méthode : API REST via le SDK Groq ou Fetch.

## 2. Rôle de l'IA dans l'application
L'IA agira comme un assistant au diagnostic. Elle ne remplace pas le médecin mais l'aide à :
1. Analyser les symptômes saisis durant la consultation.
2. Suggérer des pathologies possibles basées sur les données du patient.
3. Proposer des questions complémentaires pour affiner le diagnostic.

## 3. Sécurité et Éthique
* Anonymisation : Aucune donnée nominative (Nom/Prénom) ne sera envoyée à l'API Groq. Seuls l'âge, le sexe et les symptômes seront transmis.
* Clause de non-responsabilité : Chaque réponse de l'IA sera accompagnée d'une mention précisant qu'il s'agit d'une suggestion technique et non d'une prescription médicale.

## 4. Tests de Connexion (Validation v0.2)
- [x] Création du compte Groq Cloud.
- [x] Génération de la clé API.
- [x] Test curl réussi (Communication établie avec succès).

## 5. Prochaines Étapes (Lab IA)
* Développement du "Prompt System" (Instruction pour que l'IA se comporte en expert médical).
* Intégration de l'API dans les routes Next.js de SénSanté.