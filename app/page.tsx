"use client"

import { useState } from "react"
import Header from "@/components/header"
import MainContent from "@/components/main-content"
import MessagesSidebar from "@/components/messages-sidebar"
import StatusSidebar from "@/components/status-sidebar"
import Footer from "@/components/footer"

// Mock data for messages/alerts
const mockMessages = [
  { id: 1, type: "alert", text: "Alert: Check sensor 3", timestamp: "2025-04-04T20:15:00Z" },
  { id: 2, type: "info", text: "New update available", timestamp: "2025-04-04T19:30:00Z" },
  { id: 3, type: "alert", text: "Alert: Pressure threshold exceeded", timestamp: "2025-04-04T18:45:00Z" },
  { id: 4, type: "info", text: "System calibrated successfully", timestamp: "2025-04-04T17:20:00Z" },
]

// Mock data for status
const mockStatus = { currentStatus: "Good" }

export default function Home() {
  const [activeView, setActiveView] = useState("Home")

  return (
    <div className="flex flex-col h-screen">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto">
          <MainContent activeView={activeView} />
        </div>
        <div className="w-80 flex flex-col border-l">
          <StatusSidebar status={mockStatus.currentStatus} />
          <MessagesSidebar messages={mockMessages} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

