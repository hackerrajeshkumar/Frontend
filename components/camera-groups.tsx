import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2, MoreHorizontal, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function CameraGroups() {
  const groups = [
    {
      id: 1,
      name: "Building A",
      description: "All cameras in Building A",
      cameras: [
        { id: 1, name: "Main Lobby", status: "online" },
        { id: 2, name: "Main Entrance", status: "online" },
        { id: 5, name: "Reception", status: "online" },
        { id: 6, name: "Hallway A", status: "degraded" },
      ],
    },
    {
      id: 2,
      name: "Building B",
      description: "All cameras in Building B",
      cameras: [{ id: 4, name: "Server Room", status: "offline" }],
    },
    {
      id: 3,
      name: "Exterior",
      description: "All outdoor cameras",
      cameras: [{ id: 3, name: "Parking Lot", status: "online" }],
    },
    {
      id: 4,
      name: "High Security",
      description: "Cameras in high security areas",
      cameras: [{ id: 4, name: "Server Room", status: "offline" }],
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Camera Groups</CardTitle>
            <CardDescription>Organize cameras by location or purpose</CardDescription>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Group
          </Button>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {groups.map((group) => (
              <AccordionItem key={group.id} value={`group-${group.id}`}>
                <div className="flex items-center">
                  <AccordionTrigger className="flex-1">
                    <div className="flex items-center gap-2">
                      <span>{group.name}</span>
                      <Badge variant="outline">{group.cameras.length}</Badge>
                    </div>
                  </AccordionTrigger>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="mr-4">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Group
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Cameras
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500 focus:text-red-500">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Group
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <AccordionContent>
                  <div className="pt-2 pb-4">
                    <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                    <div className="space-y-2">
                      {group.cameras.map((camera) => (
                        <div key={camera.id} className="flex items-center justify-between p-2 rounded-md border">
                          <div className="flex items-center gap-2">
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
                            <span>{camera.name}</span>
                          </div>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create New Group</CardTitle>
          <CardDescription>Group cameras by location or purpose</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="group-name">Group Name</Label>
            <Input id="group-name" placeholder="e.g. Building C" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="group-description">Description</Label>
            <Input id="group-description" placeholder="e.g. All cameras in Building C" />
          </div>

          <div className="space-y-2">
            <Label>Select Cameras</Label>
            <div className="border rounded-md p-4 space-y-2">
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <div key={id} className="flex items-center space-x-2">
                  <input type="checkbox" id={`camera-${id}`} className="rounded border-gray-400" />
                  <Label htmlFor={`camera-${id}`} className="text-sm font-normal">
                    Camera {id}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline">Cancel</Button>
            <Button>Create Group</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
