"use client"
import { cn } from "@/lib/utils"

interface HeaderProps {
  activeView: string
  setActiveView: (view: string) => void
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  const navItems = ["Home", "Graph", "Messages", "Status", "About", "User Info"]

  return (
    <header className="bg-gradient-to-r from-blue-50 to-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Smart Sheet</h1>
          </div>
          <nav className="flex space-x-1 bg-white rounded-lg shadow-sm p-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveView(item)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  activeView === item
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

