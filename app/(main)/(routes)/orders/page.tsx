

import OrderCard from "@/components/shared/orderCard"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export default async function Orders() {
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }
    const order = await db.order.findMany({
        where: {
            userid: profile.id,
        },
        orderBy: {
            createdAt: "desc",
        },
    })
    console.log(order)
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