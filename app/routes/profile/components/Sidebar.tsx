import { User, Lock } from "lucide-react";
import { NavLink } from "react-router";
import { Card } from "~/components/ui/card";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "~/components/ui/sidebar";

type Props = {
  onClose?: () => void;
};

export function ProfileSidebar({ onClose }: Props) {
  return (
    <aside className="w-72 h-full bg-background ">
      <Card className="h-full  border-0 bg-gray-50 p-3 rounded-2xl border-b-4">
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/profile/account"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-2 rounded-lg px-3 py-2 transition-colors
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }
                    `
                    }
                  >
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/profile/password"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-2 rounded-lg px-3 py-2 transition-colors
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }
                    `
                    }
                  >
                    <Lock className="h-4 w-4" />
                    <span>Password</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Card>
    </aside>
  );
}
