import {  type LucideIcon } from "lucide-react";
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

interface Items {
    label:string;
    icon:LucideIcon;
    url:string;
}

interface SidebarItems {
title:string;
items:Items[]
}
type Props = {
  onClose?: () => void;
  sidebarItems:SidebarItems[]
};

export function PageSidebar({ onClose,sidebarItems }: Props) {
  return (
    <aside className="w-72 h-full bg-background ">
      <Card className="h-full  border-0 bg-gray-50 p-3 rounded-2xl border-b-4">
        {sidebarItems.map((item) => (
          <SidebarGroup>
            {item.title && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((m) => (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={m.url}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-3 py-2 transition-colors
                      ${ isActive? "bg-primary text-primary-foreground": "hover:bg-muted" } `}
                      >
                        {m.icon && <m.icon className="h-4 w-4" />}
                        <span>{m.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </Card>
    </aside>
  );
}