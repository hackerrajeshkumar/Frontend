import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw, AlertTriangle, CheckCircle, ArrowUpDown } from "lucide-react"

export function CameraDiagnostics() {
  const cameras = [
    {
      id: 1,
      name: "Main Lobby",
      status: "online",
      latency: 12,
      packetLoss: 0.2,
      uptime: "99.8%",
      bandwidth: "2.4 Mbps",
      lastIssue: "None",
      storage: 84,
    },
    {
      id: 2,
      name: "Main Entrance",
      status: "online",
      latency: 15,
      packetLoss: 0.5,
      uptime: "99.5%",
      bandwidth: "2.1 Mbps",
      lastIssue: "None",
      storage: 76,
    },
    {
      id: 3,
      name: "Parking Lot",
      status: "online",
      latency: 18,
      packetLoss: 0.8,
      uptime: "98.9%",
      bandwidth: "1.8 Mbps",
      lastIssue: "Connectivity drop (2 days ago)",
      storage: 62,
    },
    {
      id: 4,
      name: "Server Room",
      status: "offline",
      latency: 0,
      packetLoss: 100,
      uptime: "82.3%",
      bandwidth: "0 Mbps",
      lastIssue: "Connection lost (4 hours ago)",
      storage: 45,
    },
    {
      id: 5,
      name: "Reception",
      status: "online",
      latency: 14,
      packetLoss: 0.3,
      uptime: "99.7%",
      bandwidth: "2.2 Mbps",
      lastIssue: "None",
      storage: 91,
    },
    {
      id: 6,
      name: "Hallway A",
      status: "degraded",
      latency: 45,
      packetLoss: 3.2,
      uptime: "94.2%",
      bandwidth: "1.2 Mbps",
      lastIssue: "High latency (ongoing)",
      storage: 58,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">System Diagnostics</h2>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <div className="font-medium">Good</div>
                  <div className="text-xs text-muted-foreground">5/6 cameras online</div>
                </div>
              </div>
              <div className="text-2xl font-bold">83%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Latency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <div className="font-medium">Good</div>
                  <div className="text-xs text-muted-foreground">Across all cameras</div>
                </div>
              </div>
              <div className="text-2xl font-bold">17ms</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Storage Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                <div>
                  <div className="font-medium">Warning</div>
                  <div className="text-xs text-muted-foreground">69% used (2.1TB/3TB)</div>
                </div>
              </div>
              <div className="text-2xl font-bold">69%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Camera Performance</CardTitle>
              <CardDescription>Monitor the performance of your camera system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Camera</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Latency</TableHead>
                      <TableHead>Packet Loss</TableHead>
                      <TableHead>Uptime</TableHead>
                      <TableHead>Bandwidth</TableHead>
                      <TableHead>Last Issue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cameras.map((camera) => (
                      <TableRow key={camera.id}>
                        <TableCell className="font-medium">{camera.name}</TableCell>
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
                          <div className="flex items-center gap-2">
                            <span>{camera.latency} ms</span>
                            {camera.latency > 30 && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span>{camera.packetLoss}%</span>
                            {camera.packetLoss > 2 && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                          </div>
                        </TableCell>
                        <TableCell>{camera.uptime}</TableCell>
                        <TableCell>{camera.bandwidth}</TableCell>
                        <TableCell>{camera.lastIssue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connectivity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Connectivity</CardTitle>
              <CardDescription>Monitor network status and connectivity issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Network Uptime</div>
                    <div className="font-medium">99.7%</div>
                  </div>
                  <Progress value={99.7} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Average Response Time</div>
                    <div className="font-medium">17ms</div>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Packet Loss Rate</div>
                    <div className="font-medium">0.8%</div>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Bandwidth Utilization</div>
                    <div className="font-medium">42%</div>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>

                <div className="rounded-md border mt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Affected Cameras</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Today, 10:42 AM</TableCell>
                        <TableCell>High Latency</TableCell>
                        <TableCell>Hallway A</TableCell>
                        <TableCell>Ongoing</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                            Warning
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Today, 8:15 AM</TableCell>
                        <TableCell>Connection Lost</TableCell>
                        <TableCell>Server Room</TableCell>
                        <TableCell>4h 27m</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-500/10 text-red-500">
                            Critical
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Yesterday, 3:22 PM</TableCell>
                        <TableCell>Packet Loss Spike</TableCell>
                        <TableCell>Parking Lot</TableCell>
                        <TableCell>12m</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            Resolved
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Storage Management</CardTitle>
              <CardDescription>Monitor storage usage and retention policies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.0 TB</div>
                      <Progress value={69} className="h-2 mt-2" />
                      <p className="text-xs text-muted-foreground mt-1">2.1 TB used (69%)</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Retention Period</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">30 Days</div>
                      <p className="text-xs text-muted-foreground mt-1">Auto-deletion enabled</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Daily Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">72 GB</div>
                      <p className="text-xs text-muted-foreground mt-1">Avg. per day</p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-lg font-medium mt-6">Camera Storage Usage</h3>
                <div className="space-y-4">
                  {cameras.map((camera) => (
                    <div key={camera.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <div>{camera.name}</div>
                        <div className="font-medium">{camera.storage}%</div>
                      </div>
                      <Progress
                        value={camera.storage}
                        className={`h-2 ${
                          camera.storage > 90 ? "bg-red-500" : camera.storage > 75 ? "bg-yellow-500" : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>View system events and error logs</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono text-xs">2023-05-09 10:42:15</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                          WARNING
                        </Badge>
                      </TableCell>
                      <TableCell>Camera: Hallway A</TableCell>
                      <TableCell>High latency detected (45ms)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">2023-05-09 08:15:32</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-500/10 text-red-500">
                          ERROR
                        </Badge>
                      </TableCell>
                      <TableCell>Camera: Server Room</TableCell>
                      <TableCell>Connection lost. Retry attempt 1 failed.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">2023-05-09 08:00:05</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          INFO
                        </Badge>
                      </TableCell>
                      <TableCell>System</TableCell>
                      <TableCell>Daily storage cleanup completed. 45GB freed.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">2023-05-09 07:30:12</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          INFO
                        </Badge>
                      </TableCell>
                      <TableCell>AI Analytics</TableCell>
                      <TableCell>AI models reloaded successfully.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">2023-05-09 07:00:00</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          INFO
                        </Badge>
                      </TableCell>
                      <TableCell>System</TableCell>
                      <TableCell>System startup completed. All services running.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">2023-05-08 23:45:18</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                          WARNING
                        </Badge>
                      </TableCell>
                      <TableCell>Storage</TableCell>
                      <TableCell>Storage usage above 65%. Consider cleanup.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline" size="sm">
                  Load More
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
