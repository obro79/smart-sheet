import { AlertTriangle } from "lucide-react"

interface MainContentProps {
  activeView: string
}

export default function MainContent({ activeView }: MainContentProps) {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md border border-gray-100 p-6 h-full overflow-auto">
      {activeView === "Home" && (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Real Time Pressure Map Data</h2>
          <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <img
              src="/images/pressure-map-updated.png"
              alt="Real time pressure map data visualization"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {activeView === "Graph" && (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Average Pressure Map Over the Last 12 Hours</h2>
          <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-4 mb-4">
            <img
              src="/images/pressure-map-updated.png"
              alt="Average pressure map data over the last 12 hours"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-red-700 font-bold">
                Warning: Pressure on right shoulder has been high for the last 12 hours. Reposition as soon as possible.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeView === "Messages" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Messages View</h2>
          <p className="text-gray-600">Detailed message history and management will be displayed here.</p>
        </div>
      )}

      {activeView === "Status" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Status View</h2>
          <p className="text-gray-600">Detailed system status information will be displayed here.</p>
        </div>
      )}

      {activeView === "About" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">About Smart Sheet</h2>
          <p className="text-gray-600">
            The Smart Sheet Feedback System is designed to help prevent pressure injuries in at-risk individuals by
            translating sensor data into actionable feedback.
          </p>
        </div>
      )}

      {activeView === "User Info" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          <form className="space-y-6 max-w-2xl">
            <div className="space-y-2">
              <label htmlFor="participantId" className="block text-sm font-medium text-gray-700">
                Participant ID
              </label>
              <input
                type="text"
                id="participantId"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter ID assigned by research team"
              />
              <p className="text-xs text-gray-500">Essential to anonymously link sensor data to your profile.</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="mobilityStatus" className="block text-sm font-medium text-gray-700">
                Primary Mobility Status / Context
              </label>
              <select
                id="mobilityStatus"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select your mobility status</option>
                <option value="wheelchair">Wheelchair User</option>
                <option value="bedridden">Bedridden</option>
                <option value="chair">Chair-bound</option>
                <option value="other">Other</option>
              </select>
              <p className="text-xs text-gray-500">
                Helps the system suggest appropriate movements based on your situation.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="surfaceType" className="block text-sm font-medium text-gray-700">
                Type of Surface Used
              </label>
              <select
                id="surfaceType"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select surface type</option>
                <option value="wheelchair">Wheelchair Cushion</option>
                <option value="mattress">Mattress Overlay</option>
                <option value="chair">Chair Pad</option>
                <option value="insole">Shoe Insole</option>
              </select>
              <p className="text-xs text-gray-500">
                Needed to help interpret sensor data correctly for your specific surface.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="sensorPlacement"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="sensorPlacement" className="font-medium text-gray-700">
                    Confirm Standard Sensor Placement
                  </label>
                  <p className="text-gray-500">
                    I confirm that the Smart Sheet is placed in the standard orientation as instructed.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Information
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

