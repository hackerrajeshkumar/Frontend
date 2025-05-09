import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, Maximize2, Filter, SlidersHorizontal } from "lucide-react"

export function CameraControls() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Camera Group" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Cameras</SelectItem>
          <SelectItem value="lobby">Lobby & Entrance</SelectItem>
          <SelectItem value="office">Office Areas</SelectItem>
          <SelectItem value="restricted">Restricted Areas</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="4">
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Grid Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 Camera</SelectItem>
          <SelectItem value="4">4 Cameras</SelectItem>
          <SelectItem value="9">9 Cameras</SelectItem>
          <SelectItem value="16">16 Cameras</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center gap-1">
        <Button variant="outline" size="icon">
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
