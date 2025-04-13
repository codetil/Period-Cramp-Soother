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
    <div className={cn(
      "flex",
      "flex-col",
      "min-h-[90vh]",
      "h-[calc(100vh-12rem)]",
      "w-full",
      "max-w-full",
      "",
      "px-4",
    )}>
      <div className={cn("flex", "justify-end", "mb-2", "w-full")}>
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
          "Natural energy boosters?",
          "Self-care practices for women's health?",
          "Diet for hormonal balance?",
        ]}
      />
    </div>
  )
}