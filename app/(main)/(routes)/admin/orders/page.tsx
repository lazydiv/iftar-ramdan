

import OrderCard from "@/components/shared/adminOrderCard"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import axios from "axios"
import { redirect, useRouter } from "next/navigation"
// import router from "next/router"

export default async function Orders() {
    // const router = useRouter()
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }


    const order = await db.order.findMany({})
    
    return (
        <div className="flex flex-wrap ">
            {order.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}


            
            {order.length === 0 && (
                <p className="">لا يوجد طلبات</p>
            )}
        </div>

    )
}