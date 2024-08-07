import { currentProfile } from "@/lib/current-user";
import { db } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function PATCH(req: Request) {
    try {
        const { id, role } = await req.json();

        const profile = await currentProfile();
        if (!profile || profile.role !== 'ADMIN') {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        const user = await db.user.update({

            where: {
                id
            },
            data: {
                role
            }

        })



        return (
            NextResponse.json(user)
        )


    } catch (error) {

        console.log("[updating User]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}


// export async function POST(req: Request) {
//     try {
//         const  {id, firstName, lastName, email}  = await req.json();

        
//         const userExists = await db.user.findFirst({
//             where: {
//                 userId: id
//             }
//         })
//         if (userExists) {
//             return new NextResponse('User already exists', { status: 400 })
//         }
//         const newUser = await db.user.create({
//             data: {
//                 userId: id,
//                 name: `${firstName} ${lastName}`,
//                 email: email

//             }

//         })



//         return (
//             NextResponse.json(newUser)
//         )


//     } catch (error) {

//         console.log("[creating User]", error)
//         return new NextResponse("Internal Server Error", { status: 500 })

//     }

// }



export async function DELETE(req: Request) {


    try {

        const { id, userId } = await req.json();

        const profile = await currentProfile();
        if (!profile || profile.role !== 'ADMIN') {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        const user = await db.user.delete({

            where: {

                id
            },


        })
        await clerkClient.users.deleteUser(userId);


        return (
            NextResponse.json(user)
        )


    } catch (error) {

        console.log("[user delete]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}
