

import OrderCard from "@/components/shared/adminOrderCard"
import { SearchComp } from "@/components/shared/search"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import { Order } from "@prisma/client"
import { redirect } from "next/navigation"
interface orderIdProps {
    params: {
        orderId: string;
    }
};
const orderIdPage = async (
    {
        params
    }: orderIdProps
) => {
    const profile = await currentProfile()

    if (!profile) {
        return redirect("/sign-in")
    }
    if (profile.role !== "ADMIN") redirect("/")

    const orders = await db.order.findMany({
        where: {
            // id: params.orderId,
            mealType: "chiken"
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    // const acceptedOrders = order?.filter((status) => status === "paid")
    if (!orders) {
        return (
            <div className="flex  justify-center text-primary mt-14 text-xl font-bold w-full ">لا يوجد طلبات</div>
        )
    }



    return (
        <div className="flex flex-wrap ">

            <SearchComp data={
                orders.map((order) => (
                    order
                ))
            } />


            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}




        </div>

    )
}

export default orderIdPage;