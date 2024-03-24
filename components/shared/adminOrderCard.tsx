'use client'

import { Separator } from '@radix-ui/react-separator'
import { StarIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Order } from '@prisma/client'
import { MakeSure } from './makeSure'
import { PaymentVerf } from './paymentVerf'

interface OrderCardProps {
   order: Order
}


const OrderCard = (

    {
        order
    }: OrderCardProps
) => {
    

    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    
    const onSubmit = async () => {
        
        try {
           
            await axios.patch('/api/orders', order);
    
            router.refresh()
        
        } catch (error) {


            console.log(error);
        }
    }

    if (!isMounted) return null
    return (
        <Card className="mt-10 container lg:w-[90%] mx-auto">
            <CardHeader className="grid  grid-cols-[1fr_125px] items-start gap-4 space-y-0">
                <div className="space-y-5">
                    <CardTitle className="text-primary">وجبة افطار</CardTitle>
                    
                </div>
                <div className="flex  items-center gap-2  rounded-md  text-secondary-foreground">
                   
                    <MakeSure order={order}/>
                    {/* <Button 
                    variant="secondary" 
                    className={cn(order.status !== "pending" ? 'bg-green-600' : 'bg-yellow-600')}
                    onClick={()=> onSubmit()}
                    >

                        {
                            order.status === "pending" ? "لم يتم دفع" : "تم الدفع"
                        }
                    </Button> */}
                    <PaymentVerf order={order}/>

                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                </div>
                <div className='text-sm'>
                    <p>
                        <span>اسم الطالب : </span>
                        <span>{order.title}</span>
                    </p>
                    <p>
                        <span>رقم الطالب: </span>
                        <span>{order.phone}</span>
                    </p>
                    <p>
                        <span> الرفم القومي:</span>
                        <span>{order.uniId}</span>
                    </p>
                    <p>
                        <span> نوع الوجبة : </span>
                        <span>{order.mealType === 'meat' ? 'عرض المال الحلال' : order.mealType === 'chiken' ? 'عرض الحشاشين' : order.mealType === 'اكل صيامي' ? 'صيامي':  'عرض الاقوي'}</span>
                    </p>
                    <div>تم طلب {order.createdAt.toString()}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderCard
