import { AlertFilters } from "@/components/alert-filters"
import { AlertTimeline } from "@/components/alert-timeline"

export default function Alerts() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Alert Center</h1>

      <AlertFilters />
      <AlertTimeline />
    </div>
  )
}
