import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export function CameraAddForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Camera</CardTitle>
        <CardDescription>Connect a new camera to the system</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="manual" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-[400px]">
            <TabsTrigger value="manual">Manual Setup</TabsTrigger>
            <TabsTrigger value="discovery">Auto Discovery</TabsTrigger>
            <TabsTrigger value="batch">Batch Import</TabsTrigger>
          </TabsList>

          <TabsContent value="manual" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="camera-name">Camera Name</Label>
                <Input id="camera-name" placeholder="e.g. Main Lobby" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-location">Location</Label>
                <Select>
                  <SelectTrigger id="camera-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="building-a">Building A</SelectItem>
                    <SelectItem value="building-b">Building B</SelectItem>
                    <SelectItem value="exterior">Exterior</SelectItem>
                    <SelectItem value="add-new">+ Add New Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-ip">IP Address</Label>
                <Input id="camera-ip" placeholder="e.g. 192.168.1.100" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-protocol">Protocol</Label>
                <Select>
                  <SelectTrigger id="camera-protocol">
                    <SelectValue placeholder="Select protocol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rtsp">RTSP</SelectItem>
                    <SelectItem value="onvif">ONVIF</SelectItem>
                    <SelectItem value="websocket">WebSocket</SelectItem>
                    <SelectItem value="http">HTTP (MJPEG)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-username">Username</Label>
                <Input id="camera-username" placeholder="Camera username" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-password">Password</Label>
                <Input id="camera-password" type="password" placeholder="Camera password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-resolution">Resolution</Label>
                <Select>
                  <SelectTrigger id="camera-resolution">
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4k">4K (3840x2160)</SelectItem>
                    <SelectItem value="1080p">Full HD (1920x1080)</SelectItem>
                    <SelectItem value="720p">HD (1280x720)</SelectItem>
                    <SelectItem value="480p">SD (854x480)</SelectItem>
                    <SelectItem value="360p">Low (640x360)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="camera-fps">Frame Rate (FPS)</Label>
                <Select>
                  <SelectTrigger id="camera-fps">
                    <SelectValue placeholder="Select frame rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 FPS</SelectItem>
                    <SelectItem value="25">25 FPS</SelectItem>
                    <SelectItem value="15">15 FPS</SelectItem>
                    <SelectItem value="10">10 FPS</SelectItem>
                    <SelectItem value="5">5 FPS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="camera-stream-url">Stream URL (Optional)</Label>
              <Input id="camera-stream-url" placeholder="e.g. rtsp://192.168.1.100:554/stream" />
              <p className="text-xs text-muted-foreground mt-1">
                Leave blank for auto-detection based on protocol and IP address
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">Advanced Settings</h3>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-ai">Enable AI Analytics</Label>
                  <p className="text-xs text-muted-foreground">Process this camera feed with AI models</p>
                </div>
                <Switch id="enable-ai" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-recording">Enable Recording</Label>
                  <p className="text-xs text-muted-foreground">Record and store camera feed</p>
                </div>
                <Switch id="enable-recording" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-audio">Enable Audio</Label>
                  <p className="text-xs text-muted-foreground">Capture audio from camera if available</p>
                </div>
                <Switch id="enable-audio" />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="discovery"
            className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Auto Discovery</h3>
              <p className="text-muted-foreground">Scan your network for ONVIF-compatible cameras</p>
              <Button>Start Scanning</Button>
            </div>
          </TabsContent>

          <TabsContent
            value="batch"
            className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Batch Import</h3>
              <p className="text-muted-foreground">Import multiple cameras from a CSV file</p>
              <div className="flex flex-col items-center gap-2">
                <Button>Upload CSV File</Button>
                <a href="#" className="text-xs text-primary underline">
                  Download CSV Template
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <div className="flex gap-2">
          <Button variant="outline">Test Connection</Button>
          <Button>Add Camera</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
