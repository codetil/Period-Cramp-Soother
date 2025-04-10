"use client"
 
import { useState } from "react"
import { useChat, type UseChatOptions } from "@ai-sdk/react"
 
import { cn } from "@/lib/utils"
import { Chat } from "@/components/ui/chat"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { type Message } from "@/components/ui/chat-message"
 

 
type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"]
}
 
export function ChatDemo(props: ChatDemoProps) {
  const [selectedModel, setSelectedModel] = useState()
 
  const {
    messages: uiMessages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
    setMessages,
  } = useChat({
    ...props,
    api: "/api/chat",
    body: {
      model: selectedModel,
    },
  })
 
  // Transform UIMessages to Messages by filtering out incompatible parts
  const messages = uiMessages.map(msg => ({
    ...msg,
    parts: msg.parts?.filter(part => 
      part.type === 'text' || 
      part.type === 'reasoning' || 
      part.type === 'tool-invocation' || 
      part.type === 'source'
    )
  })) as Message[]
 
  return (
    <div className={cn("flex", "flex-col", "h-[500px]", "w-full")}>
      <div className={cn("flex", "justify-end", "mb-2")}>
      </div>
 
      <Chat
        className="grow"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        setMessages={setMessages}
        suggestions={[
          "What are some effective self-care practices for women's health?",
          "How can I improve my energy levels naturally?",
          "What dietary changes can help with hormonal balance?",
        ]}
      />
    </div>
  )
}