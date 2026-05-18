import React from "react";
import type { ReactNode } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/ItemPageHeader";
import {ProfileSidebar} from "./components/Sidebar"
import {ProfileBreadcrumb} from "./components/breadCrumb"

function ProfilePage() {

     return (
    <div className="flex flex-col h-full">  
      <Header props={{title: "Profile", description: "Manage your profile settings",action:<ProfileBreadcrumb />}} />
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