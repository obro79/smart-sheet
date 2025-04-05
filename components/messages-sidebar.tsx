import { AlertTriangle, Info } from "lucide-react"

interface Message {
  id: number
  type: "alert" | "info"
  text: string
  timestamp: string
}

interface MessagesSidebarProps {
  messages: Message[]
}

export default function MessagesSidebar({ messages }: MessagesSidebarProps) {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex-1 overflow-auto border-b">
      <div className="p-4 border-b bg-gray-50">
        <h2 className="font-semibold text-gray-700">Messages & Alerts</h2>
      </div>
      <div className="divide-y">
        {messages.map((message) => (
          <div key={message.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-3">
              {message.type === "alert" ? (
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              ) : (
                <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className={message.type === "alert" ? "font-medium text-red-700" : "font-medium text-gray-700"}>
                  {message.text}
                </p>
                <p className="text-xs text-gray-500 mt-1">{formatTime(message.timestamp)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

