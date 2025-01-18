import { useState } from "react";
import { generateResponse } from "../lib/openai";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "User", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = await generateResponse(input);
    setMessages((prev) => [...prev, { sender: "Bot", text: botResponse }]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
        <h2>Chatbot</h2>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <p key={index} style={{ textAlign: msg.sender === "User" ? "right" : "left" }}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{ flexGrow: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <button
            onClick={handleSend}
            style={{ marginLeft: "10px", padding: "8px 12px", background: "#0070f3", color: "#fff", borderRadius: "4px", border: "none" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
