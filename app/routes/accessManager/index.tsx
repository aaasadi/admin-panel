import { Header } from "~/components/pagesHeader";
import { PageSidebar } from "~/components/pagesSidebar";
import { UserCog, Globe, User,Menu } from "lucide-react";
import { useState } from "react";
import { ProfileBreadcrumb } from "~/components/pagesBreadCrumb";
import { Outlet,Navigate } from "react-router";
import { Button } from "~/components/ui/button";

const sidebarItems = [
  {
    title: "Accesses",
    items: [
      {
        label: "Manage roles",
        icon: User,
        url: "/access/rolemanager",
      },
      {
        label: "Manage permissions",
        icon: UserCog,
        url: "/access/permissionsmanager",
      },
      {
        label: "Website permissions",
        icon: Globe,
        url: "/access/websitepermissions",
      },
    ],
  },
];

function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        props={{
          title: "Access managment",
          description: "edit users access",
          action: <ProfileBreadcrumb />,
        }}
      />
      <div className="md:hidden flex items-center gap-2  px-4 py-3 sticky top-0 bg-background z-30">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          className={`
            fixed md:static top-0 left-0 z-50 h-full
            transform transition-transform duration-300
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
        >
          <PageSidebar onClose={() => setSidebarOpen(false)} sidebarItems={sidebarItems} />
        </div>
        <main className="flex-1 overflow-auto p-4 md:p-6 w-full">
          <Outlet />
          <Navigate to="/access/rolemanager"/>
        </main>
      </div>
    </div>
  );
}

export default SettingsPage;