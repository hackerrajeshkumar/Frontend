import { AttendanceReport } from "@/components/attendance-report"
import { FaceDatabase } from "@/components/face-database"
import { FaceSettings } from "@/components/face-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FaceRecognition() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Face Recognition</h1>

      <Tabs defaultValue="attendance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="database">Face Database</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-4">
          <AttendanceReport />
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <FaceDatabase />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <FaceSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
