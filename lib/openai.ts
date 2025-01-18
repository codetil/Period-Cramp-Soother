import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Use an environment variable
});

const openai = new OpenAIApi(configuration);

export const generateResponse = async (message: string) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    return response.data.choices[0].message?.content || "Sorry, I couldn't understand.";
  } catch (error) {
    console.error("Error generating response:", error);
    return "Error communicating with chatbot.";
  }
}; 