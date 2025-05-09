import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Plus, Copy } from "lucide-react"

export function ScheduleSettings() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const hours = Array.from({ length: 24 }, (_, i) => i)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Schedule Settings</h2>
          <p className="text-sm text-muted-foreground">Configure time-based analytics and alerts</p>
        </div>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="special">Special Days</TabsTrigger>
          <TabsTrigger value="profiles">Schedule Profiles</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Configure analytics activation by day and time</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="office-hours">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select profile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office-hours">Office Hours</SelectItem>
                    <SelectItem value="24-7">24/7 Monitoring</SelectItem>
                    <SelectItem value="night-only">Night Only</SelectItem>
                    <SelectItem value="weekend">Weekend</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-[100px_repeat(24,minmax(30px,1fr))]">
                    {/* Header with hours */}
                    <div className="border-b border-r p-2 font-medium">Day / Hour</div>
                    {hours.map((hour) => (
                      <div key={hour} className="border-b border-r p-2 text-center text-xs">
                        {hour}:00
                      </div>
                    ))}

                    {/* Days and time slots */}
                    {days.map((day) => (
                      <React.Fragment key={day}>
                        <div className="border-b border-r p-2">{day}</div>
                        {hours.map((hour) => {
                          // Logic to determine if this time slot is active
                          const isActive =
                            (day !== "Saturday" && day !== "Sunday" && hour >= 8 && hour < 18) ||
                            ((day === "Saturday" || day === "Sunday") && hour >= 10 && hour < 16)

                          return (
                            <div
                              key={`${day}-${hour}`}
                              className={`
                                border-b border-r p-2 cursor-pointer
                                ${isActive ? "bg-teal-500/20" : ""}
                              `}
                            ></div>
                          )
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-teal-500/20 border"></div>
                    <span className="text-sm">Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border"></div>
                    <span className="text-sm">Inactive</span>
                  </div>
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Schedule
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Analytics</CardTitle>
                <CardDescription>AI models active during scheduled times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="person-detection">Person Detection</Label>
                    <Switch id="person-detection" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="intrusion-detection">Intrusion Detection</Label>
                    <Switch id="intrusion-detection" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="weapon-detection">Weapon Detection</Label>
                    <Switch id="weapon-detection" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="smoke-detection">Smoke & Fire Detection</Label>
                    <Switch id="smoke-detection" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="face-recognition">Face Recognition</Label>
                    <Switch id="face-recognition" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="anomaly-detection">Anomaly Detection</Label>
                    <Switch id="anomaly-detection" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule Options</CardTitle>
                <CardDescription>Configure schedule behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="america-new_york">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-new_york">America/New York (UTC-5)</SelectItem>
                        <SelectItem value="america-los_angeles">America/Los Angeles (UTC-8)</SelectItem>
                        <SelectItem value="europe-london">Europe/London (UTC+0)</SelectItem>
                        <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                        <SelectItem value="australia-sydney">Australia/Sydney (UTC+11)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="override-holidays">Override on Holidays</Label>
                      <p className="text-xs text-muted-foreground">Use special day settings on holidays</p>
                    </div>
                    <Switch id="override-holidays" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="always-critical">Always Run Critical Analytics</Label>
                      <p className="text-xs text-muted-foreground">Run critical analytics even outside schedule</p>
                    </div>
                    <Switch id="always-critical" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-schedule">Schedule Change Notifications</Label>
                      <p className="text-xs text-muted-foreground">Notify when schedule changes take effect</p>
                    </div>
                    <Switch id="notify-schedule" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="special" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Special Days</CardTitle>
                <CardDescription>Configure exceptions to the regular schedule</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Special Day
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium">Date</th>
                      <th className="text-left p-3 font-medium">Schedule</th>
                      <th className="text-left p-3 font-medium">Status</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">New Year's Day</td>
                      <td className="p-3">January 1, 2023</td>
                      <td className="p-3">Holiday (24h)</td>
                      <td className="p-3">
                        <Badge status="active" />
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Independence Day</td>
                      <td className="p-3">July 4, 2023</td>
                      <td className="p-3">Holiday (24h)</td>
                      <td className="p-3">
                        <Badge status="active" />
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Company Event</td>
                      <td className="p-3">August 15, 2023</td>
                      <td className="p-3">Enhanced Security (8AM-6PM)</td>
                      <td className="p-3">
                        <Badge status="active" />
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Christmas</td>
                      <td className="p-3">December 25, 2023</td>
                      <td className="p-3">Holiday (24h)</td>
                      <td className="p-3">
                        <Badge status="active" />
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Special Day</CardTitle>
              <CardDescription>Create a new exception to the regular schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="special-name">Name</Label>
                  <Input id="special-name" placeholder="e.g. Company Event" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-date">Date</Label>
                  <Input id="special-date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-schedule">Schedule Profile</Label>
                  <Select defaultValue="holiday">
                    <SelectTrigger id="special-schedule">
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="holiday">Holiday (24h)</SelectItem>
                      <SelectItem value="enhanced">Enhanced Security (8AM-6PM)</SelectItem>
                      <SelectItem value="minimal">Minimal Security</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-repeat">Repeat</Label>
                  <Select defaultValue="once">
                    <SelectTrigger id="special-repeat">
                      <SelectValue placeholder="Select repeat option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-notes">Notes</Label>
                <textarea
                  id="special-notes"
                  className="w-full min-h-[80px] p-2 rounded-md border border-input bg-background"
                  placeholder="Additional information about this special day"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Add Special Day</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profiles" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Schedule Profiles</CardTitle>
                <CardDescription>Manage reusable schedule templates</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Profile
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Profile Name</th>
                      <th className="text-left p-3 font-medium">Description</th>
                      <th className="text-left p-3 font-medium">Applied To</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Office Hours</td>
                      <td className="p-3">Weekdays 8AM-6PM</td>
                      <td className="p-3">Main Schedule</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Duplicate
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">24/7 Monitoring</td>
                      <td className="p-3">All days, all hours</td>
                      <td className="p-3">High Security Areas</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Duplicate
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Night Only</td>
                      <td className="p-3">All days 6PM-8AM</td>
                      <td className="p-3">Not in use</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Duplicate
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Weekend</td>
                      <td className="p-3">Saturday & Sunday 10AM-4PM</td>
                      <td className="p-3">Main Schedule</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Duplicate
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Badge({ status }: { status: string }) {
  return (
    <div
      className={`
        px-2 py-1 rounded-full text-xs font-medium inline-flex items-center
        ${
          status === "active"
            ? "bg-green-500/10 text-green-500"
            : status === "inactive"
              ? "bg-gray-500/10 text-gray-500"
              : "bg-yellow-500/10 text-yellow-500"
        }
      `}
    >
      <div
        className={`
          w-1.5 h-1.5 rounded-full mr-1
          ${status === "active" ? "bg-green-500" : status === "inactive" ? "bg-gray-500" : "bg-yellow-500"}
        `}
      ></div>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  )
}
