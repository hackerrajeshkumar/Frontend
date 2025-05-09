import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import {
  Plus,
  Trash2,
  Save,
  Undo,
  Square,
  Circle,
  OctagonIcon as Polygon,
  Move,
  Pencil,
  AlertTriangle,
} from "lucide-react"

export function ZoneMapping() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Zone Mapping</h2>
          <p className="text-sm text-muted-foreground">Define restricted areas and detection zones</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Zone
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Camera View</CardTitle>
              <CardDescription>Draw zones directly on the camera feed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Select defaultValue="lobby">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select camera" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lobby">Main Lobby</SelectItem>
                      <SelectItem value="entrance">Main Entrance</SelectItem>
                      <SelectItem value="parking">Parking Lot</SelectItem>
                      <SelectItem value="server">Server Room</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Square className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Circle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-teal-500/10 text-teal-500">
                      <Polygon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Move className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-video bg-black rounded-md overflow-hidden border-2 border-teal-500">
                  <Image
                    src={`/placeholder.svg?height=720&width=1280`}
                    alt="Camera feed"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />

                  {/* Restricted Zone Polygon */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1280 720"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      points="400,200 800,200 700,500 300,500"
                      fill="rgba(255, 0, 0, 0.2)"
                      stroke="red"
                      strokeWidth="2"
                    />
                    <text x="550" y="350" fill="white" fontSize="24" fontWeight="bold">
                      Restricted Area
                    </text>

                    {/* Control points */}
                    <circle cx="400" cy="200" r="8" fill="white" stroke="red" strokeWidth="2" />
                    <circle cx="800" cy="200" r="8" fill="white" stroke="red" strokeWidth="2" />
                    <circle cx="700" cy="500" r="8" fill="white" stroke="red" strokeWidth="2" />
                    <circle cx="300" cy="500" r="8" fill="white" stroke="red" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">
                    <Undo className="h-4 w-4 mr-2" />
                    Undo
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-red-500">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Zone
                    </Button>
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Save Zone
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Zone Properties</CardTitle>
              <CardDescription>Configure the selected zone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="zone-name">Zone Name</Label>
                <Input id="zone-name" defaultValue="Server Room Restricted Area" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zone-type">Zone Type</Label>
                <Select defaultValue="restricted">
                  <SelectTrigger id="zone-type">
                    <SelectValue placeholder="Select zone type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restricted">Restricted Area</SelectItem>
                    <SelectItem value="monitoring">Monitoring Zone</SelectItem>
                    <SelectItem value="entry">Entry/Exit Point</SelectItem>
                    <SelectItem value="loitering">Anti-Loitering Zone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="alert-type">Alert Type</Label>
                <Select defaultValue="intrusion">
                  <SelectTrigger id="alert-type">
                    <SelectValue placeholder="Select alert type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="intrusion">Intrusion Alert</SelectItem>
                    <SelectItem value="loitering">Loitering Alert</SelectItem>
                    <SelectItem value="direction">Wrong Direction Alert</SelectItem>
                    <SelectItem value="crowd">Crowd Detection Alert</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="alert-severity">Alert Severity</Label>
                <Select defaultValue="high">
                  <SelectTrigger id="alert-severity">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="zone-active">Active</Label>
                  <p className="text-xs text-muted-foreground">Enable or disable this zone</p>
                </div>
                <Switch id="zone-active" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zone List</CardTitle>
              <CardDescription>Manage all defined zones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-md bg-teal-500/10 border border-teal-500">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="font-medium">Server Room Restricted Area</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-md border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>Reception Monitoring Zone</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-md border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Main Entrance Entry Point</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-md border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Parking Lot Monitoring</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 border-yellow-500">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-500">Zone Mapping Tips</h4>
                  <ul className="text-sm space-y-1 mt-1 list-disc pl-4">
                    <li>Use polygon tool for precise area definition</li>
                    <li>Avoid overlapping zones when possible</li>
                    <li>Test zones after creation to verify alerts</li>
                    <li>Consider camera angle when defining zones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
