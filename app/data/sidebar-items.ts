import {
  Banknote,
  Bolt,
  ChartBar,
  Gauge,
  LayoutDashboard,
  ListTodo,
  UserRound,
  Users,
  Key,
  type LucideIcon,
  Shield,
  Accessibility,
  UserCheck,
  Lock
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        title: "Productivity",
        url: "/dashboard/productivity",
        icon: ListTodo,
      }
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        title: "Users",
        url: "/users",
        icon: Users,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Bolt,
      },
      {
        title: "Profile",
        url: "/profile",
        icon: UserRound
      },  {
        title: "Access managment",
        url: "/access",
        icon: Shield
      },
    ]
  }
];
