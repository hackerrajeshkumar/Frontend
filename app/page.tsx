import { DashboardStats } from "@/components/dashboard-stats"
import { AlertSummary } from "@/components/alert-summary"
import { CameraPreview } from "@/components/camera-preview"
import { QuickActions } from "@/components/quick-actions"
import { SystemStatus } from "@/components/system-status"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SystemStatus />
        <DashboardStats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CameraPreview />
          <QuickActions />
        </div>
        <div className="space-y-6">
          <AlertSummary />
        </div>
      </div>
    </div>
  )
}
