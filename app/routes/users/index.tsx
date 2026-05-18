import { SubscriberOverview } from "./components/subscriber-overview";
import { Header } from "./components/ItemPageHeader";
import { Outlet } from "react-router";
const data ={
 data:{    title:"Users",
    description:"Manage your users setting"}
}
function UsersPage() {
    return (
        <div className="">
            <Header props ={data}/>
            <SubscriberOverview/>
         <main className="flex-1 overflow-auto p-4"> 
          <Outlet />
        </main>
        </div>
    )
}

export default UsersPage;