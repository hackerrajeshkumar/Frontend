import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, Play, Pause, Settings, RefreshCw } from "lucide-react"

export function CameraList() {
  const cameras = [
    {
      id: 1,
      name: "Main Lobby",
      location: "Building A",
      ip: "192.168.1.101",
      protocol: "RTSP",
      status: "online",
      resolution: "1080p",
      fps: 30,
      aiEnabled: true,
    },
    {
      id: 2,
      name: "Main Entrance",
      location: "Building A",
      ip: "192.168.1.102",
      protocol: "RTSP",
      status: "online",
      resolution: "1080p",
      fps: 30,
      aiEnabled: true,
    },
    {
      id: 3,
      name: "Parking Lot",
      location: "Exterior",
      ip: "192.168.1.103",
      protocol: "RTSP",
      status: "online",
      resolution: "1080p",
      fps: 15,
      aiEnabled: true,
    },
    {
      id: 4,
      name: "Server Room",
      location: "Building B",
      ip: "192.168.1.104",
      protocol: "RTSP",
      status: "offline",
      resolution: "720p",
      fps: 15,
      aiEnabled: false,
    },
    {
      id: 5,
      name: "Reception",
      location: "Building A",
      ip: "192.168.1.105",
      protocol: "ONVIF",
      status: "online",
      resolution: "1080p",
      fps: 30,
      aiEnabled: true,
    },
    {
      id: 6,
      name: "Hallway A",
      location: "Building A",
      ip: "192.168.1.106",
      protocol: "ONVIF",
      status: "degraded",
      resolution: "720p",
      fps: 15,
      aiEnabled: true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Camera List</CardTitle>
        <CardDescription>Manage your connected cameras and their settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Protocol</TableHead>
                <TableHead>Resolution</TableHead>
                <TableHead>FPS</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>AI</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cameras.map((camera) => (
                <TableRow key={camera.id}>
                  <TableCell className="font-medium">{camera.name}</TableCell>
                  <TableCell>{camera.location}</TableCell>
                  <TableCell>{camera.ip}</TableCell>
                  <TableCell>{camera.protocol}</TableCell>
                  <TableCell>{camera.resolution}</TableCell>
                  <TableCell>{camera.fps}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        camera.status === "online"
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                          : camera.status === "offline"
                            ? "bg-red-500/10 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                            : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500"
                      }
                    >
                      {camera.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Switch checked={camera.aiEnabled} />
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Camera
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="h-4 w-4 mr-2" />
                          Configure
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {camera.status === "online" ? (
                            <>
                              <Pause className="h-4 w-4 mr-2" />
                              Pause Stream
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Start Stream
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Test Connection
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500 focus:text-red-500">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Camera
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
