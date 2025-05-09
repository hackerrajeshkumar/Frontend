import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Upload, Plus, Edit, UserPlus, Filter } from "lucide-react"
import Image from "next/image"

export function FaceDatabase() {
  const personnel = [
    {
      id: 1,
      name: "John Smith",
      employeeId: "EMP001",
      department: "IT",
      role: "Developer",
      status: "active",
      lastSeen: "Today, 08:45 AM",
      location: "Main Entrance",
      images: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      employeeId: "EMP002",
      department: "HR",
      role: "HR Manager",
      status: "active",
      lastSeen: "Today, 09:02 AM",
      location: "Main Lobby",
      images: 4,
    },
    {
      id: 3,
      name: "Michael Brown",
      employeeId: "EMP003",
      department: "Finance",
      role: "Accountant",
      status: "active",
      lastSeen: "Today, 10:15 AM",
      location: "Main Entrance",
      images: 3,
    },
    {
      id: 4,
      name: "Emily Davis",
      employeeId: "EMP004",
      department: "Marketing",
      role: "Marketing Specialist",
      status: "active",
      lastSeen: "Today, 08:55 AM",
      location: "Main Lobby",
      images: 6,
    },
    {
      id: 5,
      name: "David Wilson",
      employeeId: "EMP005",
      department: "IT",
      role: "System Administrator",
      status: "inactive",
      lastSeen: "Yesterday, 17:30 PM",
      location: "Main Entrance",
      images: 4,
    },
    {
      id: 6,
      name: "Jennifer Lee",
      employeeId: "EMP006",
      department: "Operations",
      role: "Operations Manager",
      status: "active",
      lastSeen: "Today, 08:30 AM",
      location: "Main Entrance",
      images: 5,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Face Database</h2>
          <p className="text-sm text-muted-foreground">Manage personnel face data for recognition</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Person
          </Button>
        </div>
      </div>

      <Tabs defaultValue="personnel" className="space-y-4">
        <TabsList>
          <TabsTrigger value="personnel">Personnel</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="unknown">Unknown Faces</TabsTrigger>
        </TabsList>

        <TabsContent value="personnel" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Personnel Database</CardTitle>
                <CardDescription>Manage employee face recognition data</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-[250px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search personnel..." className="w-full pl-8 bg-background" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {personnel.map((person) => (
                  <Card key={person.id} className="overflow-hidden">
                    <div className="flex">
                      <div className="w-1/3 bg-muted flex items-center justify-center p-4">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-background">
                          <Image
                            src={`/placeholder.svg?height=80&width=80`}
                            alt={person.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{person.name}</h3>
                          <Badge
                            variant="outline"
                            className={
                              person.status === "active"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-red-500/10 text-red-500"
                            }
                          >
                            {person.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{person.employeeId}</p>
                        <div className="mt-2 space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Department:</span>
                            <span>{person.department}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Role:</span>
                            <span>{person.role}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Last Seen:</span>
                            <span>{person.lastSeen}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Face Images:</span>
                            <span>{person.images}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-3.5 w-3.5 mr-1" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-muted-foreground">Showing 6 of 48 personnel</div>
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
        </TabsContent>

        <TabsContent value="watchlist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Watchlist</CardTitle>
              <CardDescription>Manage persons of interest for security alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center p-8 text-center">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Shield className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">Security Watchlist</h3>
                  <p className="text-muted-foreground">
                    Add individuals to the security watchlist for real-time alerts when detected by cameras.
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Watchlist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visitor Database</CardTitle>
              <CardDescription>Manage temporary visitor face data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center p-8 text-center">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">Visitor Management</h3>
                  <p className="text-muted-foreground">Register visitors for temporary face recognition access.</p>
                  <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Register Visitor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unknown" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unknown Faces</CardTitle>
              <CardDescription>Review and identify unrecognized faces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center p-8 text-center">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">Unknown Face Detection</h3>
                  <p className="text-muted-foreground">
                    Review faces that were detected but not recognized by the system.
                  </p>
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    View Detections
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Add New Person</CardTitle>
          <CardDescription>Register a new person in the face recognition database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                  <User className="h-16 w-16 text-muted-foreground" />
                </div>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
                <p className="text-xs text-muted-foreground mt-2">Upload a clear frontal face photo</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-photos">Additional Photos</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square rounded-md bg-muted flex items-center justify-center">
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Add multiple angles for better recognition</p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="person-name">Full Name</Label>
                  <Input id="person-name" placeholder="e.g. John Smith" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person-id">Employee ID</Label>
                  <Input id="person-id" placeholder="e.g. EMP001" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person-department">Department</Label>
                  <Select>
                    <SelectTrigger id="person-department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person-role">Role</Label>
                  <Input id="person-role" placeholder="e.g. Software Developer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person-email">Email</Label>
                  <Input id="person-email" type="email" placeholder="e.g. john.smith@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person-phone">Phone</Label>
                  <Input id="person-phone" placeholder="e.g. +1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="person-access">Access Level</Label>
                <Select defaultValue="employee">
                  <SelectTrigger id="person-access">
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="contractor">Contractor</SelectItem>
                    <SelectItem value="visitor">Visitor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="person-notes">Notes</Label>
                <textarea
                  id="person-notes"
                  className="w-full min-h-[80px] p-2 rounded-md border border-input bg-background"
                  placeholder="Additional information about this person"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Add Person</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
