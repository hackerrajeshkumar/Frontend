import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Maximize2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CameraPreview() {
  const cameras = [
    { id: "lobby", name: "Main Lobby", active: true },
    { id: "entrance", name: "Main Entrance", active: true },
    { id: "parking", name: "Parking Lot", active: true },
    { id: "server", name: "Server Room", active: true },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">Active Camera Feeds</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lobby">
          <TabsList className="grid grid-cols-4 mb-4">
            {cameras.map((camera) => (
              <TabsTrigger key={camera.id} value={camera.id} className="relative">
                {camera.name}
                {camera.active && <Badge className="absolute -top-1 -right-1 h-2 w-2 p-0 bg-green-500" />}
              </TabsTrigger>
            ))}
          </TabsList>

          {cameras.map((camera) => (
            <TabsContent key={camera.id} value={camera.id} className="relative">
              <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=720&width=1280`}
                  alt={`${camera.name} feed`}
                  width={1280}
                  height={720}
                  className="object-cover"
                />

                <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-start">
                  <Badge variant="outline" className="bg-black/50 text-white border-none">
                    {camera.name}
                  </Badge>
                  <Badge variant="outline" className="bg-black/50 text-white border-none">
                    Live
                  </Badge>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-black/50 border-none text-white hover:bg-black/70"
                    >
                      <VolumeX className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-black/50 border-none text-white hover:bg-black/70"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* AI Detection Overlay */}
                <div className="absolute top-1/3 left-1/4 w-32 h-64 border-2 border-teal-500 rounded-md">
                  <div className="absolute -top-6 left-0 bg-teal-500 text-white text-xs px-2 py-1 rounded">
                    Person (98%)
                  </div>
                </div>

                {/* VLM Description */}
                <div className="absolute bottom-12 left-0 w-full p-2">
                  <div className="bg-black/70 text-white text-sm p-2 rounded">
                    <span className="text-teal-400 font-semibold">AI:</span> Person in blue shirt walking through lobby
                    area with a backpack.
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
