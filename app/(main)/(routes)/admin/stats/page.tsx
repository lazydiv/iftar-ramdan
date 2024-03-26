

import OrderCard from "@/components/shared/adminOrderCard"
import StatCard from "@/components/shared/statCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { currentProfile } from "@/lib/current-user"
import { db } from "@/lib/db"
import axios from "axios"
import { Stats } from "fs"
import { Soup, SoupIcon } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
// import router from "next/router"

export default async function Orders() {
    // const router = useRouter()
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }
    if (profile.role !== "ADMIN") redirect("/")

    const order = await db.order.findMany({})
    const users = await db.user.findMany({})
    const acceptedOrders = order.filter((order) => order.status === "paid")
    const pendingOrders = order.filter((order) => order.status === "pending" )
    const acceptedMeatOrders = order.filter((order) => order.status === "paid" && order.mealType === 'meat')
    const acceptedMixOrders = order.filter((order) => order.status === "paid" && order.mealType === 'mix')
    const acceptedChikenOrder = order.filter((order) => order.status === "paid" && order.mealType === 'chiken')
    const meatOrders = order.filter((order) => order.mealType === 'meat')
    const chikenOrders = order.filter((order) => order.mealType === 'chiken')
    const mixOrders = order.filter((order) => order.mealType === 'mix')
    const fastingOrders = order.filter((order) => order.mealType === 'fasting')
    const acceptedFastingOrders = order.filter((order) => order.status === "paid" && order.mealType === 'fasting')

    
    const Stats = [
        {
            title: "الوجبات المعلقة",
            value: pendingOrders.length.toString(),
            href: "/admin/orders/pending"
        },
        {
            title: "الوجبات المقبولة",
            value: acceptedOrders.length.toString(),
            href: "/admin/orders/accepted"
        },
        {
            title: " الوجبات الحشاشين",
            value: chikenOrders.length.toString(),
            href: "/admin/orders/chicken"
        },
        {
            title: "وجبات المال الحلال",
            value: meatOrders.length.toString(),
            href: "/admin/orders/meat"
        },
        {
            title: "وجبات الاقوي",
            value: mixOrders.length.toString(),
            href: "/admin/orders/mix"
        },
        {
            title: "وجبات الصيامي",
            value: fastingOrders.length.toString(),
            href: "/admin/orders/fasting"
        },
        {
            title: " وجبات المال الحلال المقبولة",
            value: acceptedMeatOrders.length.toString()
        },
        {
            title: "وجبات الحشاشين المقبولة",
            value: acceptedChikenOrder.length.toString()
        },
        {
            title: "وجبات الصيامي المقبولة",
            value: acceptedFastingOrders.length.toString()
        },
        {
            title: "وجبات الاقوي المقبولة",
            value: acceptedMixOrders.length.toString()
        }

    ]


    return (
        <div className="flex flex-col md:flex-row md:flex-wrap  container mt-10 gap-9">

            <Card className="=">
                <CardHeader className="flex flex-row items-center  justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        المشتركين
                    </CardTitle>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl  font-bold">{users.length}</div>
                    <p className="text-xs mt-1 text-muted-foreground">
                        from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">

                        إجمالي الإيرادات
                    </CardTitle>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                    >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </CardHeader>
                <CardContent className="">
                    <div className="text-2xl font-bold">Le. {acceptedChikenOrder.length * 150 + acceptedMeatOrders.length * 150 + acceptedFastingOrders.length * 150 + acceptedMixOrders.length * 160 }</div>
                    <p className="text-xs mt-1 text-muted-foreground">
                        from last month
                    </p>
                </CardContent>
            </Card>

           
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        اجمالي الوجبات
                    </CardTitle>
                    
                      <SoupIcon  className="text-text/50 mr-2 w-5 h-5"/>
                </CardHeader>
                <CardContent className="">
                    <div className="text-2xl font-bold">{order.length}</div>
                    <p className="text-xs mt-1 text-muted-foreground">
                        from last month
                    </p>
                </CardContent>
            </Card>
            <div className="w-full flex flex-wrap  gap-10">

            <StatCard stats={Stats} />
            </div>

            







        </div>

    )
}