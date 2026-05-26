import { User, Key, X } from "lucide-react";
import { NavLink } from "react-router";
import { Card } from "~/components/ui/card";
import { useParams } from "react-router";
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
   const { id } = useParams();
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
                    to={`/users/${id}/profile`}
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
                    <span>User profile</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={`/users/${id}/access`}
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
                    <Key className="h-4 w-4" />
                    <span>Access management</span>
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
