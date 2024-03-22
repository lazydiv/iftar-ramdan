

import OrderCard from "@/components/shared/adminOrderCard"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
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

    const order = await db.order.findFirst({
        where: {
            id: params.orderId,
        }
    })

    if (!order) {
        return (
            <div className="flex  justify-center text-primary mt-14 text-xl font-bold w-full ">لا يوجد طلبات</div>
        )
    }

    return (
        <div className="flex flex-wrap ">

            <OrderCard order={order} />




        </div>

    )
}

export default orderIdPage;