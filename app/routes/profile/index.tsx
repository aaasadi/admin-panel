
import { Outlet } from "react-router";
import { Header } from "./components/ItemPageHeader";
import {ProfileSidebar} from "./components/Sidebar"
const data ={
 data:{    title:"Profile",
    description:"Manage your profile setting"}
}
function ProfilePage() {

     return (
    <div className="flex flex-col h-full">  
      <Header props={data} />
      <div className="flex flex-1 overflow-hidden">  
        <ProfileSidebar />
        <main className="flex-1 overflow-auto p-4"> 
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;