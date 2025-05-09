import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PenIcon as Gun, User, Flame, Clock } from "lucide-react"

export function AlertSummary() {
  const alerts = [
    {
      id: 1,
      type: "intrusion",
      icon: User,
      title: "Intrusion Detected",
      location: "Server Room",
      time: "2 minutes ago",
      severity: "high",
    },
    {
      id: 2,
      type: "weapon",
      icon: Gun,
      title: "Potential Weapon",
      location: "Main Entrance",
      time: "15 minutes ago",
      severity: "critical",
    },
    {
      id: 3,
      type: "smoke",
      icon: Flame,
      title: "Smoke Detected",
      location: "Kitchen Area",
      time: "32 minutes ago",
      severity: "medium",
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">Live Alerts</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border">
              <div
                className={`
                rounded-full p-2 flex items-center justify-center
                ${
                  alert.severity === "critical"
                    ? "bg-red-500/10 text-red-500"
                    : alert.severity === "high"
                      ? "bg-orange-500/10 text-orange-500"
                      : "bg-yellow-500/10 text-yellow-500"
                }
              `}
              >
                <alert.icon className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{alert.title}</h4>
                  <Badge
                    className={`
                    ${
                      alert.severity === "critical"
                        ? "bg-red-500"
                        : alert.severity === "high"
                          ? "bg-orange-500"
                          : "bg-yellow-500"
                    }
                  `}
                  >
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{alert.location}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
