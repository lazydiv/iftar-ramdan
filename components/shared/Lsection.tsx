'use client'

import React from 'react'
import { ModeToggle } from './mode-toggle'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { redirect, useRouter } from 'next/navigation'
import { currentUser, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentProfile } from '@/lib/current-user'


const Lsection = () => {
    const router = useRouter()
    
    // const profile = currentProfile()
    return (
        <div className="flex items-center ">

            {/* <Separator className="mx-2 h-4 bg-zinc-300 dark:bg-zinc-600" orientation="vertical" />{" "} */}
            <nav className="flex items-center gap-3">
                <div className="flex gap-3 ">
                    <SignedIn>
                        <UserButton
                            afterSignOutUrl="/"

                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton 
                           
                        >
                            <Button className="w-32 text-white"
                            


                            >
                                تسجيل الدخول
                            </Button>
                        </SignInButton>
                    </SignedOut>


                </div>
                <Separator className="mx-2 h-4 hidden md:visible bg-zinc-300 dark:bg-zinc-600" orientation="vertical" />{" "}
                <ModeToggle />
            </nav>
        </div>
    )
}

export default Lsection