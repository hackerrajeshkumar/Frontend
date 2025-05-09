import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { AlertTriangle, RefreshCw, Save, Download, Upload } from "lucide-react"

export function FaceSettings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Face Recognition Settings</h2>
          <p className="text-sm text-muted-foreground">Configure face recognition parameters and behavior</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="model">Model Settings</TabsTrigger>
          <TabsTrigger value="alerts">Alert Configuration</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic face recognition settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-face-recognition">Enable Face Recognition</Label>
                  <p className="text-xs text-muted-foreground">
                    Turn on/off face recognition across all cameras
                  </p>
                </div>
                <Switch id="enable-face-recognition" defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="recognition-mode">Recognition Mode</Label>
                <Select defaultValue="continuous">
                  <SelectTrigger id="recognition-mode">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="continuous">Continuous (Real-time)</SelectItem>
                    <SelectItem value="on-demand">On-Demand</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="event-triggered">Event Triggered</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  How and when face recognition is performed
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cameras">Cameras for Face Recognition</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="cameras">
                    <SelectValue placeholder="Select cameras" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cameras</SelectItem>
                    <SelectItem value="entrance">Entrance Cameras Only</SelectItem>
                    <SelectItem value="interior">Interior Cameras Only</SelectItem>
                    <SelectItem value="custom">Custom Selection</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Which cameras will perform face recognition
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="min-face-size">Minimum Face Size (pixels)</Label>
                <Slider id="min-face-size" defaultValue={[60]} min={20} max={200} step={5} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>20px (Far)</span>
                  <span>60px</span>
                  <span>200px (Close)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum size of face required for detection and recognition
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-attendance">Enable Attendance Tracking</Label>
                  <p className="text-xs text-muted-foreground">
                    Use face recognition for automatic attendance
                  </p>
                </div>
                <Switch id="enable-attendance" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-watchlist">Enable Watchlist Alerts</Label>
                  <p className="text-xs text-muted-foreground">
                    Generate alerts when watchlist faces are detected
                  </p>
                </div>
                <Switch id="enable-watchlist" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-unknown">Alert on Unknown Faces</Label>
                  <p className="text-xs text-muted-foreground">
                    Generate alerts when unrecognized faces are detected
                  </p>
                </div>
                <Switch id="enable-unknown" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="model" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recognition Model Settings</CardTitle>
              <CardDescription>Configure face recognition model parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="model-type">Recognition Model</Label>
                <Select defaultValue="advanced">
                  <SelectTrigger id="model-type">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (Faster, Less Accurate)</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="advanced">Advanced (Slower, More Accurate)</SelectItem>
                    <SelectItem value="custom">Custom Model</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Face recognition algorithm to use
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="match-threshold">Match Threshold ({85}%)</Label>
                <Slider id="match-threshold" defaultValue={[85]} min={50} max={100} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>50% (More Matches)</span>
                  <span>85%</span>
                  <span>100% (Exact Match)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum similarity score required for a positive match
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="detection-frequency">Detection Frequency</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="detection-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Every frame</SelectItem>
                    <SelectItem value="5">Every 5 frames</SelectItem>
                    <SelectItem value="10">Every 10 frames</SelectItem>
                    <SelectItem value="30">Every 30 frames</SelectItem>
                    <SelectItem value="60">Every 60 frames</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  How often to run face detection on camera frames
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-liveness">Enable Liveness Detection</Label>
                  <p className="text-xs text-muted-foreground">
                    Detect if the face is from a real person vs. a photo
                  </p>
                </div>
                <Switch id="enable-liveness" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-mask-detection">Mask Detection</Label>
                  <p className="text-xs text-muted-foreground">
                    Detect if person is wearing a face mask
                  </p>
                </div>
                <Switch id="enable-mask-detection" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-age-gender">Age & Gender Estimation</Label>
                  <p className="text-xs text-muted-foreground">
                    Estimate age and gender of detected faces
                  </p>
                </div>
                <Switch id="enable-age-gender" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="custom-model">Custom Model Path (Optional)</Label>
                <Input id="custom-model" placeholder="/path/to/custom/model" />
                <p className="text-xs text-muted-foreground">
                  Path to custom face recognition model
                </p>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Custom Model
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Current Model
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert Configuration</CardTitle>
              <CardDescription>Configure face recognition alert settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="alert-types">Alert Types</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="alert-watchlist" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-4 h-4 rounded-sm border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-sm"></div>
                      </div>
                      <span>Watchlist Match</span>
                    </Label>
                    <Select defaultValue="critical">
                      <SelectTrigger id="alert-watchlist" className="w-[140px]">
                        <SelectValue placeholder="Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="alert-unknown" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-4 h-4 rounded-sm border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-sm"></div>
                      </div>
                      <span>Unknown Face</span>
                    </Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="alert-unknown" className="w-[140px]">
                        <SelectValue placeholder="Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="alert-restricted" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-4 h-4 rounded-sm border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-sm"></div>
                      </div>
                      <span>Unauthorized in Restricted Area</span>
                    </Label>
                    <Select defaultValue="high">
                      <SelectTrigger id="alert-restricted" className="w-[140px]">
                        <SelectValue placeholder="Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="alert-attendance" className="flex items-center gap-2 cursor-pointer">
                      <div className="w-4 h-4 rounded-sm border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-sm"></div>
                      </div>
                      <span>Attendance Events</span>
                    </Label>
                    <Select defaultValue="low">
                      <SelectTrigger id="alert-attendance" className="w-[140px]">
                        <SelectValue placeholder="Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="alert-cooldown">Alert Cooldown Period (seconds)</Label>
                <Slider id="alert-cooldown" defaultValue={[60]} min={0} max={300} step={5} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0s</span>
                  <span>60s</span>
                  <span>300s</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum time between repeated alerts for the same person
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-snapshot">Include Face Snapshot</Label>
                  <p className="text-xs text-muted-foreground">
                    Attach face image to alert notifications
                  </p>
                </div>
                <Switch id="enable-snapshot" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-sms">SMS Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Send SMS for critical face recognition alerts
                  </p>
                </div>
                <Switch id="enable-sms" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-email">Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Send email for face recognition alerts
                  </p>
                </div>
                <Switch id="enable-email" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Configure advanced face recognition parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border rounded-md bg-yellow-500/10 border-yellow-500">
                <div className="flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-500">Warning: Advanced Settings</h4>
                    <p className="text-sm">
                      These settings can significantly impact system performance and recognition accuracy. 
                      Only modify if you understand the implications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="processing-mode">Processing Mode</Label>
                <Select defaultValue="gpu">
                  <SelectTrigger id="processing-mode">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cpu">CPU Only</SelectItem>
                    <SelectItem value="gpu">GPU Accelerated</SelectItem>
                    <SelectItem value="hybrid">Hybrid (CPU+GPU)</SelectItem>
                    <SelectItem value="tpu">TPU Accelerated</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Hardware acceleration for face recognition processing
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="max-faces">Maximum Faces per Frame</Label>
                <Slider id="max-faces" defaultValue={[20]} min={1} max={50} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>20</span>
                  <span>50</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Maximum number of faces to detect and process in a single frame
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="face-tracking">Face Tracking Method</Label>
                <Select defaultValue="deep">
                  <SelectTrigger id="face-tracking">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Simple (Faster)</SelectItem>
                    <SelectItem value="kalman">Kalman Filter</SelectItem>
                    <Select\
