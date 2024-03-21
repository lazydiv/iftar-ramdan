

import OrderCard from "@/components/shared/adminOrderCard"
import UserCard from "@/components/shared/userCard"
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


    const users = await db.user.findMany({})
    
    return (
        <div className="flex flex-wrap ">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}


            
            {users.length === 0 && (
                <p className="">لا يوجد مستخدمين</p>
            )}
        </div>

    )
}