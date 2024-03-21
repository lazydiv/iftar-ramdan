'use client'
import { Instructions } from '@/components/shared/instructions'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { useModal } from '@/hooks/use-model-store'

const Intro = () => {
    const { onOpen } = useModal();
    
    return (
        <section className="container  mt-36 flex-col flex justify-around">

            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-5">
                    <h1 className="text-primary   font-bold text-4xl ">
                        شارك معانا في فرحة الإفطار الجماعي في شهر رمضان!
                    </h1>
                    <span className="font-semibold ml-auto max-w-[550px] text-2xl">
                        رمضان ميحلاش الا بمله وناس وعشان كدا
                        عملنا فطور رمضاني في جمعتنا , وعازنكم تكونو معانا في الفرحة
                        دي وتشاركونا في الفطار الجماعي اللي هيكون منظم وبأسعار مخفضة جداً.
                    </span>
                    <Button
                        onClick={() => onOpen('placeOrder')}
                        className="w-32 text-xl text-white"

                    >
                        شارك معانا !
                    </Button>
                    <Instructions />
                    <span>

                    </span>

                </div>
                <div className="">
                    <Image src="/food.png" alt="iftar" width={400} height={30} />
                </div>

            </div>


        </section>
    )
}

export default Intro