"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  Camera,
  ChevronLeft,
  ChevronRight,
  Database,
  LayoutDashboard,
  Monitor,
  Settings,
  Shield,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Live Monitoring", href: "/monitoring", icon: Monitor },
    { name: "AI Alert Center", href: "/alerts", icon: AlertTriangle },
    { name: "Camera Management", href: "/cameras", icon: Camera },
    { name: "AI Analytics", href: "/analytics", icon: Database },
    { name: "Face Recognition", href: "/face-recognition", icon: Users },
    { name: "Restricted Areas", href: "/restricted-areas", icon: Shield },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div
      className={cn(
        "bg-background border-r flex flex-col h-full transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-500" />
            <span className="font-bold text-lg">AEYi AI-VMS</span>
          </Link>
        )}
        {collapsed && <Shield className="h-6 w-6 text-teal-500 mx-auto" />}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("ml-auto", collapsed && "mx-auto")}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 py-4">
        <TooltipProvider>
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                          isActive
                            ? "bg-teal-500/10 text-teal-500"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
                        {!collapsed && <span>{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                  </Tooltip>
                </li>
              )
            })}
          </ul>
        </TooltipProvider>
      </nav>

      <div className="p-4 border-t">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold">
                  A
                </div>
                {!collapsed && (
                  <div>
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@aeyi.com</p>
                  </div>
                )}
              </div>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                Admin User
                <br />
                admin@aeyi.com
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
