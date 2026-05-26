import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { Menu,User,Lock } from "lucide-react";
import { Header } from "~/components/pagesHeader";
import { ProfileBreadcrumb } from "~/components/pagesBreadCrumb";
import { Button } from "~/components/ui/button";
import { PageSidebar } from "~/components/pagesSidebar";

const sidebarItems = [
  {
    title: "Setting",
    items: [
      {
        label: "Account",
        icon: User,
        url:"/profile/account"
      },
      {
        label: "Password",
        icon: Lock,
        url:"/profile/password"
      },
    ],
  },
];

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
          <PageSidebar onClose={() => setSidebarOpen(false)} sidebarItems={sidebarItems}/>
        </div>
        <main className="flex-1 overflow-auto p-4 md:p-6 w-full">
          <Navigate to="/profile/account" replace />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
