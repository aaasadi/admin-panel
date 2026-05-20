import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

import { Header } from "./components/ItemPageHeader";
import { ProfileSidebar } from "./components/Sidebar";
import { ProfileBreadcrumb } from "./components/breadCrumb";

import { Button } from "~/components/ui/button";

function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div>
        <Header
        props={{
          title: "Profile",
          description: "Manage your profile settings",
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
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* MOBILE MENU BUTTON */}

        {/* OVERLAY */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR */}
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
          <ProfileSidebar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* CONTENT */}
        <main className="flex-1 overflow-auto p-4 md:p-6 w-full">
         
          <Navigate to="/profile/account" replace />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
