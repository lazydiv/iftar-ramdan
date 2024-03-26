

import OrderCard from "@/components/shared/adminOrderCard"
import DownloadExcel from "@/components/shared/download"
import { SearchComp } from "@/components/shared/search"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
// import { OrderBy } from "@/components/shared/orderBy"
// import router from "next/router"


export default async function Orders() {

    // const orders = await axios.get('/api/orders')
    
    // const router = useRouter()
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }
    if (profile.role !== "ADMIN") redirect("/")
    
    
    const excelOrders = await db.order.findMany({
        
        orderBy: {
            createdAt: "desc"
        }
    })
    const orders = await db.order.findMany({
        
        orderBy: {
            createdAt: "desc"
        }
    })
    


    return (
        <div className="flex flex-wrap ">

            <div className="md:flex-row flex w-full  md:w-[90%] flex-col md:mr-10   space-y-5 md:space-y-0 mt-10">

                <div className="flex-1 ">

                    <SearchComp data={
                        orders.map((order) => (
                            order
                        ))
                    } />
                </div>
                    <DownloadExcel orders={excelOrders} />
                
            </div>


            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}



            {orders.length === 0 && (
                <div className="flex  justify-center text-primary mt-14 text-xl font-bold w-full ">لا يوجد طلبات</div>
            )}
        </div>

    )
}