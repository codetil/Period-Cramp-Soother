"use client"
 
import { useChat, type UseChatOptions } from "@ai-sdk/react"
 
import { transcribeAudio } from "@/lib/audio"
import { Chat } from "@/components/ui/chat"
 
type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"]
}
 
export function ChatDemo(props: ChatDemoProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
    setMessages,
  } = useChat(props)
 
  return (
    <div className="flex h-[500px] w-full">
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
        transcribeAudio={transcribeAudio}
        suggestions={[
          "Generate a tasty vegan lasagna recipe for 3 people.",
          "Generate a list of 5 questions for a job interview for a software engineer.",
          "Who won the 2022 FIFA World Cup?",
        ]}
      />
    </div>
  )
}
