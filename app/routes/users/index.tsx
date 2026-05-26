import { SubscriberOverview } from "./components/subscriber-overview";
import { Header } from "~/components/pagesHeader";
import { Outlet } from "react-router";

function UsersPage() {
    return (
        <div className="">
            <Header props ={{title:"Users", description:"Manage your users setting"}}/>
            <SubscriberOverview/>
         <main className="flex-1 overflow-auto p-4"> 
          <Outlet />
        </main>
        </div>
    )
}

export default UsersPage;