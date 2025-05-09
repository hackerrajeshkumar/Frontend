import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  User,
  Shield,
  PenIcon as Gun,
  Flame,
  Package,
  Briefcase,
  AlertTriangle,
  Bell,
  Mail,
  MessageSquare,
  Smartphone,
  Plus,
} from "lucide-react"

export function AlertSettings() {
  const alertTypes = [
    {
      id: "intrusion",
      name: "Intrusion Alert",
      description: "Unauthorized entry into restricted areas",
      icon: Shield,
      enabled: true,
      severity: "high",
      notification: true,
      email: true,
      sms: false,
      webhook: true,
    },
    {
      id: "weapon",
      name: "Weapon Detection",
      description: "Potential weapon identified in camera feed",
      icon: Gun,
      enabled: true,
      severity: "critical",
      notification: true,
      email: true,
      sms: true,
      webhook: true,
    },
    {
      id: "fire",
      name: "Smoke & Fire",
      description: "Smoke or fire detected in camera feed",
      icon: Flame,
      enabled: true,
      severity: "critical",
      notification: true,
      email: true,
      sms: true,
      webhook: true,
    },
    {
      id: "face",
      name: "Face Match",
      description: "Face matched against watchlist",
      icon: User,
      enabled: true,
      severity: "medium",
      notification: true,
      email: false,
      sms: false,
      webhook: true,
    },
    {
      id: "object",
      name: "Object Left Behind",
      description: "Unattended object detected",
      icon: Package,
      enabled: false,
      severity: "low",
      notification: true,
      email: false,
      sms: false,
      webhook: false,
    },
    {
      id: "theft",
      name: "Theft Detection",
      description: "Potential theft activity detected",
      icon: Briefcase,
      enabled: false,
      severity: "high",
      notification: true,
      email: true,
      sms: false,
      webhook: true,
    },
    {
      id: "anomaly",
      name: "Anomaly Detection",
      description: "Unusual activity or behavior detected",
      icon: AlertTriangle,
      enabled: true,
      severity: "medium",
      notification: true,
      email: false,
      sms: false,
      webhook: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Alert Settings</h2>
          <p className="text-sm text-muted-foreground">Configure alert thresholds and notification preferences</p>
        </div>
      </div>

      <Tabs defaultValue="alerts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="alerts">Alert Types</TabsTrigger>
          <TabsTrigger value="notifications">Notification Settings</TabsTrigger>
          <TabsTrigger value="recipients">Recipients</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {alertTypes.map((alert) => (
              <Card key={alert.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`p-2 rounded-md ${alert.enabled ? "bg-teal-500/10 text-teal-500" : "bg-muted text-muted-foreground"}`}
                      >
                        <alert.icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">{alert.name}</h3>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge severity={alert.severity} />
                          {alert.notification && <Badge type="notification" />}
                          {alert.email && <Badge type="email" />}
                          {alert.sms && <Badge type="sms" />}
                          {alert.webhook && <Badge type="webhook" />}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[200px]">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`enable-${alert.id}`}>Enable Alert</Label>
                        <Switch id={`enable-${alert.id}`} checked={alert.enabled} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor={`severity-${alert.id}`}>Severity</Label>
                        </div>
                        <Select defaultValue={alert.severity} disabled={!alert.enabled}>
                          <SelectTrigger id={`severity-${alert.id}`}>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Methods</CardTitle>
              <CardDescription>Configure how alerts are delivered to recipients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-teal-500" />
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-notifications">In-App Notifications</Label>
                      <p className="text-xs text-muted-foreground">Show alerts in the notification panel</p>
                    </div>
                  </div>
                  <Switch id="enable-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-teal-500" />
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-email">Email Notifications</Label>
                      <p className="text-xs text-muted-foreground">Send alert emails to configured recipients</p>
                    </div>
                  </div>
                  <Switch id="enable-email" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-teal-500" />
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-sms">SMS Notifications</Label>
                      <p className="text-xs text-muted-foreground">Send text messages for critical alerts</p>
                    </div>
                  </div>
                  <Switch id="enable-sms" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-teal-500" />
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-push">Mobile Push Notifications</Label>
                      <p className="text-xs text-muted-foreground">Send push notifications to mobile app</p>
                    </div>
                  </div>
                  <Switch id="enable-push" defaultChecked />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://example.com/webhook"
                  defaultValue="https://api.security.example.com/webhooks/alerts"
                />
                <p className="text-xs text-muted-foreground">Send alert data to external systems via webhook</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cooldown-period">Alert Cooldown Period (seconds)</Label>
                <Slider id="cooldown-period" defaultValue={[60]} min={0} max={300} step={5} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0s</span>
                  <span>60s</span>
                  <span>300s</span>
                </div>
                <p className="text-xs text-muted-foreground">Minimum time between repeated alerts of the same type</p>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recipients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert Recipients</CardTitle>
              <CardDescription>Manage users who receive alert notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Role</th>
                        <th className="text-left p-3 font-medium">Email</th>
                        <th className="text-left p-3 font-medium">Phone</th>
                        <th className="text-left p-3 font-medium">Alert Types</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">John Smith</td>
                        <td className="p-3">Security Manager</td>
                        <td className="p-3">john.smith@example.com</td>
                        <td className="p-3">+1 (555) 123-4567</td>
                        <td className="p-3">All</td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Sarah Johnson</td>
                        <td className="p-3">Security Officer</td>
                        <td className="p-3">sarah.j@example.com</td>
                        <td className="p-3">+1 (555) 987-6543</td>
                        <td className="p-3">Critical, High</td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">IT Department</td>
                        <td className="p-3">IT Team</td>
                        <td className="p-3">it-alerts@example.com</td>
                        <td className="p-3">-</td>
                        <td className="p-3">System, Technical</td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Recipient
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Badge({ severity, type }: { severity?: string; type?: string }) {
  if (severity) {
    return (
      <div
        className={`
          px-2 py-1 rounded-full text-xs font-medium
          ${
            severity === "critical"
              ? "bg-red-500/10 text-red-500"
              : severity === "high"
                ? "bg-orange-500/10 text-orange-500"
                : severity === "medium"
                  ? "bg-yellow-500/10 text-yellow-500"
                  : "bg-blue-500/10 text-blue-500"
          }
        `}
      >
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </div>
    )
  }

  if (type) {
    let icon, label, color

    switch (type) {
      case "notification":
        icon = <Bell className="h-3 w-3 mr-1" />
        label = "Notification"
        color = "bg-teal-500/10 text-teal-500"
        break
      case "email":
        icon = <Mail className="h-3 w-3 mr-1" />
        label = "Email"
        color = "bg-blue-500/10 text-blue-500"
        break
      case "sms":
        icon = <MessageSquare className="h-3 w-3 mr-1" />
        label = "SMS"
        color = "bg-purple-500/10 text-purple-500"
        break
      case "webhook":
        icon = <Smartphone className="h-3 w-3 mr-1" />
        label = "Webhook"
        color = "bg-gray-500/10 text-gray-500"
        break
    }

    return (
      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${color}`}>
        {icon}
        {label}
      </div>
    )
  }

  return null
}
