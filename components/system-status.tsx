import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function SystemStatus() {
  const systems = [
    { name: "Camera Network", status: "operational" },
    { name: "AI Analytics", status: "operational" },
    { name: "Database", status: "operational" },
    { name: "Storage", status: "warning" },
  ]

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-lg">System Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((system) => (
            <div key={system.name} className="flex items-center gap-2">
              {system.status === "operational" && <CheckCircle className="h-4 w-4 text-green-500" />}
              {system.status === "warning" && <AlertCircle className="h-4 w-4 text-yellow-500" />}
              {system.status === "error" && <XCircle className="h-4 w-4 text-red-500" />}
              <span>{system.name}</span>
              <Badge
                variant={system.status === "operational" ? "outline" : "default"}
                className={
                  system.status === "operational"
                    ? "bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500 ml-auto"
                    : system.status === "warning"
                      ? "bg-yellow-500 hover:bg-yellow-500 ml-auto"
                      : "bg-red-500 hover:bg-red-500 ml-auto"
                }
              >
                {system.status === "operational" ? "Operational" : system.status === "warning" ? "Warning" : "Error"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
