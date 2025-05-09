import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, FileText, Camera, RefreshCw } from "lucide-react"

export function QuickActions() {
  const actions = [
    { name: "Add Camera", icon: Camera },
    { name: "View Alerts", icon: Bell },
    { name: "Generate Report", icon: FileText },
    { name: "Refresh Feeds", icon: RefreshCw },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => (
            <Button key={action.name} variant="outline" className="h-auto flex flex-col items-center gap-2 py-4">
              <action.icon className="h-6 w-6 text-teal-500" />
              <span>{action.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
