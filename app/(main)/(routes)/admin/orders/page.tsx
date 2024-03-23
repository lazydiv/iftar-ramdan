

import OrderCard from "@/components/shared/adminOrderCard"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import axios from "axios"
import { redirect, useRouter } from "next/navigation"
import { SearchComp } from "@/components/shared/search"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
// import { OrderBy } from "@/components/shared/orderBy"
// import router from "next/router"

export default async function Orders() {
    // const router = useRouter()
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }
    if (profile.role !== "ADMIN") redirect("/")


    const orders = await db.order.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

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



            {orders.length === 0 && (
                <div className="flex  justify-center text-primary mt-14 text-xl font-bold w-full ">لا يوجد طلبات</div>
            )}
        </div>

    )
}