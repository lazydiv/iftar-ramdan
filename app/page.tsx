
import Intro from "@/app/sections/intro";
import { currentProfile } from "@/lib/current-user";
import { db } from "@/lib/db";
import { initialUser } from "@/lib/init-user";
import { auth, currentUser } from "@clerk/nextjs";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function page() {
    const { userId } =  auth();
    const user = await currentProfile()
    
    if (userId && !user) {
        return redirect("/setup");
    }
    


    return (
        <div>
            <Intro />

        </div>
    );
}
