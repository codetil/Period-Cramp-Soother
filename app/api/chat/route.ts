import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages,
    system: "You are a wellness assistant for women's health. Provide brief advice on self-care, rest, exercise, hydration, energy, and diet. Be supportive and acknowledge individual differences.",
  });

  return result.toDataStreamResponse();
}
