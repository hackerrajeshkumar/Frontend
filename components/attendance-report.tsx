import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, FileText, User, Users, BarChart3, ArrowUpDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AttendanceReport() {
  const attendanceData = [
    {
      id: 1,
      name: "John Smith",
      department: "IT",
      status: "present",
      timeIn: "08:45",
      timeOut: "17:30",
      duration: "8h 45m",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      department: "HR",
      status: "present",
      timeIn: "09:02",
      timeOut: "17:15",
      duration: "8h 13m",
    },
    {
      id: 3,
      name: "Michael Brown",
      department: "Finance",
      status: "late",
      timeIn: "10:15",
      timeOut: "18:00",
      duration: "7h 45m",
    },
    {
      id: 4,
      name: "Emily Davis",
      department: "Marketing",
      status: "present",
      timeIn: "08:55",
      timeOut: "17:45",
      duration: "8h 50m",
    },
    { id: 5, name: "David Wilson", department: "IT", status: "absent", timeIn: "-", timeOut: "-", duration: "-" },
    {
      id: 6,
      name: "Jennifer Lee",
      department: "Operations",
      status: "present",
      timeIn: "08:30",
      timeOut: "17:00",
      duration: "8h 30m",
    },
    {
      id: 7,
      name: "Robert Taylor",
      department: "Finance",
      status: "early-leave",
      timeIn: "09:00",
      timeOut: "15:30",
      duration: "6h 30m",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      department: "HR",
      status: "present",
      timeIn: "08:50",
      timeOut: "17:20",
      duration: "8h 30m",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Attendance Report</h2>
          <p className="text-sm text-muted-foreground">Track employee attendance and time records</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Select Date
          </Button>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Personnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Users className="h-5 w-5 text-teal-500" />
              <div className="text-2xl font-bold">48</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <User className="h-5 w-5 text-green-500" />
              <div className="text-2xl font-bold">42</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <User className="h-5 w-5 text-red-500" />
              <div className="text-2xl font-bold">6</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <div className="text-2xl font-bold">87.5%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="custom">Custom Range</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Daily Attendance</CardTitle>
                <CardDescription>Today, May 9, 2023</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-[250px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search by name..." className="w-full pl-8 bg-background" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">
                        <div className="flex items-center gap-1 cursor-pointer">
                          Name
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </th>
                      <th className="text-left p-3 font-medium">Department</th>
                      <th className="text-left p-3 font-medium">Status</th>
                      <th className="text-left p-3 font-medium">
                        <div className="flex items-center gap-1 cursor-pointer">
                          Time In
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </th>
                      <th className="text-left p-3 font-medium">Time Out</th>
                      <th className="text-left p-3 font-medium">Duration</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((person) => (
                      <tr key={person.id} className="border-b">
                        <td className="p-3 font-medium">{person.name}</td>
                        <td className="p-3">{person.department}</td>
                        <td className="p-3">
                          <AttendanceStatus status={person.status} />
                        </td>
                        <td className="p-3">{person.timeIn}</td>
                        <td className="p-3">{person.timeOut}</td>
                        <td className="p-3">{person.duration}</td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-muted-foreground">Showing 8 of 48 personnel</div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 bg-teal-500/10 text-teal-500">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Department</CardTitle>
                <CardDescription>Department attendance breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>IT Department</div>
                      <div className="font-medium">90% (9/10)</div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[90%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>HR Department</div>
                      <div className="font-medium">100% (8/8)</div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[100%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Finance Department</div>
                      <div className="font-medium">85% (11/13)</div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[85%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Marketing Department</div>
                      <div className="font-medium">75% (6/8)</div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[75%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Operations Department</div>
                      <div className="font-medium">89% (8/9)</div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[89%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Time Distribution</CardTitle>
                <CardDescription>Arrival and departure patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Arrival Time</h4>
                    <div className="grid grid-cols-6 gap-1 text-xs">
                      <div className="text-center">7AM</div>
                      <div className="text-center">8AM</div>
                      <div className="text-center">9AM</div>
                      <div className="text-center">10AM</div>
                      <div className="text-center">11AM</div>
                      <div className="text-center">12PM</div>
                    </div>
                    <div className="h-10 bg-muted rounded-md mt-1 relative">
                      <div className="absolute inset-y-0 left-[15%] right-[40%] bg-teal-500/20 rounded-md"></div>
                      <div className="absolute inset-y-0 left-[30%] w-[15%] bg-teal-500/50 rounded-md"></div>
                      <div className="absolute inset-y-0 left-[45%] w-[10%] bg-teal-500/30 rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Early: 15%</span>
                      <span>On Time: 70%</span>
                      <span>Late: 15%</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Departure Time</h4>
                    <div className="grid grid-cols-6 gap-1 text-xs">
                      <div className="text-center">3PM</div>
                      <div className="text-center">4PM</div>
                      <div className="text-center">5PM</div>
                      <div className="text-center">6PM</div>
                      <div className="text-center">7PM</div>
                      <div className="text-center">8PM</div>
                    </div>
                    <div className="h-10 bg-muted rounded-md mt-1 relative">
                      <div className="absolute inset-y-0 left-[10%] w-[10%] bg-teal-500/20 rounded-md"></div>
                      <div className="absolute inset-y-0 left-[40%] right-[20%] bg-teal-500/50 rounded-md"></div>
                      <div className="absolute inset-y-0 left-[80%] w-[10%] bg-teal-500/30 rounded-md"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Early: 10%</span>
                      <span>On Time: 75%</span>
                      <span>Late: 15%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance Summary</CardTitle>
              <CardDescription>May 3 - May 9, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Day</th>
                        <th className="text-left p-3 font-medium">Present</th>
                        <th className="text-left p-3 font-medium">Absent</th>
                        <th className="text-left p-3 font-medium">Late</th>
                        <th className="text-left p-3 font-medium">Early Leave</th>
                        <th className="text-left p-3 font-medium">Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Monday, May 3</td>
                        <td className="p-3">45</td>
                        <td className="p-3">3</td>
                        <td className="p-3">5</td>
                        <td className="p-3">2</td>
                        <td className="p-3">94%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Tuesday, May 4</td>
                        <td className="p-3">44</td>
                        <td className="p-3">4</td>
                        <td className="p-3">3</td>
                        <td className="p-3">1</td>
                        <td className="p-3">92%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Wednesday, May 5</td>
                        <td className="p-3">46</td>
                        <td className="p-3">2</td>
                        <td className="p-3">4</td>
                        <td className="p-3">0</td>
                        <td className="p-3">96%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Thursday, May 6</td>
                        <td className="p-3">43</td>
                        <td className="p-3">5</td>
                        <td className="p-3">2</td>
                        <td className="p-3">3</td>
                        <td className="p-3">90%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Friday, May 7</td>
                        <td className="p-3">40</td>
                        <td className="p-3">8</td>
                        <td className="p-3">6</td>
                        <td className="p-3">4</td>
                        <td className="p-3">83%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Saturday, May 8</td>
                        <td className="p-3">10</td>
                        <td className="p-3">38</td>
                        <td className="p-3">1</td>
                        <td className="p-3">0</td>
                        <td className="p-3">21%</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sunday, May 9</td>
                        <td className="p-3">5</td>
                        <td className="p-3">43</td>
                        <td className="p-3">0</td>
                        <td className="p-3">0</td>
                        <td className="p-3">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-medium">Monthly Report</h3>
            <p className="text-muted-foreground">Select a month to view the report</p>
            <Button className="mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              Select Month
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-medium">Custom Date Range</h3>
            <p className="text-muted-foreground">Select a custom date range for the report</p>
            <div className="flex gap-2 justify-center mt-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Start Date
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                End Date
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AttendanceStatus({ status }: { status: string }) {
  let color = ""
  let label = ""

  switch (status) {
    case "present":
      color = "bg-green-500/10 text-green-500"
      label = "Present"
      break
    case "absent":
      color = "bg-red-500/10 text-red-500"
      label = "Absent"
      break
    case "late":
      color = "bg-yellow-500/10 text-yellow-500"
      label = "Late"
      break
    case "early-leave":
      color = "bg-orange-500/10 text-orange-500"
      label = "Early Leave"
      break
    default:
      color = "bg-gray-500/10 text-gray-500"
      label = status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div className={`px-2 py-1 rounded-full text-xs font-medium inline-flex items-center ${color}`}>
      <div
        className={`w-1.5 h-1.5 rounded-full mr-1 ${color.includes("green") ? "bg-green-500" : color.includes("red") ? "bg-red-500" : color.includes("yellow") ? "bg-yellow-500" : color.includes("orange") ? "bg-orange-500" : "bg-gray-500"}`}
      ></div>
      {label}
    </div>
  )
}
