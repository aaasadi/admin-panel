// ProfileSidebar.tsx
import {
  User,
  Key,
  Bell,
  CreditCard,
  Shield,
  LogOut,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card } from "~/components/ui/card";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "~/components/ui/sidebar";

export function ProfileSidebar() {
  return (
    <aside>

      {/* Content – reuse your existing menu components */}
      <Card className="flex-1 overflow-auto p-2 h-full w-2xs bg-gray-50">
        <div >
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  
                  <NavLink to ="/profile/account"> <User /><span className="text-1xl" >Account</span></NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  
                   <NavLink to ="/profile/password"><Key /><span className="text-1xl">Password</span></NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
      </Card>
    </aside>
  );
}