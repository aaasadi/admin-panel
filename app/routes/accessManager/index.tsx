import { Header } from "./components/ItemPageHeader";
import { PageSidebar } from "./components/Sidebar";
function SettingsPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header
        props={{ title: "Access managment", description: "edit users access" }}
      />
      <PageSidebar/>
    </div>
  );
}

export default SettingsPage;
