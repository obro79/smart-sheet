import { CheckCircle, AlertCircle, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusSidebarProps {
  status: string
}

export default function StatusSidebar({ status }: StatusSidebarProps) {
  const getStatusInfo = (status: string) => {
    switch (status.toLowerCase()) {
      case "ok":
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-700",
          description: "All sensors are functioning normally.",
        }
      case "good":
        return {
          icon: AlertCircle,
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-700",
          description: "Minor pressure detected. Consider repositioning soon.",
        }
      case "danger":
        return {
          icon: AlertTriangle,
          color: "text-red-500",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-700",
          description: "High pressure detected! Immediate repositioning recommended.",
        }
      default:
        return {
          icon: CheckCircle,
          color: "text-blue-500",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-700",
          description: "System status information.",
        }
    }
  }

  const statusInfo = getStatusInfo(status)
  const StatusIcon = statusInfo.icon

  return (
    <div className="p-4">
      <h2 className="font-semibold text-gray-700 mb-3">Current Status</h2>
      <div className={cn("p-4 rounded-lg border", statusInfo.bgColor, statusInfo.borderColor)}>
        <div className="flex items-center gap-3 mb-2">
          <StatusIcon className={cn("h-6 w-6", statusInfo.color)} />
          <h3 className={cn("font-bold text-lg", statusInfo.textColor)}>{status}</h3>
        </div>
        <p className="text-gray-600 text-sm">{statusInfo.description}</p>
      </div>
    </div>
  )
}

