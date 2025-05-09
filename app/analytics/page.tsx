import { AIModels } from "@/components/ai-models"
import { AlertSettings } from "@/components/alert-settings"
import { ZoneMapping } from "@/components/zone-mapping"
import { ScheduleSettings } from "@/components/schedule-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AIAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Analytics Configuration</h1>

      <Tabs defaultValue="models" className="space-y-4">
        <TabsList>
          <TabsTrigger value="models">AI Models</TabsTrigger>
          <TabsTrigger value="alerts">Alert Settings</TabsTrigger>
          <TabsTrigger value="zones">Zone Mapping</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="models" className="space-y-4">
          <AIModels />
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <AlertSettings />
        </TabsContent>

        <TabsContent value="zones" className="space-y-4">
          <ZoneMapping />
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <ScheduleSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
