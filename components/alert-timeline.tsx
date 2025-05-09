import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  PenIcon as Gun,
  User,
  Flame,
  Clock,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Play,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AlertTimeline() {
  const alerts = [
    {
      id: 1,
      type: "intrusion",
      icon: User,
      title: "Intrusion Detected",
      description: "Unauthorized person entered restricted area",
      location: "Server Room",
      camera: "Camera 12",
      time: "2 minutes ago",
      severity: "high",
      status: "unresolved",
      image: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: 2,
      type: "weapon",
      icon: Gun,
      title: "Potential Weapon",
      description: "Object resembling a weapon detected",
      location: "Main Entrance",
      camera: "Camera 3",
      time: "15 minutes ago",
      severity: "critical",
      status: "acknowledged",
      image: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: 3,
      type: "smoke",
      icon: Flame,
      title: "Smoke Detected",
      description: "Smoke or fire detected in kitchen area",
      location: "Kitchen Area",
      camera: "Camera 8",
      time: "32 minutes ago",
      severity: "medium",
      status: "resolved",
      image: "/placeholder.svg?height=720&width=1280",
    },
  ]

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Card key={alert.id}>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-64 h-48">
                <Image src={alert.image || "/placeholder.svg"} alt={alert.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-3">
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
                  <div className="mt-1 text-white text-sm">{alert.camera}</div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 bg-black/50 border-none text-white hover:bg-black/70"
                >
                  <Play className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4 flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
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

                    <div>
                      <h3 className="font-medium text-lg">{alert.title}</h3>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Badge variant="outline">{alert.location}</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{alert.time}</span>
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className={`
                            ${
                              alert.status === "unresolved"
                                ? "bg-red-500/10 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                                : alert.status === "acknowledged"
                                  ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/10 hover:text-blue-500"
                                  : "bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                            }
                          `}
                          >
                            {alert.status === "unresolved" ? (
                              <XCircle className="h-3 w-3 mr-1" />
                            ) : alert.status === "acknowledged" ? (
                              <AlertTriangle className="h-3 w-3 mr-1" />
                            ) : (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            )}
                            {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm">
                          <span className="text-teal-500 font-semibold">AI Analysis:</span>{" "}
                          {alert.type === "intrusion"
                            ? "Person wearing dark clothing entered server room at 14:32. No authorized access detected."
                            : alert.type === "weapon"
                              ? "Object with 92% similarity to handgun detected in visitor's bag at main entrance."
                              : "Smoke detected in kitchen area near the microwave. No visible flames."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Acknowledged</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                      <DropdownMenuItem>Assign to Team Member</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Export Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
