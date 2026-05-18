import { SubscriberOverview } from "./conmponent/subscriber-overview";
import { Header } from "./conmponent/ItemPageHeader";
const data ={
 data:{    title:"Users",
    description:"Manage your users setting"}
}
function UsersPage() {
    return (
        <div className="">
            <Header props ={data}/>
            <SubscriberOverview/>
        </div>
    )
}

export default UsersPage;