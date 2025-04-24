"use client"

import { useEffect, useState } from "react"
import { Bot, MessageSquare, Zap } from "lucide-react"

// Support both array of messages and single string
type MessagesInput = Message[] | string

interface Message {
  type: "question" | "answer"
  text: string
  sources?: string[]
}

interface SequentialTypingEffectProps {
  messages: MessagesInput
  className?: string
  delay?: number
  typingSpeed?: number
  pauseBetweenMessages?: number
  showZap?: boolean
}

export function SequentialTypingEffect({
  messages,
  className,
  delay = 0,
  typingSpeed = 50,
  pauseBetweenMessages = 1000,
  showZap = true
}: SequentialTypingEffectProps) {
  // Convert single string to message array if needed
  const messageArray: Message[] = typeof messages === 'string' 
    ? [{ type: "answer", text: messages }] 
    : messages

  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showSources, setShowSources] = useState<boolean[]>(Array(messageArray.length).fill(false))
  const [showCompletionIcon, setShowCompletionIcon] = useState<boolean[]>(Array(messageArray.length).fill(false))

  // Start the initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Handle the typing effect
  useEffect(() => {
    if (!isTyping || currentMessageIndex >= messageArray.length) return

    const currentMessage = messageArray[currentMessageIndex]
    
    if (currentCharIndex < currentMessage.text.length) {
      // Still typing the current message
      const timeout = setTimeout(() => {
        setDisplayedMessages(prev => {
          const updated = [...prev]
          if (!updated[currentMessageIndex]) {
            updated[currentMessageIndex] = { ...currentMessage, text: "" }
          }
          updated[currentMessageIndex].text = currentMessage.text.substring(0, currentCharIndex + 1)
          return updated
        })
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      // Current message is complete
      if (currentMessage.type === "answer") {
        // Show completion icon
        const completionTimer = setTimeout(() => {
          setShowCompletionIcon(prev => {
            const updated = [...prev]
            updated[currentMessageIndex] = true
            return updated
          })
          
          // Then show sources after a brief delay
          if (currentMessage.sources) {
            const sourcesTimer = setTimeout(() => {
              setShowSources(prev => {
                const updated = [...prev]
                updated[currentMessageIndex] = true
                return updated
              })
              
              // Move to next message after sources are shown
              const nextMessageTimer = setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1)
                setCurrentCharIndex(0)
              }, pauseBetweenMessages)
              
              return () => clearTimeout(nextMessageTimer)
            }, 300)
            
            return () => clearTimeout(sourcesTimer)
          } else {
            // Move to next message if no sources
            const nextMessageTimer = setTimeout(() => {
              setCurrentMessageIndex(prev => prev + 1)
              setCurrentCharIndex(0)
            }, pauseBetweenMessages)
            
            return () => clearTimeout(nextMessageTimer)
          }
        }, 250)
        
        return () => clearTimeout(completionTimer)
      } else {
        // For questions, just move to the next message
        const timer = setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1)
          setCurrentCharIndex(0)
        }, pauseBetweenMessages * 0.5) // Shorter pause after questions
        
        return () => clearTimeout(timer)
      }
    }
  }, [currentMessageIndex, currentCharIndex, isTyping, messageArray, typingSpeed, pauseBetweenMessages])

  return (
    <div className={`space-y-4 ${className}`}>
      {displayedMessages.map((message, index) => (
        <div key={index} className="flex gap-4">
          <div className={message.type === "question" 
            ? "bg-muted p-3 rounded-lg text-muted-foreground" 
            : "bg-primary p-3 rounded-lg text-primary-foreground max-h-12"
          }>
            {message.type === "question" ? (
              <MessageSquare className="h-5 w-5" />
            ) : (
              <Bot className="h-5 w-5" />
            )}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-start">
              <p className={message.type === "question" ? "font-medium" : ""}>
                {message.text}
                {currentMessageIndex === index && currentCharIndex < messageArray[index].text.length && (
                  <span className="border-r-2 border-primary animate-blink">&nbsp;</span>
                )}
                {showZap && message.type === "answer" && showCompletionIcon[index] && (
                  <span className="text-amber-500 inline-flex animate-pulse-fade-in ml-2">
                    <Zap className="h-5 w-5" />
                  </span>
                )}
              </p>
            </div>
            
            {message.sources && showSources[index] && (
              <div className="text-sm text-muted-foreground animate-fade-in">
                <p>
                  Sources:{" "}
                  {message.sources.map((source, sourceIndex) => (
                    <span key={sourceIndex}>
                      <span className="text-primary underline cursor-pointer">{source}</span>
                      {sourceIndex < message.sources!.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}