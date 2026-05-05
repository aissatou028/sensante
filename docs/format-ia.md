# Format de données pour l'IA - SénSanté

## Structure des symptômes
Les symptômes sont envoyés depuis le formulaire du Médecin sous forme de tableau JSON.

Format attendu : `["Nom du symptôme 1", "Nom du symptôme 2"]`

## Stockage
- Modèle Prisma : Consultation
- Champ : `symptomes`
- Type de données** : JSON

