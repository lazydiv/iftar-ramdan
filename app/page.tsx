
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
    

    // try {

    //     await axios.post('/api/users',  {data: {id: user?.id, firstName: user?.firstName,lastName: user?.lastName, email: user?.emailAddresses[0].emailAddress}});
    //     console.log('hel')
    //     redirect('/')

    // } catch (error) {
    //     console.log(error);
    // }


    return (
        <div>
            <Intro />

        </div>
    );
}
