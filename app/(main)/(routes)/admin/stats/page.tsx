

import OrderCard from "@/components/shared/adminOrderCard"
import StatCard from "@/components/shared/statCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    if (profile.role !== "ADMIN") redirect("/")

    const order = await db.order.findMany({})

    return (

        <div className="flex flex-wrap  container mt-10">
            {/* <StatCard icon="home" value="0" title="إجمالي الإيرادات" /> */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
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
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                            from last month
                        </p>
                    </CardContent>
                </Card>




            

        </div>

    )
}