import { create } from 'zustand';

import { currentProfile } from "@/lib/current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { PrismaClient, Order } from '@prisma/client';

export async function POST(req: Request) {
    try {
        const { name, uniId, phone, mealType } = await req.json();
        const profile = await currentProfile();
        if (!profile) {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        const order = await db.order.create({

            data: {
                userid: profile.id,
                uniId: uniId,
                phone: phone,
                title: name,
                status: 'pending',
                mealType: mealType
                


            }

        })



        return (
            NextResponse.json(order)
        )


    } catch (error) {

        console.log("[submiting order]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}



export async function PATCH(req: Request) {
    try {
        const { data, status } = await req.json();

        const profile = await currentProfile();
        if (!profile || profile.role !== 'ADMIN') {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        const order = await db.order.update({

            where: {
                id: data.id
            },
            data: {
                status: status
            }

        })



        return (
            NextResponse.json(order)
        )


    } catch (error) {

        console.log("[updating order]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}



export async function DELETE(req: Request) {
  

    try {

        const { id } = await req.json();

        const profile = await currentProfile();
        if (!profile || profile.role !== 'ADMIN') {
            return new NextResponse('Unauthorized', { status: 401 })
        }
        const order = await db.order.delete({

            where: {

                id
            },


        })



        return (
            NextResponse.json(order)
        )


    } catch (error) {

        console.log("[updating order]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}

