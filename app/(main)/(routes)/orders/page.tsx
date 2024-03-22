

import OrderCard from "@/components/shared/orderCard"
import { SearchComp } from "@/components/shared/search"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export default async function Orders() {
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }
    const orders = await db.order.findMany({
        where: {
            userid: profile.id,
        },
        orderBy: {
            createdAt: "desc",
        },
    })

    return (
        <div className="flex flex-wrap ">
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
            
            
            {orders.length === 0 && (
                <div className="flex  justify-center text-primary mt-14 text-xl font-bold w-full ">لا يوجد طلبات</div>
            )}
        </div>

    )
}