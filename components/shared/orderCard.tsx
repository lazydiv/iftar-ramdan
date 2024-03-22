'use client'

import { Separator } from '@radix-ui/react-separator'
import { StarIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import { Order } from '@prisma/client'

interface OrderCardProps {
    order: Order
}


const OrderCard = (

    {
        order
    }: OrderCardProps
) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    return (
        <Card className="mt-20 max-w-96 mx-auto">
            <CardHeader className="grid  grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-5">
                    <CardTitle className="text-primary">وجبة افطار</CardTitle>
                    <CardDescription className="">
                        شكرا ع طلبك .
                        <br />
                        برجاء التواصل مع هذه الأرقام علي الواتساب لتاكيد ومتابعه الحجز .
                        <br />
                        01100108253
                        <br />
                        01145199771
                    </CardDescription>
                </div>
                <div className="flex items-center space-x-1 rounded-md  text-secondary-foreground">
                    <Button variant="secondary" className={cn(order.status !== "pending" ? 'bg-green-600' : 'bg-red-500')}>
                        {
                            order.status === "pending" ? "لم يتم دفع" : "تم الدفع"
                        }
                    </Button>

                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                </div>
                <div>
                    <p>
                        <span>الاسم  : </span>
                        <span>{order.title}</span>
                    </p>
                    <p>
                        <span>رقم الهاتف: </span>
                        <span>{order.phone}</span>
                    </p>
                    <p>
                        <span> كود الطالب </span>
                        <span>{order.uniId}</span>
                    </p>
                    <p>
                        <span> نوع الوجبة : </span>
                        <span>{order.mealType === 'meat' ? 'لحمه' : order.mealType === 'chiken' ? 'فراخ' : order.mealType === 'fasting' ? 'صيامي' : 'ميكس لحوم وفراخ'}</span>
                    </p>
                    <div> وقت الطلب:  {order.createdAt.toString()}</div>
                    <p className='text-black/50 dark:text-white/50 mt-5 text-sm'>

                        يرجي مراجعة الموقع ف خلال ساعه ال ٣ ساعات بعد الدفع للتاكيد ان عملية الدفع تمت بنجاح .
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderCard
