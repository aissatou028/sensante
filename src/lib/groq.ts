import Groq from "groq-sdk";

// Initialisation avec la clé que vous avez mise dans le .env
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

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
  }
}