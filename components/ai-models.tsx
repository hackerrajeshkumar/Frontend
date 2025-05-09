import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Shield,
  PenIcon as Gun,
  Flame,
  Package,
  Briefcase,
  AlertTriangle,
  Download,
  RefreshCw,
  Info,
} from "lucide-react"

export function AIModels() {
  const models = [
    {
      id: "person-detection",
      name: "Person Detection",
      description: "Detect and track people in camera feeds",
      icon: User,
      enabled: true,
      confidence: 85,
      status: "active",
      version: "v2.4.1",
      type: "detection",
    },
    {
      id: "intrusion-detection",
      name: "Intrusion Detection",
      description: "Detect unauthorized entry into restricted areas",
      icon: Shield,
      enabled: true,
      confidence: 80,
      status: "active",
      version: "v1.8.3",
      type: "detection",
    },
    {
      id: "weapon-detection",
      name: "Weapon Detection",
      description: "Identify potential weapons in camera feeds",
      icon: Gun,
      enabled: true,
      confidence: 90,
      status: "active",
      version: "v3.1.0",
      type: "detection",
    },
    {
      id: "smoke-fire-detection",
      name: "Smoke & Fire Detection",
      description: "Detect smoke or fire in camera feeds",
      icon: Flame,
      enabled: true,
      confidence: 85,
      status: "active",
      version: "v2.2.5",
      type: "detection",
    },
    {
      id: "object-left-behind",
      name: "Object Left Behind",
      description: "Detect objects left unattended",
      icon: Package,
      enabled: false,
      confidence: 75,
      status: "inactive",
      version: "v1.5.2",
      type: "detection",
    },
    {
      id: "theft-detection",
      name: "Theft Detection",
      description: "Detect potential theft activities",
      icon: Briefcase,
      enabled: false,
      confidence: 70,
      status: "inactive",
      version: "v1.2.0",
      type: "detection",
    },
    {
      id: "face-recognition",
      name: "Face Recognition",
      description: "Identify and match faces against database",
      icon: User,
      enabled: true,
      confidence: 85,
      status: "active",
      version: "v4.0.2",
      type: "recognition",
    },
    {
      id: "anomaly-detection",
      name: "Anomaly Detection",
      description: "Detect unusual patterns or behaviors",
      icon: AlertTriangle,
      enabled: true,
      confidence: 75,
      status: "active",
      version: "v2.1.3",
      type: "detection",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">AI Models</h2>
          <p className="text-sm text-muted-foreground">Configure and manage AI models for video analytics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Add Model
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Update All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="detection" className="space-y-4">
        <TabsList>
          <TabsTrigger value="detection">Detection Models</TabsTrigger>
          <TabsTrigger value="recognition">Recognition Models</TabsTrigger>
          <TabsTrigger value="vlm">Vision-Language Models</TabsTrigger>
        </TabsList>

        <TabsContent value="detection" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {models
              .filter((model) => model.type === "detection")
              .map((model) => (
                <Card key={model.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 rounded-md ${model.enabled ? "bg-teal-500/10 text-teal-500" : "bg-muted text-muted-foreground"}`}
                        >
                          <model.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{model.name}</CardTitle>
                          <CardDescription>{model.description}</CardDescription>
                        </div>
                      </div>
                      <Switch checked={model.enabled} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor={`confidence-${model.id}`}>Confidence Threshold: {model.confidence}%</Label>
                          <Badge variant="outline">{model.version}</Badge>
                        </div>
                        <Slider
                          id={`confidence-${model.id}`}
                          defaultValue={[model.confidence]}
                          max={100}
                          step={1}
                          disabled={!model.enabled}
                        />
                        <p className="text-xs text-muted-foreground">
                          Higher values reduce false positives but may miss actual events
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <Badge
                          variant="outline"
                          className={
                            model.status === "active"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-yellow-500/10 text-yellow-500"
                          }
                        >
                          {model.status}
                        </Badge>
                        <Button variant="outline" size="sm" disabled={!model.enabled}>
                          Configure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="recognition" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {models
              .filter((model) => model.type === "recognition")
              .map((model) => (
                <Card key={model.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 rounded-md ${model.enabled ? "bg-teal-500/10 text-teal-500" : "bg-muted text-muted-foreground"}`}
                        >
                          <model.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{model.name}</CardTitle>
                          <CardDescription>{model.description}</CardDescription>
                        </div>
                      </div>
                      <Switch checked={model.enabled} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor={`confidence-${model.id}`}>Match Threshold: {model.confidence}%</Label>
                          <Badge variant="outline">{model.version}</Badge>
                        </div>
                        <Slider
                          id={`confidence-${model.id}`}
                          defaultValue={[model.confidence]}
                          max={100}
                          step={1}
                          disabled={!model.enabled}
                        />
                        <p className="text-xs text-muted-foreground">
                          Higher values require closer matches but reduce false identifications
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <Badge
                          variant="outline"
                          className={
                            model.status === "active"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-yellow-500/10 text-yellow-500"
                          }
                        >
                          {model.status}
                        </Badge>
                        <Button variant="outline" size="sm" disabled={!model.enabled}>
                          Configure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="vlm" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vision-Language Model Settings</CardTitle>
              <CardDescription>Configure VLM for real-time video description and analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-vlm">Enable VLM Analysis</Label>
                  <p className="text-xs text-muted-foreground">
                    Generate natural language descriptions of camera feeds
                  </p>
                </div>
                <Switch id="enable-vlm" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vlm-model">VLM Model</Label>
                <Select defaultValue="gpt4v">
                  <SelectTrigger id="vlm-model">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt4v">GPT-4V (Cloud)</SelectItem>
                    <SelectItem value="llava">LLaVA 1.5 (Local)</SelectItem>
                    <SelectItem value="cogvlm">CogVLM (Local)</SelectItem>
                    <SelectItem value="custom">Custom Model</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vlm-prompt">System Prompt</Label>
                <textarea
                  id="vlm-prompt"
                  className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
                  defaultValue="You are a security camera assistant. Describe what you see in the camera feed concisely, focusing on people, activities, and potential security concerns. Be factual and objective."
                />
                <p className="text-xs text-muted-foreground">
                  Customize how the VLM describes and analyzes camera feeds
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vlm-frequency">Analysis Frequency</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="vlm-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Every 1 second</SelectItem>
                    <SelectItem value="5">Every 5 seconds</SelectItem>
                    <SelectItem value="10">Every 10 seconds</SelectItem>
                    <SelectItem value="30">Every 30 seconds</SelectItem>
                    <SelectItem value="60">Every minute</SelectItem>
                    <SelectItem value="event">On events only</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">How often the VLM analyzes camera frames</p>
              </div>

              <div className="flex items-center p-3 rounded-md border bg-muted/50">
                <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-sm">
                  VLM processing may increase system load and bandwidth usage. Consider adjusting frequency or enabling
                  event-only mode for optimal performance.
                </p>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
