'use client'
import { Instructions } from '@/components/shared/instructions'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { useModal } from '@/hooks/use-model-store'
import { currentProfile } from '@/lib/current-user'
import { auth, SignedIn, SignedOut, SignIn } from '@clerk/nextjs'
import { redirect, useRouter } from 'next/navigation'
import { db } from '@/lib/db'
import { on } from 'events'

const Intro = () => {


    
    const { onOpen } = useModal();

    const router = useRouter()


    return (
        <section className="container  mt-36 flex-col flex  justify-around">


            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-5">
                    <h1 className="text-primary   font-bold text-4xl ">
                        انضم الينا في الافطار الجماعي بمناسبة شهر رمضان الكريم
                    </h1>
                    <span className="font-semibold ml-auto max-w-[550px] text-2xl">
                        رمضان مبيحلاش الا واحنا مع بعض وعشان كدة احنا عملنالكم فطار جماعي نتجمع فيه كلنا ونقضي أجمل
                        يوم مع الدكاترة ومع صحابنا ويكون يوم مميز لينا كلنا .

                    </span>
                    <SignedIn>

                        <Button
                            onClick={() => onOpen('placeOrder')}
                            className="w-32 text-xl text-white"

                        >
                            انضم الينا !
                        </Button>
                    </SignedIn>
                    <SignedOut>
                        
                            <Button
                                onClick={() => router.push('/sign-in')}
                                className="w-32 text-xl text-white"
                            >
                                انضم الينا !
                            </Button>
                        
                    </SignedOut>
                    <Instructions />
                    <span>

                    </span>

                </div>
                <div className="md:block hidden">
                    <Image src="/food.png" alt="iftar" width={400} className='' height={30} />
                </div>

            </div>


        </section>
    )
}

export default Intro