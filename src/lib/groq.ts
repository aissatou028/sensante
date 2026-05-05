import Groq from "groq-sdk";

 setup/oracle

// Initialisation avec la clé que vous avez mise dans le .env
 main
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

setup/oracle
const SYSTEM_PROMPT = `Tu es un assistant médical pour le Sénégal. Tu analyses les symptômes signalés par un agent de santé communautaire et tu proposes un pré-diagnostic.
Règles :
- Tu donnes un niveau de confiance entre 0 et 100.
- Tu classes l'urgence : "faible", "moyen", "urgent".
- Tu recommandes TOUJOURS de consulter un professionnel de santé.
- Tu tiens compte du contexte sénégalais (paludisme, dengue, etc.).
- Tu NE poses PAS de diagnostic définitif.
Réponds UNIQUEMENT en JSON valide :
{
  "diagnostic": "description du pré-diagnostic",
  "confiance": nombre_entre_0_et_100,
  "recommandation": "conseil pour l'agent",
  "urgence": "faible" | "moyen" | "urgent"
}`;

export async function analyserSymptomes(
  patient: {
    nom: string;
    prenom: string;
    age: number;
    sexe: string;
    region: string;
  },
  symptomes: string[],
  notes: string | null
): Promise<{
  diagnostic: string;
  confiance: number;
  recommandation: string;
  urgence: string;
}> {
  const userMessage = `Patient : ${patient.prenom} ${patient.nom}
Âge : ${patient.age} ans | Sexe : ${patient.sexe} | Région : ${patient.region}
Symptômes : ${symptomes.join(", ")}
${notes ? `Notes : ${notes}` : ""}
Propose un pré-diagnostic.`;

  const completion = await groq.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userMessage },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
    max_tokens: 500,
  });

  const response = completion.choices[0]?.message?.content || "{}";
  try {
    return JSON.parse(response);
  } catch {
    return {
      diagnostic: "Analyse impossible. Réessayez.",
      confiance: 0,
      recommandation: "Consultez un professionnel de santé.",
      urgence: "moyen",
    };

export async function analyserSymptomes(symptomes: string[]) {
  // Le "Prompt" : On explique à l'IA comment se comporter
  const prompt = `Tu es un assistant médical expert au Sénégal pour l'application SénSanté. 
  Analyse les symptômes suivants : ${symptomes.join(", ")}. 
  Donne un diagnostic probable (le nom de la maladie uniquement) et un taux de confiance (en pourcentage).
  Réponds EXCLUSIVEMENT au format JSON suivant :
  {"diagnostic": "nom de la maladie", "confiance": 85}`;

  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama3-8b-8192", // Le modèle de Llama 3
      response_format: { type: "json_object" }, // On force le format JSON
    });

    return JSON.parse(response.choices[0].message.content || "{}");
  } catch (error) {
    console.error("Erreur lors de l'analyse IA:", error);
    return { diagnostic: "Analyse indisponible", confiance: 0 };
 main
  }
}