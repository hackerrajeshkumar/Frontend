import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Maximize2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CameraGrid() {
  const cameras = [
    { id: 1, name: "Main Lobby", active: true },
    { id: 2, name: "Main Entrance", active: true },
    { id: 3, name: "Parking Lot", active: true },
    { id: 4, name: "Server Room", active: true },
    { id: 5, name: "Reception", active: true },
    { id: 6, name: "Hallway A", active: true },
    { id: 7, name: "Cafeteria", active: true },
    { id: 8, name: "Executive Office", active: true },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cameras.map((camera) => (
        <Card key={camera.id} className="overflow-hidden">
          <div className="relative aspect-video bg-black">
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
                  className="h-7 w-7 bg-black/50 border-none text-white hover:bg-black/70"
                >
                  <VolumeX className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 bg-black/50 border-none text-white hover:bg-black/70"
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* AI Detection Overlay - Only on some cameras */}
            {camera.id === 1 && (
              <div className="absolute top-1/3 left-1/4 w-16 h-32 border-2 border-teal-500 rounded-md">
                <div className="absolute -top-6 left-0 bg-teal-500 text-white text-xs px-2 py-1 rounded">
                  Person (98%)
                </div>
              </div>
            )}

            {/* VLM Description - Only on some cameras */}
            {camera.id === 1 && (
              <div className="absolute bottom-10 left-0 w-full p-2">
                <div className="bg-black/70 text-white text-xs p-1 rounded">
                  <span className="text-teal-400 font-semibold">AI:</span> Person walking through lobby.
                </div>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
