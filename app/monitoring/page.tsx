import { CameraGrid } from "@/components/camera-grid"
import { CameraControls } from "@/components/camera-controls"

export default function Monitoring() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Live Monitoring</h1>
        <CameraControls />
      </div>

      <CameraGrid />
    </div>
  )
}
