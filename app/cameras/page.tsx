import { CameraList } from "@/components/camera-list"
import { CameraAddForm } from "@/components/camera-add-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CameraGroups } from "@/components/camera-groups"
import { CameraDiagnostics } from "@/components/camera-diagnostics"

export default function CameraManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Camera Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Camera
        </Button>
      </div>

      <Tabs defaultValue="cameras" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cameras">Cameras</TabsTrigger>
          <TabsTrigger value="groups">Camera Groups</TabsTrigger>
          <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
          <TabsTrigger value="add">Add Camera</TabsTrigger>
        </TabsList>

        <TabsContent value="cameras" className="space-y-4">
          <CameraList />
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <CameraGroups />
        </TabsContent>

        <TabsContent value="diagnostics" className="space-y-4">
          <CameraDiagnostics />
        </TabsContent>

        <TabsContent value="add" className="space-y-4">
          <CameraAddForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
