import { Header } from "~/components/pagesHeader";
import { PageSidebar } from "~/components/pagesSidebar";
import {UserCog,Globe} from "lucide-react"
import { useState } from "react";
const sidebarItems = [
  {
    title: "Accesses",
    items: [
      {
        label: "User permissions",
        icon: UserCog,
        url:"/access/userpermissions"
      },
      {
        label: "Website permissions",
        icon: Globe,
        url:"/access/websitepermissions"
      },
    ],
  },
];

function SettingsPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        props={{ title: "Access managment", description: "edit users access" }}
      />
      <PageSidebar onClose={() => setSidebarOpen(false)} sidebarItems={sidebarItems}/>
    </div>
  );
}

export default SettingsPage;
